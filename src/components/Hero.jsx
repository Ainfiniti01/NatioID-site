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
    <section className="relative w-full min-h-screen mx-auto pt-28 pb-10">
  
  {/* Main content (NO absolute anymore) */}
  <div className="max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full">
    
    {/* Left decoration */}
    <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    <div className="w-1 sm:h-[400px] h-[200px] violet-gradient" />
  </div>

    {/* Text content */}
    <div className='flex-1 min-w-0'>
      <motion.h1
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.heroHeadText} text-white`}
      >
        NatioID –{" "}
        <span className="text-[#915EFF]">
          A Digital Identity & Civic Participation Prototype
        </span>
      </motion.h1>

      <motion.p
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="text-[16px] text-secondary mt-4"
      >
        Exploring how identity and voting systems can be simpler, transparent, and digital-first.
      </motion.p>

      <motion.p
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className={`${styles.heroSubText} mt-4 text-white-100`}
      >
        “Modern governance through secure, transparent digital systems”
      </motion.p>

      <motion.p
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className={`${styles.heroSubText} mt-4 text-white-100`}
      >
        NatioID is a prototype exploring digital identity and voting systems designed for transparency, accessibility, and efficiency.
      </motion.p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
        <button
          onClick={() => window.location.href = '#demo'}
          className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md"
        >
          Try the Demo (Web Admin)
        </button>

        <button
          onClick={() => window.location.href = '#demo'}
          className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md"
        >
          Download & Try the App (APK)
        </button>

        <button
          onClick={() => window.location.href = '#contact'}
          className="bg-secondary py-3 px-8 rounded-xl text-white font-bold shadow-md"
        >
          Feedback & Comment
        </button>
      </div>
    </div>
  </div>

  {/* ⚠️ Caution banner (NOW FIXED + STICKY) */}
  <motion.div
    variants={heroVariants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.5 }}
    className="sticky top-0 z-50 mt-12 px-4 py-3 bg-black/60 backdrop-blur-md border-b border-white/10"
  >
    <p className="text-center text-sm font-semibold text-white">
      ⚠️ This is an experimental prototype. Currently open for testing &nbsp;
      <a href="#contact" className="text-[#496fd6] underline font-bold">
        feedback
      </a>.
    </p>
  </motion.div>

</section>
  );
};

export default Hero;
