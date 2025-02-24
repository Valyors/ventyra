import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-40 py-7 bg-white shadow-md absolute top-0 left-0 w-full">
      {/* Logo */}
      <Link href="https://ventyra.fr" className="flex items-center space-x-5">
        <Image
          src="/ventyra-logo.png"
          alt="Ventyra"
          width={60}
          height={60}
        />
        <span className="text-[#02BD92] text-2xl">VENTYRA</span>
      </Link>

      {/* Liens */}
      <div className="flex space-x-7 text-[#006C65]">
        <Link href="https://ventyra.fr" className="hover:text-[#02BD92] transition-colors duration-300 ease-in-out">
          Accueil
        </Link>
        <Link href="https://ventyra.fr/#formation" className="hover:text-[#02BD92] transition-colors duration-300 ease-in-out">
          Formation
        </Link>
        <Link href="https://ventyra.fr/quiz" className="hover:text-[#02BD92] transition-colors duration-300 ease-in-out">
          Quiz
        </Link>
      </div>

      {/* Bouton Contact */}
      <Link href="https://ventyra.fr/contact">
        <button className="px-6 py-4 ml-20 rounded-xl text-white bg-gradient-to-r from-[#02BD92] to-[#032720] hover:from-[#032720] hover:to-[#02BD92]">
          Contact
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
