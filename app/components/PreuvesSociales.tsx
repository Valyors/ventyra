import Image from "next/image";

const chiffres = [
  { value: "+70", label: "personnes formées" },
  { value: "98%", label: "de satisfaction" },
  { value: "0", label: "incident majeur signalé après formation" },
];

const temoignages = [
  {
    nom: "Responsable RH (PME)",
    texte: "La formation Ventyra a vraiment changé la culture cyber de notre équipe. Très concret et accessible !",
  },
  {
    nom: "Dirigeant TPE",
    texte: "L'audit et les faux mails de phishing nous ont permis de corriger des failles sans stress. Je recommande !",
  },
];

const logos = [
  "/logos/mymicro.png",
  "/logos/AssureursAssociés.png",
  "/logos/univ angers.png",
  "/logos/Polytech_Angers.png",
  "/logos/weforge-global-logo-baseline.webp",
  "/logos/Le_Fresne.png",
  "/logos/Logo Nantes Univ transparent.png",
];

export default function PreuvesSociales() {
  // On duplique la liste pour l'effet infini
  const allLogos = [...logos, ...logos];
  return (
    <section className="my-20">
      {/* Chiffres clés */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        {chiffres.map((c, i) => (
          <div key={i} className="bg-[#032720] border border-[#47CC88] rounded-2xl shadow-lg px-10 py-8 flex flex-col items-center min-w-[180px]">
            <span className="text-4xl md:text-5xl font-bold text-[#47CC88] mb-2">{c.value}</span>
            <span className="text-[#9EA3BF] text-lg text-center font-light">{c.label}</span>
          </div>
        ))}
      </div>

      {/* Témoignages */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-12">
        {temoignages.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full">
            <p className="text-[#032720] text-base font-medium mb-2 text-center">"{t.texte}"</p>
            <span className="text-[#47CC88] text-sm font-semibold">{t.nom}</span>
          </div>
        ))}
      </div>

      {/* Bandeau logos partenaires */}
      <div className="mb-4 w-full">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">Ils nous ont fait confiance</h3>
        <div className="relative w-full overflow-x-hidden py-2">
          <div className="flex items-center gap-12 animate-scroll-x-infinite min-w-full">
            {allLogos.map((logo, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-3 min-w-[240px] h-[120px] flex items-center justify-center">
                <Image src={logo} alt={`Logo partenaire ${i + 1}`} width={240} height={120} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x-infinite {
          animation: scroll-x-infinite 30s linear infinite;
        }
      `}</style>
    </section>
  );
} 