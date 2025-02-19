// app/pages/enter-code/page.tsx

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EnterCode() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch("/api/join-group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    if (res.ok) {
      router.push("/pages/dashboard");
    } else {
      setError(data.error || "Erreur inconnue");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">Entrez votre code de groupe</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="p-2 border rounded text-[#032720]"
          placeholder="Code"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Valider
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
