import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Help test this idea</h3>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          This is an early prototype. Your feedback will help improve it.
        </p>

        {/*
          Previous contact form has been commented out and replaced with a
          single feedback CTA button that opens the Google Form.
        */}

        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSfY_kTD7NbTns_MIHLzJogFYO64wDhpcGF-0KOPhQiN4k555w/viewform?usp=publish-editor'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-8 bg-secondary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
        >
          👉 Give Feedback
        </a>

        <div className="mt-4 text-center">
          <a
            href="/NatioID_Documentation.docx"
            download="NatioID_Documentation.docx"
            className="text-blue-400 hover:underline"
          >
            Download NatioID Documentation (DOCX)
          </a>
        </div>
        <div className="mt-4 text-center">
          <a
            href="/NatioID – National Digital Identity & Voting Platform.pptx"
            download="NatioID – National Digital Identity & Voting Platform.pptx"
            className="text-blue-400 hover:underline"
          >
            Download NatioID Presentation (PPTX)
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
