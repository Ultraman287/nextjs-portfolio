import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "./SoftwareSkill";
import { skills } from "@/data/skills";
// @ts-ignore
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
              Technical Skills
            </h1>
            <SoftwareSkill />
            {/* <div>
              {skills.map((skill, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skill}
                  </p>
                );
              })}
            </div> */}
          </div>
        </Fade>
      </div>
    </div>
  );
}
