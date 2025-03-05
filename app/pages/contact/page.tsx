// app/pages/contact/page.tsx

"use client";

import Footer from "@/app/components/Footer";
import Navbar from "../../components/navbar";

const Leaderboard = () => {
  function scrollToFormation(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar scrollToFormation={scrollToFormation} />
        <div className="flex flex-grow flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-[#FFFFFF] mb-5">Page contact</h1>
          <p className="text-lg text-[#9EA3BF]">Arrive prochainement ...</p>
        </div>
        <div className="px-44">
          <Footer />
        </div>
    </div>
  );
};

export default Leaderboard;

