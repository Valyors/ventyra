// app/pages/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Quiz = {
  id: string;
  title: string;
  status: "LOCKED" | "UNLOCKED";
};

export default function DashboardPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#FFFFFF]">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, index) => (
          <div
            key={quiz.id}
            className="bg-[#032720] rounded-lg shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-96 w-full">
              <Image
                src={`/module${index + 1}.png`}
                alt={`Image du module ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-medium text-white mb-4 text-center">
                {quiz.title}
              </h3>
              <Link href={`/pages/quiz/${quiz.id}`} passHref>
                <button
                  disabled={quiz.status === "LOCKED"}
                  className={`w-full py-2 rounded-lg font-medium transition ${
                    quiz.status === "LOCKED"
                      ? "bg-[#9EA3BF] text-[#032720] cursor-not-allowed"
                      : "bg-[#47CC88] text-white"
                  }`}
                >
                  Commencer
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
