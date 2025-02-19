// app/pages/quiz/[quizId]/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

type Question = {
  id: string;
  text: string;
  answers: { id: string; text: string }[];
};

export default function QuizPage() {
  const { quizId } = useParams(); // Récupération correcte des params
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!quizId) return; // Évite d'exécuter la requête si quizId est indéfini

    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/quiz/${quizId}`);
        if (!res.ok) {
          throw new Error("Problème lors de la récupération des questions");
        }
        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [quizId]);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/leaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quizId, answers }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data && typeof data.score !== 'undefined') {
        alert(`Votre score : ${data.score}`);
        router.push(`/pages/leaderboard`);
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
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold">Quiz</h1>
      {questions.map((q, index) => (
        <div key={q.id} className="mt-4">
          <p className="font-medium">{index + 1}. {q.text}</p>
          {q.answers.map((a) => (
            <label key={a.id} className="block mt-2">
              <input
                type="radio"
                name={q.id}
                value={a.id}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                }
              />
              {a.text}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Soumettre
      </button>
    </div>
  );
}
