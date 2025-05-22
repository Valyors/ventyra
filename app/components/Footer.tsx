// app/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 px-4 bg-gradient-to-b from-[#032720] to-[#032720] mt-20 text-[#9EA3BF]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 pb-4 border-b border-[#2A3B36]">
        {/* Logo + slogan */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Image src="/ventyra-logo.png" alt="Ventyra Logo" width={40} height={40} />
          <span className="text-[#02BD92] text-lg font-bold">VENTYRA</span>
          <span className="hidden md:inline text-xl font-light text-[#9EA3BF]">|</span>
          <span className="text-sm font-light text-[#9EA3BF] hidden md:inline">Jouez la carte de la sécurité.</span>
        </div>
        {/* Liens principaux */}
        <div className="flex gap-4 text-sm mb-4 md:mb-0">
          <Link href="/nos-offres" className="hover:text-[#47CC88] transition">Nos Offres</Link>
          <span>|</span>
          <Link href="/pages/contact" className="hover:text-[#47CC88] transition">Contact</Link>
        </div>
        {/* Réseaux */}
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/company/ventyra/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Image
              src="/linkedin-logo.png"
              alt="LinkedIn Logo"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>

      {/* Liens légaux */}
      <div className="flex flex-wrap justify-center gap-3 text-xs mt-4 mb-2">
        <Link href="/mentions-legales" className="hover:text-[#47CC88] transition">Mentions légales</Link>
        <span>|</span>
        <Link href="/politique-de-confidentialite" className="hover:text-[#47CC88] transition">Politique de confidentialité</Link>
      </div>

      {/* SIRET et copyright */}
      <div className="flex flex-col items-center gap-1 text-xs font-light mt-2">
        <span>SIRET : 94287308400019, 49000 Angers</span>
        <span>Copyright © 2025 — All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
