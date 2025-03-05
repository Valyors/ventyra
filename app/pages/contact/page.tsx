// app/pages/contact/page.tsx

"use client";

import { useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "../../components/navbar";

const ContactPage = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const scrollToFormation = (): void => {};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nom, prenom, email, message }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }
      setSuccess(true);
      setNom("");
      setPrenom("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#032720]">
      <Navbar scrollToFormation={scrollToFormation} />
      <div className="flex flex-grow flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-[#FFFFFF] mt-44 mb-5">Nous contacter</h1>
        {success ? (
          <p className="text-[#47CC88] mb-5">
            Votre message a été envoyé avec succès.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md border border-[#47CC88] shadow-[#47CC88] shadow-2xl rounded-2xl p-6"
          >
            <div className="mb-4">
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-transparent border border-[#9EA3BF] text-[#FFFFFF] placeholder-[#9EA3BF] focus:outline-none"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-transparent border border-[#9EA3BF] text-[#FFFFFF] placeholder-[#9EA3BF] focus:outline-none"
                placeholder="Votre prenom"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-transparent border border-[#9EA3BF] text-[#FFFFFF] placeholder-[#9EA3BF] focus:outline-none"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-lg bg-transparent border border-[#9EA3BF] text-[#FFFFFF] placeholder-[#9EA3BF] focus:outline-none"
                placeholder="Votre message..."
              />
            </div>
            {error && (
              <p className="text-red-500 mb-4">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#9EA3BF] hover:bg-[#47CC88] text-[#032720] font-bold py-2 px-4 rounded-lg transition-colors"
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        )}
      </div>
      <div className="px-44">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
