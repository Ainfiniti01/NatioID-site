import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// const problems = [
//   {
//     title: "Youth disengagement",
//     desc: "Young citizens often feel disconnected from governance due to outdated systems and lack of digital platforms."
//   },
//   {
//     title: "Manual voter registration and paper-based ID management",
//     desc: "Paper systems slow processes, increase errors, and create room for fraud."
//   },
//   {
//     title: "Electoral malpractice and low voter trust",
//     desc: "Opaque systems enable tampering, reducing public confidence in results."
//   },
//   {
//     title: "Limited youth engagement in governance",
//     desc: "Digital-native generations lack digital participation channels."
//   },
//   {
//     title: "Violence and crowding during physical polling",
//     desc: "Long queues and physical polling increase security risks and discourage participation."
//   },
//   {
//     title: "Fragmented national identity systems",
//     desc: "Multiple ID issuers lead to duplication and inefficient public services."
//   },
//   {
//     title: "Data privacy and security concerns",
//     desc: "Weak digital infrastructure puts citizen information at risk."
//   },
//   {
//     title: "Lack of transparency in election processes",
//     desc: "Without digital audit trails, trust and transparency remain limited."
//   },
//   {
//     title: "Inefficient government services",
//     desc: "Manual processes delay services and strain government capacity."
//   },
//   {
//     title: "Fraud & duplicate identities",
//     desc: "Weak identity verification systems allow multiple registrations."
//   },
//   {
//     title: "Exclusion of marginalized groups",
//     desc: "Without digital options, remote & disabled citizens face barriers."
//   },
//   {
//     title: "High costs of traditional ID and election systems",
//     desc: "Physical ID + voting infrastructure is expensive to maintain."
//   }
// ];

const problems = [
  {
    title: "Fragmented national identity systems",
    desc: "Citizens often manage multiple IDs across agencies, resulting in duplication, fraud risk, and inefficient public services."
  },
  {
    title: "Manual voter registration & outdated civic systems",
    desc: "Paper-based processes slow administration, increase errors, reduce accessibility, and create opportunities for manipulation."
  },
  {
    title: "Low public trust & election credibility issues",
    desc: "Limited transparency and lack of verifiable digital audit trails reduce confidence in democratic institutions."
  },
  {
    title: "Youth disengagement & low civic participation",
    desc: "Digital-first generations lack modern processes and platforms for civic participation, reducing inclusion and voter turnout."
  },
  {
    title: "Security risks & identity fraud",
    desc: "Weak authentication enables duplicate IDs, unauthorized access, and fraudulent electoral participation."
  },
  {
    title: "Election-day risks & logistics burden",
    desc: "Crowded polling stations, long queues, and security challenges reduce turnout and increase election costs."
  },
  {
    title: "Limited inclusion for remote & vulnerable citizens",
    desc: "Rural residents, persons with disabilities, and displaced populations face barriers to accessing services and voting."
  },
  {
    title: "Rising governance costs",
    desc: "Physical polling, paper IDs, and manual verification systems increase long-term government expenditure."
  },
  {
    title: "Geopolitical instability & institutional pressure",
    desc: "Many regions face governance disruption, civic unrest, and institutional capacity challenges — requiring resilient digital systems."
  },
  {
    title: "Cyber & data protection challenges",
    desc: "Governments must modernize identity and electoral systems to meet global cybersecurity, privacy, and compliance standards."
  }
];


const ProblemStatement = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>The Challenges</p>
        <h2 className={styles.sectionHeadText}>Problem Statement.</h2> */}
        <h2 className={`${styles.sectionHeadText}`}>The Challenges</h2>
        <p className="text-white text-[30px]"><b>Problem Statement.</b></p>

        <h2 className="text-white text-[22px] text-center">
          Many nations struggle with efficient digital identity systems and transparent elections.
        </h2>
        <h3 className="text-white text-[22px] text-center">
          This results in:
        </h3>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {problems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              onClick={() => toggle(index)}
              className="bg-tertiary rounded-[20px] cursor-pointer py-5 px-12 min-h-[100px] flex justify-center items-center flex-col"
            >
              <p className="text-white text-[18px] font-bold text-center">
                {item.title}
              </p>

              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 text-[14px] mt-4 text-center"
                >
                  {item.desc}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProblemStatement, "problem");
