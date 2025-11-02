import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const SecurityPrinciples = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Security & Trust</p>
        <h2 className={styles.sectionHeadText}>Security & Trust Principles.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Citizen data safety priority

Consent-first identity framework

No real personal data stored

Transparent algorithm approach

Designed with gov-grade privacy ethics
      </motion.p>
    </>
  );
};

export default SectionWrapper(SecurityPrinciples, "security");
