// app/components/QuiSommesNous.tsx

import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  imageSrc: string;
  description: string;
  linkedinUrl: string;
  schoolLogos: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  imageSrc,
  description,
  linkedinUrl,
  schoolLogos,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
      <div className="h-72 w-full relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-2xl"
        />
      </div>
      <div className="px-4 py-10 text-center">
        <h3 className="text-lg font-bold text-[#02BD92]">{name}</h3>
        <p className="text-[#9EA3BF] text-sm mt-2 mb-4">{description}</p>
        <div className="flex justify-center items-center gap-4 mb-6">
          {schoolLogos.map((logo, index) => {
            const is42 = logo.includes("ecole_42");
            return (
              <div
                key={index}
                className={is42 ? "h-12 w-auto relative" : "h-12 w-auto relative"}
              >
                <Image
                  src={logo}
                  alt="École logo"
                  width={is42 ? 50 : 100}
                  height={is42 ? 24 : 48}
                  style={{ objectFit: "contain" }}
                />
              </div>
            );
          })}
        </div>
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#02BD92] py-3 px-4 rounded-xl text-white text-lg relative overflow-hidden group"
        >
          Linkedin
        </Link>
      </div>
    </div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "BONNET Valentin",
      imageSrc: "/valentin-bonnet.jpg",
      description:
        "Diplômé de l'École d'Ingénieurs Polytech Angers, spécialité Cybersécurité.\nSoutenu et accompagné par Pépite Pays de la Loire.",
      linkedinUrl: "https://www.linkedin.com/in/valentinbonnet79/",
      schoolLogos: ["/polytech_angers.png"],
    },
    {
      name: "PREMARTIN Théo",
      imageSrc: "/theo.jpeg",
      description:
        "Diplômé de l'École d'Ingénieurs Polytech Angers, spécialité Cybersécurité.\nÉgalement formé à l'École 42 à Paris",
      linkedinUrl: "https://www.linkedin.com/in/th%C3%A9o-pr%C3%A9martin/",
      schoolLogos: ["/polytech_angers.png", "/ecole_42.png"],
    },
  ];

  return (
    <div id="qui-sommes-nous" className="text-center pt-14 pb-28 scroll-mt-32">
      <h1 className="text-5xl md:text-6xl font-semibold pb-16">Qui Sommes Nous ?</h1>
      <div className="flex justify-center items-center px-4">
        <div className="flex flex-col sm:flex-row gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
