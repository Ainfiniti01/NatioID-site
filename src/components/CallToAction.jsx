import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CallToAction = () => {
  return (
    <div className="text-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Partnership</p>
        <h2 className={styles.sectionHeadText}>Call to Action.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto"
      >
        “We’re open to partnerships, sponsorships, and pilot programs with government agencies, civic-tech organizations, and innovation hubs.”
      </motion.p>

      <div className="mt-10 flex justify-center flex-col sm:flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
          onClick={() => window.location.href = '#contact'}
        >
          📨 Contact Me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
          onClick={() => window.location.href = '#contact'}
        >
          📞 Request a Demo
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
          onClick={() => window.location.href = '#contact'}
        >
          💼 Sponsor or Collaborate
        </motion.button>
      </div>
    </div>
  );
};

export default SectionWrapper(CallToAction, "cta");
