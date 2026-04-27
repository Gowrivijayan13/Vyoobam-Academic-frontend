import React, { useEffect, useRef, useState } from "react";
import "./Earn.css";
import logo from "../assets/vyoobamlogo_rm.png";
import stud from "../assets/stud.png";

// Hero Visual — matches Image 2: big student photo + deco circles + 3 mini circles
const HeroVisual = () => (
  <div className="hero-visual-wrap">
    {/* large decorative circle top-right */}
    <div className="deco-circle deco-circle-lg" />
    {/* outline circle top-left */}
    <div className="deco-circle deco-circle-outline" />
    {/* medium solid circle bottom-left */}
    <div className="deco-circle deco-circle-md" />

    {/* Main student photo placeholder — replace src with your image */}
    <div className="hero-student-photo">
      <div className="student-photo-inner">
        {/* Swap this div for <img src="your-student.png" alt="student" /> */}
        {/* <svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <rect width="220" height="320" rx="20" fill="#ede9fe" />
          <ellipse cx="110" cy="115" rx="48" ry="52" fill="#c7d2fe" />
          <circle cx="110" cy="100" r="36" fill="#a5b4fc" />
          <ellipse cx="110" cy="260" rx="80" ry="70" fill="#818cf8" />
          <text x="110" y="175" textAnchor="middle" fontSize="13" fill="#4338ca" fontFamily="Poppins, sans-serif" fontWeight="600">Your Photo Here</text>
        </svg> */}
        <img src={stud} alt="student" />
      </div>
    </div>

    {/* 3 mini circles bottom row */}
    <div className="hero-mini-circles">
      <div className="hero-mini-circle">
      
        <span>Learn</span>
      </div>
      <div className="hero-mini-circle">
       
        <span>Build</span>
      </div>
      <div className="hero-mini-circle">
        
        <span>Certify</span>
      </div>
    </div>
  </div>
);

// Split section student visual (kept for the split section below hero)
const StudentVisual = () => (
  <div className="student-visual">
    <div className="student-main-blob">
      
        {/* <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="50" rx="28" ry="30" fill="#c7d2fe" />
          <ellipse cx="60" cy="110" rx="42" ry="38" fill="#818cf8" />
          <circle cx="60" cy="46" r="20" fill="#e0e7ff" />
          <circle cx="60" cy="38" r="14" fill="#a5b4fc" />
        </svg> */}
        <img src={logo} alt="User" />
      
    </div>
    <div className="circle-mini circle-mini-1"><span>📘</span><small>Learn</small></div>
    <div className="circle-mini circle-mini-2"><span>🛠️</span><small>Build</small></div>
    <div className="circle-mini circle-mini-3"><span>🏆</span><small>Certify</small></div>
    <div className="glow-ring ring-1" />
    <div className="glow-ring ring-2" />
  </div>
);

const CertCard = ({ icon, title, desc, delay }) => (
  <div className="cert-card" style={{ animationDelay: `${delay}s` }}>
    <div className="cert-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
);

const StepBadge = ({ num, label, icon }) => (
  <div className="step-badge">
    <div className="step-num">{num}</div>
    <div className="step-icon">{icon}</div>
    <div className="step-label">{label}</div>
  </div>
);

export default function Earn() {
  const [counted, setCounted] = useState(false);
  const [count, setCount] = useState(0);
  const heroRef = useRef(null);

  // Count-up animation for big number
  useEffect(() => {
    const target = 50000;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="earn-root">

      {/* ── HERO (Light Split — Image 2 style) ── */}
      <section className="earn-hero" ref={heroRef}>
        <div className="hero-left">
          <span className="hero-eyebrow"> Certifications</span>
          <h1 className="hero-heading">
            Earn Certificates with{" "}
            <span className="gradient-text">Globally Recognised</span>{" "}
            Skills accepted everywhere
          </h1>
          <p className="hero-sub">
            We offer internships and training with certificates recognised
            worldwide. Accepted by universities and industries, our programmes
            ensure your achievements stand out. Join now and elevate your career!
          </p>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <strong>50,000+</strong>
              <span>Learners Certified</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>1000+</strong>
              <span>Certificates Issued</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>3+</strong>
              <span>Certificate Types</span>
            </div>
          </div>
          <div className="hero-cta-row">
            <button className="btn btn-primary">Sample Certificate</button>
            <button className="btn btn-secondary">Enrolled Courses</button>
          </div>
        </div>
        <div className="hero-right">
          <HeroVisual />
        </div>
      </section>

      {/* ── BIG NUMBER ── */}
      <section className="big-number-section">
        <div className="big-number-inner">
          <p className="big-number-label top">Learners certified and growing</p>
          <div className="big-number">
            {count.toLocaleString()}
            <span className="plus-sign">+</span>
          </div>
          <p className="big-number-label bottom">of you  and counting</p>

          <div className="stat-grid">
            {[
              {  val: "1000+", desc: "Certificates Issued" },
              {val: "Industry", desc: "Recognised Programs" },
              {  val: "Portfolio", desc: "Based Certification" },
              {  val: "Trusted", desc: "by Students" },
            ].map((s) => (
              <div className="stat-item" key={s.val}>
                <span className="stat-icon">{s.icon}</span>
                <strong>{s.val}</strong>
                <span>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN SPLIT ── */}
      <section className="split-section">
        <div className="split-left">
          <span className="section-tag">Why it counts</span>
          <h2>Certification That<br /><em>Proves</em> Your Skills</h2>
          <p>
            Our certifications are not just completion badges. They represent
            real world skills, hands-on experience, and practical knowledge.
          </p>
          <p>
            Every certificate is earned by completing projects, solving real
            problems, and demonstrating your ability to apply what you've learned.
          </p>
          <ul className="proof-list">
            <li>Recognised for practical, skill-based learning</li>
            <li>Designed to showcase real capabilities</li>
            <li>Shareable across professional platforms</li>
          </ul>
          <button className="btn btn-secondary mt-16">Explore Courses</button>
        </div>
        <div className="split-right">
          <StudentVisual />
        </div>
      </section>

      {/* ── CERT TYPES ── */}
      <section className="cert-types-section">
        <div className="section-header-center">
          <span className="section-tag">What you earn</span>
          <h2>Types of Certificates</h2>
          <p>Three pathways  each one proof of something real.</p>
        </div>
        <div className="cert-grid">
          <CertCard
            
            title="Course Completion"
            desc="Awarded after successfully completing structured learning modules with assessments."
            delay={0}
          />
          <CertCard
           
            title="Internship Certificate"
            desc="Earned by working on real-world projects and practical assignments with measurable outcomes."
            delay={0.1}
          />
          <CertCard
            
            title="Project Certificate"
            desc="Proof of your ability to build and deliver real solutions from start to finish."
            delay={0.2}
          />
        </div>
      </section>

      {/* ── HOW TO EARN ── */}
      <section className="how-section">
        <div className="section-header-center">
          <span className="section-tag">Your path</span>
          <h2>How to Earn</h2>
          <p>Three focused steps from zero to certified.</p>
        </div>
        <div className="steps-row">
          <StepBadge num="01" label="Learn with structured courses"  />
          <div className="step-arrow">→</div>
          <StepBadge num="02" label="Build real-world projects"  />
          <div className="step-arrow">→</div>
          <StepBadge num="03" label="Get certified based on performance" />
        </div>
      </section>

      {/* ── TRUST LINE ── */}
      <section className="trust-section">
        <div className="trust-inner">
          <div className="trust-item">
            
            <p>Recognised for practical, skill-based learning</p>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            
            <p>Designed to showcase real capabilities</p>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            
            <p>Shareable across professional platforms</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta-section">
        <div className="final-cta-glow" />
        <h2>Turn Your Skills<br /><span className="gradient-text">Into Proof</span></h2>
        <p>
          Earn certifications that reflect what you can actually do<br />not just
          what you studied.
        </p>
        <div className="hero-cta-row">
          <button className="btn btn-primary">Explore Courses</button>
          <button className="btn btn-secondary">View Certificates</button>
        </div>
      </section>
    </div>
  );
}