import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const solutions = [
  {
    title: "Digital ID Registration",
    description: "Citizens can securely create or link their national identities within the platform.",
    icon: "🪪",
  },
  {
    title: "Secure Mobile Voting",
    description: "Enables safe, remote participation with verifiable transparency.",
    icon: "🗳️",
  },
  {
    title: "Admin Control Panel",
    description: "Provides tools to manage elections, candidates, and citizen verification seamlessly.",
    icon: "🧭",
  },
  {
    title: "Real-time Result Monitoring",
    description: "Track election outcomes instantly with transparency and accountability.",
    icon: "📊",
  },
  {
    title: "Web Access (Admin)",
    description: "A responsive, desktop-optimized portal for administrators and officials.",
    icon: "🌐",
  },
  {
    title: "Mobile Access (Citizen)",
    description: "A mobile-friendly interface for citizens to register, participate, and stay informed.",
    icon: "📱",
  },
];

const SolutionCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[230px]">
      <div className="absolute inset-0 flex justify-center items-center text-6xl">
        {icon}
      </div>
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{description}</p>
    </div>
  </motion.div>
);

const SolutionSummary = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our Solution</p>
        <h2 className={`${styles.sectionHeadText}`}>Solution Summary.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          NatioID provides an integrated, digital-first solution.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {solutions.map((solution, index) => (
          <SolutionCard key={`solution-${index}`} index={index} {...solution} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SolutionSummary, "solution");
