// app/api/quiz/route.ts

import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET() {
  const quizzes = await prisma.quiz.findMany({
    select: { id: true, title: true, status: true },
  });
  console.log("Quizzes récupérés :", quizzes); // Ajoute ce log
  return NextResponse.json(quizzes);
}