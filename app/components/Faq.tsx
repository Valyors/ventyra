// app/components/Faq.tsx

"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Qu'est-ce que Ventyra ?",
    answer:
      "Ventyra est une entreprise spécialisée dans la formation en cybersécurité, visant à aider les petites entreprises à mieux comprendre et se protéger contre les cybermenaces. Nous mettons l’accent sur la sensibilisation des employés non informaticiens afin de renforcer la sécurité globale des entreprises.",
  },
  {
    question: "Quels services propose Ventyra ?",
    answer:
      "Ventyra propose des formations complètes en cybersécurité adaptées aux entreprises. Nos services incluent des sessions de sensibilisation aux cybermenaces, des ateliers pratiques sur la prévention du phishing et des conseils personnalisés pour renforcer la sécurité des systèmes d’information.",
  },
  {
    question: "Quelles sont les principales caractéristiques de Ventyra ?",
    answer:
      "Nos formations sont conçues pour être accessibles et efficaces, avec :\n- Des ateliers interactifs pour appliquer directement les concepts appris.\n- Une approche pédagogique simplifiée pour les employés non spécialistes en informatique.\n- Un focus sur les menaces les plus courantes, comme le phishing et les attaques par ingénierie sociale.",
  },
  {
    question: "Comment Ventyra peut-il aider mon entreprise ?",
    answer:
      "Ventyra permet à votre entreprise de réduire les risques liés aux cyberattaques en formant vos employés aux bonnes pratiques de cybersécurité. En sensibilisant votre équipe, vous diminuez les erreurs humaines pouvant entraîner des failles de sécurité, et vous améliorez la protection de vos données sensibles.",
  },
  {
    question: "Ventyra est-il adapté aux entreprises de toutes tailles ?",
    answer:
      "Oui, Ventyra est conçu pour s’adapter aux besoins des entreprises de toutes tailles. Que vous soyez une petite structure cherchant à sensibiliser vos employés ou une entreprise plus grande souhaitant renforcer sa politique de cybersécurité, nos formations sont modulables et adaptées à votre niveau de maturité en sécurité informatique.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <h2 className="text-5xl font-semibold text-white md:col-span-1">
          Questions communes :
        </h2>

        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 font-light text-left text-lg text-white hover:text-[#47CC88] transition"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-[#47CC88]" />
                  ) : (
                    <FaPlus className="text-[#9EA3BF]" />
                  )}
                </motion.div>
              </button>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-[#9EA3BF] pt-4 pb-8 whitespace-pre-line font-light"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
