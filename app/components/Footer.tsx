// app/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#032720] text-[#9EA3BF] py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo et Nom */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Ventyra Logo" width={40} height={40} />
          <span className="text-[#47CC88] font-semibold text-lg">VENTYRA</span>
        </div>

        {/* Slogan */}
        <p className="text-sm text-center md:text-left">
          Ventyra, jouez la carte de la sécurité.
        </p>

        {/* Mentions légales et Réseaux */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">Copyright © 2025</span>
          <span className="text-sm">All Rights Reserved</span>
          <Link
            href="https://linkedin.com/company/ventyra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9EA3BF] hover:text-[#47CC88] transition"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
