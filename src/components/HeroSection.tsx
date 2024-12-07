"use client";

import sendAILogo from "@/assets/images/logos/SendAI.svg";
import imgagentAggFrame from "@/assets/images/svgs/abstract/agentAggFrame.png";
import imgAgentToolingFrame from "@/assets/images/svgs/abstract/agenttoolingFrame.png";
import imgaDatesFrame from "@/assets/images/svgs/abstract/datesFrame.png";
import imgDefiAgentFrame from "@/assets/images/svgs/abstract/defiAgentFrame.png";
import lLines from "@/assets/images/svgs/abstract/LLines.svg";
import rLines from "@/assets/images/svgs/abstract/Rlines.svg";
import imgSocAgentFrame from "@/assets/images/svgs/abstract/socialAgentFrame.png";
import imgabsR3 from "@/assets/images/svgs/bgs/abstract.png";
import imgabsL3 from "@/assets/images/svgs/bgs/abstract10.png";
import imgabsR2 from "@/assets/images/svgs/bgs/abstract2.png";
import imgabsL1 from "@/assets/images/svgs/bgs/abstract6.png";
import imgabsL2 from "@/assets/images/svgs/bgs/abstract9.png";
import imgabsR1 from "@/assets/images/svgs/bgs/ai16zdotted.svg";
import hackLogoBig from "@/assets/images/svgs/bgs/HeroAIHackText.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-PPSans">
      <div className="absolute inset-0 top-0 left-0 z-10">
        <div className="absolute bg-no-repeat inset-0 bg-[url('../assets/images/svgs/bgs/randomLines.svg')] opacity-100" />
      </div>
      <Image
        src={imgabsL1}
        alt="Right Abstract"
        className="absolute top-8 left-2"
      />
      <Image
        src={imgabsL2}
        alt="Right Abstract"
        className="absolute top-48 left-16 z-20"
      />
      <Image
        src={imgabsL3}
        alt="Right Abstract"
        className="absolute top-80 left-2"
      />
      <Image
        src={imgDefiAgentFrame}
        alt="Right Abstract"
        className="absolute top-16 left-2 h-48 object-contain"
      />
      <Image
        src={imgAgentToolingFrame}
        alt="Right Abstract"
        className="absolute top-40 left-16 z-20"
      />
      <Image
        src={imgabsR1}
        alt="Right Abstract"
        className="absolute bottom-96 right-0"
      />
      <Image
        src={imgabsR2}
        alt="Right Abstract"
        className="absolute bottom-80 z-20 right-2 opacity-40"
      />
      <Image
        src={imgaDatesFrame}
        alt="Date Frame"
        className="absolute top-40 z-20 right-24"
      />
      <Image
        src={imgSocAgentFrame}
        alt="SocialAgent Frame"
        className="absolute bottom-80 z-20 right-16"
      />
      <Image
        src={imgagentAggFrame}
        alt="AgentAgg Frame"
        className="absolute bottom-40 z-20 right-16"
      />
      <Image
        src={imgabsR3}
        alt="Right Abstract"
        className="absolute bottom-32 right-4 opacity-40"
      />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col items-center space-y-6 max-w-4xl w-full text-center">
          <Image
            src={hackLogoBig}
            alt="Hackathon Logo"
            className="md:w-full h-auto z-50"
            width={200}
            height={60}
          />

          <div className="font-PPSans text-lg flex gap-4  -mt-40">
            <Image src={lLines} alt="Solana Logo" className="w-24 -mt-72" />
            <span className="opacity-8 -mt-40">
              global · $100k+ in prizes · build ai agents on solana
            </span>
            <Image src={rLines} alt="Solana Logo" className="w-24  -mt-72" />
          </div>

          <div
            onClick={() =>
              window.open("https://t.me/solana_ai_hackathon", "_blank")
            }
            className="mt-8 z-50 cursor-pointer bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2"
          >
            <span>Join the Hackathon</span>
          </div>
        </div>

        <div className="absolute bottom-8 flex items-center opacity-50">
          <span className="font-PPSans">//powered by</span>
          <Image src={sendAILogo} alt="SendAI Logo" className="h-6 -ml-8" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;