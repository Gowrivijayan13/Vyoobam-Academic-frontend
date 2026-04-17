import React from "react";
import "./Solution.css";

/* ── Wavy art for the featured card image ── */
function WavyArt() {
  return (
    <svg
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 28 }).map((_, i) => {
        const y = i * 8 - 10;
        const amp = 18 + (i % 5) * 6;
        const freq = 0.012 + (i % 3) * 0.005;
        const phase = i * 0.4;
        const points = Array.from({ length: 61 }, (_, x) => {
          const px = x * 5;
          const py = y + Math.sin(px * freq + phase) * amp;
          return `${px},${py}`;
        }).join(" ");

        /* Alternates between teal (#00C2CB) and pink (#FF4F8B) brand tones */
        const isTeal = i % 2 === 0;
        const opacity = 0.25 + (i / 28) * 0.55;
        const color = isTeal
          ? `rgba(0, 194, 203, ${opacity})`
          : `rgba(255, 79, 139, ${opacity})`;

        return (
          <polyline
            key={i}
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="1.2"
          />
        );
      })}
    </svg>
  );
}

/* ── Solution Section ── */
function Solution() {
  return (
    <section className="solution-section">
      <div className="solution-inner">

        {/* ── Header ── */}
        <div className="solution-header">
          <div>
            <div className="mission-label"></div>
            <h1 className="headline">
              Your Complete<br />
              <span className="headline-accent">Career Solution.</span>
            </h1>
          </div>

          <div className="header-right">
            <p>
              We bridge the gap between education and employment with
              industry-focused training that gets you corporate-ready.
            </p>
            <button className="explore-btn">Explore More</button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="cards-row">

          {/* Small Card 1 — Job-Oriented Courses */}
          <div className="sol-card small">
            <div className="card-number">01.</div>
            <div>
              <div className="card-icon"></div>
              <p className="card-title">Job-Oriented Courses</p>
            </div>
          </div>

          {/* Featured Card — Career Solution */}
          <div className="sol-card featured">
            <div className="featured-image">
              <WavyArt />
            </div>
            <div className="featured-body">
              <div className="card-icon"></div>
              <h3 className="featured-title">Your Complete Career Solution</h3>
              <p className="featured-desc">
                Learn Python, Full Stack, Data Science work on real-world
                projects and get corporate-ready training that employers value.
              </p>
            </div>
          </div>

          {/* Small Card 2 — Internship Programs */}
          <div className="sol-card small">
            <div className="card-number">03.</div>
            <div>
              <div className="card-icon"></div>
              <p className="card-title">Internship Programs</p>
            </div>
          </div>

          {/* Small Card 3 — Ticket to Corporate */}
          <div className="sol-card small">
            <div className="card-number">04.</div>
            <div>
              <div className="card-icon"></div>
              <p className="card-title">Ticket to Corporate</p>
            </div>
          </div>
          <div className="sol-card small">
            <div className="card-number">05.</div>
            <div>
              <div className="card-icon"></div>
              <p className="card-title">resefdewerwerew</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Solution;