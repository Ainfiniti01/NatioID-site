import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const problems = [
  " Youth disengagement",
  "Manual voter registration and paper-based ID management",
  "Electoral malpractice and low voter trust",
  "Limited youth engagement in governance",
  "Violence and crowding during physical polling",
  "Fragmented national identity systems",
  "Data privacy and security concerns",
  "Lack of transparency in election processes",
  "Inefficient government services",
  " Fraud & duplicate identities",
  "Exclusion of marginalized groups",
  "High costs of traditional ID and election systems",
];

const ProblemStatement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Challenges</p>
        <h2 className={styles.sectionHeadText}>Problem Statement.</h2>

        <h2 className="text-white font-bold text-[24px] text-center">
        Many nations struggle with efficient digital identity systems and transparent elections.
      </h2>
      <h3 className="text-white font-bold text-[24px] text-center">
        This results in:
      </h3>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {problems.map((problem, index) => (
          <div key={index} className=''>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col'
              >
                <p className='text-white text-[18px] font-bold text-center'>
                  {problem}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProblemStatement, "problem");
