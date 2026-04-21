import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vyoobamlogo_rm.png";
import puzzle from "../assets/puzzle.png";
import "./Footer.css";

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
      <div className="footer-wrapper">

        {/* ── LEFT: BRAND CARD ── */}
        <div className="footer-brand-card">
          <div className="footer-logo-row">
            <img src={logo} alt="Vyoobam logo" className="footer-logo-img" />
            <span className="footer-brand-name">Vyoobam Tech</span>
          </div>

          <p className="footer-tagline">
            Structured paths, real projects, and expert guidance to turn your
            potential into real-world success.
          </p>

          <div className="footer-social-section">
            <span className="footer-stay-in-touch">Stay in touch!</span>
            <div className="footer-social-icons">
          <a href="#" aria-label="Facebook" className="social-btn">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8v-2.88h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85H16.4l-.45 2.88h-2.37v6.99A10 10 0 0 0 22 12"/>
  </svg>
</a>

<a href="#" aria-label="Instagram" className="social-btn">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.25 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>
</a>

<a href="#" aria-label="LinkedIn" className="social-btn">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
  </svg>
</a>

<a href="#" aria-label="Twitter" className="social-btn">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
  </svg>
</a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: SINGLE MERGED PANEL ── */}
        <div className="footer-merged-panel">

          {/* Floating badge top-right */}
          <div className="footer-icon-badge" aria-hidden="true">
            <img src={puzzle} alt="" className="footer-badge-img" />
          </div>

          {/* LEFT half — nav columns */}
          <div className="footer-panel-nav">
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading">Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/find-learning">Courses</Link></li>
                <li><Link to="/discover-paths">Demo class</Link></li>
                <li><Link to="/skill-lab">Skill Lab</Link></li>
              </ul>
            </div>
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading">Company</h4>
              <ul>
                <li><Link to="/who-we-are">About Us</Link></li>
                <li><Link to="/career-launchpad">Career</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="footer-panel-vdivider" />

          {/* RIGHT half — CTA + copyright */}
          <div className="footer-panel-cta">
            <div className="footer-cta-body">
              <p className="footer-cta-sub">Learn fast.</p>
              <h3 className="footer-cta-heading">Stay ahead with Vyoobam.</h3>
              <div className="footer-email-row">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                />
                <button className="footer-subscribe-btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>
            </div>
            <p className="footer-copyright">
             © 2025 Vyoobam Tech. All Rights Reserved | Empowering Digital Solutions.
            </p>
          </div>

        </div>
      </div>

      {/* ── WATERMARK ── */}
      <div className="footer-watermark" aria-hidden="true">
        <span className="footer-watermark-main">Vyoobam</span>
        <span className="footer-watermark-sub">Tech</span>
      </div>
    </footer>
  );
}