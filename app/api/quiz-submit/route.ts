// app/api/quiz-submit/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { quizId, answers } = await req.json();

    if (!quizId || !answers) {
      return NextResponse.json(
        { error: "Quiz ID et réponses requis" },
        { status: 400 }
      );
    }

    // Récupération des questions et des bonnes réponses depuis la DB
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });

    if (!quiz) {
      return NextResponse.json({ error: "Quiz non trouvé" }, { status: 404 });
    }

    let score = 0;

    quiz.questions.forEach((question) => {
      const correctAnswer = question.answers.find((a) => a.isCorrect);
      if (correctAnswer && answers[question.id] === correctAnswer.id) {
        score++;
      }
    });

    return NextResponse.json({ score }, { status: 200 });
  } catch (error) {
    console.error("Erreur API quiz-submit:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
