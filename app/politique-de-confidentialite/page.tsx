import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-b from-[#032720] to-[#032720] min-h-screen text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-[#021C1A]/80 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        <p className="mb-4">Ventyra s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site ventyra.fr, soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Données collectées</h2>
        <p>Nous collectons uniquement les données strictement nécessaires à la gestion de vos demandes (nom, prénom, email, message via le formulaire de contact).</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Utilisation des données</h2>
        <p>Vos données sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Durée de conservation</h2>
        <p>Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Vos droits</h2>
        <p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données à tout moment en écrivant à contact@ventyra.fr.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p>Pour toute question relative à la protection de vos données, contactez-nous à l'adresse : contact@ventyra.fr</p>
      </div>
      <Footer />
    </main>
  );
} 