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
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-[#02BD92]">{name}</h3>
        <p className="text-[#9EA3BF] text-sm mt-2">{description}</p>
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-blue-700 text-sm font-semibold rounded-lg"
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
      linkedinUrl: "#",
    },
    {
      name: "PREMARTIN Théo",
      imageSrc: "/theo.jpeg", // Remplacez par le chemin réel de l'image
      description: "Diplômé de l'École d'Ingénieurs Polytech Angers, spécialité Cybersécurité.\nSoutenu et accompagné par Pépite Pays de la Loire.",
      linkedinUrl: "#",
    },
  ];

  return (
    <div className="text-center pt-14 pb-28">
        <h1 className="text-6xl font-semibold pb-16">Qui Sommes Nous ?</h1>
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
