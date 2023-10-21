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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    
    meta,
    starbucks,
    tesla,
    shopify,
    
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets/newimg";
  
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
      title: "Root Canal Treatement",
      icon: web,
    },
    {
      title: "Digital Radiography",
      icon: mobile,
    },
    {
      title: "Dental Cleanings",
      icon: backend,
    },
    {
      title: "Filings and Complete Dentures",
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
      title: "Holy Cross Convent School",
      company_name: "School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "passed out - 2016",
      points: [
        "Attended and completed my schooling at Holy Cross Convent School in Mira Road.",
      ],
    },
    {
      title: ": Jai Hind College",
      company_name: "junior college",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "passed out- 2018",
      points: [
        "completed my junior college in science stream at Jai Hind College ,Churchgate ",
      ],
    },{
      title: "Dy Patil School of Dentistry",
      company_name: "bachelor's in Dental Surgery",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2018 - Present",
      points: [
        "Studying and practicing Dentistry in Nerul",
      ],
    },{
      title: "Extra-Curricular Activity",
      company_name: "Dy Patil School of Dentistry",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2018 - Present",
      points: [
        "Organiser for field visit in St.Thomas Church, panvel.",
        "Member of Student Council as Hospitality Head.",
        "Participated in science seminars and workshops in school.",
        "Participated in various cultural competitions.",
        "Participated in school sports meets.",
      ],
    },{
      title: "INTERNSHIP",
      company_name: "Dy Patil School of Dentistry",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2018 - Present",
      points: [
        "Conducted IDA Camp For Cancer Awareness",
        "Involved various types of cases which included:",
 "Root canal treatment and Digital Radiography",
 "Dental cleanings",
 "Composites, Amalgam Restorative fillings and Complete Dentures.",

 "Fixed Partial dentures",
 "Oral Prophylaxis",
 "Impaction,surgical extractions.", 

      ],
    },
    
    {
      title: "Dentist",
      company_name: "Radhika Dental Polyclinic",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "| October 2023 - June 2023",
      points: [
        "Currently working at a private dental clinic in Mira Road.",
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
  
  export { services, technologies, experiences, testimonials, projects };