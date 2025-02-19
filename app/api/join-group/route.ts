import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { verifyToken } from "../../lib/auth";

export async function POST(req: Request) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Token manquant" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ error: "Token invalide" }, { status: 401 });
  }

  const { code } = await req.json();
  if (!code) {
    return NextResponse.json({ error: "Code requis" }, { status: 400 });
  }

  const group = await prisma.group.findUnique({ where: { code } });
  if (!group) {
    return NextResponse.json({ error: "Code invalide" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: decoded.userId },
    data: { groupId: group.id },
  });

  return NextResponse.json({ message: "Groupe rejoint avec succès" });
}
