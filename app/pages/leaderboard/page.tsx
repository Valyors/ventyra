// app/pages/leaderboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface LeaderboardEntry {
  email: string;
  score: number;
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Utilisateur non authentifié");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/leaderboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Erreur lors de la récupération du leaderboard");
        }

        const data = await res.json();
        setLeaderboard(data.leaderboard);
      } catch (error) {
        console.error(error);
        setError("Impossible de récupérer le leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Leaderboard</h1>
      <table className="w-full mt-6 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Email</th>
            <th className="border p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index} className="border">
              <td className="border p-2 text-center">{entry.email}</td>
              <td className="border p-2 text-center font-bold">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
