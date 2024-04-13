import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import onlygamesImg from "@/public/OnlygamersImage.png";
import creativeImg from "@/public/CreativeSquadIMG.png";
import SocailMediaImg from "@/public/SocailMediaImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web development bootcamp",
    location: "Udemy",
    description:
    "I embarked on my journey into web development, mastering HTML, CSS, JavaScript, and delving into React for dynamic front-end experiences.",
        icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Ontario, Canada",
    description:
    "I worked as a front-end developer for six months, crafting numerous pages and UI components based on designs from Figma and Adobe XD.",
      icon: React.createElement(CgWorkAlt),
    date: "01/2023 - 06/2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Osloa, Norway",
    description:
      "I began my role as a Fullstack engineer at a startup, designing the database/schema with Amplify AWS as the backend, implementing React for the frontend, and styling with Tailwind CSS.",
    icon: React.createElement(FaReact),
    date: "01/2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "OnlyGamers",
    description:
      "Worked as a full-stack developer on this startup project for 5 months. It is social media type of application where users can subscribe for content creation and make their profile.",
    tags: ["React", "AWS", "DynamoDB", "Graphql","Tailwind", "Redux"],
    imageUrl: onlygamesImg,
  },
  {
    title: "Creative Squad",
    description:
      "Worked as front-end developer for Creative Squad, a digital marketing company.Build several pages and UI components like footer and header",
    tags: ["React", "Bootstrap", "Redux","SwiperJs"],
    imageUrl: creativeImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for storing accounts. It shows socail media accounts so you dont have to remember passwords also you can acces all accounts in one place.",
    tags: ["React", "SQL", "Tailwind", "Framer"],
    imageUrl: SocailMediaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap5",
  "DynamoDB",
  "Redux",
  "GraphQL",
  "Framer Motion",
] as const;
