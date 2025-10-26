import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const BonusAdditions = () => {
  return (
    <div className="text-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Extras</p>
        <h2 className={styles.sectionHeadText}>Bonus Additions.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">Explainer Video</h3>
          <p className="mt-2 text-secondary text-[14px]">
            A 45-second explainer video or demo walkthrough. (Placeholder)
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1, 0.75)}
          className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">One-Pager PDF</h3>
          <p className="mt-2 text-secondary text-[14px]">
            A downloadable “One-Pager” PDF for government officers. (Placeholder)
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1.5, 0.75)}
          className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">In the News / Mentions</h3>
          <p className="mt-2 text-secondary text-[14px]">
            Future “In the News / Mentions” section. (Placeholder)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(BonusAdditions, "bonus");
