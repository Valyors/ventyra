"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { moduleData } from "../data/moduleData";
import Navbar from "../components/navbar";

interface ModuleDetailProps {
  moduleId: number;
}

export default function ModuleDetail({ moduleId }: ModuleDetailProps) {
  const router = useRouter();
  const moduleItem = moduleData.find((m) => m.id === moduleId);

  if (!moduleItem) {
    return <div className="text-center py-20">Module non trouvé</div>;
  }

  const goToNextModule = () => {
    if (moduleId < moduleData.length) {
      router.push(`/modules/${moduleId + 1}`);
    }
  };

  const goToPreviousModule = () => {
    if (moduleId > 1) {
      router.push(`/modules/${moduleId - 1}`);
    }
  };

  // Fonction vide pour la navbar (nécessaire pour l'interface)
  const scrollToFormation = () => {
    router.push("/#formation-modules");
  };

  return (
    <>
      <Navbar scrollToFormation={scrollToFormation} />
      
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-12"> {/* Ajout de padding-top pour la navbar */}
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <button onClick={() => router.push("/#formation-modules")} className="hover:text-[#02BD92]">
            Modules
          </button>
          <span className="mx-2">/</span>
          <span className="text-[#02BD92]">{moduleItem.title}</span>
        </div>

        {/* Module header */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white max-w-3xl">
              {moduleItem.title}
            </h1>
            <span className="text-lg font-medium text-[#02BD92] bg-[#02BD92]/10 px-4 py-2 rounded-full whitespace-nowrap self-start">
              {moduleItem.content.duration}
            </span>
          </div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {moduleItem.description}
          </p>
        </div>

        {/* Module content */}
        <div className="border-2 border-[#02BD92] rounded-xl p-8 mb-8">
          {/* Objectives */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Objectifs pédagogiques
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              {moduleItem.content.objectives.map((objective, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Déroulé
            </h2>
            <div className="space-y-8">
              {moduleItem.content.schedule.map((item, index) => (
                <div key={index} className="border-l-4 border-[#02BD92] pl-6 py-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-[#02BD92] bg-[#02BD92]/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              Évaluation
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {moduleItem.content.evaluation}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={goToPreviousModule}
            disabled={moduleId <= 1}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg ${
              moduleId > 1
                ? "border-2 border-[#02BD92] hover:bg-[#02BD92]/10 text-gray-900 dark:text-white"
                : "border-2 border-gray-200 text-gray-400 dark:text-gray-500 cursor-not-allowed"
            }`}
          >
            <FaArrowLeft />
            <span>Module précédent</span>
          </button>
          
          <button
            onClick={goToNextModule}
            disabled={moduleId >= moduleData.length}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg ${
              moduleId < moduleData.length
                ? "bg-[#02BD92] hover:bg-[#02BD92]/90 text-white"
                : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed"
            }`}
          >
            <span>Module suivant</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
