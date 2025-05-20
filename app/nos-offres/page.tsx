import Navbar from "../components/navbar";
import Link from "next/link";
import { FaCheckCircle, FaShieldAlt, FaUserGraduate, FaEnvelopeOpenText } from "react-icons/fa";

export default function NosOffres() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-b from-[#032720] to-[#032720] min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">Nos Offres</h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Offre de formation */}
          <section className="bg-[#032720] border border-[#47CC88] rounded-3xl shadow-2xl p-8 flex flex-col items-center">
            <FaUserGraduate className="text-[#47CC88] text-5xl mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Formation Cybersécurité</h2>
            <p className="text-[#9EA3BF] text-lg mb-6 text-center">
              Une journée immersive pour sensibiliser et former vos équipes aux bons réflexes face aux risques cyber. Modules interactifs, ateliers pratiques et cas concrets.
            </p>
            <ul className="text-[#47CC88] text-base space-y-2 mb-8">
              <li className="flex items-center gap-2"><FaCheckCircle /> Formation éligible OPCO</li>
              <li className="flex items-center gap-2"><FaCheckCircle /> 7 modules pédagogiques</li>
              <li className="flex items-center gap-2"><FaCheckCircle /> Ateliers pratiques & mises en situation</li>
              <li className="flex items-center gap-2"><FaCheckCircle /> Support de formation inclus</li>
            </ul>
            <Link href="/pages/contact">
              <button className="bg-[#47CC88] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#00E5A2] transition">Nous contacter</button>
            </Link>
          </section>

          {/* Offre accompagnement */}
          <section className="bg-[#032720] border border-[#47CC88] rounded-3xl shadow-2xl p-8 flex flex-col items-center">
            <FaShieldAlt className="text-[#47CC88] text-5xl mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Accompagnement & Audit</h2>
            <p className="text-[#9EA3BF] text-lg mb-6 text-center">
              Un suivi sur 6 mois pour renforcer durablement la sécurité de votre entreprise : audit des pratiques, simulation de phishing et rapports mensuels détaillés.
            </p>
            <ul className="text-[#47CC88] text-base space-y-2 mb-8">
              <li className="flex items-center gap-2"><FaCheckCircle /> Audit complet des pratiques cyber</li>
              <li className="flex items-center gap-2"><FaCheckCircle /> Envoi de faux mails de phishing à vos équipes</li>
              <li className="flex items-center gap-2"><FaCheckCircle /> Rapport mensuel personnalisé pendant 6 mois</li>
              <li className="flex items-center gap-2"><FaCheckCircle /> Conseils & plan d'action sur-mesure</li>
            </ul>
            <Link href="/pages/contact">
              <button className="bg-[#47CC88] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#00E5A2] transition">Demander un audit</button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
} 