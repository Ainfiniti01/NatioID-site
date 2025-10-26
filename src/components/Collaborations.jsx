import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Collaborations = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Partnerships</p>
        <h2 className={styles.sectionHeadText}>In Collaboration With.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We’re open to collaborations with governments, civic innovation hubs, and tech organizations.
      </motion.p>
      {/* Future space for logos once you get mentions or collaborators. */}
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {/* Placeholder for logos */}
      </div>
    </>
  );
};

export default SectionWrapper(Collaborations, "collaborations");
