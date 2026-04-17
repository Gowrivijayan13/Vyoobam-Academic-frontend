import React from "react";
import "./Hero.css";

import fullstack from "../../assets/fullstack.png";
import internshipImg from "../../assets/intern.png";
import projectImg from "../../assets/projects.png";
import certImg from "../../assets/certificates.png";
import skillsImg from "../../assets/skills.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-center">
        <h1>
          Learn Skills That Prepare <br /> You for the Real World
        </h1>

        <p>
          Gain hands-on experience through industry-focused courses and real-time internships.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Explore Courses</button>
          <button className="btn secondary">Book Demo</button>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hero-visual">

        <div className="card card-main">
          <img src={internshipImg} alt="Internship" />
          <span className="card-tag">Internship</span>
        </div>

        <div className="card card-a">
          <img src={fullstack} alt="Full Stack" />
          <span className="card-tag">Python Full Stack</span>
        </div>

        <div className="card card-b">
          <img src={projectImg} alt="Projects" />
          <span className="card-tag">Projects</span>
        </div>

        <div className="card card-c">
          <img src={certImg} alt="Certification" />
          <span className="card-tag">Certification</span>
        </div>

        <div className="card card-d">
          <img src={skillsImg} alt="Skills" />
          <span className="card-tag">Skills</span>
        </div>

      </div>

    </section>
  );
};

export default Hero;