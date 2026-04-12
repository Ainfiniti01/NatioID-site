import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const apkLink =
  "https://expo.dev/artifacts/eas/nKa9UwEaYEKmczowf37iNT.apk";

const LiveDemo = () => {
  return (
    <>
    {/* <h2 className={`${styles.sectionHeadText}`}>The Challenges</h2>
            <p className="text-white text-[30px]"><b>Problem Statement.</b></p> */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Live Demo & Downloads
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Try NatioID.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
          This is a demo version developed to showcase a secure, modern approach to national digital identity and electronic voting. This prototype demonstrates core flows and UI/UX for a national digital identity + e-voting system, it’s ready for customization and localization.
        </motion.p>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]"
        >
         Future versions will integrate:
         <ul>
          <li>✅ Backend identity services</li>
          <li>✅ Cryptographic voting protocols</li>
          <li>✅ Secure API infrastructure</li>
         </ul>
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 rounded-2xl border border-violet-500/40 bg-black-100/90 p-6 sm:p-8"
      >
        <h3 className="text-white text-[22px] font-bold">Citizen Mobile App (Android)</h3>
        <p className="text-secondary mt-2">Built with Expo (React Native).</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={apkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7b46ef] hover:bg-[#5a32c6] py-3 px-8 rounded-xl text-white font-bold shadow-md"
          >
            Download APK
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfY_kTD7NbTns_MIHLzJogFYO64wDhpcGF-0KOPhQiN4k555w/viewform?usp=publish-editor"
            className="inline-block bg-red-600 hover:bg-red-700 py-3 px-8 rounded-xl text-white font-bold shadow-md"
          >
            Give Feedback
          </a>
        </div>
      </motion.div>

      {/* <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fnatio-id.vercel.app&qzone=1&margin=0&size=400x400&ecc=L" alt="Web App QR Code" className="w-48 h-48 object-contain" />
          // <p className="text-white text-[17px] font-bold mt-2">WebApp</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fexpo.dev%2Faccounts%2Fainfiniti%2Fprojects%2Fnatioid%2Fbuilds%2Ff66d46db-007c-4da7-9cda-db6db180115e&qzone=1&margin=0&size=400x400&ecc=L" alt="Mobile App QR Code" className="w-48 h-48 object-contain" />
          <p className="text-white text-[17px] font-bold mt-2">MobileApp</p>
        </div>
      </div> */}
    </>
  );
};

export default SectionWrapper(LiveDemo, "demo");
