import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Motivation = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our Story</p>
        <h2 className={styles.sectionHeadText}>Motivation.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        NatioID was inspired by the growing need for transparent, inclusive, and technology-driven governance. It’s built as a civic innovation prototype — designed to demonstrate how nations can modernize identity and election systems with simplicity and security.
      </motion.p>
    </>
  );
};

export default SectionWrapper(Motivation, "motivation");
