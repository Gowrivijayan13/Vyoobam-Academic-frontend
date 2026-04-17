import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ IMPORTANT
import "./Footer.css";
import logo from "../assets/vyoobamlogo_rm.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="footer-root">
      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="logo" className="footer-logo-img" />
            <span className="footer-brand-name">Vyoobam Tech</span>
          </div>

          <p className="footer-tagline">
           Structured paths, real projects, and expert guidance to turn your potential into real world success.


          </p>

          
        </div>

        {/* MIDDLE */}
        <div className="footer-nav">

          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/find-learning">Courses</Link></li>
              <li><Link to="/discover-paths">Demo class</Link></li>
              <li><Link to="/skill-lab">Skill Lab</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/who-we-are">About Us</Link></li>
              <li><Link to="/career-launchpad">Career</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* RIGHT */}
        <div className="footer-cta">
          <h3>Stay ahead with Vyoobam</h3>

          <div className="footer-email-row">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-secondary" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Vyoobam Tech. All Rights Reserved | Empowering Digital Solutions.
      </div>
    </footer>
  );
}