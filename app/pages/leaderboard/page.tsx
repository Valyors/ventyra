// app/pages/leaderboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<{ email: string; score: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        if (!response.ok) {
          throw new Error("Error fetching leaderboard");
        }
        const data = await response.json();
        setLeaderboard(data);
      } catch (err) {
        setError("Failed to load leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : leaderboard.length === 0 ? (
        <div>No scores yet</div>
      ) : (
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {entry.email} - {entry.score}
            </li>
          ))}
        </ul>
      )}
      <Link href="/dashboard">
        <div>Retour divu Dashboard</div>
      </Link>
    </div>
  );
};

export default Leaderboard;
