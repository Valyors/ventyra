// app/components/QuiSommesNous?

import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  imageSrc: string;
  description: string;
  linkedinUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, imageSrc, description, linkedinUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
      <div className="h-72 w-full relative">
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" className="rounded-t-2xl" />
      </div>
      <div className="px-4 py-10 text-center">
        <h3 className="text-lg font-bold text-[#02BD92]">{name}</h3>
        <p className="text-[#9EA3BF] text-sm mt-2 mb-12">{description}</p>
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
      imageSrc: "/valentin.jpeg", // Remplacez par le chemin réel de l'image
      description: "Diplômé de l'École d'Ingénieurs Polytech Angers, spécialité Cybersécurité.\nSoutenu et accompagné par Pépite Pays de la Loire.",
      linkedinUrl: "https://www.linkedin.com/in/valentinbonnet79/",
    },
    {
      name: "PREMARTIN Théo",
      imageSrc: "/theo.jpeg", // Remplacez par le chemin réel de l'image
      description: "Diplômé de l'École d'Ingénieurs Polytech Angers, spécialité Cybersécurité.\nSoutenu et accompagné par Pépite Pays de la Loire.",
      linkedinUrl: "https://www.linkedin.com/in/th%C3%A9o-pr%C3%A9martin/",
    },
  ];

  return (
    <div className="text-center pt-14 pb-28">
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
