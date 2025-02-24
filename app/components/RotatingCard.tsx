// components/RotatingCard.tsx

import Image from "next/image";

export default function RotatingCard() {
  return (
    <div className="relative w-[600px] h-[600px] perspective-1000">
      <div className="w-full h-full animate-spin-y transform-style-3d">
        <Image
          src="/carte-ventyra.png"
          alt="Ventyra"
          width={600}
          height={600}
          className="absolute rotate-[20deg] inset-0 backface-hidden"
        />
      </div>
    </div>
  );
}
