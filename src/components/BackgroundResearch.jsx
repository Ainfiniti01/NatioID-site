import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const BackgroundResearch = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Research</p>
        <h2 className={styles.sectionHeadText}>Background Research.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Aligned with digital public goods and modern gov-tech standards.
      </motion.p>
    </>
  );
};

export default SectionWrapper(BackgroundResearch, "background");
