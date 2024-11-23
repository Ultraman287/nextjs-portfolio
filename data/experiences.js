import youcademy from "@/assets/icons/yc.jpeg";
import climateDonor from "@/assets/icons/climateDonorLogo.ico";
import centroCommunity from "@/assets/icons/centroLogo.png";
import discearn from "@/assets/icons/discearnLogo.png";
import asemco from "@/assets/icons/asemcoLogo.svg";
import zayedUniversity from "@/assets/icons/zayedLogo.png";
import sandbox from "@/assets/icons/sandboxLogo.png";
import masason from "@/assets/icons/masasonLogo.png";
import minerva from "@/assets/icons/MinervaLogo1.png";
import solarBI from "@/assets/icons/solarBILogo.png";

export const experiences = [
  {
    role: "Founding Engineer",
    company: "YouCademy",
    companylogo: youcademy,
    date: "May 2024 – Present",
    descBullets: [,
      "Configured project infrastructure on Google Cloud Platform (GCP), utilizing Google Cloud Build and Cloud Run to containerize software for efficient deployment.",
      "Developed and integrated end-to-end features, including a flashcard system with a React frontend and a Django backend, leveraging an open spaced repetition algorithm.",
      "Implemented a notion-like writing editor using Blocknote.js, integrating the Blocknote-comments library for inline AI-generated comments on students' writing.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Climate Donor Inc.",
    companylogo: climateDonor,
    date: "Sep 2024 – Present",
    descBullets: [
      "Developed a crowdfund platform enabling technology providers to showcase climate change mitigation projects and attract individual and corporate donors.",
      "Reduced Firestore costs to the free tier by fixing React useEffect dependency errors affecting read operations throughout the codebase.",
      "Migrated the codebase from Next.js v10.2 to v14.2, improving compilation speed by 80% and enhancing modularity with Material UI integration.",
      "Implemented key features such as contextual login, real-time project updates, dynamic receipt generation via Stripe, and an admin dashboard with fuzzy search and detailed user modals.",
      "Optimized developer experience through documentation, modularized code structure, and process improvements.",
    ],
  },
  {
    role: "Junior Engineer",
    company: "Solar B.I.",
    companylogo: solarBI,
    date: "Oct 2024 – Present",
    descBullets: [
      "Maintained and enhanced Solar B.I.'s proprietary data collection platform, focusing on query optimization and web development hosted on an Amazon EC2 server.",
      "Resolved a major bug in a monthly report system by identifying poorly optimized SQL queries and reducing execution time by 90%.",
      "Streamlined Solcast API usage, reducing unnecessary calls and improving system efficiency through systematic logging and database updates.",
      "Updated and maintained Apache Airflow DAGs for daily and monthly data collection tasks.",
    ],
  },
  {
    role: "Fullstack Developer Volunteer",
    company: "Centro Community Partners",
    companylogo: centroCommunity,
    date: "Oct 2023 – Feb 2024",
    descBullets: [
      "Built an AI chatbot using Azure OpenAI and Langchain for real-time user interactions, integrating with Pinecone for efficient data storage and retrieval.",
      "Implemented Google OAuth-based user authentication for over 500 monthly active users, incorporating role-based access for different user types.",
    ],
  },
  {
    role: "Cofounder, Technical Lead",
    company: "Discearn",
    companylogo: discearn,
    date: "Jun 2023 – Apr 2024",
    descBullets: [
      "Directed a 9-member team in AI-focused technical development, creating an active learning tool during a Tokyo-based startup accelerator program.",
      "Published a web extension enabling summarization, chatbot communication, and quiz generation using the Plasmo framework, Langchain, and PineconeDB.",
      "Secured partnerships with two organizations, gaining over 600 users by incorporating user feedback into iterative development.",
      "Trained team members in Python, React, and RAG architecture, resulting in the delivery of five functional prototypes.",
    ],
  },
  {
    role: "Artificial Intelligence Lab Researcher",
    company: "The Masason Foundation & Minerva University",
    companylogo: masason,
    date: "Sep 2022 – May 2023",
    descBullets: [
      "Utilized NLP topic classification to automate grading by categorizing user-generated answers based on grading rubrics.",
      "Developed a Telegram bot using Python and OpenAI's Davinci model API for interactive quizzes and detailed explanations.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "ASEMCO",
    companylogo: asemco,
    date: "Sep 2022 – Dec 2022",
    descBullets: [
      "Developed a React Native application with a Python backend for therapy sessions, aiding individuals with Autism Spectrum Disorders.",
      "Reduced data collection time by 30% by integrating existing ABA applications and conducting technical training for therapists.",
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
      "Developed an automated GIF creation tool for YouTube videos using Google’s YouTube Data API and moviepy.",
      "Analyzed over 10,000 comments to generate a user interest heatmap, identifying key video traction points.",
    ],
  },
  {
    role: "Math Curricular Design Intern",
    company: "Minerva University",
    companylogo: minerva,
    date: "May 2022 – Jul 2022",
    descBullets: [
      "Revamped Linear Algebra and Single/Multivariable Calculus courses by developing autocheck libraries for student work validation.",
      "Enhanced learning materials with contextually accurate hints for common mistakes in student responses.",
    ],
  },
];
