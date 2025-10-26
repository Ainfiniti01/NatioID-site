
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
} from '../assets'
import { FaHtml5, FaJs, FaAws, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "demo",
    title: "Demo",
  },
  {
    id: "features",
    title: "Fearures",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: <FaHtml5 size={40} />,
  // },

  // {
  //   name: "JavaScript",
  //   icon: <FaJs size={40} />,
  // },
  // {
  //   name: "Express Js",
  //   icon: <SiExpress size={40} />,
  // },
  // {
  //   name: "AWS",
  //   icon: <FaAws size={40} />,
  // },
  // {
  //   name: "MySql",
  //   icon: <SiMysql size={40} />,
  // },

  // {
  //   name: "git",
  //   icon: <FaGitAlt size={40} />,
  // },

];

const projects = [
  {
    name: "Tekisky Mart",
    description:
      "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
