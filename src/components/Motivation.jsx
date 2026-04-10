import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Motivation = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Our Story</p> */}
        <h2 className={styles.sectionHeadText}>Motivation.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        NatioID was born from a desire to explore how digital tools can transform governance. We wanted to create a prototype that demonstrates how identity and voting systems can be structured in a simple and transparent way using modern digital tools. Our motivation is to spark conversations about the future of civic participation and inspire new approaches to public service delivery.
      </motion.p>
    </>
  );
};

export default SectionWrapper(Motivation, "motivation");
