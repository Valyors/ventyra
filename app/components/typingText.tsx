// app/components/typingText.tsx

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = () => {
  const phrases = [
    "Formez vos équipes pour se protéger des cybermenaces.",
    "Apprenez à repérer des attaques.",
    "Déjouez les attaques avant qu'elles ne surviennent.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, phrases]); // Added phrases to dependencies

  useEffect(() => {
    setText(phrases[index].substring(0, subIndex)); // Update text dynamically
  }, [subIndex, index, phrases]);

  return (
    <h1 className="text-7xl font-bold w-[900px] h-[200px] text-center">
      {text}
      <motion.span
        className="inline-block w-2 h-12 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      />
    </h1>
  );
};

export default TypingText;
