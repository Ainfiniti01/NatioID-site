import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const problems = [
  "Manual voter registration and paper-based ID management",
  "Electoral malpractice and low voter trust",
  "Limited youth engagement in governance",
  "Violence and crowding during physical polling",
  "Fragmented national identity systems",
];

const ProblemStatement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Challenges</p>
        <h2 className={styles.sectionHeadText}>Problem Statement.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          “These issues create inefficiency, exclusion, and public distrust in democratic processes.”
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {problems.map((problem, index) => (
          <div key={index} className='w-full'>
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
