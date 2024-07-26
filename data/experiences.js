import youcademy from "@/assets/icons/yc.jpeg";
import climateDonor from "@/assets/icons/climateDonorLogo.ico";
import centroCommunity from "@/assets/icons/centroLogo.png";
import discearn from "@/assets/icons/discearnLogo.png";
import asemco from "@/assets/icons/asemcoLogo.svg";
import zayedUniversity from "@/assets/icons/zayedLogo.png";
import sandbox from "@/assets/icons/sandboxLogo.png";
import masason from "@/assets/icons/masasonLogo.png";
import minerva from "@/assets/icons/MinervaLogo1.png";

export const experiences = [
  {
    role: "Founding Engineer",
    company: "YouCademy",
    companylogo: youcademy,
    date: "May 2024 – Present",
    descBullets: [
      "Led the technical development of YouCademy, an innovative ed-tech startup focused on hyper-personalized lesson materials and real-time insights for teachers.",
      "Configured project infrastructure on Google Cloud Platform (GCP), utilizing Google Cloud Build and Cloud Run to containerize software for efficient deployment.",
      "Developed and integrated end-to-end features, including a flashcard system with a React frontend and a Django backend, leveraging an open spaced repetition algorithm.",
      "Implemented a notion-like writing editor using Blocknote.js, integrating the Blocknote-comments library for inline AI-generated comments on students' writing.",
    ],
  },
  {
    role: "Engineering Manager",
    company: "Climate Donor Inc.",
    companylogo: climateDonor,
    date: "May 2024 – Present",
    descBullets: [
      "Led a team of 6 volunteers in enhancing the Climate Donor website, a platform enabling technology providers to showcase climate change mitigation projects and attract individual and corporate donors.",
      "Collaborated with the Project Manager to define technical milestones, delegate tasks to developers and designers, and ensure adherence to project timelines.",
      "Established the technical environment, including Vercel deployment, Firebase integration, and Stripe payment gateway, while ensuring proper documentation and knowledge transfer.",
      "Conducted regular technical reviews, addressing issues such as tech debt, and facilitated feedback sessions with the client and team mentor to align the product roadmap with organizational goals.",
      "Implemented key features, including Project Owner and Donor Page enhancements, a new Corporate Partner Page, and Admin Dashboard improvements, leveraging technologies like React, Node.js, and MongoDB.",
    ],
  },
  {
    role: "Fullstack Developer Volunteer",
    company: "Centro Community Partners",
    companylogo: centroCommunity,
    date: "Oct 2023 – Feb 2024",
    descBullets: [
      "Implemented key features in the CentroAI web application, including AI chatbot integration using Azure OpenAI service and Langchain, and user authentication via Google OAuth with PassportJS.",
    ],
  },
  {
    role: "Cofounder, Technical Lead",
    company: "Discearn",
    companylogo: discearn,
    date: "Jun 2023 – Present",
    descBullets: [
      "Directed a 9-member team in AI-focused technical development at Discearn during a startup accelerator program in Tokyo in partnership with DEEPCORE and Masason Foundation.",
      "Conducted 20 in-depth user interviews to fine-tune App features, UI, and UX.",
      "Published a web extension that allows summarization, communication with a chatbot, and quiz generation with automated feedback across the internet using the Plasmo framework, Langchain, and PineconeDB.",
      "Collaborating with Minerva University to create a custom version of our extension for over 600 students.",
    ],
  },
  {
    role: "Artificial Intelligence Lab Researcher",
    company: "The Masason Foundation & Minerva University",
    companylogo: masason,
    date: "Sep 2022 – May 2023",
    descBullets: [
      "Used NLP topic classification to categorize user-generated answers based on grading rubrics to automate grading.",
      "Developed a Telegram bot using Python with OpenAI's Davinci model API to enhance user engagement through interactive multiple-choice quizzes and explanations.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "ASEMCO",
    companylogo: asemco,
    date: "Sep 2022 – Dec 2022",
    descBullets: [
      "Created a React Native application based on Figma mockups with a Python backend for therapy sessions to help the education and comprehensive assistance of people with Autism Spectrum Disorders.",
      "Organized and conducted technical training sessions for five therapists to integrate existing ABA applications, reducing time required to collect data by 30%.",
    ],
  },
  {
    role: "Teaching Assistant - Statistical Intuitions, Applied Algorithmic Thinking",
    company: "Zayed University",
    companylogo: zayedUniversity,
    date: "Sep 2021 – Apr 2022",
    descBullets: [
      "Organized weekly problem-solving sessions for over 100 students in Statistics and Data Structures & Algorithms.",
    ],
  },
  {
    role: "Research and Development Intern, Comment Analysis Team Lead",
    company: "Sandbox Networks, Inc.",
    companylogo: sandbox,
    date: "Sep 2021 – Dec 2021",
    descBullets: [
      "Being a part of the Research and Development team at Sandbox, I was Team Lead for the video analysis group.",
      "Created a program that used Google's Youtube Data API to parse through comments for any given video and extracted the timestamps from the comments, identifying traction points in the video.",
      "Developed a tool to automatically create GIFs from high-traction video portions using moviepy.",
      "Investigated machine learning algorithms for Youtube thumbnails to identify key areas for generating more impressions.",
    ],
  },
  {
    role: "AI Lab Intern",
    company: "Masason Foundation",
    companylogo: masason,
    date: "Sep 2022 – Present",
    descBullets: [
      "Researching and developing an automated grading system with formative feedback using prompt engineering with the BLOOM large language model.",
    ],
  },
  {
    role: "Math Curricular Design Intern",
    company: "Minerva University",
    companylogo: minerva,
    date: "May 2022 – Jul 2022 ",
    descBullets: [
      "Worked with Minerva’s Math department to revamp the Linear Algebra and Single & Multivariable Calculus courses.",
      "Implemented and helped update an autocheck library with python to make notebooks where students could confirm their answers in a code workbook and get contextually correct hints for different types of mistakes.",
    ],
  },
];
