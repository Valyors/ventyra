// app/api/leaderboard/route.ts

import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { verifyToken } from "../../lib/auth";

// Déclare l'interface pour JwtPayload
interface JwtPayload {
  userId: string;
  iat: number; // Date d'émission
  exp: number; // Date d'expiration
}

// Récupérer le leaderboard
export async function GET(req: Request) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Token manquant" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token) as JwtPayload; // Cast explicite

  if (!decoded) {
    return NextResponse.json({ error: "Token invalide" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(decoded.userId) }, // ✅ Convertit en Int pour Prisma
    select: { groupId: true },
  });

  if (!user?.groupId) {
    return NextResponse.json({ error: "Utilisateur non assigné à un groupe" }, { status: 400 });
  }

  const leaderboard = await prisma.userQuiz.findMany({
    where: {
      user: { groupId: user.groupId },
    },
    select: {
      user: { select: { email: true } },
      score: true,
    },
    orderBy: { score: "desc" },
  });

  const formattedLeaderboard = leaderboard.map((entry) => ({
    email: entry.user.email,
    score: entry.score ?? 0,
  }));

  return NextResponse.json({ leaderboard: formattedLeaderboard });
}

export async function POST(req: Request) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Token manquant" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token) as JwtPayload; // 🔥 Cast explicite pour JwtPayload

  if (!decoded || !decoded.userId) {
    return NextResponse.json({ error: "Token invalide" }, { status: 401 });
  }

  const { quizId, score } = await req.json();
  if (!quizId || score === undefined) {
    return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  }

  try {
    // Vérifie si l'entrée existe déjà
    const existingEntry = await prisma.userQuiz.findUnique({
      where: { userId_quizId: { userId: Number(decoded.userId), quizId } },
    });

    if (existingEntry) {
      // Si elle existe, on met à jour le score
      await prisma.userQuiz.update({
        where: { id: existingEntry.id }, // Utilise l'ID unique
        data: { score },
      });
    } else {
      // Sinon, on crée une nouvelle entrée
      await prisma.userQuiz.create({
        data: { userId: Number(decoded.userId), quizId, score },
      });
    }

    return NextResponse.json({ message: "Score enregistré" });
  } catch (error) {
    console.error("Erreur enregistrement score:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
