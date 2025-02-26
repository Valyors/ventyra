// app/components/PourquoiChoisirFormation.tsx

"use client";

import { motion } from "framer-motion";

const PourquoiChoisirFormation = () => {
  return (
    <div className="text-center flex flex-col items-center bg-gradient-to-b from-[#032720] to-[#032720] py-20 px-6 rounded-3xl shadow-2xl my-10">
      <motion.h2
        className="text-5xl md:text-6xl font-bold text-white relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Pourquoi choisir notre <span className="bg-gradient-to-r from-[#47CC88] to-[#00E5A2] text-transparent bg-clip-text">formation</span> ?
      </motion.h2>

      <motion.p
        className="text-lg text-[#9EA3BF] font-light max-w-2xl py-8 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        La <strong className="text-[#47CC88]">cybersécurité</strong> peut sembler complexe, mais Ventyra la rend <strong className="text-[#47CC88]">ludique</strong> et <strong className="text-[#47CC88]">accessible</strong>. Nos formations favorisent <strong className="text-[#47CC88]">l’apprentissage en groupe</strong>, à travers des <strong className="text-[#47CC88]">mises en situation</strong> engageantes.
      </motion.p>

      <div className="md:w-[600px] space-y-10">
        {[
          { title: "🛡️ Une cybersécurité accessible", text: "Nous vous accompagnons vers des réflexes solides et une protection efficace, sans jargon technique." },
          { title: "🎯 Un apprentissage interactif", text: "Ateliers immersifs, simulations et cas concrets pour une formation 100 % pratique et actionnable." },
          { title: "🏢 Pensée pour les PME", text: "Des solutions simples, adaptées à votre activité, pour renforcer votre sécurité sans complexité inutile." },
          { title: "🧑‍🏫 Formée par des experts", text: "Valentin et Théo, diplômés en cybersécurité de Polytech Angers, mettent leur expertise à votre service." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#032720] border border-[#47CC88] px-6 py-4 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-[#9EA3BF] font-light">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PourquoiChoisirFormation;
