import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest, context: { params: { quizId: string } }) {
  const { quizId } = context.params;

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
