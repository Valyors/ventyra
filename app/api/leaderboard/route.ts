// app/api/leaderboard/route.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const leaderboard = await prisma.userQuiz.findMany({
      where: {
        score: {
          not: null,
        },
      },
      select: {
        user: {
          select: {
            email: true,
          },
        },
        score: true,
      },
      orderBy: {
        score: "desc",
      },
    });

    const formattedLeaderboard = leaderboard.map((entry) => ({
      email: entry.user.email,
      score: entry.score,
    }));

    return new Response(JSON.stringify(formattedLeaderboard), {
      status: 200,
    });
  } catch (error) {
    return new Response("Error fetching leaderboard", { status: 500 });
  }
}
