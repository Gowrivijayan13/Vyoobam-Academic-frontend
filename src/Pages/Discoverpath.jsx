import React from "react";
import "./Discoverpath.css";
import heroImage from "../assets/heropath.png";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const pathCards = [
  {
    id: 1,
    icon: "💻",
    iconClass: "dp-card__icon-wrap--indigo",
    title: "Web Developer",
    desc: "Master the core web trinity and build stunning, interactive interfaces from scratch.",
    steps: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 2,
    icon: "⚡",
    iconClass: "dp-card__icon-wrap--teal",
    title: "Full Stack Developer",
    desc: "Go end-to-end — from pixel-perfect UI to robust server logic and scalable databases.",
    steps: ["Frontend", "Backend", "Database", "Projects"],
  },
  {
    id: 3,
    icon: "🤖",
    iconClass: "dp-card__icon-wrap--coral",
    title: "Data Science",
    desc: "Turn raw numbers into powerful insights with Python, analytics, and machine learning.",
    steps: ["Python", "Data Analysis", "Machine Learning"],
  },
];

const journeyStages = [
  {
    emoji: "🌱",
    label: "Beginner",
    sub: "Core fundamentals",
    nodeClass: "dp-timeline__node--indigo",
  },
  {
    emoji: "📐",
    label: "Intermediate",
    sub: "Build real projects",
    nodeClass: "dp-timeline__node--sky",
  },
  {
    emoji: "🚀",
    label: "Advanced",
    sub: "Production skills",
    nodeClass: "dp-timeline__node--teal",
  },
  {
    emoji: "🏆",
    label: "Job Ready",
    sub: "Land your first role",
    nodeClass: "dp-timeline__node--yellow",
  },
];

const whyCards = [
  {
    icon: "🗺️",
    iconClass: "dp-why-card__icon--teal",
    title: "Structured Learning",
    desc: "Every path is curated by industry professionals so you always know what to learn next.",
  },
  {
    icon: "🎯",
    iconClass: "dp-why-card__icon--sky",
    title: "Career-Focused Skills",
    desc: "Curriculum built around real job requirements so your skills are immediately marketable.",
  },
  {
    icon: "🛠️",
    iconClass: "dp-why-card__icon--yellow",
    title: "Hands-on Projects",
    desc: "Ship real portfolio projects at every stage — code you can actually show an employer.",
  },
  {
    icon: "🧭",
    iconClass: "dp-why-card__icon--coral",
    title: "Industry Guidance",
    desc: "Get mentorship, code reviews, and community support from working engineers.",
  },
];

const featuredSteps = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Databases",
  "Deployment",
];

/* ─────────────────────────────────────────
   SVG ILLUSTRATION
───────────────────────────────────────── */
function DevWorkspaceSVG() {
  return (
    <svg
      className="dp-feat-svg"
      viewBox="0 0 340 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Monitor */}
      <rect
        x="60"
        y="40"
        width="220"
        height="145"
        rx="14"
        fill="#ffffff"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      <rect x="72" y="54" width="196" height="117" rx="8" fill="#EEF2FF" />
      {/* Code lines */}
      <rect
        x="84"
        y="68"
        width="80"
        height="6"
        rx="3"
        fill="#4F46E5"
        opacity="0.7"
      />
      <rect
        x="84"
        y="80"
        width="120"
        height="6"
        rx="3"
        fill="#38BDF8"
        opacity="0.6"
      />
      <rect
        x="84"
        y="92"
        width="60"
        height="6"
        rx="3"
        fill="#14B8A6"
        opacity="0.6"
      />
      <rect
        x="84"
        y="104"
        width="100"
        height="6"
        rx="3"
        fill="#FB7185"
        opacity="0.5"
      />
      <rect
        x="84"
        y="116"
        width="140"
        height="6"
        rx="3"
        fill="#4F46E5"
        opacity="0.4"
      />
      <rect
        x="84"
        y="128"
        width="90"
        height="6"
        rx="3"
        fill="#38BDF8"
        opacity="0.5"
      />
      <rect
        x="84"
        y="140"
        width="55"
        height="6"
        rx="3"
        fill="#FACC15"
        opacity="0.7"
      />
      {/* Stand */}
      <rect x="152" y="185" width="36" height="20" rx="4" fill="#d1d5db" />
      <rect x="128" y="203" width="84" height="8" rx="4" fill="#d1d5db" />
      {/* Badge 1 */}
      <rect x="242" y="34" width="82" height="34" rx="10" fill="#4F46E5" />
      <text
        x="251"
        y="47"
        fontFamily="Inter,sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#ffffff"
      >
        Full Stack
      </text>
      <text
        x="251"
        y="59"
        fontFamily="Inter,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.7)"
      >
        Path ✓
      </text>
      {/* Badge 2 */}
      <rect x="14" y="90" width="70" height="34" rx="10" fill="#14B8A6" />
      <text
        x="22"
        y="103"
        fontFamily="Inter,sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#ffffff"
      >
        3–6 months
      </text>
      <text
        x="22"
        y="116"
        fontFamily="Inter,sans-serif"
        fontSize="9"
        fill="rgba(255,255,255,0.8)"
      >
        Duration
      </text>
      {/* Coffee mug */}
      <ellipse
        cx="292"
        cy="222"
        rx="20"
        ry="12"
        fill="#FACC15"
        opacity="0.25"
      />
      <rect
        x="276"
        y="205"
        width="32"
        height="26"
        rx="6"
        fill="#ffffff"
        stroke="#e5e7eb"
        strokeWidth="1.5"
      />
      <path
        d="M308 210 Q318 210 318 218 Q318 226 308 226"
        stroke="#d1d5db"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <rect
        x="280"
        y="210"
        width="24"
        height="5"
        rx="2"
        fill="#38BDF8"
        opacity="0.4"
      />
      {/* Progress steps */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <React.Fragment key={i}>
          <circle
            cx={40 + i * 54}
            cy={252}
            r={12}
            fill={i < 4 ? "#4F46E5" : "#e5e7eb"}
          />
          <text
            x={40 + i * 54}
            y={257}
            textAnchor="middle"
            fontFamily="Inter,sans-serif"
            fontSize="9"
            fontWeight="700"
            fill={i < 4 ? "#ffffff" : "#9ca3af"}
          >
            {i + 1}
          </text>
          {i < 5 && (
            <line
              x1={52 + i * 54}
              y1={252}
              x2={28 + (i + 1) * 54}
              y2={252}
              stroke={i < 3 ? "#4F46E5" : "#e5e7eb"}
              strokeWidth={2}
              strokeDasharray={i >= 3 ? "4 3" : "0"}
            />
          )}
        </React.Fragment>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export default function DiscoverPath() {
  return (
    <div className="page-container">
      {/* ══════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════ */}
      <section className="dp-hero">
  <div className="dp-hero__content">
    
    {/* LEFT */}
    <div className="dp-hero__text">
      <span className="dp-hero__badge">
        <span className="dp-hero__badge-dot" />
        Learning Paths
      </span>

      <h1 className="dp-hero__heading">
    Discover Your <span>Perfect</span>  Learning Path
      </h1>

      <p className="dp-hero__sub">
        Structured roadmaps to take you from beginner to career ready
        curated by industry professionals.
      </p>
    </div>

    {/* RIGHT */}
    <div className="dp-hero__actions">
      <button className="btn btn-primary dp-hero__btn-primary">
        Explore Paths
      </button>
      <button className="btn btn-secondary dp-hero__btn-secondary">
        Get Started Free
      </button>
    </div>

  </div>

  <div className="dp-hero__strip">
    <img src={heroImage} alt="Learning community" />
  </div>
</section>

      {/* ══════════════════════════════════════
          SECTION 2 — PATH CARDS
      ══════════════════════════════════════ */}
      <section className="dp-section dp-section--grey">
        <div className="dp-paths__header">
          <div>
            <span className="dp-section__label">Choose Your Path</span>
            <h2 className="dp-section__title">
              Structured Roadmaps
              <br />
              Built for Success
            </h2>
            <p className="dp-section__desc">
              Each path is a step-by-step journey designed to get you job-ready
              in months, not years.
            </p>
          </div>

          {/* ✅ Global classes — no more inline styles */}
          <button className="btn btn-primary">View All Paths </button>
        </div>

        <div className="dp-paths__grid">
          {pathCards.map((card) => (
            <div className="dp-card" key={card.id}>
              <div className={`dp-card__icon-wrap ${card.iconClass}`}>
                {card.icon}
              </div>

              <div>
                <h3 className="dp-card__title">{card.title}</h3>
                <p className="dp-card__desc">{card.desc}</p>
              </div>

              <div className="dp-card__steps">
                {card.steps.map((step, i) => (
                  <React.Fragment key={step}>
                    <span className="dp-card__step">{step}</span>
                    {i < card.steps.length - 1 && (
                      <span className="dp-card__arrow">›</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <button className="btn btn-primary">
                Start Path
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — CAREER JOURNEY TIMELINE
      ══════════════════════════════════════ */}
      <section className="dp-section dp-section--white dp-journey">
        <div className="dp-journey__header">
          <span className="dp-section__label">Career Journey</span>
          <h2 className="dp-section__title">From Zero to Hired</h2>
          <p className="dp-section__desc">
            Every great career starts with a single step. Follow the roadmap and
            we'll guide you the rest of the way.
          </p>
        </div>

        <div className="dp-timeline">
          <div className="dp-timeline__track" />
          {journeyStages.map((stage) => (
            <div className="dp-timeline__stage" key={stage.label}>
              <div className={`dp-timeline__node ${stage.nodeClass}`}>
                {stage.emoji}
              </div>
              <span className="dp-timeline__label">{stage.label}</span>
              <span className="dp-timeline__sub">{stage.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — WHY CHOOSE A PATH
      ══════════════════════════════════════ */}
      <section className="dp-section dp-section--grey">
        <div className="dp-why__header">
          <span className="dp-section__label">Why It Works</span>
          <h2 className="dp-section__title">Why Choose a Path?</h2>
          <p className="dp-section__desc dp-section__desc--centered">
            Paths remove the guesswork. No more wondering what to learn  just
            follow the map and build real skills.
          </p>
        </div>

        <div className="dp-why__grid">
          {whyCards.map((wc) => (
            <div className="dp-why-card" key={wc.title}>
              <div className={`dp-why-card__icon ${wc.iconClass}`}>
                {wc.icon}
              </div>
              <h3 className="dp-why-card__title">{wc.title}</h3>
              <p className="dp-why-card__desc">{wc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — FEATURED PATH
      ══════════════════════════════════════ */}
      <section className="dp-section dp-section--white">
        <div className="dp-featured">
          {/* Left — content */}
          <div>
            <span className="dp-featured__badge">Featured Path</span>
            <span className="dp-section__label dp-section__label--block">
              Most Popular
            </span>
            <h2 className="dp-section__title">Full Stack Developer Path</h2>
            <p className="dp-section__desc">
              The most complete path we offer. Go from writing your first HTML
              tag to deploying full-stack applications used by real users.
            </p>

            <div className="dp-featured__flow">
              {featuredSteps.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="dp-featured__step">{step}</span>
                  {i < featuredSteps.length - 1 && (
                    <span className="dp-featured__arrow">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="dp-featured__meta">
              <div className="dp-featured__meta-item">
                
                <div className="dp-featured__meta-text">
                  <span className="dp-featured__meta-label">Duration</span>
                  <span className="dp-featured__meta-value">3–6 Months</span>
                </div>
              </div>

              <div className="dp-featured__meta-item">
               
                <div className="dp-featured__meta-text">
                  <span className="dp-featured__meta-label">Level</span>
                  <span className="dp-featured__meta-value">
                    Beginner → Advanced
                  </span>
                </div>
              </div>

              <div className="dp-featured__meta-item">
                <div className="dp-featured__meta-text">
                  <span className="dp-featured__meta-label">Projects</span>
                  <span className="dp-featured__meta-value">
                    12+ Real Projects
                  </span>
                </div>
              </div>
            </div>

            {/* ✅ Global btn + featured override for colour */}
            <button className="btn btn-primary">Start Learning</button>
          </div>

          {/* Right — illustration */}
          <div className="dp-featured__visual">
            <div className="dp-featured__visual-inner">
              <DevWorkspaceSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — CTA BANNER
      ══════════════════════════════════════ */}
      <section className="dp-cta">
        <div className="dp-cta__bg-shape dp-cta__bg-shape--1" />
        <div className="dp-cta__bg-shape dp-cta__bg-shape--2" />
        <div className="dp-cta__bg-shape dp-cta__bg-shape--3" />

        <span className="dp-cta__label">Ready to begin?</span>
        <h2 className="dp-cta__heading">Start Your Learning Journey Today</h2>
        <p className="dp-cta__sub">
          Join thousands of learners who turned structured paths into real
          careers. Your roadmap is waiting.
        </p>

        <div className="dp-cta__actions">
          <button className="btn dp-cta__btn-outline">Explore All Paths</button>
          <button className="btn dp-cta__btn-solid">Get Started Free</button>
        </div>
      </section>
    </div>
  );
}
