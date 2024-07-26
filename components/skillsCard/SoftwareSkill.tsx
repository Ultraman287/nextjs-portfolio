import React from "react";
import "./SoftwareSkill.scss";
import { softwareSkills } from "@/data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNpm,
  faPython,
  faDocker,
  faNode,
  faGit,
  faGithub,
  faGoogle,
  faAws,
  faMicrosoft,
  faRust,
  faCsharp,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFire,
  faBrain,
  faServer,
  faCube,
  faChartLine,
  faChartArea,
  faChartBar,
  faChartPie,
  faCloud,
  faRobot,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  "html-5": faHtml5,
  css3: faCss3Alt,
  JavaScript: faJs,
  reactjs: faReact,
  npm: faNpm,
  "sql-database": faDatabase,
  firebase: faFire,
  python: faPython,
  docker: faDocker,
  TensorFlow: faBrain,
  PyTorch: faBrain,
  "Express.js": faServer,
  Flask: faServer,
  Django: faCube,
  "Next.js": faJs,
  "Data Analysis": faChartLine,
  Seaborn: faChartArea,
  Matplotlib: faChartBar,
  "D3.js": faChartPie,
  SQLite: faDatabase,
  PostgreSQL: faDatabase,
  Firestore: faFire,
  Kubernetes: faCube,
  Git: faGit,
  GitHub: faGithub,
  TypeScript: faJs,
  "Node.js": faNode,
  R: faChartLine,
  Rust: faRust,
  "C#": faCsharp,
  Go: faGolang,
  SvelteKit: faJs,
  Railway: faTrain,
  OpenAI: faRobot,
  "React Native": faReact,
  MySQL: faDatabase,
  MongoDB: faDatabase,
  "Cloud Firestore": faCloud,
  GCP: faGoogle,
  AWS: faAws,
  Azure: faMicrosoft,
};

export default function SoftwareSkill() {
  // Function to chunk array into smaller arrays of specified size
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const groupedSkills = chunkArray(softwareSkills, 14);

  return (
    <div>
      <div className="software-skills-main-div">
        {groupedSkills.map((group, index) => (
          <ul key={index} className="dev-icons">
            {group.map((skills, i) => (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <FontAwesomeIcon icon={iconMapping[skills.skillName]} />
                <p>{skills.skillName}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
