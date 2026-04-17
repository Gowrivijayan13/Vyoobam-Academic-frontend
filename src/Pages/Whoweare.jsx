import React, { useEffect, useRef } from "react";
import "./Whoweare.css";

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

      {/* ════════════════ MISSION ════════════════ */}
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