import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-4 bg-black-100/55 text-white text-center"
    >
      <p>© 2025 NatioID – All Rights Reserved</p>
      <p>Version: Demo v1.0 | Built with React, Vite & React Native</p>
      <p>
        <a href="mailto:abdulazeezadam09@gmail.com" className="hover:underline">
          abdulazeezadam09@gmail.com
        </a>
      </p>
    </motion.footer>
  );
};

export default Footer;
