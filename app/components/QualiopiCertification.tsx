import Image from "next/image";

const points = [
  {
    title: "Prise en charge financière",
    text: "Les OPCO peuvent financer tout ou partie de votre formation.",
  },
  {
    title: "Reconnaissance officielle",
    text: "La certification atteste de la qualité de nos processus pédagogiques.",
  },
  {
    title: "Sérénité administrative",
    text: "Nous vous accompagnons dans le montage de votre dossier OPCO.",
  },
  {
    title: "Investissement valorisé",
    text: "Formez vos équipes tout en optimisant votre budget formation.",
  },
];

const QualiopiCertification = () => {
  return (
    <section className="py-20 px-4 md:px-0 bg-gradient-to-b from-[#032720] to-[#032720] rounded-3xl shadow-2xl my-10 flex flex-col items-center">
      <div className="bg-gradient-to-b from-[#032720] to-[#032720] rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-2xl w-full mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Formation certifiée <span className="bg-gradient-to-r from-[#47CC88] to-[#00E5A2] text-transparent bg-clip-text">Qualiopi</span>
        </h2>
        <div className="mb-4">
          <span className="inline-block bg-[#47CC88] text-white font-bold text-base md:text-lg px-5 py-2 rounded-full shadow-lg border-2 border-[#00E5A2]">
            100% finançable par les OPCO
          </span>
        </div>
        <p className="text-[#9EA3BF] text-base mb-6 text-center">
          Grâce à la certification Qualiopi, nos formations peuvent être financées par les OPCO (Opérateurs de Compétences). Profitez d'une prise en charge totale ou partielle pour former vos équipes en toute sérénité !
        </p>
        <Image
          src="/qualiopi.png"
          alt="Certification Qualiopi"
          width={260}
          height={260}
          className="object-contain mb-2 rounded-2xl"
        />
        <p className="text-xs text-[#222] mt-1 text-center">
          <span className="font-semibold">Numéro de certification :</span> FR-2023-01-0001
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#032720] border border-[#47CC88] px-6 py-4 rounded-xl shadow-lg text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
            <p className="text-[#9EA3BF] font-light">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QualiopiCertification; 