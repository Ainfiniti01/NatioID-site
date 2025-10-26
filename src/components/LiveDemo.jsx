import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const demos = [
  {
    platform: "Admin Web Portal",
    description: "For demo purposes, desktop view only",
    link: "https://natio-id.vercel.app",
  },
  {
    platform: "Citizen Mobile App (Android)",
    description: "Built with Expo (React Native)",
    link: "https://expo.dev/accounts/ainfiniti/projects/natioid/builds/f66d46db-007c-4da7-9cda-db6db180115e",
  },
];

const LiveDemo = () => {
  return (
    <>
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
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This is a demo version developed to showcase a secure, modern approach to national digital identity and electronic voting. While it's currently frontend-only (no backend/API), it’s ready for customization and localization.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-12 flex flex-col"
      >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-black-200 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Platform
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Description
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {demos.map((demo, index) => (
                    <tr key={index} className="bg-black-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{demo.platform}</td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        {demo.description}
                      </td>
                      <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                        <a href={demo.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {demo.link}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fnatio-id.vercel.app&qzone=1&margin=0&size=400x400&ecc=L" alt="Web App QR Code" className="w-48 h-48 object-contain" />
          <p className="text-white text-[17px] font-bold mt-2">WebApp</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fexpo.dev%2Faccounts%2Fainfiniti%2Fprojects%2Fnatioid%2Fbuilds%2Ff66d46db-007c-4da7-9cda-db6db180115e&qzone=1&margin=0&size=400x400&ecc=L" alt="Mobile App QR Code" className="w-48 h-48 object-contain" />
          <p className="text-white text-[17px] font-bold mt-2">MobileApp</p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(LiveDemo, "demo");
