import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { TbBrandRedux } from "react-icons/tb";
import EShopImage from "../assets/eshop.png";
import VirtualRImage from "../assets/virtualr.png";
import DashboardImage from "../assets/dashboard.png";
import BankImage from "../assets/bank.png";
import BabyImage from "../assets/baby.png";

export const navItems = [
  { label: "_hello", href: "/" },
  { label: "_strengths", href: "/skills" },
  { label: "_journeyMap", href: "/experience" },
  { label: "_showCase", href: "/projects" },
  { label: "_sayHello", href: "/contact" },
];

export const skills = [
  {
    id: 1,
    icon: IoLogoHtml5,
    name: "HTML",
    skillRange: 95,
  },
  {
    id: 2,
    name: "CSS",
    icon: FaCss3,
    skillRange: 90,
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: FaBootstrap,
    skillRange: 95,
  },
  {
    id: 4,
    name: "Tailwind",
    icon: RiTailwindCssFill,
    skillRange: 90,
  },
  {
    id: 5,
    name: "JavaScript",
    icon: IoLogoJavascript,
    skillRange: 90,
  },
  {
    id: 6,
    name: "React Js",
    icon: RiReactjsLine,
    skillRange: 85,
  },
  {
    id: 7,
    name: "Redux",
    icon: TbBrandRedux,
    skillRange: 85,
  },
  {
    id: 8,
    name: "Next Js",
    icon: SiNextdotjs,
    skillRange: 80,
  },
  {
    id: 9,
    name: "React Native",
    icon: TbBrandReactNative,
    skillRange: 85,
  },
  {
    id: 10,
    name: "Firebase",
    icon: IoLogoFirebase,
    skillRange: 70,
  },
];

export const stats = [
  {
    id: 1,
    statName: "Projects",
    statNumber: 50,
  },
  {
    id: 2,
    statName: "Commits",
    statNumber: 387,
  },
  {
    id: 3,
    statName: "Support Hours",
    statNumber: 24,
  },
];

export const socialAccounts = [
  {
    id: 1,
    icon: FaGithub,
    href: "https://github.com/hussnaincheema",
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hussnain-cheema/",
  },
  {
    id: 3,
    icon: FaFreeCodeCamp,
    href: "https://www.freecodecamp.org/Hussnain",
  },
  {
    id: 4,
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Hussnain_Cheema/",
  },
];

export const experiences = [
  {
    id: 1,
    heading: "REACT DEVELOPER",
    title: "University of Gujrat",
    icon: CiLocationOn,
    description: [
      "Gained a solid understanding of React.js principles and best practices during my coursework, enabling me to build interactive and responsive web applications.",
      "Participated in collaborative projects that involved using React.js for front-end development, enhancing my skills in component-based architecture and state management.",
      "Developed single-page applications (SPAs) utilizing React Router for navigation, improving user experience with dynamic routing.",
      "Engaged in hands-on practice by creating and deploying various React applications, reinforcing my knowledge of JSX, props, and lifecycle methods.",
      "Contributed to group projects that emphasized agile methodologies, allowing me to effectively communicate and collaborate with peers while using React.js.",
    ],
  },
  {
    id: 2,
    heading: "REACT NATIVE DEVELOPER",
    title: "Gaint Head, Gujrat",
    icon: CiLocationOn,
    description: [
      "Developed cross-platform mobile applications using React Native.",
      "Collaborated with a team of front-end and back-end developers to design and implement features, ensuring seamless integration with RESTful APIs.",
      "Implemented Redux for state management, improving application performance and maintainability.",
      "Worked closely with UI/UX designers to ensure a consistent and user-friendly mobile app interface.",
      "Developed new features in projects and implementing them as per requirements.",
    ],
  },
];

export const websiteDetail = [
  {
    id: 1,
    image: EShopImage,
    title: "EShop",
    desc: "This E-commerce App is a modern, fully responsive web application designed for a streamlined online shopping experience. Built with the latest web technologies, it features Redux for state management, enabling users to easily browse, search, and order products. The app facilitates a simple user flow for adding items to the cart and confirming orders while efficiently managing cart data and user information.",
    hint: ["JavaScript", "React", "Tailwind", "Responsive", "Vite", "Redux"],
    buttons: [
      {
        name: "Live Preview",
        link: "https://hussnain-eshop.netlify.app/",
      },
      {
        name: "Github Code",
        link: "https://github.com/hussnaincheema/Ecommerce-App-Reactjs-Tailwind",
      },
    ],
  },
  {
    id: 2,
    image: DashboardImage,
    title: "Admin Dashboard",
    desc: "This Admin Dashboard is a modern, fully responsive application designed for seamless and efficient data management and visualization. Built with React JS, Tailwind CSS, and enhanced animations from Framer Motion, it delivers a dynamic and engaging user experience. The dashboard provides a clean, intuitive interface that empowers admins to monitor key metrics, analyze trends through interactive graphs, and manage core functionalities with ease.",
    hint: ["JavaScript", "React", "Tailwind", "Responsive", "Vite"],
    buttons: [
      {
        name: "Live Preview",
        link: "https://hussnain-dashboard.netlify.app/",
      },
      {
        name: "Github Code",
        link: "https://github.com/hussnaincheema/Admin-Dashboard-Reactjs-Tailwind",
      },
    ],
  },
  {
    id: 3,
    image: VirtualRImage,
    title: "VirtualR",
    desc: "VirtualR is an immersive, fully responsive web application that brings virtual reality experiences to users via a sleek and modern interface. This project leverages cutting-edge web technologies to ensure an engaging and smooth user experience across different platforms. VirtualR is built with a primary focus on responsiveness, performance, and interactive UI components.",
    hint: ["JavaScript", "React", "Tailwind", "Responsive", "Vite"],
    buttons: [
      {
        name: "Live Preview",
        link: "https://virtuall-r.netlify.app/",
      },
      {
        name: "Github Code",
        link: "https://github.com/hussnaincheema/VirtualR-Reactjs-Tailwind",
      },
    ],
  },
  {
    id: 4,
    image: BankImage,
    title: "Online Banking",
    desc: "HooBank is a modern and responsive web application built with React JS and Vite, designed to provide users with a seamless online banking experience. The project utilizes a variety of tools and libraries to offer smooth navigation, dynamic animations, and intuitive functionality.",
    hint: ["JavaScript", "React", "Tailwind", "Responsive", "Vite"],
    buttons: [
      {
        name: "Live Preview",
        link: "https://onlinebank-app.netlify.app/",
      },
      {
        name: "Github Code",
        link: "https://github.com/hussnaincheema/BankApp-Reactjs-tailwind",
      },
    ],
  },
];

export const appDetail = [
  {
    id: 1,
    image: BabyImage,
    title: "Baby",
    desc: "The Baby Health Care Application is a mobile app designed to assist parents in monitoring their baby's health and development The application offers a variety of features to help parents keep track of their baby's well-being, including health tracking, growth tracking, developmental milestones, appointment scheduling, and resources. One of the key features of the app is health tracking, which allows parents to log their baby's feedings, sleep patterns, and medications.",
    hint: ["React Native", "Redux Saga", "IOS", "Android"],
    buttons: [
      {
        name: "Github Code",
        link: "https://github.com/hussnaincheema/BankApp-Reactjs-tailwind",
      },
    ],
  },
];
