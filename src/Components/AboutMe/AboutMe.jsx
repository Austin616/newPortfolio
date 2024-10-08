import React from "react";
import "./AboutMe.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AboutMe = ({ isHamburgerActive }) => {
  return (
    <div className="aboutme">
      <div className={`about-me-title ${isHamburgerActive ? "hidden" : ""}`}>
        Austin Tran
      </div>
      <div className="aboutme_content">
        <p>
          I am a current CS student at the University of Texas at Austin. I am
          passionate about software development and I am always looking for new
          opportunities to learn and grow. I have experience with full stack
          development, and I am always looking to expand my knowledge and
          skillset. I am currently looking for internships and new opportunities
          to grow as a developer.
        </p>
        <div className="aboutme_links">
          <a
            href="https://www.linkedin.com/in/austin-tran-57624a284/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://github.com/Austin616"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
