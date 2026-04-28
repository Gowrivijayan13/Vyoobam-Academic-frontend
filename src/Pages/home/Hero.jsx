import React from "react";
import "./Hero.css";

import fullstack from "../../assets/fullstack.png";
import internshipImg from "../../assets/intern.png";
import projectImg from "../../assets/projects.png";
import certImg from "../../assets/certificates.png";
import skillsImg from "../../assets/skills.png";
import { Link } from "react-router-dom";

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
          <Link to="/find-learning"><button className="btn primary">Explore Courses</button></Link>
          <Link to="/contact"><button className="btn secondary">Book Demo</button></Link>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="hero-visual">

        <div className="card card-main">
         <Link to="/find-learning"><img src={internshipImg} alt="Internship" /></Link> 
          <span className="card-tag">Internship</span>
        </div>

        <div className="card card-a">
          <Link to="/discover-paths"><img src={fullstack} alt="Full Stack" /></Link>
          <span className="card-tag">Python Full Stack</span>
        </div>

        <div className="card card-b">
          <Link to="/who-we-are"><img src={projectImg} alt="Projects" /></Link>
          <span className="card-tag">Projects</span>
        </div>

        <div className="card card-c">
          <Link to="/earn-credentials"><img src={certImg} alt="Certification" /></Link>
          <span className="card-tag">Certification</span>
        </div>

        <div className="card card-d">
          <Link to="/skill-lab"><img src={skillsImg} alt="Skills" /></Link>
          <span className="card-tag">Skills</span>
        </div>

      </div>

    </section>
  );
};

export default Hero;