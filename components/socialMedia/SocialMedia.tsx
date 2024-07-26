import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "@/data/socialmedialinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGitlab,
  faFacebookF,
  faInstagram,
  faTwitter,
  faMedium,
  faStackOverflow,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
  github: faGithub,
  linkedin: faLinkedinIn,
  gmail: faEnvelope,
  gitlab: faGitlab,
  facebook: faFacebookF,
  instagram: faInstagram,
  twitter: faTwitter,
  medium: faMedium,
  stackoverflow: faStackOverflow,
  kaggle: faKaggle,
};

export default function SocialMediaComponent() {
  return (
    <div className="social-media-div">
      {Object.keys(socialMediaLinks).map((key) =>
        socialMediaLinks[key] ? (
          <a
            key={key}
            href={
              key === "gmail"
                ? `mailto:${socialMediaLinks[key]}`
                : socialMediaLinks[key]
            }
            className={`icon-button ${key}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={iconMapping[key]} />
            <span></span>
          </a>
        ) : null
      )}
    </div>
  );
}
