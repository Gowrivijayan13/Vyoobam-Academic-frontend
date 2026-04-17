import React, { useState, useEffect } from "react";
import "./Careerlaunchpad.css";

const cards = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <ellipse cx="40" cy="28" rx="18" ry="20" fill="url(#g1)" />
        <ellipse cx="40" cy="65" rx="28" ry="14" fill="url(#g2)" opacity="0.7" />
        <defs>
          <radialGradient id="g1" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#a8edea" />
            <stop offset="100%" stopColor="#14B8A6" />
          </radialGradient>
          <radialGradient id="g2" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#fed6e3" />
            <stop offset="100%" stopColor="#ff4f8b" />
          </radialGradient>
        </defs>
      </svg>
    ),
    title: "Clear Career Direction",
    desc: "Stop feeling lost. We guide you step-by-step with structured paths tailored to real industry roles and goals.",
  },
  {
    id: "02",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <rect x="14" y="10" width="52" height="60" rx="6" fill="url(#g3)" />
        <rect x="22" y="24" width="36" height="4" rx="2" fill="white" opacity="0.6" />
        <rect x="22" y="34" width="28" height="4" rx="2" fill="white" opacity="0.4" />
        <rect x="22" y="44" width="32" height="4" rx="2" fill="white" opacity="0.4" />
        <rect x="22" y="54" width="20" height="4" rx="2" fill="white" opacity="0.3" />
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Standout Resume",
    desc: "Build a professional resume that highlights your skills, projects, and strengths — one that actually gets noticed.",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <rect x="10" y="18" width="44" height="34" rx="8" fill="url(#g4)" />
        <polygon points="26,52 32,66 38,52" fill="url(#g4)" />
        <circle cx="58" cy="54" r="14" fill="url(#g5)" />
        <path d="M53 54 L57 58 L63 50" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00c2cb" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Interview Confidence",
    desc: "Practice mock interviews and learn how to communicate your ideas clearly, confidently, and persuasively.",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <rect x="8" y="40" width="20" height="32" rx="4" fill="url(#g6)" />
        <rect x="30" y="28" width="20" height="44" rx="4" fill="url(#g7)" />
        <rect x="52" y="16" width="20" height="56" rx="4" fill="url(#g8)" />
        <defs>
          <linearGradient id="g6" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fed6e3" />
            <stop offset="100%" stopColor="#ff4f8b" />
          </linearGradient>
          <linearGradient id="g7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a8edea" />
            <stop offset="100%" stopColor="#00c2cb" />
          </linearGradient>
          <linearGradient id="g8" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Job-Ready Skills",
    desc: "Gain hands-on experience with real projects that prepare you for actual work environments and day-one performance.",
  },
  {
    id: "05",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <rect x="12" y="16" width="56" height="48" rx="10" fill="url(#g9)" />
        <rect x="20" y="26" width="18" height="18" rx="4" fill="white" opacity="0.3" />
        <rect x="42" y="26" width="18" height="8" rx="3" fill="white" opacity="0.3" />
        <rect x="42" y="38" width="12" height="6" rx="3" fill="white" opacity="0.2" />
        <defs>
          <linearGradient id="g9" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff4f8b" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Build a Strong Portfolio",
    desc: "Showcase your work through real projects that prove your capabilities to recruiters and future employers.",
  },
];

const beforeItems = [
  "No career direction",
  "Weak or generic resume",
  "Fear of interviews",
  "No real-world projects",
];

const afterItems = [
  "Clear, structured career path",
  "Strong portfolio & resume",
  "Confident communication",
  "Ready for real roles",
];

export default function CareerLaunchpad() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const visible = 2;

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((p) => (p + 1) % cards.length);
      setAnimating(false);
    }, 300);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((p) => (p - 1 + cards.length) % cards.length);
      setAnimating(false);
    }, 300);
  };

  const visibleCards = [
    cards[current % cards.length],
    cards[(current + 1) % cards.length],
  ];

  return (
    <div className="cl-page">
      {/* ── HERO SECTION ─────────────────────────── */}
      <section className="cl-hero">
        {/* LEFT */}
        <div className="cl-hero-left">
          <span className="cl-tag">CAREER LAUNCHPAD</span>

          <h1 className="cl-heading">
            What Makes You{" "}
            <span className="cl-highlight">Career-Ready?</span>
          </h1>

          <p className="cl-subheading">
            We don't just prepare you for interviews — we help you build the
            skills, confidence, and mindset needed to succeed in real-world
            roles.
          </p>

          <div className="cl-cta-group">
            <button className="btn btn-primary cl-btn-dark">
              Start Your Career Journey
            </button>
            <button className="btn btn-secondary cl-btn-grad">
              Book Free Demo
            </button>
          </div>

          <p className="cl-tagline">
            "From learning skills to launching careers — we guide every step."
          </p>
        </div>

        {/* RIGHT – Card Slider */}
        <div className="cl-hero-right">
          <div className={`cl-cards-wrapper ${animating ? "cl-fade-out" : "cl-fade-in"}`}>
            {visibleCards.map((card, i) => (
              <div className="cl-card" key={card.id}>
                <span className="cl-card-num">
                  <span className="cl-dot" />
                  {card.id}/{String(cards.length).padStart(2, "0")}
                </span>
                <div className="cl-card-icon">{card.icon}</div>
                <h3 className="cl-card-title">{card.title}</h3>
                <p className="cl-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="cl-slider-footer">
            <div className="cl-arrows">
              <button className="cl-arrow-btn" onClick={goPrev} aria-label="Previous">
                ←
              </button>
              <button className="cl-arrow-btn cl-arrow-active" onClick={goNext} aria-label="Next">
                →
              </button>
            </div>
            <span className="cl-counter">
              {String(current + 1).padStart(2, "0")}/{String(cards.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ── BEFORE → AFTER SECTION ───────────────── */}
      <section className="cl-transform">
        <div className="cl-transform-inner">
          <span className="cl-tag cl-tag-center">TRANSFORMATION</span>
          <h2 className="cl-section-heading">
            Your Journey <span className="cl-grad-text">Starts Here</span>
          </h2>

          <div className="cl-ba-grid">
            {/* BEFORE */}
            <div className="cl-ba-card cl-ba-before">
              <div className="cl-ba-label">
                <span className="cl-ba-icon cl-ba-icon-x">✕</span>
                Before
              </div>
              <ul className="cl-ba-list">
                {beforeItems.map((item) => (
                  <li key={item} className="cl-ba-item">
                    <span className="cl-ba-dot cl-dot-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* ARROW DIVIDER */}
            <div className="cl-ba-arrow">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="url(#arr-grad)" />
                <path d="M20 30 H40 M34 24 L40 30 L34 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="arr-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00c2cb" />
                    <stop offset="100%" stopColor="#ff4f8b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* AFTER */}
            <div className="cl-ba-card cl-ba-after">
              <div className="cl-ba-label">
                <span className="cl-ba-icon cl-ba-icon-check">✓</span>
                After
              </div>
              <ul className="cl-ba-list">
                {afterItems.map((item) => (
                  <li key={item} className="cl-ba-item">
                    <span className="cl-ba-dot cl-dot-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}