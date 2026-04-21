import React, { useEffect, useRef } from "react";
import "./Whoweare.css";
function MissionIllustration() {
  return (
    <svg
      viewBox="0 0 420 400"
      xmlns="http://www.w3.org/2000/svg"
      className="wwa-mission-svg"
      aria-hidden="true"
    >
      {/* ── background glow ring ── */}
      <circle cx="210" cy="190" r="160" fill="rgba(79,70,229,0.05)" />
      <circle cx="210" cy="190" r="120" fill="rgba(20,184,166,0.06)" />

      {/* ── desk surface ── */}
      <rect x="60" y="290" width="300" height="12" rx="6" fill="#e0e7ff" />

      {/* ── laptop body ── */}
      <rect x="110" y="230" width="200" height="62" rx="8" fill="#4f46e5" />
      {/* screen content lines */}
      <rect x="124" y="242" width="80" height="6" rx="3" fill="rgba(255,255,255,0.35)" />
      <rect x="124" y="254" width="120" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      <rect x="124" y="266" width="60" height="6" rx="3" fill="rgba(20,184,166,0.7)" />
      {/* blinking cursor */}
      <rect x="188" y="266" width="3" height="6" rx="1" fill="rgba(255,255,255,0.8)">
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
      </rect>
      {/* laptop base */}
      <rect x="90" y="291" width="240" height="8" rx="4" fill="#3730a3" />

      {/* ── books stack (left of desk) ── */}
      <rect x="64" y="262" width="38" height="10" rx="3" fill="#14b8a6" />
      <rect x="67" y="252" width="34" height="10" rx="3" fill="#6366f1" />
      <rect x="70" y="243" width="28" height="9" rx="3" fill="#a5b4fc" />

      {/* ── coffee cup (right) ── */}
      <rect x="320" y="270" width="22" height="22" rx="4" fill="#f0fdf4" stroke="#14b8a6" strokeWidth="1.5" />
      <path d="M342 278 Q352 278 352 284 Q352 290 342 290" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
      {/* steam */}
      <path d="M327 268 Q329 262 327 257" fill="none" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M334 266 Q336 260 334 255" fill="none" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
      </path>

      {/* ── knowledge beams rising from screen ── */}
      {[
        { x1: 160, x2: 130, col: "#818cf8", delay: "0s" },
        { x1: 185, x2: 175, col: "#14b8a6", delay: "0.3s" },
        { x1: 210, x2: 210, col: "#6366f1", delay: "0.1s" },
        { x1: 235, x2: 245, col: "#14b8a6", delay: "0.5s" },
        { x1: 258, x2: 285, col: "#818cf8", delay: "0.2s" },
      ].map(({ x1, x2, col, delay }, i) => (
        <line
          key={i}
          x1={x1} y1={230}
          x2={x2} y2={140}
          stroke={col}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.4s" begin={delay} repeatCount="indefinite" />
        </line>
      ))}

      {/* ── central lightbulb / idea orb ── */}
      <circle cx="210" cy="108" r="38" fill="#ede9fe" stroke="#4f46e5" strokeWidth="1.5" />
      <circle cx="210" cy="108" r="26" fill="#4f46e5" />
      {/* inner glow pulse */}
      <circle cx="210" cy="108" r="26" fill="#6366f1" opacity="0.5">
        <animate attributeName="r" values="26;30;26" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>
      {/* bulb highlight */}
      <circle cx="203" cy="100" r="6" fill="rgba(255,255,255,0.25)" />
      {/* filament lines */}
      <line x1="204" y1="118" x2="204" y2="126" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <line x1="216" y1="118" x2="216" y2="126" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <line x1="204" y1="126" x2="216" y2="126" stroke="white" strokeWidth="1.5" opacity="0.6" />
      {/* base cap */}
      <rect x="201" y="138" width="18" height="5" rx="2" fill="#3730a3" />
      <rect x="203" y="143" width="14" height="4" rx="2" fill="#3730a3" />

      {/* ── floating skill orbs ── */}
      {[
        { cx: 120, cy: 82, r: 18, fill: "#ccfbf1", stroke: "#14b8a6", label: "Code", delay: "0s" },
        { cx: 308, cy: 72, r: 16, fill: "#ede9fe", stroke: "#7c3aed", label: "Build", delay: "0.6s" },
        { cx: 88,  cy: 155, r: 14, fill: "#dbeafe", stroke: "#3b82f6", label: "Think", delay: "1s" },
        { cx: 336, cy: 148, r: 13, fill: "#fef3c7", stroke: "#f59e0b", label: "Grow", delay: "0.4s" },
      ].map(({ cx, cy, r, fill, stroke, label, delay }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth="1.2">
            <animate attributeName="cy" values={`${cy};${cy - 5};${cy}`} dur="3s" begin={delay} repeatCount="indefinite" />
          </circle>
          <text
            x={cx} y={cy + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="9"
            fontWeight="700"
            fill={stroke}
            fontFamily="system-ui, sans-serif"
          >
            {label}
          </text>
        </g>
      ))}

      {/* ── star sparkles ── */}
      {[
        { x: 155, y: 52 }, { x: 270, y: 44 }, { x: 340, y: 110 }, { x: 78, y: 118 },
      ].map(({ x, y }, i) => (
        <g key={i}>
          <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="#c7d2fe" strokeWidth="1.2">
            <animate attributeName="opacity" values="1;0.2;1" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
          </line>
          <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke="#c7d2fe" strokeWidth="1.2">
            <animate attributeName="opacity" values="1;0.2;1" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
          </line>
        </g>
      ))}

      {/* ── connection arc (theory → practice) ── */}
      <path
        d="M 80 310 Q 80 370 210 370 Q 340 370 340 310"
        fill="none"
        stroke="url(#missionGrad)"
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity="0.4"
      />
      <defs>
        <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <text x="210" y="382" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="system-ui,sans-serif" letterSpacing="1.5" fontWeight="600">LEARN · BUILD · BECOME</text>
    </svg>
  );
}

/* ── tiny helper: count-up animation ── */
function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const pct = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - pct, 3);
          el.textContent = Math.round(ease * target).toLocaleString();
          if (pct < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return ref;
}

/* ── stat pill ── */
function StatPill({ icon, labelBefore, value, suffix, labelAfter }) {
  const ref = useCountUp(value);
  return (
    <div className="wwa-stat-pill">
      <span className="wwa-stat-icon">{icon}</span>
      <div className="wwa-stat-text">
        <span className="wwa-stat-number">
          <span ref={ref}>0</span>
          {suffix}
        </span>
        <span className="wwa-stat-label">{labelBefore || labelAfter}</span>
      </div>
    </div>
  );
}

/* ── transformation card ── */
function TransformCard({ type, items }) {
  const isBefore = type === "before";
  return (
    <div className={`wwa-card ${isBefore ? "wwa-card--before" : "wwa-card--after"}`}>
      <div className="wwa-card-badge">{isBefore ? "Before" : "After"}</div>

      {/* mock profile header */}
      <div className="wwa-card-profile">
        <div className="wwa-avatar">
          <span>{isBefore ? "😕" : "😊"}</span>
        </div>
        <div className="wwa-profile-info">
          <div className="wwa-profile-name">
            {isBefore ? "Confused Learner" : "Confident Pro"}
          </div>
          <div className="wwa-profile-role">
            {isBefore ? "No clear direction" : "Industry-Ready Professional"}
          </div>
        </div>
      </div>

      {/* metric pill */}
      {isBefore ? (
        <div className="wwa-metric wwa-metric--bad">
          <span className="wwa-metric-icon">↘</span>
          <span>Career confidence: −40%</span>
        </div>
      ) : (
        <div className="wwa-metric wwa-metric--good">
          <span className="wwa-metric-icon">↗</span>
          <span>Career readiness: +300%</span>
        </div>
      )}

      <ul className="wwa-card-list">
        {items.map((item, i) => (
          <li key={i} className="wwa-card-item">
            <span className={`wwa-bullet ${isBefore ? "wwa-bullet--bad" : "wwa-bullet--good"}`}>
              {isBefore ? "✗" : "✓"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── approach step ── */
function ApproachStep({ number, title, desc }) {
  return (
    <div className="wwa-step">
      <div className="wwa-step-number">{number}</div>
      <div className="wwa-step-content">
        <h4 className="wwa-step-title">{title}</h4>
        <p className="wwa-step-desc">{desc}</p>
      </div>
    </div>
  );
}

/* ── main page ── */
export default function WhoWeAre() {
  return (
    <div className="wwa-root">

      {/* ════════════════ HERO ════════════════ */}
      <section className="wwa-hero">
        {/* decorative blobs */}
        <div className="wwa-blob wwa-blob--1" />
        <div className="wwa-blob wwa-blob--2" />

        <div className="wwa-hero-inner">
          <div className="wwa-hero-eyebrow">Who We Are</div>
          <h1 className="wwa-hero-heading">
            From{" "}
            <span className="wwa-hero-highlight">
               Confused Learners
            </span>{" "}
            to Confident Professionals
          </h1>
          <p className="wwa-hero-sub">
            We don't just teach  we transform students into industry-ready
            professionals through real-world learning.
          </p>
          <div className="wwa-hero-ctas">
            <button className="btn btn-primary wwa-cta-btn">
              Start Your Journey
            </button>
            <button className="btn btn-secondary wwa-cta-btn">
              Book Free Demo
            </button>
          </div>
        </div>

        {/* before / after cards */}
        <div className="wwa-hero-cards">
          <TransformCard
            type="before"
            items={[
              "Confused about career path",
              "Only theoretical knowledge",
              "No real project experience",
              "Low confidence in interviews",
              "Struggling to get opportunities",
            ]}
          />

          <div className="wwa-arrow-wrapper">
            <div className="wwa-arrow">→</div>
          </div>

          <TransformCard
            type="after"
            items={[
              "Clear career direction",
              "Strong practical skills",
              "Real-world project experience",
              "Confident in interviews",
              "Ready for real job roles",
            ]}
          />
        </div>

        <p className="wwa-hero-tagline">
          We bridge the gap between learning and doing —{" "}
          <strong>so you don't just study, you become.</strong>
        </p>
      </section>
      {/* ════════════════ HISTORY ════════════════ */}
<section className="wwa-history">
  <div className="wwa-section-inner">
    <span className="wwa-section-tag">Our History</span>
    <h2 className="wwa-section-heading">Our Journey</h2>
    <p className="wwa-section-sub">
      From a small IT solutions provider to a full-fledged training and tech ecosystem — here's how we got here.
    </p>
    <div className="wwa-timeline">
      {[
        {
          year: "2015",
          tag: "Establishment",
          title: "Foundation & Beginning",
          desc:
            "Founded as a web and IT solutions provider. Our journey began with a strong vision to deliver reliable web and IT solutions — helping small and medium businesses establish their online presence with confidence.",
        },
        {
          year: "2022",
          tag: "Operations",
          title: "Growth & Expansion",
          desc:
            "Expanded as a tech hub in Kumbakonam. We transitioned from a service-based company into a collaborative technology space supporting innovation, development, and learning.",
        },
        {
          year: "2023",
          tag: "Training & Development",
          title: "Academic Launch",
          desc:
            "Launched Vyoobam Academic across Tamil Nadu. Through structured training programs, we equipped learners with real-world IT skills, bridging the gap between academic knowledge and industry requirements.",
        },
        {
          year: "2025",
          tag: "Leadership",
          title: "Mentorship & Ecosystem",
          desc:
            "Developing scalable web and mobile applications while actively mentoring 30+ interns — creating a strong learning ecosystem focused on practical exposure, teamwork, and career growth.",
        },
      ].map(({ year, tag, title, desc }, i) => (
        <div className="wwa-timeline-item" key={i}>
          <div className="wwa-timeline-left">
            <div className="wwa-timeline-year">{year}</div>
            <div className="wwa-timeline-dot" />
          </div>
          <div className="wwa-timeline-card">
            <div className="wwa-timeline-tag">{tag}</div>
            <h4 className="wwa-timeline-title">{title}</h4>
            <p className="wwa-timeline-desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ════════════════ MISSION ════════════════
      <section className="wwa-mission">
        <div className="wwa-section-inner">
          <span className="wwa-section-tag">Our Mission</span>
          <h2 className="wwa-section-heading">Why We Exist</h2>
          <p className="wwa-mission-intro">
            Traditional education focuses on theory. We focus on{" "}
            <em>real-world readiness.</em>
          </p>
          <div className="wwa-mission-pills">
            {[
              {  text: "Equip students with skills that actually matter" },
              { text: "Build confidence through practice" },
              {  text: "Prepare learners for real industry challenges" },
            ].map(({ icon, text }, i) => (
              <div className="wwa-mission-pill" key={i}>
                <span className="wwa-mission-pill-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* ════════════════ MISSION ════════════════ */}
<section className="wwa-mission">
  <div className="wwa-section-inner wwa-mission-layout">
    {/* LEFT: text content */}
    <div className="wwa-mission-content">
      <span className="wwa-section-tag">Our Mission</span>
      <h2 className="wwa-section-heading">Why We Exist</h2>
      <p className="wwa-mission-intro">
        Traditional education focuses on theory. We focus on{" "}
        <em>real-world readiness.</em>
      </p>
      <div className="wwa-mission-pills">
        {[
          { text: "Equip students with skills that actually matter" },
          { text: "Build confidence through practice" },
          { text: "Prepare learners for real industry challenges" },
        ].map(({ text }, i) => (
          <div className="wwa-mission-pill" key={i}>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: illustration */}
    <div className="wwa-mission-visual">
      <MissionIllustration />
    </div>
  </div>
</section>

      {/* ════════════════ APPROACH ════════════════ */}
      <section className="wwa-approach">
        <div className="wwa-section-inner">
          <span className="wwa-section-tag">Our Approach</span>
          <h2 className="wwa-section-heading">How We Make It Happen</h2>
          <p className="wwa-section-sub">
            We follow a hands-on, outcome-driven learning model designed to turn
            knowledge into capability.
          </p>
          <div className="wwa-steps">
            <ApproachStep number="01" title="Learn with Clarity" desc="Concepts explained in simple, practical ways — no unnecessary jargon." />
            <ApproachStep number="02" title="Apply through Real Projects" desc="Work on actual industry-style projects that challenge and grow your skills." />
            <ApproachStep number="03" title="Practice with Mentorship" desc="Get guided by professionals who've walked the same path before you." />
            <ApproachStep number="04" title="Build a Proof Portfolio" desc="Graduate with a portfolio that speaks louder than any certificate." />
          </div>
        </div>
      </section>

      {/* ════════════════ TEAM ════════════════ */}
      <section className="wwa-team">
        <div className="wwa-section-inner">
          <span className="wwa-section-tag">Our Team</span>
          <h2 className="wwa-section-heading">Learn from People Who've Done It</h2>
          <p className="wwa-section-sub">
            Our mentors are industry professionals who bring real experience, not
            just textbook knowledge.
          </p>
          <div className="wwa-team-cards">
            {[
              { emoji: "🧑‍💻", title: "Real-world Experience", desc: "Mentors who've shipped products, led teams, and solved real problems." },
              { emoji: "💡", title: "Practical Insights", desc: "No fluff — only what actually works in the industry today." },
              { emoji: "🗺️", title: "Career Guidance", desc: "Step-by-step support from your first lesson to your first offer." },
            ].map(({ emoji, title, desc }, i) => (
              <div className="wwa-team-card" key={i}>
                <div className="wwa-team-emoji">{emoji}</div>
                <h4 className="wwa-team-card-title">{title}</h4>
                <p className="wwa-team-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ IMPACT ════════════════ */}
      <section className="wwa-impact">
        <div className="wwa-section-inner">
          <span className="wwa-section-tag wwa-section-tag--light">Our Impact</span>
          <h2 className="wwa-section-heading wwa-heading--light">
            The Difference We're Making
          </h2>
          <div className="wwa-stats-grid">
            <StatPill  value={1000} suffix="+" labelAfter="Students Trained" />
            <StatPill  value={200}  suffix="+" labelAfter="Real Projects Built" />
            <StatPill  value={50}   suffix="+"  labelAfter="Expert Mentors" />
            <StatPill  value={4.8}  suffix="" labelAfter="Average Rating" />
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIAL ════════════════ */}
      <section className="wwa-testimonial">
        <div className="wwa-section-inner wwa-testimonial-inner">
          <span className="wwa-section-tag">Student Stories</span>
          <h2 className="wwa-section-heading">What Our Students Realize</h2>
          <blockquote className="wwa-quote">
            <span className="wwa-quote-mark">"</span>
            Learning here changed how I see my career. I didn't just gain
            knowledge — I gained confidence.
            <span className="wwa-quote-mark">"</span>
          </blockquote>
          <div className="wwa-quote-author">
            <div>
              <div className="wwa-quote-name">Priya R.</div>
              <div className="wwa-quote-role">Frontend Developer · Batch 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ════════════════ */}
      <section className="wwa-final-cta">
        <div className="wwa-blob wwa-blob--3" />
        <div className="wwa-blob wwa-blob--4" />
        <div className="wwa-section-inner wwa-final-cta-inner">
          <h2 className="wwa-final-heading">
            You Don't Need Another Course
          </h2>
          <h3 className="wwa-final-subheading">
            You Need the Right Direction
          </h3>
          <p className="wwa-final-desc">
            We help you move from{" "}
            <span className="wwa-flow">learning</span>
            {" → "}
            <span className="wwa-flow">doing</span>
            {" → "}
            <span className="wwa-flow">becoming</span>
          </p>
          <div className="wwa-hero-ctas">
            <button className="btn btn-primary wwa-cta-btn">
              Start Learning Today
            </button>
            <button className="btn btn-secondary wwa-cta-btn">
              Explore Courses
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}