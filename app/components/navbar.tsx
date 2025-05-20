// app/components/navbar.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Pour Next.js 13 (app router)
import { FaBars, FaTimes } from "react-icons/fa";

type NavbarProps = {
  scrollToFormation?: () => void;
};

const Navbar = ({ scrollToFormation }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleFormationClick = () => {
    if (!scrollToFormation) return;
    // Si on n'est pas sur la page d'accueil, rediriger vers "/"
    if (window.location.pathname !== "/") {
      router.push("/"); // redirige vers l'accueil
      // Utiliser une petite temporisation pour laisser le temps à la page d'accueil de se charger
      setTimeout(() => {
        scrollToFormation();
      }, 300);
    } else {
      scrollToFormation();
    }
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
        <Link href="/" className={`${pathname === "/" ? "font-bold text-[#02BD92] underline underline-offset-8" : ""} hover:text-[#02BD92] transition-colors duration-300 ease-in-out`}>
          Accueil
        </Link>
        <button
          onClick={scrollToFormation ? handleFormationClick : undefined}
          className={`hover:text-[#02BD92] transition-colors duration-300 ease-in-out ${pathname === "/#formation" ? "font-bold text-[#02BD92] underline underline-offset-8" : ""}`}
        >
          Formation
        </button>
        <Link href="/nos-offres" className={`${pathname.startsWith("/nos-offres") ? "font-bold text-[#02BD92] underline underline-offset-8" : ""} hover:text-[#02BD92] transition-colors duration-300 ease-in-out`}>
          Nos Offres
        </Link>
        <Link href="/pages/register" className={`${pathname.startsWith("/pages/register") ? "font-bold text-[#02BD92] underline underline-offset-8" : ""} hover:text-[#02BD92] transition-colors duration-300 ease-in-out`}>
          Quiz
        </Link>
        <Link href="/qui-sommes-nous" className={`${pathname.startsWith("/qui-sommes-nous") ? "font-bold text-[#02BD92] underline underline-offset-8" : ""} hover:text-[#02BD92] transition-colors duration-300 ease-in-out`}>
          Qui sommes-nous
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
          <Link href="/" className={`text-[#006C65] text-xl hover:text-[#02BD92] ${pathname === "/" ? "font-bold text-[#02BD92] underline underline-offset-8" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Accueil
          </Link>
          <button onClick={scrollToFormation ? handleFormationClick : undefined} className={`text-[#006C65] text-xl hover:text-[#02BD92] ${pathname === "/#formation" ? "font-bold text-[#02BD92] underline underline-offset-8" : ""}`}>
            Formation
          </button>
          <Link href="/nos-offres" className={`text-[#006C65] text-xl hover:text-[#02BD92] ${pathname.startsWith("/nos-offres") ? "font-bold text-[#02BD92] underline underline-offset-8" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Nos Offres
          </Link>
          <Link href="/pages/register" className={`text-[#006C65] text-xl hover:text-[#02BD92] ${pathname.startsWith("/pages/register") ? "font-bold text-[#02BD92] underline underline-offset-8" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Quiz
          </Link>
          <Link href="/qui-sommes-nous" className={`text-[#006C65] text-xl hover:text-[#02BD92] ${pathname.startsWith("/qui-sommes-nous") ? "font-bold text-[#02BD92] underline underline-offset-8" : ""}`} onClick={() => setIsMenuOpen(false)}>
            Qui sommes-nous
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
