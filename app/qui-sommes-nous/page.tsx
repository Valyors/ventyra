import Navbar from "../components/navbar";
import QuiSommesNous from "../components/QuiSommesNous";
import Footer from "../components/Footer";

export default function QuiSommesNousPage() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-0 bg-gradient-to-b from-[#032720] to-[#032720] min-h-screen">
      <Navbar />
      <QuiSommesNous />
      <Footer />
    </main>
  );
} 