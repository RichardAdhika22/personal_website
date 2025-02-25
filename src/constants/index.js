import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    badminton,
    airplane,
    manga,
    euler,
    indonesia,
    malaysia,
    thailand,
    singapore,
    phillipines,
    canada,
    china,
    taiwan,
    peru,
    mexico,
    naruto,
    one_piece,
    demon_slayer,
    black_clover,
    bleach,
    hxh,
    aot,
    tokyo_ghoul,
    opm,
    ubc,
    morie,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const hobbies = [
    {
      title: "Badminton",
      icon: badminton,
      description: [
        "Played competitively in Indonesia during high school, repsenting my school and club.", 
        "Got first place on men's single category at my school.",
        "Now I'm just playing for fun!",
        "Favourite player: Lin Dan.",
      ]
    },
    {
      title: "Travelling",
      icon: airplane,
      description: [
        { text: "Indonesia (home)", image: indonesia },
        { text: "Malaysia", image: malaysia },
        { text: "Singapore", image: singapore },
        { text: "Thailand", image: thailand },
        { text: "Phillipines", image: phillipines },
        { text: "Canada (university)", image: canada },
        { text: "China", image: china },
        { text: "Peru", image: peru },
        { text: "Taiwan", image: taiwan },
        { text: "Mexico", image: mexico },
      ],
    },
    {
      title: "Manga",
      icon: manga,
      description: [
        { text: "Naruto", image: naruto },
        { text: "One Piece", image: one_piece },
        { text: "Black Clover", image: black_clover },
        { text: "Demon Slayer", image: demon_slayer },  
        { text: "Bleach", image: bleach },
        { text: "Hunter x Hunter", image: hxh },
        { text: "Attack on Titan", image: aot },
        { text: "Tokyo Ghoul", image: tokyo_ghoul },
        { text: "One-punch Man", image: opm },
      ],
    },
    {
      title: "Project Euler",
      icon: euler,
      description: [
        "A collection of challenging math problems that requires, guess what, programming!",
        "Solved 52 questions so far.",
        "Just recently started and it is addicting, will grind on it if I have free time.",
        "Try it yourself! Link: https://projecteuler.net/",
      ],
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Teaching Assistant",
      company_name: "UBC Dept. of Computer Science",
      icon: ubc,
      iconBg: "#383E56",
      date: "May - Jun 2023, July 2024 - April 2025",
      points: [
        "Taught CPSC 121: Physical and Mathematical Structure of Computation.",
        "Assessed and troubleshoot logic circuit (both physical and software) and problems brought by students and staff.",
        "Hosted office hours to help 30+ students have a better understanding of the course material.",
        "Achieved 90% favourable rating on average from students’ end-of-term feedback."
      ],
    },
    {
      title: "Undergraduate Mathematics Researcher",
      company_name: "UBC Dept. of Mathematics",
      icon: ubc,
      iconBg: "#383E56",
      date: "Sept 2023 - April 2024",
      points: [
        "Taught MATH 100: Differential Calculus and MATH 101: Integral Calculus.",
        "Facilitated small classes, for a total of 200 students by encouraging active math discussion among the groups, explaining various calculus concepts, and giving a proper mathematical guidance to students.",
        "Graded written assignments."
      ],
    },
    {
      title: "Mathematics Teaching Assistant",
      company_name: "UBC Dept. of Mathematics",
      icon: ubc,
      iconBg: "#383E56",
      date: "May 2024 - August 2024",
      points: [
        "Worked with 1 undergrad student and a supervisor (M. Pramanik) regarding Arithmetic Combinatorics",
        "Adapted numerous proofs from research papers to expand on current theorems regarding the topic.",
        "Proved that any k-syndetic set with upper logarithmic density equals one contains an affine copy of  eventually increasing polynomial progression.",
        "Succesfully wrote an 8-page paper on the result, generalizing the case of geometric/arithmetic progression"
      ],
    },
    {
      title: "High School Tutor",
      company_name: "Morie Education Centre",
      icon: morie,
      iconBg: "#383E56",
      date: "Dec 2020 - July 2021",
      points: [
        "Tutored mathematics and physics to approximately 10 middle and high school students by using appropriate communication approaches and providing routine practices.",  
        "Increased student average STEM grades to roughly 85%."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { hobbies, technologies, experiences, testimonials, projects };