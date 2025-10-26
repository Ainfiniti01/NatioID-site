import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>About</h3>
        <p>NatioID was inspired by the growing need for transparent, inclusive, and technology-driven governance. It’s built as a civic innovation prototype — designed to demonstrate how nations can modernize identity and election systems with simplicity and security.”</p>
        <h2 className={styles.sectionHeadText}>Credits.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          <strong>Developed by:</strong> Abdulazeez Adam.A
        </p>
        <p>
          <strong>Role:</strong> CivicTech Developer & Founder of NatioID
        </p>
        <p>
          <strong>Contact:</strong>{" "}
          <a href="mailto:abdulazeezadam09@gmail.com" className="text-blue-500 hover:underline">
            abdulazeezadam09@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Ainfiniti01" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Ainfiniti01
          </a>
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
