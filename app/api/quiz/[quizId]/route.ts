// app/api/quiz/[quizId]/route.ts

import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url); // Extraire l'URL de la requête
  const quizId = url.pathname.split("/").pop(); // Extraire `quizId` de l'URL

  if (!quizId) {
    return NextResponse.json({ error: "Paramètre quizId manquant" }, { status: 400 });
  }

  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: {
          include: {
            answers: {
              select: { id: true, text: true },
            },
          },
        },
      },
    });

    if (!quiz) {
      return NextResponse.json({ error: "Quiz non trouvé" }, { status: 404 });
    }

    return NextResponse.json(quiz);
  } catch (error) {
    console.error("Erreur API quiz:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}