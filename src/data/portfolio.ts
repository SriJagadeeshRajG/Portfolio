export type SkillLevel = 'Learning' | 'Comfortable' | 'Proficient';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  icon: 'layout' | 'server' | 'database' | 'code' | 'wrench' | 'git';
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  github: string;
  demo: string;
  status: 'Shipped' | 'In Progress';
  accent: 'copper' | 'sage';
}

export interface Cert {
  id: string;
  title: string;
  org: string;
  issued: string;
  orgInitial: string;
  accent: 'copper' | 'sage';
  url: string;
}

export const profile = {
  name: 'Sri Jagadeesh Raj G',

  role: 'Integrated M.Tech Software Engineering Student',

  university: 'VIT-AP University',

  graduation: '2028',

  location: 'Vellore, Tamil Nadu, India',

  email: 'jagadeesh200510@gmail.com',

  github: 'https://github.com/SriJagadeeshRajG',

  linkedin: 'https://www.linkedin.com/in/sri-jagadeesh-raj-g-7ab11a426',

  resumeUrl: 'https://drive.google.com/file/d/1mHxUYibFd40yl9y-zG3LtxyE67efQ2Il/view?usp=sharing',

  intro:
    "I'm an Integrated M.Tech Software Engineering student at VIT-AP University with a strong interest in building responsive, user-focused web applications. I enjoy transforming ideas into practical solutions using React, Node.js, Express.js, and MongoDB.",

  aboutShort:
    'Building practical full-stack web applications with clean design and modern technologies.',
};

export const about = {
  lead:
    "I'm currently pursuing an Integrated M.Tech in Software Engineering at VIT-AP University. I enjoy building responsive, user-focused web applications and continuously improving my full-stack development skills through hands-on projects. My goal is to become a software engineer who builds practical, scalable, and user-friendly applications.",

  pillars: [
    {
      title: 'Full-Stack Development',
      body:
        'I enjoy developing complete web applications using React, Node.js, Express.js, and MongoDB. Building both frontend and backend helps me understand how every part of an application works together.',
    },

    {
      title: 'Continuous Learning',
      body:
        'Technology evolves quickly, so I enjoy learning new tools, frameworks, and best practices through personal projects, coursework, and experimentation.',
    },

    {
      title: 'Problem Solving',
      body:
        'I like breaking complex problems into smaller, manageable tasks and building clean, practical solutions that provide a good user experience.',
    },
  ],

  timeline: [
    {
      year: '2023',
      title: 'Started My Programming Journey',
      body:
        'Started Software Engineering at VIT-AP University.',
    },

    {
      year: '2024',
      title: 'Learning Modern Web Development',
      body:
        'Learned HTML, CSS, JavaScript and React.',
    },

    {
      year: '2025',
      title: 'Building Full-Stack Applications',
      body:
        'Built Full-Stack applications using Node.js, Express.js and MongoDB.',
    },

    {
      year: 'Present',
      title: 'Preparing for Software Engineering Internships',
      body:
        'Preparing for Software Engineering internships by building practical projects.',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'HTML5', level: 'Proficient' },
      { name: 'CSS3', level: 'Proficient' },
      { name: 'JavaScript', level: 'Comfortable' },
      { name: 'TypeScript', level: 'Comfortable' },
      { name: 'React', level: 'Comfortable' },
      { name: 'Responsive Web Design', level: 'Proficient' },
    ],
  },

  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'Comfortable' },
      { name: 'Express.js', level: 'Comfortable' },
      { name: 'REST APIs', level: 'Comfortable' },
      { name: 'JWT Authentication', level: 'Comfortable' },
    ],
  },

  {
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MongoDB', level: 'Comfortable' },
    ],
  },

  {
    title: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'Java', level: 'Learning' },
    ],
  },

  {
    title: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'VS Code', level: 'Proficient' },
      { name: 'Thunder Client', level: 'Comfortable' },
      { name: 'Vercel', level: 'Comfortable' },
      { name: 'MongoDB Compass', level: 'Comfortable' },
    ],
  },

  {
    title: 'Version Control',
    icon: 'git',
    skills: [
      { name: 'Git', level: 'Comfortable' },
      { name: 'GitHub', level: 'Comfortable' },
    ],
  },
];
export const projects: Project[] = [
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    tagline: 'Full-Stack Expense Management Application',
    description:
      'A full-stack expense management application that enables users to securely track income and expenses, organize transactions by category, and monitor spending through a responsive dashboard. Built using React, Node.js, Express.js, MongoDB, and JWT Authentication.',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    metrics: [
      {
        label: 'Auth',
        value: 'JWT',
      },
      {
        label: 'Database',
        value: 'MongoDB',
      },
    ],
    github:
      'https://github.com/SriJagadeeshRajG/Expense-Tracker',
    demo:
      'https://expense-tracker-hwa6-zeta.vercel.app/',
    status: 'Shipped',
    accent: 'copper',
  },

  {
    id: 'weather-dashboard',
    name: 'Weather Dashboard',
    tagline: 'Real-Time Weather Forecast Application',
    description:
      'A responsive weather application that provides real-time weather conditions and a multi-day forecast using the OpenWeather API. Users can search for any city and view weather information through a clean, mobile-friendly interface.',
    stack: [
      'React',
      'JavaScript',
      'REST API',
      'CSS3',
    ],
    metrics: [
      {
        label: 'API',
        value: 'OpenWeather',
      },
      {
        label: 'Responsive',
        value: 'Yes',
      },
    ],
    github:
      'https://github.com/SriJagadeeshRajG/Weather_Dashboard',
    demo:
      'https://weather-dashboard-sigma-dun.vercel.app/',
    status: 'Shipped',
    accent: 'sage',
  },
];

export const education = {
  institution: 'VIT-AP University',
  degree: 'Integrated M.Tech — Software Engineering',
  period: '2023 — 2028',
  status: 'Pursuing · Expected graduation 2028',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Web Technologies',
    'Operating Systems',
    'Software Engineering Principles',
    'Computer Networks',
    'Design & Analysis of Algorithms',
  ],
};

export const certifications = [
  {
    id: "hcda",
    title: "Hedera Certified Developer Associate",
    org: "Hashgraph Association",
    issued: "Jul 2026",
    orgInitial: "H",
    accent: "copper",
    url: "https://drive.google.com/file/d/1NMd0UoqvGC0n5zUl__X4dXwxK5bbQH_G/view?usp=drive_link",
  },

  {
    id: "hcf",
    title: "Hedera Certified Foundation",
    org: "Hashgraph Association",
    issued: "Jul 2026",
    orgInitial: "H",
    accent: "sage",
    url: "https://drive.google.com/file/d/1ZoFyJKDyQT-mX14XeL1RPFBTvNUMn4op/view?usp=drive_link",
  },

  {
    id: "skillvedanth",
    title: "Full Stack Web Development With AI",
    org: "Skill Vedanth",
    issued: "Jun 2026",
    orgInitial: "SV",
    accent: "copper",
    url: "https://drive.google.com/file/d/19nfsFX_M9aqmVdKMGN3FNxNP5RNs3_T_/view?usp=drive_link",
  },

  {
    id: "guvi-hcl",
    title: "Future Ready Full Stack Developer Workshop",
    org: "GUVI × HCL",
    issued: "Jun 2026",
    orgInitial: "G",
    accent: "sage",
    url: "https://drive.google.com/file/d/1JeJA3d1X6Bi-X81QjNOdKgVJUt3Yf72_/view?usp=drive_link",
  },

  {
    id: "guvi-webinar",
    title: "Learning to Landing a Job – Full Stack Roadmap",
    org: "GUVI",
    issued: "Jul 2026",
    orgInitial: "G",
    accent: "copper",
    url: "https://drive.google.com/file/d/1YqYV10Gbs1ThhTKx5JuqsxdJkUyEltXz/view?usp=drive_link",
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navItems)[number]['id'];
