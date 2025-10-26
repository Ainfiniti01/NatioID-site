import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const features = [
  "Role-based access control",
  "Election setup & candidate registration",
  "Citizen voting interface",
  "Complaint & feedback system",
  "Campaign pages for candidates",
  "Real-time results dashboard",
  "Dummy data (no live backend yet)",
];

const FeatureHighlights = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Features</p>
          <h2 className={styles.sectionHeadText}>Feature Highlights.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full p-5 rounded-2xl sm:w-[360px] bg-black-200"
          >
            <p className="text-white text-[18px]">✅ {feature}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(FeatureHighlights, "features");
