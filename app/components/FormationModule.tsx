// app/components/FormationModule.tsx

import Image from "next/image";
import Link from "next/link";

export default function FormationModule() {
  const modules = [
    {
      id: 1,
      title: "Module 1 : Introduction à la cybersécurité",
      description:
        "Découvrez les bases de la cybersécurité et pourquoi elle est essentielle dans notre monde connecté.",
      image: "/module1.png",
      link: "https://ventyra.fr/pages/comming-soon",
    },
    {
      id: 2,
      title: "Module 2 : Gestion des mots de passe",
      description:
        "Présentation des bonnes pratiques pour sécuriser les mots de passe : complexité, gestionnaires, authentification multi-facteurs et risques associés.",
      image: "/module2.png",
      link: "https://ventyra.fr/pages/comming-soon",
    },
    {
      id: 3,
      title: "Module 3 : Déjouer le phishing",
      description: "Techniques pour identifier et éviter les tentatives de phishing, en reconnaissant les signaux d’alerte et en adoptant les bons réflexes.",
      image: "/module3.png",
      link: "https://ventyra.fr/pages/comming-soon",
    },
    {
      id: 4,
      title: "Module 4 : Confidentialité au travail et sécurité physique",
      description: "Bonnes pratiques pour protéger les informations sensibles et sécuriser l’accès physique aux espaces de travail.",
      image: "/module4.png",
      link: "https://ventyra.fr/pages/comming-soon",
    },
    {
      id: 5,
      title: "Module 5 : Gestion des connexions à distance (Télétravail)",
      description: "Mesures de sécurité pour protéger les accès à distance : VPN, authentification renforcée et bonnes pratiques en télétravail.",
      image: "/module5.png",
      link: "https://ventyra.fr/pages/comming-soon",
    },
    {
      id: 6,
      title: "Module 6 : Reconnaître et limiter une cyberattaque",
      description: "Méthodes pour détecter une cyberattaque et actions à entreprendre pour en limiter les impacts.",
      image: "/module6.png",
      link: "https://ventyra.fr/pages/comming-soon",
    },
  ];

  return (
    <div className="text-center md:text-start">
      {modules.map((module, index) => (
        <div
          key={module.id}
          className={`flex flex-col md:flex-row justify-between items-center py-14 gap-14 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#02BD92]/10 hover:border-[#02BD92] border-2 border-transparent rounded-3xl p-6 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >  
          <div className="relative rounded-3xl shadow-custom-inner">
            <Image
              src={module.image}
              alt={module.title}
              width={600}
              height={600}
              className="border-2 rounded-3xl border-[#02BD92] px-24 py-16"
            />
          </div>
          <div className="md:w-[600px]">
            <h3 className="text-5xl font-semibold">{module.title}</h3>
            <p className="text-base text-[#9EA3BF] font-light py-8">{module.description}</p>
            <Link
              href={module.link}
              className="bg-[#02BD92] py-4 px-6 rounded-xl text-white text-lg relative overflow-hidden group"
            >
              Voir plus de détails
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
