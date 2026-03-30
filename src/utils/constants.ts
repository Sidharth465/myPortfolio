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
  hsgLogo,
  hsgLogo_white,
} from "@assets/index";

export const Strings: StringsType = {
  HomePara: `I’m Siddharth Verma, a full-stack developer with 2+ years of experience building scalable web and mobile applications. I specialize in React, React Native, Node.js, and PostgreSQL, with hands-on experience from internships and roles at Xotiv Technologies, Tab Health, BetterWay, and more. I’ve developed 10+ projects across healthcare, inventory, and admin management—delivering high-performance, user-friendly solutions. Always eager to learn and build, I turn ideas into impactful digital products.

`,

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
      company: "Healthsetgo Education",
      location: "Sec-56, Gurugram, India",
      position: "SDE-1 (React-Native)",
      duration: "Aug 2025 - Current",
      image: hsgLogo_white,
      tech_stack: [
        "React",
        "React-Native",
        "TypeScript",
        "Android",
        "AWS",
        "REST APIs",
        "Git",
      ],
      projects: [
        {
          name: "Mobile App Revamp",
          description:
            "Spearheading the architectural refactoring and performance optimization of the flagship React Native application. Migrating the codebase to a modular, component-driven structure to enhance scalability and developer velocity for the next-generation release.",
        },
        {
          name: "Web Platform Development",
          description:
            "Architecting reusable frontend modules and leading refactoring efforts to decouple legacy code. Focused on improving system maintainability and streamlining the integration of complex new features through a modular UI approach.",
        },
      ],
    },
    {
      company: "Xotiv Technologies",
      location: "Noida, U.P, India",
      position: "SDE-1",
      duration: "May 2025 - Aug 2025",
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
            "Orchestrated the end-to-end development of high-performance web and mobile applications. Built robust backend APIs and managed PostgreSQL schemas while ensuring seamless synchronization with responsive frontend interfaces.",
        },
        {
          name: "Cloud & Backend Logic",
          description:
            "Engineered scalable RESTful services and optimized database queries for improved response times. Integrated AWS S3 for automated cloud storage and media management across the platform.",
        },
      ],
    },
    {
      company: "Tap Health Pvt. Ltd.",
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
            "Collaborated within a cross-functional team to build core modules for patient-centric digital solutions. Contributed to the full feature lifecycle, ensuring high-quality code delivery in a fast-paced healthcare tech environment.",
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
          name: "Consumer Applications",
          description:
            "Executed the frontend design of web and mobile interfaces using ShopifyRestyle, facilitating a seamless user journey for clinic appointments and health record accessibility.",
        },
        {
          name: "Clinic Management App",
          description:
            "Collaborated within a cross-functional team to build a specialized internal tool that reduced prescription filling time by 90%. Streamlined workflows for appointment tracking and patient progress documentation.",
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
          name: "Grocizy Super Admin",
          description:
            "Implemented advanced filtering and search algorithms within the admin ecosystem, significantly improving operational efficiency for a team of 25+ staff members.",
        },
        {
          name: "Delivery Management System",
          description:
            "Designed a real-time order management interface, optimizing the logistics workflow and ensuring accurate database synchronization for delivery records.",
        },
      ],
    },
  ],

  // Separate projects data for future projects section
  projectsData: [
    {
      id: 0,
      name: "myHealth",
      company: "HealthSetGo Education",
      duration: "Aug 2025 - current",
      description:
        "Developed a 360° holistic wellness platform that enables parents to track children's health reports, receive AI-driven smart recommendations, and access a digital health card. The application focuses on early intervention and monitoring growth parameters for students across India.",
      tech_stack: ["React-Native", "TypeScript", "AWS"],
      image: hsgLogo_white,
      category: "Health & Fitness",
      appStore:
        "https://apps.apple.com/in/app/myhealth-by-healthsetgo/id1526490102",
      playStore:
        "https://play.google.com/store/apps/details?id=com.hsg.health.android",
      highlights: [
        "Real-time health report tracking from school-based medical screenings.",
        "Integrated 'HealthSetGo Health Card' providing exclusive benefits from health partners.",
        "AI-driven smart recommendations based on pediatric growth parameters.",
        "Direct 'Speak to Health Expert' communication channel for parental support.",
        "Automated tracking for BMI, growth milestones, and historical medical data.",
      ],
    },
    {
      id: 1,
      name: "Tap Health App",
      company: "Tab Health Pvt. Ltd.",
      duration: "Nov 2024 - Apr 2025",
      description:
        "Collaborated on a modern healthcare ecosystem, contributing to the development of patient-care modules and medical consultation services. Focused on high-performance UI and secure data synchronization.",
      tech_stack: [
        "React-Native",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
      ],
      image: TapHealth,
      category: "Healthcare",
      appStore:
        "https://apps.apple.com/in/app/tap-health-health-assistant/id6478812140",
      playStore:
        "https://play.google.com/store/apps/details?id=com.taphealthapp&hl=en_IN&pli=1",
      highlights: [
        "Modern healthcare platform for Diabetic patient",
        "Diabetic Care module featuring real-time Blood Glucose logging and automated trend visualization.",
        "Nutritional engine for tracking daily caloric intake and macronutrients, tailored for diabetic dietary management.",
        "Secure patient information",
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
      appStore: "https://apps.apple.com/in/app/betterway/id6502288128",
      playStore:
        "https://play.google.com/store/apps/details?id=com.betterway.user.app&hl=en_IN",
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
