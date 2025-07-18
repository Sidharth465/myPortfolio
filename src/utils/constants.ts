import {
  AndroidStudio,
  betterway,
  CssIcon,
  Git,
  HtmlIcon,
  JsIcon,
  NodejsIcon,
  PostgreIcon,
  ReactIcon,
  Typescript,
  Xcode,
  ExpressIcon,
  ReduxIcon,
  GrocizyIcon,
  TapHealth,
  XotivLog,
  richaco,
  rytclick,
} from "@assets/index";

export const Strings: StringsType = {
  HomePara: `I’m Siddharth Verma, a full-stack developer with 2+ years of experience building scalable web and mobile applications. I specialize in React, React Native, Node.js, and PostgreSQL, with hands-on experience from internships and roles at Xotiv Technologies, Tab Health, BetterWay, and more. I’ve developed 10+ projects across healthcare, inventory, and admin management—delivering high-performance, user-friendly solutions. Always eager to learn and build, I turn ideas into impactful digital products.

`,

  experieceData: [
    {
      id: 0,
      title: "SDE-1",
      Company: "Xotiv Technologies",
      location: "Noida, U.P, India",
      timeSpan: "May 2025 - Current ",
      duration: "",
      type: "On-Site",
      image: XotivLog,
    },

    {
      id: 1,
      title: "SDE Intern",
      Company: "Tab Health Pvt. Ltd.",
      location: "Gurugram, Haryana, India",
      timeSpan: "Nov 2024 - Apr 2025 ",
      duration: "",
      type: "On-Site",
      image: TapHealth,
    },

    {
      id: 4,
      title: "React Native Intern",
      Company: "BetterWay",
      location: "Gurugram, Haryana, India",
      timeSpan: "Feb 2024 - Aug 2024 ",
      duration: "7 months",
      type: "On-Site",
      image: betterway,
    },
    {
      id: 5,
      title: "Frontend Developer Intern",
      Company: "Avsars Technologies Pvt. Ltd.",
      location: "Uttar Pradesh, India",
      timeSpan: "Aug 2023 - Feb 2024",
      duration: "7 months",
      type: "Remote",
      image: GrocizyIcon,
    },
  ],
  personalDetail: {
    name: "Siddharth Verma",
    contact: "8744098062",
    mailId: "siddharthverma465@gmail.com",
    address: "Delhi",
    college: "Guru Gobind Singh Indraprastha University",
    course: "B-Tech, Computer Science Engineering (Completed)",
    session: "2021-2025",
    experience: "2",
    totalProject: "10",
  },
  skillData: [
    { id: 1, title: "React", imageUrl: ReactIcon },
    { id: 2, title: "React-Native", imageUrl: ReactIcon },
    { id: 3, title: "Android Studio", imageUrl: AndroidStudio },
    { id: 4, title: "XCode", imageUrl: Xcode },
    { id: 5, title: "TypeScript", imageUrl: Typescript },
    { id: 6, title: "JavaScript", imageUrl: JsIcon },
    { id: 7, title: "Redux", imageUrl: ReduxIcon },
    { id: 8, title: "Git", imageUrl: Git },
    { id: 9, title: "HTML", imageUrl: HtmlIcon },
    { id: 10, title: "CSS", imageUrl: CssIcon },
    { id: 11, title: "PostgreSQL", imageUrl: PostgreIcon },
    { id: 12, title: "Node.js", imageUrl: NodejsIcon },
    { id: 13, title: "Express.js", imageUrl: ExpressIcon },
  ],
  githubLink: "https://github.com/Sidharth465",
  linkedInLink: "https://www.linkedin.com/in/siddharth-verma-b323b1175/",
  instagramLink: "https://www.instagram.com/siddharthverma465/",

  work: [
    {
      company: "Xotiv Technologies",
      location: "Noida, U.P, India",
      position: "SDE-1",
      duration: "May 2025 - Current",
      image: XotivLog,
      tech_stack: [
        "React",
        "React-Native",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "AWS",
        "REST APIs",
        "Git",
      ],
      projects: [
        {
          name: "Full-Stack Development",
          description:
            "Working on cutting-edge web and mobile applications with full-stack responsibilities. Developing robust backend APIs using Node.js and Express.js, managing PostgreSQL databases, and building responsive frontend interfaces with React and React Native.",
        },
        {
          name: "Backend Development",
          description:
            "Designing and implementing scalable backend solutions, RESTful APIs, database optimization, and cloud infrastructure management using AWS services.",
        },
      ],
    },
    {
      company: "Tab Health Pvt. Ltd.",
      location: "Gurugram, Haryana, India",
      position: "SDE Intern",
      duration: "Nov 2024 - Apr 2025",
      image: TapHealth,
      tech_stack: [
        "React",
        "React-Native",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      projects: [
        {
          name: "Healthcare Applications",
          description:
            "Developed healthcare-focused applications and contributed to improving patient care through innovative digital solutions.",
        },
      ],
    },
    {
      company: "BetterWay",
      location: "Gurugram",
      position: "Frontend Intern",
      duration: "Feb 2024 - Aug 2024",
      image: betterway,
      tech_stack: [
        "React-Native",
        "Node.js",
        "Expo",
        "AWS S3",
        "Postgres SQL",
        "Jest",
        "Retool",
        "JavaScript",
      ],
      projects: [
        {
          name: "BetterWay Web and Mobile App",
          description:
            "Contributed to the design and development of the BetterWay web and mobile app using React Native and ShopifyRestyle, providing a user-friendly interface for clinic appointments and health information access. (Credit: Developed as part of my role at BetterWay)",
        },
        {
          name: "Clinic App",
          description:
            "Developed the Clinic App, leading to a 90% reduction in prescription filling time. Implemented features for appointment tracking, prescription management, and patient progress documentation. (Credit: Developed as part of my role at BetterWay)",
        },
      ],
    },
    {
      company: "AVSARS TECHNOLOGIES",
      location: "Gorakhpur U.P",
      position: "Software Developer Intern",
      duration: "Aug 2023 - Feb 2024",
      image: GrocizyIcon,
      tech_stack: ["React-Native"],
      projects: [
        {
          name: "Grocizy Super Admin App",
          description:
            "Engineered the Grocery Super Admin app, integrating advanced filtering and search functionalities to enhance user navigation. The platform is now utilized by over 25 staff members to improve operational efficiency. (Credit: Developed as part of my role at AVSARS TECHNOLOGIES)",
        },
        {
          name: "Grocizy Delivery Admin App",
          description:
            "Designed and implemented a streamlined order delivery management system, optimizing the delivery process and updating records in the database. (Credit: Developed as part of my role at AVSARS TECHNOLOGIES)",
        },
      ],
    },
  ],

  // Separate projects data for future projects section
  projectsData: [
    {
      id: 1,
      name: "Tap Health App",
      company: "Tab Health Pvt. Ltd.",
      duration: "Nov 2024 - Apr 2025",
      description:
        "Developed a comprehensive healthcare application focusing on patient care and medical consultation services. Built a modern healthcare platform with user-friendly interface and robust backend systems.",
      tech_stack: [
        "React-Native",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
      ],
      image: TapHealth,
      category: "Healthcare",
      link: "https://apps.apple.com/in/app/tap-health-health-assistant/id6478812140",
      highlights: [
        "Patient management system",
        "Medical consultation features",
        "Healthcare data management",
        "Secure patient information",
        "Modern healthcare platform",
      ],
    },
    {
      id: 2,
      name: "BetterWay App",
      company: "BetterWay",
      duration: "Feb 2024 - Aug 2024",
      description:
        "Contributed to the design and development of the BetterWay web and mobile app using React Native and ShopifyRestyle, providing a user-friendly interface for clinic appointments and health information access.",
      tech_stack: [
        "React-Native",
        "Node.js",
        "Expo",
        "AWS S3",
        "PostgreSQL",
        "Jest",
        "Retool",
        "JavaScript",
      ],
      image: betterway,
      category: "Healthcare",
      link: "https://apps.apple.com/in/app/betterway/id6502288128",
      highlights: [
        "Clinic appointment booking",
        "Health information access",
        "User-friendly interface",
        "ShopifyRestyle integration",
        "AWS S3 integration",
      ],
    },
    {
      id: 3,
      name: "Aalsi.co",
      company: "Client Project",
      duration: "2024",
      description:
        "Designed and developed a modern website using React and Tailwind CSS. The website is professionally hosted with a custom domain and features responsive design with modern UI/UX principles.",
      tech_stack: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Vite",
        "Domain Hosting",
      ],
      image: ReactIcon,
      category: "Web Development",
      link: "https://aalsi.co",
      highlights: [
        "Modern responsive design",
        "Custom domain hosting",
        "Tailwind CSS styling",
        "Professional deployment",
        "SEO optimized",
      ],
    },
    {
      id: 4,
      name: "Clinic App",
      company: "BetterWay",
      duration: "Feb 2024 - Aug 2024",
      description:
        "Developed the Clinic App, leading to a 90% reduction in prescription filling time. Implemented features for appointment tracking, prescription management, and patient progress documentation.",
      tech_stack: ["React-Native", "Node.js", "PostgreSQL", "JavaScript"],
      image: betterway,
      category: "Healthcare",
      highlights: [
        "90% reduction in prescription filling time",
        "Appointment tracking system",
        "Prescription management",
        "Patient progress documentation",
        "Internal organizational app",
      ],
    },
    {
      id: 5,
      name: "Gims Mobile/Tablet App",
      company: "Richaco Exports",
      duration: "Dec 2024 - Jan 2025",
      description:
        "Designed and developed an enterprise application for complaint resolution, staff and machine management, and product quality inspection. Internal organizational app for enterprise operations.",
      tech_stack: ["React", "React-Native", "TypeScript", "React Native CLI"],
      image: richaco,
      category: "Enterprise",
      highlights: [
        "Complaint resolution system",
        "Staff and machine management",
        "Product quality inspection",
        "Enterprise-grade security",
        "Internal organizational app",
      ],
    },
    {
      id: 6,
      name: "Gims Inventory App",
      company: "Richaco Exports",
      duration: "Dec 2024 - Jan 2025",
      description:
        "Developed an inventory management app to streamline asset tracking and improve operational efficiency. Internal organizational app for inventory management.",
      tech_stack: ["React", "React-Native", "TypeScript", "React Native CLI"],
      image: richaco,
      category: "Inventory Management",
      highlights: [
        "Asset tracking system",
        "Operational efficiency",
        "Real-time inventory updates",
        "Barcode scanning integration",
        "Internal organizational app",
      ],
    },
    {
      id: 7,
      name: "Harmony & Harmony Pro App",
      company: "Ryt Click",
      duration: "Aug 2024 - Nov 2024",
      description:
        "Developed a mental health consultation app utilizing Agora for seamless video-calling and OAuth for secure authentication, allowing users to book and conduct private video consultations.",
      tech_stack: [
        "React-Native",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "Agora",
        "OAuth",
      ],
      image: rytclick,
      category: "Healthcare",
      highlights: [
        "Video consultation platform",
        "OAuth authentication",
        "Mental health focus",
        "Secure communication",
      ],
    },
  ],
};
