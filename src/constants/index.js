import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  pricewise,
  python,
  react,
  sass,
  snapgram,
  solidity,
  summiz,
  tailwindcss,
  threads,
  typescript,
  sql,
  django,
  githublight,
  linkedinlight,
} from "../assets/icons";

const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: solidity,
    name: "solidity",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  // {
  //   imageUrl: django,
  //   name: "Django",
  //   type: "Backend",
  // },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Data Base",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    iconUrl: githublight,
    link: "https://github.com/danilodev6",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedinlight,
    link: "https://www.linkedin.com/in/danilozabalet",
  },
];

const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Auction App",
    description:
      "Currently in working. React web app for auctioning items, featuring user authentication, item listing, and bidding functionality",
    link: "https://github.com/danilodev6/auction-app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "Movie Finder API",
    description:
      "React app fetching movie data from external APIm demonstrating API calls and dynamic rendering",
    link: "https://github.com/danilodev6/Movie-Finder",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "TicTacToePRO version",
    description:
      "React-based game featuring state management , game logic and a dynamic UI",
    link: "https://github.com/danilodev6/TicTacToePRO",
  },
  {
    iconUrl: estate,
    theme: "btn-back-blue",
    name: "Image-Phrase Fetching",
    description:
      "Fetching random images and phrases from an API, delivers a unique combination with every refresh. Built with React, it provides a simple yet engaging experience.",
    link: "https://github.com/danilodev6/Phrase-Image-Fetch",
  },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Connect Four Game",
  //   description:
  //     "a React-powered strategy game where two players compete to connect four pieces in a row. With a sleek interface and real-time updates, state management and game logic",
  //   link: "https://github.com/danilodev6/4inline",
  // },
  {
    iconUrl: car,
    theme: "btn-back-black",
    name: "Weather APP",
    description:
      "Vanilla JS weather app, fetching and displaying real-time weather data from an API and dynamic rendering",
    link: "https://github.com/danilodev6/weather-app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-yellow",
    name: "To-do List",
    description:
      "Basic to-do list application built with vanilla JS, IT demonstrate fundamental DOM manipulation, event handling, and local storage usage",
    link: "https://github.com/danilodev6/todo-list",
  },
];

export { skills, experiences, socialLinks, projects };
