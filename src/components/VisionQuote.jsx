import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const VisionQuote = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Our Vision</p>
      <h2 className={styles.sectionHeadText}>Quote.</h2>
      <motion.blockquote
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[24px] max-w-3xl leading-[40px] italic"
      >
        “Our goal is to empower nations to manage identity and elections digitally — safely and transparently.”
        <footer className="mt-4 text-secondary text-[18px] font-medium">
          — Abdul Azeez Adam, Founder of NatioID
        </footer>
      </motion.blockquote>
    </motion.div>
  );
};

export default SectionWrapper(VisionQuote, "vision-quote");
