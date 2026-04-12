import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const solutions = [
  {
    title: "Digital ID Registration",
    description: "Secure creation and management of digital identities for access and civic use.",
    icon: "🪪",
  },
  {
    title: "Secure Mobile Voting",
    description: "A transparent and verifiable system for secure mobile-based voting.",
    icon: "🗳️",
  },
  {
    title: "Admin Control Panel",
    description: "Tools for managing elections, users, and verification in one place.",
    icon: "🧭",
  },
  {
    title: "Real-time Result Monitoring",
    description: "Real-time tracking of election results with transparency and accountability.",
    icon: "📊",
  },
  // {
  //   title: "Multi-Platform Access",
  //   description: "",
  //   icon: "🌐",
  // },
  // {
  //   title: "Mobile Access (Citizen)",
  //   description: "A mobile-friendly interface for Users to register, participate, and stay informed.",
  //   icon: "📱",
  // },
];

const SolutionCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-[#1e293b] border border-violet-400/30 shadow-[0_0_20px_rgba(124,58,237,0.12)] p-4 sm:p-5 rounded-xl sm:rounded-2xl w-full"
  >
    <div className="relative w-full h-[100px] xs:h-[120px] sm:h-[160px]">
      <div className="absolute inset-0 flex justify-center items-center text-4xl sm:text-5xl">
        {icon}
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[15px] xs:text-[16px] sm:text-[20px] leading-snug">{title}</h3>
      <p className="mt-2 text-white/80 text-[12px] xs:text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const SolutionSummary = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Our Solution</h2>
        {/* <p className={`${styles.sectionHeadText} `}>Solution Summary.</p> */}
        <p className="text-white text-[30px]"><b>Solution Summary.</b></p>
        
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[19px] max-w-7xl leading-[30px]"
        >
          NatioID demonstrates a simplified, transparent digital system for identity and civic participation.
        </motion.p>

      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5">
        {solutions.map((solution, index) => (
          <SolutionCard key={`solution-${index}`} index={index} {...solution} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SolutionSummary, "solution");
