// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";

// Experience Section Logo's
import infogainLogo from "./assets/company_logo/infogain_logo.png";
import isuLogo from "./assets/company_logo/isu_logo.png";
import hydoodleLogo from "./assets/company_logo/hydoodle_logo.png";

// Education Section Logo's
import bose_logo from "./assets/education_logo/bose_logo.png";
import bseLogo from "./assets/education_logo/bseodisha_logo.jpg";
import sctevtLogo from "./assets/education_logo/sctevt_logo.jpeg";
import vssutLogo from "./assets/education_logo/vssut_logo.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: infogainLogo,
    role: "Consultant Developer",
    company: "Infogain India Pvt Ltd",
    date: "December 2023 - Present",
    desc: "Developed dynamic and scalable web applications using Angular and React, handling the frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Axios",
    ],
  },
  {
    id: 1,
    img: isuLogo,
    role: "Software Engineer II",
    company: "iServeu Technologies Pvt Ltd",
    date: "July 2021 - December 2023",
    desc: "Contributed to innovative projects as a Software Engineer II, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Nodejs, Express, MongoDB, Bootstrap, and Angular. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "Angular",
      "Bootstrap",
      "Material UI",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
  {
    id: 2,
    img: hydoodleLogo,
    role: "Software Engineer",
    company: "Hydoodle Technologies Pvt Ltd.",
    date: "December 2019 - June 2021",
    desc: "Started working as a Frontend Developer Trainee using Angular-8, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages. And implemented lazy loading and code splitting to enhance application performance. Implemented authguard and routing for secure navigation within the application.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Angular",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: vssutLogo,
    school: "VSSUT, Burla (formerly UCE, Burla)",
    date: "Aug 2016 - July 2019",
    grade: "6.50 CGPA",
    desc: "I have completed my Bachelor's degree (BTech) in Computer Science and Engineering from VSSUT, Burla. During my time at VSSUT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at VSSUT has been instrumental in shaping my technical abilities and professional growth.",
    degree: "BTech in Computer Science and Engineering",
  },
  {
    id: 1,
    img: bose_logo,
    school: "Bhubanananda Orissa School of Engineering, Cuttack",
    date: "Apr 2012 - March 2015",
    grade: "70.21%",
    desc: "I completed my diploma from Bhubanananda Orissa School of Engineering, Cuttack, under the SCTE & VT, Odisha board, where my branch was Computer Science and Engineering. I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at College of Education and Technology allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Diploma in Computer Science and Engineering",
  },
  {
    id: 2,
    img: sctevtLogo,
    school: "College of Education and Technology, Bhubaneswar",
    date: "Sept 2009 - Aug 2011",
    grade: "82.50%",
    desc: "I completed my ITI certification in Information Technology & Electronics System Maintenance from College of Education and Technology, Bhubaneswar, under the SCTE & VT, Odisha board. Throughout my studies, I gained practical skills in computer hardware, software installation, networking, and basic electronics. This certification has provided me with a solid foundation in IT and electronics, enabling me to troubleshoot and maintain various systems effectively.",
    degree: "ITI (IT & ESM)",
  },
  {
    id: 3,
    img: bseLogo,
    school: "Balaram Kalaram High School, Cuttack",
    date: "Apr 2006 - March 2009",
    grade: "53.83%",
    desc: "I completed my class 10 education from Balaram Kalaram High School, Bhimrajpur, under the BSE, Odisha board, where I studied Science with Computer.",
    degree: "HSC(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 1,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 2,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 3,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 4,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 5,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 6,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 7,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
  {
    id: 8,
    isCompleted: false,
    title: "",
    description: "",
    image: "",
    tags: [""],
    github: "",
    webapp: "",
    status: "Work in Progress...",
    errDes: "Final Product is Coming Soon...",
  },
];
