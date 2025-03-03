// app/components/navbar.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ scrollToFormation }: { scrollToFormation: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Compare la position de défilement pour savoir si on scroll vers le bas ou vers le haut
        if (currentScrollY > lastScrollY) {
          setScrollingUp(false); // Scroll vers le bas
        } else {
          setScrollingUp(true); // Scroll vers le haut
        }

        setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY); // Mettre à jour la position de défilement
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`flex items-center justify-between px-4 md:px-32 py-7 bg-white shadow-md fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
        !scrollingUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <Link href="https://ventyra.fr" className="flex items-center space-x-5">
        <Image src="/ventyra-logo.png" alt="Ventyra" width={60} height={60} />
        <span className="text-[#02BD92] text-2xl">VENTYRA</span>
      </Link>

      {/* Navigation (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="relative">
          {/* Afficher FaBars ou FaTimes selon l'état du menu avec animation de rotation */}
          <div
            className={`text-[#006C65] text-3xl transition-transform duration-300 transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </button>
      </div>

      {/* Navigation (Desktop) */}
      <div className="hidden md:flex space-x-7 text-[#006C65]">
        <Link href="/" className="hover:text-[#02BD92] transition-colors duration-300 ease-in-out">
          Accueil
        </Link>
        <button
          onClick={scrollToFormation}
          className="hover:text-[#02BD92] transition-colors duration-300 ease-in-out"
        >
          Formation
        </button>
        <Link href="/pages/register" className="hover:text-[#02BD92] transition-colors duration-300 ease-in-out">
          Quiz
        </Link>
      </div>

      {/* Bouton Contact (Desktop) */}
      <div className="hidden md:block">
        <Link href="/pages/contact">
          <button className="px-6 py-4 ml-20 rounded-xl text-white bg-gradient-to-r from-[#02BD92] to-[#032720] hover:from-[#032720] hover:to-[#02BD92]">
            Contact
          </button>
        </Link>
      </div>

      {/* Menu Burger (Mobile) */}
      {isMenuOpen && (
        <div className="absolute top-[115px] right-0 bg-white w-full h-[300px] flex flex-col items-center space-y-4 p-6 z-40 rounded-b-2xl md:hidden">
          <Link href="/" className="text-[#006C65] text-xl hover:text-[#02BD92]" onClick={closeMenu}>
            Accueil
          </Link>
          <button
            onClick={() => {
              scrollToFormation();
              closeMenu();
            }}
            className="text-[#006C65] text-xl hover:text-[#02BD92]"
          >
            Formation
          </button>
          <Link href="/pages/register" className="text-[#006C65] text-xl hover:text-[#02BD92]" onClick={closeMenu}>
            Quiz
          </Link>
          <Link href="/pages/contact">
            <button className="px-6 py-3 mt-6 rounded-xl text-white bg-gradient-to-r from-[#02BD92] to-[#032720] hover:from-[#032720] hover:to-[#02BD92]">
              Contact
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
