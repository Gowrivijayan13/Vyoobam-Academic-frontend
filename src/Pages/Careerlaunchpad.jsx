import React, { useState } from "react";
import "./Careerlaunchpad.css";
import { Link } from "react-router-dom";

/* ── DATA ──────────────────────────────────────────────────────── */

const cards = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-icon-svg">
        <ellipse cx="40" cy="28" rx="18" ry="20" fill="url(#g1)" />
        <ellipse cx="40" cy="65" rx="28" ry="14" fill="url(#g2)" opacity="0.7" />
        <defs>
          <radialGradient id="g1" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#a8edea" /><stop offset="100%" stopColor="#14B8A6" />
          </radialGradient>
          <radialGradient id="g2" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#fed6e3" /><stop offset="100%" stopColor="#ff4f8b" />
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
            <stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#14B8A6" />
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
            <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="g5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00c2cb" /><stop offset="100%" stopColor="#14B8A6" />
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
            <stop offset="0%" stopColor="#fed6e3" /><stop offset="100%" stopColor="#ff4f8b" />
          </linearGradient>
          <linearGradient id="g7" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a8edea" /><stop offset="100%" stopColor="#00c2cb" />
          </linearGradient>
          <linearGradient id="g8" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c7d2fe" /><stop offset="100%" stopColor="#4F46E5" />
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
            <stop offset="0%" stopColor="#ff4f8b" /><stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Build a Strong Portfolio",
    desc: "Showcase your work through real projects that prove your capabilities to recruiters and future employers.",
  },
];

const beforeItems = ["No career direction", "Weak or generic resume", "Fear of interviews", "No real-world projects"];
const afterItems  = ["Clear, structured career path", "Strong portfolio & resume", "Confident communication", "Ready for real roles"];

const steps = [
  { num: "01", title: "Learn the Fundamentals", desc: "Start with solid foundations — programming basics, problem-solving, and core concepts tailored to your chosen track.", tag: "Week 1–4" },
  { num: "02", title: "Build Real Projects",     desc: "Apply your skills by building end-to-end projects that simulate real workplace challenges and deliverables.", tag: "Week 5–10" },
  { num: "03", title: "Get Expert Mentorship",   desc: "Work 1:1 with industry mentors who review your code, guide your growth, and accelerate your learning curve.", tag: "Week 6–12" },
  { num: "04", title: "Create Your Portfolio",   desc: "Package your projects into a standout portfolio — complete with a polished resume and LinkedIn optimisation.", tag: "Week 10–14" },
  { num: "05", title: "Crack the Interviews",    desc: "Practice mock interviews, DSA sessions, and system design rounds until you can confidently walk into any interview room.", tag: "Week 12–16" },
];

const skills = [
  { icon: "💻", bg: "#ede9fe", name: "Frontend Development",  detail: "HTML, CSS, React, Responsive Design" },
  { icon: "⚙️", bg: "#dbeafe", name: "Backend Development",   detail: "Node.js, REST APIs, Databases" },
  { icon: "🔀", bg: "#d1fae5", name: "Version Control",       detail: "Git, GitHub, branching workflows" },
  { icon: "🚀", bg: "#fef3c7", name: "Deployment & DevOps",   detail: "CI/CD, Vercel, Render, Docker basics" },
  { icon: "🧠", bg: "#fce7f3", name: "Problem Solving",       detail: "DSA, logic building, LeetCode patterns" },
  { icon: "🤝", bg: "#ecfdf5", name: "Collaboration & Comms", detail: "Agile, code reviews, teamwork" },
];

const toolPills = [
  "React", "Node.js", "MongoDB", "PostgreSQL", "Git & GitHub",
  "Figma Basics", "REST APIs", "Vercel", "Docker Intro", "Postman", "Jest", "TypeScript",
];

/* ── UPDATED: real Unsplash images ─────────────────────────── */
const projects = [
  {
    name: "E-Commerce Platform",
    desc: "Full-stack store with product listings, cart, payments, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
  },
  {
    name: "Personal Portfolio",
    desc: "Sleek developer portfolio with animated sections, projects, and contact form.",
    stack: ["React", "Tailwind", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=80",
  },
  {
    name: "Admin Dashboard",
    desc: "Real-time analytics dashboard with charts, user management, and dark mode.",
    stack: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    name: "Weather App",
    desc: "Location-aware weather app with API integration, forecast, and geolocation.",
    stack: ["JavaScript", "OpenWeather API", "CSS"],
    img: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=700&q=80",
  },
];

const stats = [
  { num: "85%",   label: "Students placed within 3 months" },
  { num: "1200+", label: "Learners trained & counting" },
  { num: "300+",  label: "Interview offers cracked" },
  { num: "4.9★",  label: "Average learner rating" },
];

const companies = ["Google", "Infosys", "Wipro", "Zoho", "Accenture", "TCS", "Startups"];

const mentorFeatures = [
  "1:1 Guidance Sessions with a dedicated industry mentor",
  "Mock Interviews — technical, HR, and behavioural rounds",
  "Code Reviews with line-by-line feedback and best practices",
  "Career Planning to map out roles and build a targeted strategy",
];

const whoCards = [
  { emoji: "🎓", title: "College Students",   desc: "Build industry-ready skills before graduation and stand out in campus placements." },
  { emoji: "🔄", title: "Career Switchers",   desc: "Transition from any field into tech with a structured, beginner-friendly approach." },
  { emoji: "🌱", title: "Freshers",           desc: "Land your first role faster by gaining the practical experience companies actually look for." },
  { emoji: "🔍", title: "Active Job Seekers", desc: "Sharpen your resume, ace mock interviews, and start converting applications into offers." },
];

/* ── PROJECT CARD — Unsplash image + hover effects ─────────── */
function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered]   = useState(false);

  return (
    <div
      className="cl-project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform:  hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow:  hovered
          ? "0 20px 48px rgba(0,0,0,0.1)"
          : "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* ── Thumbnail ── */}
      <div
        className="cl-project-thumb"
        style={{ height: 180, overflow: "hidden", position: "relative", background: "#f1f5f9" }}
      >
        {imgError ? (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #e0e7ff, #f0fdf4)",
            fontSize: 13, color: "#64748b", fontWeight: 600,
          }}>
            {project.name}
          </div>
        ) : (
          <img
            src={project.img}
            alt={project.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", display: "block",
              transform:  hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.45s ease",
            }}
          />
        )}
        {/* dark gradient overlay on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 60%)",
          opacity:    hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }} />
      </div>

      {/* ── Body ── */}
      <div className="cl-project-body">
        <h3 className="cl-project-name">{project.name}</h3>
        <p className="cl-project-desc">{project.desc}</p>
        <div className="cl-tech-stack">
          {project.stack.map((t) => (
            <span className="cl-tech-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ─────────────────────────────────────────── */
export default function CareerLaunchpad() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent((p) => (p + 1) % cards.length); setAnimating(false); }, 300);
  };
  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent((p) => (p - 1 + cards.length) % cards.length); setAnimating(false); }, 300);
  };

  const visibleCards = [cards[current % cards.length], cards[(current + 1) % cards.length]];

  return (
    <div className="cl-page">

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section className="cl-hero">
        <div className="cl-hero-left">
          <span className="cl-tag">CAREER LAUNCHPAD</span>
          <h1 className="cl-heading">
            What Makes You <span className="cl-highlight">Career-Ready?</span>
          </h1>
          <p className="cl-subheading">
            We don't just prepare you for interviews — we help you build the
            skills, confidence, and mindset needed to succeed in real-world roles.
          </p>
          <div className="cl-cta-group">
           <Link to="/who-we-are"> <button className="btn btn-primary cl-btn-dark">Start Your Career Journey</button></Link>
           <Link to="/contact"> <button className="btn btn-secondary cl-btn-grad">Book Free Demo</button></Link>
          </div>
          <p className="cl-tagline">
            "From learning skills to launching careers — we guide every step."
          </p>
        </div>

        <div className="cl-hero-right">
          <div className={`cl-cards-wrapper ${animating ? "cl-fade-out" : "cl-fade-in"}`}>
            {visibleCards.map((card) => (
              <div className="cl-card" key={card.id}>
                <span className="cl-card-num"><span className="cl-dot" />{card.id}/{String(cards.length).padStart(2, "0")}</span>
                <div className="cl-card-icon">{card.icon}</div>
                <h3 className="cl-card-title">{card.title}</h3>
                <p className="cl-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="cl-slider-footer">
            <div className="cl-arrows">
              <button className="cl-arrow-btn" onClick={goPrev} aria-label="Previous">←</button>
              <button className="cl-arrow-btn cl-arrow-active" onClick={goNext} aria-label="Next">→</button>
            </div>
            <span className="cl-counter">
              {String(current + 1).padStart(2, "0")}/{String(cards.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ══ 2. BEFORE → AFTER ════════════════════════════════════ */}
      <section className="cl-transform">
        <div className="cl-transform-inner">
          <span className="cl-tag cl-tag-center">TRANSFORMATION</span>
          <h2 className="cl-section-heading">Your Journey <span className="cl-grad-text">Starts Here</span></h2>
          <div className="cl-ba-grid">
            <div className="cl-ba-card cl-ba-before">
              <div className="cl-ba-label"><span className="cl-ba-icon cl-ba-icon-x">✕</span>Before</div>
              <ul className="cl-ba-list">
                {beforeItems.map((item) => (
                  <li key={item} className="cl-ba-item"><span className="cl-ba-dot cl-dot-red" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="cl-ba-arrow">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" fill="url(#arr-grad)" />
                <path d="M20 30 H40 M34 24 L40 30 L34 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="arr-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00c2cb" /><stop offset="100%" stopColor="#ff4f8b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="cl-ba-card cl-ba-after">
              <div className="cl-ba-label"><span className="cl-ba-icon cl-ba-icon-check">✓</span>After</div>
              <ul className="cl-ba-list">
                {afterItems.map((item) => (
                  <li key={item} className="cl-ba-item"><span className="cl-ba-dot cl-dot-teal" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. CAREER ROADMAP ════════════════════════════════════ */}
      <section className="cl-roadmap">
        <div className="cl-roadmap-inner">
          <div className="cl-section-center">
            <span className="cl-tag-teal">Your Roadmap</span>
            <h2 className="cl-heading-dark">5 Steps to Becoming <span className="cl-grad-text">Job-Ready</span></h2>
            <p className="cl-heading-sub-dark">A clear, structured path from zero to your first offer — no guesswork, no wasted time.</p>
          </div>
          <div className="cl-steps">
            {steps.map((step) => (
              <div className="cl-step" key={step.num}>
                <div className="cl-step-bubble">{step.num}</div>
                <div className="cl-step-body">
                  <h3 className="cl-step-title">{step.title}</h3>
                  <p className="cl-step-desc">{step.desc}</p>
                  <span className="cl-step-tag">{step.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. SKILLS YOU'LL GAIN ════════════════════════════════ */}
      <section className="cl-skills">
        <div className="cl-inner">
          <div className="cl-section-center">
            <span className="cl-tag-indigo">Skills You'll Gain</span>
            <h2 className="cl-section-heading">Real Skills for <span className="cl-grad-text">Real Roles</span></h2>
            <p className="cl-heading-sub">Everything you learn here maps directly to what companies expect on day one.</p>
          </div>
          <div className="cl-skills-grid">
            {skills.map((skill) => (
              <div className="cl-skill-card" key={skill.name}>
                <div className="cl-skill-icon" style={{ background: skill.bg }}>{skill.icon}</div>
                <div>
                  <p className="cl-skill-name">{skill.name}</p>
                  <p className="cl-skill-detail">{skill.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cl-pills-row">
            {toolPills.map((pill) => (<span className="cl-pill" key={pill}>{pill}</span>))}
          </div>
        </div>
      </section>

      {/* ══ 5. REAL PROJECTS SHOWCASE ════════════════════════════ */}
      <section className="cl-projects">
        <div className="cl-inner cl-inner-wide">
          <div className="cl-section-center">
            <span className="cl-tag-pink">Real Projects</span>
            <h2 className="cl-section-heading">
              Here's What You'll <span className="cl-grad-text">Actually Build</span>
            </h2>
            <p className="cl-heading-sub">
              Recruiters trust portfolios, not promises. Walk into interviews with projects you've actually shipped.
            </p>
          </div>
          <div className="cl-projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      

      {/* ══ 7. MENTORSHIP ADVANTAGE ══════════════════════════════ */}
      <section className="cl-mentorship">
        <div className="cl-mentorship-inner">
          <div className="cl-mentorship-left">
            <span className="cl-tag-indigo">Mentorship Advantage</span>
            <h2 className="cl-mentorship-title">
              You Don't Learn Alone.{" "}
              <span className="cl-grad-text">We're With You.</span>
            </h2>
            <p className="cl-mentorship-desc">
              Every learner gets a dedicated mentor — not a chatbot, not a forum.
              A real industry professional invested in your success.
            </p>
            <ul className="cl-mentor-bullets">
              {mentorFeatures.map((feat) => (
                <li key={feat} className="cl-mentor-bullet-item">
                  <span className="cl-mentor-bullet-dot" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="cl-mentorship-right">
            <div className="cl-mentor-visual">
              <div className="cl-mentor-badge">
                <img
                  src="https://ui-avatars.com/api/?name=Priya+Ramesh&background=14B8A6&color=ffffff&size=104&bold=true&font-size=0.38&rounded=true"
                  alt="Priya Ramesh"
                  className="cl-mentor-avatar-img"
                />
                <div>
                  <p className="cl-mentor-info-name">Priya Ramesh</p>
                  <p className="cl-mentor-info-role">Senior Engineer · Zoho · 6 yrs exp</p>
                </div>
              </div>
              <p className="cl-mentor-quote">
                "The key is not to rush — build one thing really well,
                understand it deeply, and the confidence will follow."
              </p>
              <span className="cl-mentor-session-tag">
                <span className="cl-mentor-dot-live" />
                Session in progress
              </span>
            </div>
            <div className="cl-mentor-float">
              <div className="cl-mentor-float-num">50+</div>
              <div className="cl-mentor-float-label">Industry<br />Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. WHO IS THIS FOR ═══════════════════════════════════ */}
      <section className="cl-who">
        <div className="cl-inner">
          <div className="cl-section-center">
            <span className="cl-tag-pink">Who Is This For?</span>
            <h2 className="cl-section-heading">Made for <span className="cl-grad-text">Every Ambition</span></h2>
            <p className="cl-heading-sub">Whether you're just starting or stuck in a rut — if you want a career in tech, this is for you.</p>
          </div>
          <div className="cl-who-grid">
            {whoCards.map((card) => (
              <div className="cl-who-card" key={card.title}>
                <span className="cl-who-emoji">{card.emoji}</span>
                <p className="cl-who-title">{card.title}</p>
                <p className="cl-who-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. FINAL CTA ═════════════════════════════════════════ */}
      <section className="cl-final-cta">
        <div className="cl-cta-inner">
          <span className="cl-tag-teal">Limited Seats</span>
          <h2 className="cl-cta-heading">Become Job-Ready <span className="cl-grad-text">in 4 Months</span></h2>
          <p className="cl-cta-sub">
            Stop scrolling job listings and start building the skills, portfolio,
            and confidence to actually land them.
          </p>
          <div className="cl-cta-buttons">
           <Link to="/who-we-are"> <button className="cl-cta-primary">Start Your Career Journey</button></Link>
           <Link to="/contact"> <button className="cl-cta-secondary">Book a Free Demo</button></Link>
          </div>
          <p className="cl-cta-trust"><span>No commitment needed</span> · Free demo · Seats fill fast</p>
        </div>
      </section>

    </div>
  );
}