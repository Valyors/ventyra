// app/page.tsx

"use client";

import Navbar from "./components/navbar";
import Link from "next/link";
import TypingText from "./components/typingText";
import RotatingImage from "./components/RotatingCard"; 
import FormationModule from "./components/FormationModule";
import PourquoiChoisirFormation from "./components/PourquoiChoisirFormation";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import QuiSommesNous from "./components/QuiSommesNous";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-56 px-40">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <TypingText />
            <p className="text-base text-[#9EA3BF] py-14 font-light">
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

        <div className="flex justify-center py-14 relative" style={{ paddingBottom: '56.25%' }}>
          <iframe
            width="80%"
            height="74%"
            src="https://www.youtube.com/embed/-wfVJsvnNLI?autoplay=1&mute=1&loop=1&playlist=-wfVJsvnNLI"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-3xl absolute top-0 left-1/2 transform -translate-x-1/2"
          ></iframe>
        </div>

        <div className="text-center">
          <h2 className="text-6xl pt-16 pb-5 font-semibold">Notre Formation</h2>
          <p className="text-base text-[#9EA3BF] font-light pb-5">La formation se déroule sur une journée et est décomposé en 6 modules</p>
          <FormationModule />
        </div>

        <PourquoiChoisirFormation />
        <Faq />
        <QuiSommesNous />
        <Footer />
      </div>
    </main>
  );
}


/*
redirection vers la page contact et quiz
utiliser resend pour faire la page contact
ameliorer animation faq
responsive
qui sommes nous ?
*/
