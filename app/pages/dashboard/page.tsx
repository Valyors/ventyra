// app/pages/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Quiz = {
  id: string;
  title: string;
  status: "LOCKED" | "UNLOCKED";
};

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Quiz disponibles</h1>
      <ul className="space-y-4">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <span className="text-lg font-medium text-[#032720]">{quiz.title}</span>
            <Link href={`/pages/quiz/${quiz.id}`} passHref>
              <button
                disabled={quiz.status === "LOCKED"}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  quiz.status === "LOCKED"
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Commencer
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
