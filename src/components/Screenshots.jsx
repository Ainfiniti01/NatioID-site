import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import adminDashboard from "../assets/Admin-Dashboard.jpg";
import adminDash2 from "../assets/Admin-dash2.jpg";
import adminLogin from "../assets/Admin-Login.jpg";
import adminUserManagement from "../assets/Admin-user-management.jpg";
import idPage from "../assets/ID--page.jpg";
import idPreview from "../assets/ID-preview.jpg";

const screenshots = [
  {
    title: "Admin Dashboard",
    image: adminDashboard,
  },
  {
    title: "Admin Dashboard 2",
    image: adminDash2,
  },
  {
    title: "Admin Login",
    image: adminLogin,
  },
  {
    title: "Admin User Management",
    image: adminUserManagement,
  },
  {
    title: "ID Page",
    image: idPage,
  },
  {
    title: "ID Preview",
    image: idPreview,
  },
];

const ScreenshotCard = ({ index, title, image }) => {
  const handleClick = () => {
    window.open(image, "_blank");
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
      </div>
    </motion.div>
  );
};

const Screenshots = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Visuals</p>
        <h2 className={`${styles.sectionHeadText}`}>Screenshots.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Showcase of the Admin Dashboard and Mobile App interfaces.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {screenshots.map((screenshot, index) => (
          <ScreenshotCard
            key={`screenshot-${index}`}
            index={index}
            {...screenshot}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Screenshots, "screenshots");
