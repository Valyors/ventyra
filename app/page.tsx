// app/page.tsx

"use client";

import { useRef } from "react";
import Navbar from "./components/navbar";
import TypingText from "./components/typingText";
import RotatingImage from "./components/RotatingCard";
import FormationModule from "./components/FormationModule";
import PourquoiChoisirFormation from "./components/PourquoiChoisirFormation";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import QuiSommesNous from "./components/QuiSommesNous";
import Link from "next/link";
import ChatbotWidget from "./components/ChatbotWidget";

export default function Home() {
  const formationRef = useRef<HTMLDivElement>(null);

  const scrollToFormation = () => {
    formationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar scrollToFormation={scrollToFormation} />
      <div className="pt-24 md:pt-56 md:px-40 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-center w-[390px] md:w-[900px] md:h-[calc(100vh-180px)] mt-20">
            <TypingText />
            <p className="text-base text-[#9EA3BF] pt-4 pb-8 md:py-14 font-light">
              Une formation complète avec des ateliers pratiques pour réduire les risques cyber.
            </p>
            <Link
              href="https://ventyra.fr/contact"
              className="bg-[#02BD92] py-4 px-6 rounded-xl text-white text-lg relative overflow-hidden group"
            >
              <span className="absolute rounded-xl inset-0 bg-white scale-y-0 origin-center transition-transform duration-300 group-hover:scale-y-100"></span>
              <span className="relative z-10 group-hover:text-[#02BD92]">Nous contacter</span>
            </Link>
          </div>
          <RotatingImage />
        </div>

        <div className="flex justify-center mt-72 md:mt-0 py-14 relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            width="80%"
            height="74%"
            src="https://www.youtube.com/embed/-wfVJsvnNLI?autoplay=1&mute=1&loop=1&playlist=-wfVJsvnNLI"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-3xl absolute top-0 left-1/2 transform -translate-x-1/2"
          ></iframe>
        </div>

        <div ref={formationRef} id="formation" className="text-center pt-16">
          <h2 className="text-6xl pb-5 font-semibold">Notre Formation</h2>
          <p className="text-base text-[#9EA3BF] font-light pb-5">
            La formation se déroule sur une journée et est décomposée en 6 modules.
          </p>
          <FormationModule />
        </div>

        <PourquoiChoisirFormation />
        <Faq />
        <QuiSommesNous />
        <Footer />
      </div>

      <ChatbotWidget />
    </main>
  );
}
