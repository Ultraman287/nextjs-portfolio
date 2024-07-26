import React, { useContext, useState } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experiences";
// @ts-ignore
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div className="container px-5 py-10 mx-auto lg:px-40">
            <div className="title-button-container">
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
                Recent Experiences
              </h1>
              <button className="toggle-button" onClick={toggleShowAll}>
                {showAll ? "Show Recent" : "Show All"}
              </button>
            </div>
            <div className="experience-cards-div">
              {displayedExperiences.map((card, i) => (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
