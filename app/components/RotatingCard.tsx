// components/RotatingCard.tsx

import Image from "next/image";

export default function RotatingCard() {
  return (
    <div className="relative w-[200px] h-[200px] md:w-[600px] md:h-[600px] perspective-1000">
      <div className="w-full h-full animate-spin-y transform-style-3d">
        <Image
          src="/carte-ventyra.png"
          alt="Ventyra"
          fill
          className="absolute rotate-[20deg] inset-0 backface-hidden object-contain md:mt-0 mt-32"
        />
      </div>
    </div>
  );
}
