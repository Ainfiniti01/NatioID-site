import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 w-full">
        <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-[400px] h-[200px] violet-gradient" />
        </div>

        <div className="flex-1 min-w-0">
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
            Exploring how identity and voting systems can be simpler,
            transparent, and digital-first.
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

          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-6 rounded-xl border border-red-500/60 bg-red-500/10 p-4"
          >
            <p className="text-red-300 font-bold text-[16px]">
              Try it out:
            </p>
            <ol className="mt-2 list-decimal list-inside text-white text-[15px] leading-7">
              <li>Download and try the mobile app (APK).</li>
              <li>Explore the demo and test the key features.</li>
              <li>
                Click <span className="text-red-300 font-bold">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfY_kTD7NbTns_MIHLzJogFYO64wDhpcGF-0KOPhQiN4k555w/viewform?usp=publish-editor" className="text-red-300 underline">
                        Give Feedback
                    </a>
                    </span> to share your response.
              </li>
            </ol>
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <button
              onClick={() => (window.location.href = "#demo")}
              className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md"
            >
              Download & Try the App (APK)
            </button>

            <button
              onClick={() => (window.location.href = "#demo")}
              className="bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md"
            >
              Explore Demo
            </button>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfY_kTD7NbTns_MIHLzJogFYO64wDhpcGF-0KOPhQiN4k555w/viewform?usp=publish-editor">
            <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-red-600 hover:bg-red-700 py-3 px-8 rounded-xl text-white font-bold shadow-md"
            >
              🔴 Give Feedback Now
            </button>
            </a>
            
          </div>
        </div>
      </div>

      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="sticky top-0 z-50 mt-12 px-4 py-3 bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        <p className="text-center text-sm font-semibold text-white">
          ⚠️ This is an experimental prototype. Please test and{" "}
          <a href="#contact" className="text-red-400 underline font-bold">
            give feedback here
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;