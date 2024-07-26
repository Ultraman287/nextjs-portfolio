import React, { createRef, useContext } from "react";
// @ts-ignore
import { Fade, Slide } from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "@/contexts/StyleContext";
import Image from "next/image";

export default function EducationCard({ school }) {
  const imgRef = createRef<HTMLImageElement>();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const { isDark } = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div id="education">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Education
        </h1>
      </div>

      <Fade left duration={1000}>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <Image
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div
          className="education-card-border"
          style={{ marginTop: "2rem" }}
        ></div>
      </Slide>
    </div>
  );
}
