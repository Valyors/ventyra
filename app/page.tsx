// app/page.tsx

"use client";

import Navbar from "./components/navbar";
import Link from "next/link";
import Image from "next/image";
import TypingText from "./components/typingText";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-56 px-40">
        <div className="flex justify-between items-center">
          <div className="text-center">
            {/* Utilisation du composant TypingText */}
            <TypingText />
            <h2 className="text-base text-[#9EA3BF] py-14">
              Une formation complète avec des ateliers pratiques pour réduire les risques cyber.
            </h2>
            <Link
              href="https://ventyra.fr/contact"
              className="bg-[#02BD92] py-4 px-6 rounded-xl text-white text-lg relative overflow-hidden group"
            >
              <span className="absolute rounded-xl inset-0 bg-white scale-y-0 origin-center transition-transform duration-300 group-hover:scale-y-100"></span>
              <span className="relative z-10 group-hover:text-[#02BD92]">Nous contacter</span>
            </Link>
          </div>
          <div className="relative w-[600px] h-[600px] perspective-1000">
            <div className="w-full h-full animate-spin-y transform-style-3d">
              <Image
                src="/carte-ventyra.png"
                alt="Ventyra"
                width={600}
                height={600}
                className="absolute rotate-[20deg] inset-0 backface-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
