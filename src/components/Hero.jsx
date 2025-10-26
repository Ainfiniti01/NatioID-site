import React from 'react';
import { motion } from 'framer-motion'; // Assuming framer-motion for animations, as ReactBits is not a standard library. If ReactBits is a custom module, this might need adjustment.
import { styles } from '../styles';
import {ComputersCanvas} from './canvas'; // Assuming this might be used for a background effect or a placeholder

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Parallax background effect could be implemented here or with a canvas */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-[400px] h-[300px] violet-gradient" />
        </div>

        <div>
          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className={`${styles.heroHeadText} text-white`}
          >
            NatioID – <span className="text-[#915EFF]">Official Landing Page</span>
          </motion.h1>
          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            “A Unified Digital Identity and Voting Platform for Modern Governance”
          </motion.p>

          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            NatioID is a secure web and mobile system that demonstrates how nations can digitize citizen identity management and elections — transparently, securely, and efficiently.
          </motion.p>

          <div className="mt-10 flex flex-row gap-4">
            <motion.button
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
              onClick={() => window.location.href = '#demo'}
            >
              Try the Demo (Web Admin)
            </motion.button>
            <motion.button
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
              onClick={() => window.location.href = '#demo'}
            >
              Download Mobile App (APK)
            </motion.button>
            <motion.button
              variants={buttonAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
              onClick={() => window.location.href = '#contact'}
            >
              Request Collaboration
            </motion.button>
          </div>
        </div>
      </div>

      {/* Placeholder for optional text and animations */}
      {/* <motion.p
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center text-white text-sm"
      >
        Viewed from 14+ countries worldwide 🌍
      </motion.p> */}

      {/* Placeholder for background effect */}
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
