// app/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 px-4 bg-gradient-to-b from-[#032720] to-[#032720] mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Bloc gauche : Logo + slogan */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4">
            <Image src="/ventyra-logo.png" alt="Ventyra Logo" width={48} height={48} />
            <span className="text-[#02BD92] text-xl font-bold">VENTYRA</span>
          </div>
          <span className="hidden md:block text-xl font-light text-[#9EA3BF]">|</span>
          <p className="text-base font-light text-[#9EA3BF] text-center md:text-left">Ventyra, jouez la carte de la sécurité.</p>
        </div>

        {/* Bloc centre : Qualiopi modernisé, intégré */}
        <div className="flex flex-col items-center">
          <Image
            src="/qualiopi.png"
            alt="Certification Qualiopi"
            width={60}
            height={60}
            className="rounded-xl"
          />
          <span className="mt-1 inline-block text-[#47CC88] text-xs font-bold">Certifié Qualiopi</span>
        </div>

        {/* Bloc droit : Réseaux et liens */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 mb-1">
            <Link
              href="https://www.linkedin.com/company/ventyra/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/linkedin-logo.png"
                alt="LinkedIn Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="flex gap-3 text-sm">
            <Link href="/nos-offres" className="text-[#9EA3BF] hover:text-[#47CC88] font-light transition">Nos Offres</Link>
            <span className="text-[#9EA3BF]">|</span>
            <Link href="/pages/contact" className="text-[#9EA3BF] hover:text-[#47CC88] font-light transition">Contact</Link>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#2A3B36] my-6" />

      <div className="flex flex-col md:flex-row justify-between items-center text-[#9EA3BF] text-xs font-light gap-1 md:gap-0 px-2">
        <span>Copyright © 2025</span>
        <span>All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
