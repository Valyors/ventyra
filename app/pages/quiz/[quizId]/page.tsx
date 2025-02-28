// app/pages/quiz/[quizId]/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

type Question = {
  id: string;
  text: string;
  answers: { id: string; text: string; isCorrect: boolean }[];
};

export default function QuizPage() {
  const { quizId } = useParams(); 
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!quizId) return;

    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/quiz/${quizId}`);
        if (!res.ok) {
          throw new Error("Problème lors de la récupération des questions");
        }
        const data = await res.json();
        setQuestions(data.questions || []);
        console.log("Questions récupérées : ", data.questions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [quizId]);

  const handleSubmit = async () => {
    console.log("Réponses soumises : ", answers); 
    try {
      const res = await fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizId, answers }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Réponse de l'API après soumission : ", data);
      if (data && typeof data.score !== "undefined") {
        setScore(data.score);
        setSubmitted(true);
      } else {
        throw new Error("Format de réponse invalide");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert("Une erreur est survenue lors de la soumission du quiz");
    }
  };

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (!questions.length) return <p className="text-center mt-10">Aucune question trouvée.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 flex flex-col justify-center">
      <h1 className="text-5xl font-bold text-center">Quiz</h1>

      {questions.map((q, index) => (
        <div key={q.id} className="mt-4">
          <p className="font-medium text-2xl">{index + 1}. {q.text}</p>
          {q.answers.map((a) => (
            <label key={a.id} className="block mt-2">
              <input
                type="radio"
                name={q.id}
                value={a.id}
                disabled={submitted} 
                onChange={(e) =>
                  setAnswers((prev) => {
                    const updatedAnswers = { ...prev, [q.id]: e.target.value };
                    console.log("Réponse sélectionnée par l'utilisateur : ", updatedAnswers); 
                    return updatedAnswers;
                  })
                }
                checked={answers[q.id] === a.id}
              />
              {a.text}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-[#02BD92] py-3 px-4 rounded-xl text-white text-lg mt-10"
        >
          Soumettre
        </button>
      ) : (
        <div className="mt-6">
          <p className="text-lg font-bold">Votre score : {score} / {questions.length}</p>
          <button
            onClick={() => router.push("/pages/leaderboard")}
            className="mt-4 bg-[#02BD92] text-white px-4 py-2 rounded-lg"
          >
            Voir le leaderboard
          </button>
        </div>
      )}
    </div>
  );
}
