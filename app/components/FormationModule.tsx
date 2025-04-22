"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { moduleData } from "../data/moduleData";

export default function FormationModule() {
  const router = useRouter();

  const navigateToModule = (moduleId: number) => {
    router.push(`/modules/${moduleId}`);
  };

  return (
    <div id="formation-modules" className="text-center md:text-start">
      {moduleData.map((module, index) => (
        <div
          key={module.id}
          onClick={() => navigateToModule(module.id)}
          className={`flex flex-col md:flex-row justify-between items-center py-14 gap-14 transition-transform transform md:hover:scale-105 md:hover:shadow-xl md:hover:bg-[#02BD92]/10 md:hover:border-[#02BD92] border-2 border-transparent rounded-3xl p-6 cursor-pointer ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
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
            <p className="text-base text-[#9EA3BF] font-light py-8">
              {module.description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Empêche le déclenchement du onClick du parent
                navigateToModule(module.id);
              }}
              className="inline-block bg-[#02BD92] py-4 px-6 rounded-xl text-white text-lg relative overflow-hidden group hover:bg-[#02BD92]/90 transition-colors"
            >
              Voir plus de détails
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
