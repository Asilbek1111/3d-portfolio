import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mars,
  ittime,
  innobek,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Tailwindjs Developer",
    icon: mobile,
  },
  {
    title: "Nextjs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Innobek",
    icon: innobek,
    iconBg: "#383E56",
    date: "Nov 2022 - Apr 2023",
    points: [
      "It was really exciting to work in Innobek with supporting and friendly coding team.",
      "Thanks to the correct enviroment, I was able to discover myself as a completely another level of a",
      "programmer. In the spheres of building interactive, functional and user-friendly designs, working with",
      "huge amount of APIs, using libraries like i18n I was able to experience huge problems and solutions to them",
    ],
  },
  {
    title: "Frontend Developer && Mentor",
    company_name: "Mars IT",
    icon: mars,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      " There I enhanced my soft skills like:How to communicate with your colleagues, how to teach a person the programming",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      " How to solve different problems",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Mentor && Frontend Developer",
    company_name: "IT Time Academy",
    icon: ittime,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bobo-Market",
    description:
      "Web-based platform that allows users to buy various types of goods.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://bobo-market.uz/",
  },
  {
    name: "Wogme",
    description:
      "Web application that enables users to search for game machines, VRs and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://wogme.com/",
  },
  {
    name: "Mushtoqko'zlar",
    description:
      "A website for orphanage, with various contend about the buiding and to give solutions to problems .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://mushtoqkozlar.uz/",
  },
];

export { services, technologies, experiences, testimonials, projects };
