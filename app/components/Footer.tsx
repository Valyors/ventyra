// app/components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-60 flex flex-col justify-center space-y-5 py-8">
        <div className="flex flex-col md:flex-row items-center space-x-4">
            <div className="flex items-center space-x-4">
                <Image src="/ventyra-logo.png" alt="Ventyra Logo" width={60} height={60} />
                <span className="text-[#02BD92] text-2xl">VENTYRA</span>
            </div>
            <div className="flex items-center space-x-4">
                <p className="text-2xl font-light text-[#9EA3BF] pb-1 hidden md:block">|</p>
                <p className="text-lg font-light text-[#9EA3BF] mt-4 md:mt-0">Ventyra, jouez la carte de la sécurité.</p>
            </div>
        </div>

        <div>
            <hr className="border-t-1 border-[#9EA3BF] my-4" />
        </div>

        <div className="flex justify-between items-center px-10 md:px-0">
            <div className="flex flex-col">
                <span className="text-base text-[#9EA3BF] font-light">Copyright © 2025</span>
                <span className="text-base text-[#9EA3BF] font-light">All Rights Reserved</span>
            </div>
            <div>
                <Link
                    href="https://www.linkedin.com/company/ventyra/?viewAsMember=true" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9EA3BF] hover:text-[#47CC88] transition"
                >
                    <Image
                        src="/linkedin-logo.png"
                        alt="LinkedIn Logo"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Footer;
