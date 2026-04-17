import React from "react";
import "./CertificationSection.css";
import certImage from "../../assets/certificate.png"; // use your image

const CertificationSection = () => {
  return (
    <section className="cert-section">
      <div className="cert-container">

        {/* LEFT CONTENT */}
        <div className="cert-content">
          <h2 className="cert-heading">Recognized Certifications</h2>

          <p className="cert-text">
            Earn industry-recognized certifications that validate your skills and 
            enhance your professional profile. Our programs are designed to help 
            you showcase your expertise with confidence in a competitive global market.
          </p>

          <ul className="cert-list">
            <li>Globally relevant certification programs</li>
            <li>Project-based skill validation</li>
            <li>Boost your resume and portfolio</li>
            <li>Aligned with current industry standards</li>
            <li>Proof of practical learning and experience</li>
          </ul>

          <button className="cert-btn">Get Certified</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="cert-image">
          <img src={certImage} alt="Certification" />
        </div>

      </div>
    </section>
  );
};

export default CertificationSection;