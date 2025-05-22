import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-b from-[#032720] to-[#032720] min-h-screen text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-[#021C1A]/80 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Éditeur du site</h2>
        <p>Ventyra<br />49000 Angers<br />SIRET : 94287308400019<br />contact@ventyra.fr</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Directeurs de la publication</h2>
        <p>Valentin Bonnet<br />Théo Premartin</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Hébergement</h2>
        <p>Vercel Inc.<br />340 S Lemon Ave #4133<br />Walnut, CA 91789<br />USA<br />https://vercel.com</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Propriété intellectuelle</h2>
        <p>Tous les contenus présents sur ce site sont la propriété exclusive de Ventyra, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p>Pour toute question, vous pouvez nous contacter à l'adresse : contact@ventyra.fr</p>
      </div>
      <Footer />
    </main>
  );
} 