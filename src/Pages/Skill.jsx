import React, { useState } from "react";
import "./Skill.css";

const cards = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-icon">
        <rect x="8" y="20" width="36" height="28" rx="4" fill="#4F46E5" opacity="0.15"/>
        <rect x="12" y="16" width="36" height="28" rx="4" fill="#4F46E5" opacity="0.4"/>
        <rect x="16" y="12" width="36" height="28" rx="4" fill="#4F46E5"/>
        <path d="M24 26l4 4-4 4M32 34h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Real-World Projects",
    desc: "Work on practical applications like websites, dashboards, and AI models",
    tag: "Projects",
    color: "#4F46E5",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-icon">
        <rect x="8" y="14" width="48" height="32" rx="5" fill="#14B8A6" opacity="0.2"/>
        <rect x="10" y="16" width="44" height="28" rx="4" fill="#14B8A6" opacity="0.5"/>
        <rect x="12" y="18" width="40" height="24" rx="3" fill="#14B8A6"/>
        <path d="M22 30l5 4-5 4M32 34h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="46" width="28" height="4" rx="2" fill="#14B8A6" opacity="0.4"/>
        <rect x="26" y="50" width="12" height="2" rx="1" fill="#14B8A6" opacity="0.3"/>
      </svg>
    ),
    title: "Practice Problems",
    desc: "Solve coding challenges and sharpen your problem solving skills daily",
    tag: "Challenges",
    color: "#14B8A6",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-icon">
        <circle cx="32" cy="32" r="20" fill="#4F46E5" opacity="0.15"/>
        <circle cx="32" cy="32" r="14" fill="#4F46E5" opacity="0.3"/>
        <path d="M32 18v4M32 42v4M18 32h4M42 32h4" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="6" fill="#4F46E5"/>
        <circle cx="32" cy="32" r="3" fill="white"/>
      </svg>
    ),
    title: "Interactive Labs",
    desc: "Hands on guided labs with real-time code execution and instant feedback",
    tag: "Labs",
    color: "#4F46E5",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-icon">
        <circle cx="32" cy="32" r="22" fill="#14B8A6" opacity="0.12"/>
        <circle cx="32" cy="32" r="16" fill="#14B8A6" opacity="0.25"/>
        <circle cx="32" cy="32" r="10" fill="#14B8A6" opacity="0.5"/>
        <circle cx="32" cy="32" r="5" fill="#14B8A6"/>
        <path d="M44 20l-8 10" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="44" cy="20" r="3" fill="#4F46E5"/>
      </svg>
    ),
    title: "Skill Challenges",
    desc: "Test your knowledge with timed challenges, quizzes, and leaderboards",
    tag: "Quizzes",
    color: "#14B8A6",
  },
];

export default function SkillLab() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="skilllab-section">
      {/* Background decorative blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <div className="skilllab-container">
        {/* LEFT: Text + Cards */}
        <div className="skilllab-left">
          <div className="skilllab-header">
            <span className="skilllab-badge">Interactive Learning</span>
            <h1 className="skilllab-heading">
              Skill Lab –{" "}
              <span className="skilllab-heading-accent">Learn by Doing</span>
            </h1>
            <p className="skilllab-subheading">
              Practice real-world skills through interactive labs, projects, and challenges.
            </p>
          </div>

          <div className="skilllab-cards-grid">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`skill-card ${hoveredCard === card.id ? "skill-card--hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ "--card-accent": card.color }}
              >
                <div className="skill-card-icon-wrap">{card.icon}</div>
                <div className="skill-card-content">
                  <span className="skill-card-tag" style={{ color: card.color, background: card.color + "18" }}>
                    {card.tag}
                  </span>
                  <h3 className="skill-card-title">{card.title}</h3>
                  <p className="skill-card-desc">{card.desc}</p>
                </div>
                <button className="skill-card-btn" style={{ background: card.color }}>
                  Start Lab →
                </button>
              </div>
            ))}
          </div>

          <div className="skilllab-cta-row">
            <button className="skilllab-cta-btn">
              <span>Start Practicing Now</span>
              
            </button>
            <div className="skilllab-stats">
              <div className="stat">
                <span className="stat-num">12K+</span>
                <span className="stat-label">Active Learners</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">200+</span>
                <span className="stat-label">Labs & Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Hero Visual */}
        <div className="skilllab-right">
          {/* Teal blob background */}
          <div className="hero-blob-wrap">
            <svg className="hero-blob-svg" viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 120 C20 160 10 240 30 310 C55 390 130 450 220 470 C310 490 410 460 450 380 C490 300 470 190 420 130 C370 70 280 20 200 30 C130 40 100 80 60 120Z"
                fill="#14B8A6"
                opacity="0.18"
              />
              <path
                d="M80 140 C50 175 40 245 60 305 C85 375 150 430 230 448 C315 468 400 440 438 365 C475 288 458 188 412 135 C366 82 282 36 208 46 C143 56 110 105 80 140Z"
                fill="#14B8A6"
                opacity="0.28"
              />
              <path
                d="M100 160 C76 193 68 255 88 308 C112 368 170 415 242 430 C320 447 395 420 428 352 C462 282 447 192 406 146 C362 98 284 58 216 66 C156 74 124 128 100 160Z"
                fill="#14B8A6"
                opacity="0.55"
              />
              {/* Decorative curve lines */}
              <path
                d="M30 350 Q120 420 240 410 Q360 400 440 330"
                stroke="#4F46E5"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                fill="none"
                opacity="0.35"
              />
              <path
                d="M20 280 Q100 340 220 330 Q350 320 450 250"
                stroke="#14B8A6"
                strokeWidth="2"
                strokeDasharray="6 5"
                fill="none"
                opacity="0.4"
              />
              {/* Decorative dots */}
              <circle cx="60" cy="200" r="5" fill="#4F46E5" opacity="0.4"/>
              <circle cx="420" cy="180" r="4" fill="#14B8A6" opacity="0.5"/>
              <circle cx="390" cy="420" r="6" fill="#4F46E5" opacity="0.3"/>
              <circle cx="100" cy="420" r="4" fill="#14B8A6" opacity="0.4"/>
              <circle cx="240" cy="60" r="7" fill="#4F46E5" opacity="0.25"/>
            </svg>

            {/* Main hero image */}
            <div className="hero-img-wrap">
              <img
                className="hero-img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=520&q=80"
                alt="Students learning and coding together"
              />
              {/* Curve overlay on image */}
              <svg className="hero-img-curve" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 240 Q100 180 210 200 Q320 220 420 160" stroke="#14B8A6" strokeWidth="3" fill="none" opacity="0.7"/>
                <path d="M0 270 Q120 210 230 230 Q340 250 420 190" stroke="#4F46E5" strokeWidth="2" strokeDasharray="8 5" fill="none" opacity="0.5"/>
              </svg>
            </div>

            {/* Floating card */}
            <div className="floating-card">
              <div className="floating-card-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#4F46E5" opacity="0.12"/>
                  <path d="M8 14l4 4 8-8" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="floating-card-text">
                <span className="floating-card-title"> Real World Practice</span>
                <span className="floating-card-desc">Build real projects and gain practical experience</span>
              </div>
              <div className="floating-card-pulse" />
            </div>

            {/* Small badge top-right */}
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>200+ Live Programs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}