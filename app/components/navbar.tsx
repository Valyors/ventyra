import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-28 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/ventyra-logo.png"
          alt="Ventyra"
          width={60}
          height={60}
        />
        <span className="text-[#02BD92] text-2xl">VENTYRA</span>
      </div>

      {/* Liens */}
      <div className="flex space-x-6 text-[#006C65]">
        <Link href="/formation" className="hover:text-[#02BD92]">
          Formation
        </Link>
        <Link href="/accueil" className="hover:text-[#02BD92]">
          Accueil
        </Link>
        <Link href="/quiz" className="hover:text-[#02BD92]">
          Quiz
        </Link>
      </div>

      {/* Bouton Contact */}
      <Link href="/contact">
        <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-teal-500 to-gray-900 hover:opacity-90">
          Contact
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
