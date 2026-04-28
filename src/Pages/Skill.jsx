import React, { useState, useEffect, useRef } from "react";
import "./Skill.css";
import skillhero from "../assets/skillhero.png";
import { Link } from "react-router-dom";

// ─── ORIGINAL HERO CARDS ──────────────────────────────────────────────────
const heroCards = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="skill-icon">
        <rect x="8" y="20" width="36" height="28" rx="4" fill="#4F46E5" opacity="0.15" />
        <rect x="12" y="16" width="36" height="28" rx="4" fill="#4F46E5" opacity="0.4" />
        <rect x="16" y="12" width="36" height="28" rx="4" fill="#4F46E5" />
        <path d="M24 26l4 4-4 4M32 34h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <rect x="8" y="14" width="48" height="32" rx="5" fill="#14B8A6" opacity="0.2" />
        <rect x="10" y="16" width="44" height="28" rx="4" fill="#14B8A6" opacity="0.5" />
        <rect x="12" y="18" width="40" height="24" rx="3" fill="#14B8A6" />
        <path d="M22 30l5 4-5 4M32 34h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="46" width="28" height="4" rx="2" fill="#14B8A6" opacity="0.4" />
        <rect x="26" y="50" width="12" height="2" rx="1" fill="#14B8A6" opacity="0.3" />
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
        <circle cx="32" cy="32" r="20" fill="#4F46E5" opacity="0.15" />
        <circle cx="32" cy="32" r="14" fill="#4F46E5" opacity="0.3" />
        <path d="M32 18v4M32 42v4M18 32h4M42 32h4" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="6" fill="#4F46E5" />
        <circle cx="32" cy="32" r="3" fill="white" />
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
        <circle cx="32" cy="32" r="22" fill="#14B8A6" opacity="0.12" />
        <circle cx="32" cy="32" r="16" fill="#14B8A6" opacity="0.25" />
        <circle cx="32" cy="32" r="10" fill="#14B8A6" opacity="0.5" />
        <circle cx="32" cy="32" r="5" fill="#14B8A6" />
        <path d="M44 20l-8 10" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="44" cy="20" r="3" fill="#4F46E5" />
      </svg>
    ),
    title: "Skill Challenges",
    desc: "Test your knowledge with timed challenges, quizzes, and leaderboards",
    tag: "Quizzes",
    color: "#14B8A6",
  },
];

// ─── ORIGINAL HERO SECTION (unchanged) ───────────────────────────────────
function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section className="skilllab-section">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="skilllab-container">
        {/* LEFT */}
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
            {heroCards.map((card) => (
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
                  Start Lab
                </button>
              </div>
            ))}
          </div>
          <div className="skilllab-cta-row">
           <Link to="/contact"> <button className="skilllab-cta-btn">
              <span>Start Practicing Now</span>
            </button></Link>
            <div className="skilllab-stats">
              <div className="stat">
                <span className="stat-num">12K+</span>
                <span className="stat-label">Active Learners</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">200+</span>
                <span className="stat-label">Labs &amp; Projects</span>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="skilllab-right">
          <div className="hero-blob-wrap">
            <svg className="hero-blob-svg" viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 120 C20 160 10 240 30 310 C55 390 130 450 220 470 C310 490 410 460 450 380 C490 300 470 190 420 130 C370 70 280 20 200 30 C130 40 100 80 60 120Z" fill="#14B8A6" opacity="0.18" />
              <path d="M80 140 C50 175 40 245 60 305 C85 375 150 430 230 448 C315 468 400 440 438 365 C475 288 458 188 412 135 C366 82 282 36 208 46 C143 56 110 105 80 140Z" fill="#14B8A6" opacity="0.28" />
              <path d="M100 160 C76 193 68 255 88 308 C112 368 170 415 242 430 C320 447 395 420 428 352 C462 282 447 192 406 146 C362 98 284 58 216 66 C156 74 124 128 100 160Z" fill="#14B8A6" opacity="0.55" />
              <path d="M30 350 Q120 420 240 410 Q360 400 440 330" stroke="#4F46E5" strokeWidth="2.5" strokeDasharray="8 6" fill="none" opacity="0.35" />
              <path d="M20 280 Q100 340 220 330 Q350 320 450 250" stroke="#14B8A6" strokeWidth="2" strokeDasharray="6 5" fill="none" opacity="0.4" />
              <circle cx="60" cy="200" r="5" fill="#4F46E5" opacity="0.4" />
              <circle cx="420" cy="180" r="4" fill="#14B8A6" opacity="0.5" />
              <circle cx="390" cy="420" r="6" fill="#4F46E5" opacity="0.3" />
              <circle cx="100" cy="420" r="4" fill="#14B8A6" opacity="0.4" />
              <circle cx="240" cy="60" r="7" fill="#4F46E5" opacity="0.25" />
            </svg>
            <div className="hero-img-wrap">
              <img className="hero-img" src={skillhero} alt="Students learning and coding together" />
              <svg className="hero-img-curve" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 240 Q100 180 210 200 Q320 220 420 160" stroke="#14B8A6" strokeWidth="3" fill="none" opacity="0.7" />
                <path d="M0 270 Q120 210 230 230 Q340 250 420 190" stroke="#4F46E5" strokeWidth="2" strokeDasharray="8 5" fill="none" opacity="0.5" />
              </svg>
            </div>
            <div className="floating-card">
              <div className="floating-card-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="14" fill="#4F46E5" opacity="0.12" />
                  <path d="M8 14l4 4 8-8" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="floating-card-text">
                <span className="floating-card-title">Real World Practice</span>
                <span className="floating-card-desc">Build real projects and gain practical experience</span>
              </div>
              <div className="floating-card-pulse" />
            </div>
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

// ─── 1. LAB PREVIEW ───────────────────────────────────────────────────────
const LAB_CODE = `function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nconsole.log(fibonacci(10));`;
const LAB_ERROR_CODE = `function fibonacci(n) {\n  if (n <= 1) return n\n  return fibonacci(n - 1 + fibonacci(n - 2);\n}`;
const AI_FIX_CODE = `// ✦ AI detected: Missing closing parenthesis\n// Fixed version:\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}`;

function LabPreview() {
  const [tab, setTab] = useState("run");
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [aiStep, setAiStep] = useState(0);

  const switchTab = (t) => { setTab(t); setOutput(""); setAiStep(0); };

  const handleRun = () => {
    setRunning(true); setOutput("");
    setTimeout(() => { setOutput("→ 55\n✓ Executed in 12ms"); setRunning(false); }, 900);
  };

  const handleAI = () => {
    setAiStep(0);
    setTimeout(() => setAiStep(1), 400);
    setTimeout(() => setAiStep(2), 1200);
    setTimeout(() => setAiStep(3), 2200);
  };

  return (
    <div className="lab-preview">
      <div className="lab-tabs">
        {[{ key: "run", label: "▶  Run Code" }, { key: "error", label: "⚠  Fix Error" }, { key: "ai", label: "✦  AI Assist" }].map(({ key, label }) => (
          <button key={key} className={`lab-tab ${tab === key ? "active" : ""}`} onClick={() => switchTab(key)}>{label}</button>
        ))}
      </div>
      <div className="lab-body">
        <div className="lab-editor">
          <div className="lab-editor-bar">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="lab-filename">fibonacci.js</span>
          </div>
          <pre className="lab-code"><code>{tab === "error" ? LAB_ERROR_CODE : tab === "ai" && aiStep >= 2 ? AI_FIX_CODE : LAB_CODE}</code></pre>
        </div>
        <div className="lab-output-panel">
          <div className="lab-output-bar">Output</div>
          <div className="lab-output-body">
            {tab === "run" && (
              output
                ? <pre className={`lab-result ${output.includes("✓") ? "lab-result-ok" : ""}`}>{output}</pre>
                : <button className="lab-run-btn" onClick={handleRun} disabled={running}>
                    {running ? <span className="lab-spinner" /> : "▶"} {running ? "Running…" : "Run Code"}
                  </button>
            )}
            {tab === "error" && (
              <pre className="lab-result lab-result-err">{`SyntaxError: Unexpected token '+'\n  at fibonacci.js:3:40\n  Missing closing parenthesis`}</pre>
            )}
            {tab === "ai" && (
              <div className="ai-steps">
                {aiStep === 0 && <button className="lab-run-btn lab-ai-btn" onClick={handleAI}>✦ Ask AI to Fix</button>}
                {aiStep >= 1 && <div className="ai-step-item">🔍 Analysing code…</div>}
                {aiStep >= 2 && <div className="ai-step-item">⚡ Error found: line 3</div>}
                {aiStep >= 3 && <div className="ai-step-item ai-step-ok">✓ Fix applied — ready to run!</div>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 2. PRACTICE ARENA ────────────────────────────────────────────────────
const PROBLEMS = [
  { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Arrays", streak: true, solved: true },
  { id: 2, title: "Binary Tree Inorder", difficulty: "Medium", topic: "Trees", streak: false, solved: true },
  { id: 3, title: "LRU Cache", difficulty: "Hard", topic: "Design", streak: false, solved: false },
  { id: 4, title: "Valid Parentheses", difficulty: "Easy", topic: "Strings", streak: true, solved: false },
  { id: 5, title: "Merge K Lists", difficulty: "Hard", topic: "Linked Lists", streak: false, solved: false },
  { id: 6, title: "Coin Change", difficulty: "Medium", topic: "DP", streak: false, solved: false },
];

function PracticeArena() {
  const [diff, setDiff] = useState("All");
  const [topic, setTopic] = useState("All");
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (timer) intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [timer]);

  const filtered = PROBLEMS.filter(p => (diff === "All" || p.difficulty === diff) && (topic === "All" || p.topic === topic));
  const topics = ["All", ...new Set(PROBLEMS.map(p => p.topic))];
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="arena-wrap">
      <div className="arena-controls">
        <div className="filter-row">
          {["All", "Easy", "Medium", "Hard"].map(d => (
            <button key={d} className={`filter-btn fdiff-${d.toLowerCase()} ${diff === d ? "active" : ""}`} onClick={() => setDiff(d)}>{d}</button>
          ))}
        </div>
        <div className="filter-row">
          {topics.map(t => (
            <button key={t} className={`filter-btn ftopic ${topic === t ? "active" : ""}`} onClick={() => setTopic(t)}>{t}</button>
          ))}
        </div>
        <div className="arena-meta">
          <button className={`arena-timer ${timer ? "timer-on" : ""}`} onClick={() => setTimer(t => !t)}>
            {timer ? fmt(seconds) : "Timer Mode"}
          </button>
          <div className="arena-streak">3 Streak</div>
        </div>
      </div>
      <div className="problem-list">
        {filtered.map(p => (
          <div key={p.id} className={`problem-row ${p.solved ? "problem-solved" : ""}`}>
            <span className="p-status">{p.solved ? "✓" : "○"}</span>
            <span className="p-title">{p.title}</span>
            {p.streak && <span></span>}
            <span className="p-topic">{p.topic}</span>
            <span className={`p-diff pdiff-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
            <button className="p-solve-btn">Solve</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 3. PROJECT HUB ───────────────────────────────────────────────────────
const PROJECTS = [
  { id: 1, title: "E-Commerce Dashboard", tag: "E-commerce", hours: "4–6 hrs", tools: ["React", "Node", "MongoDB"], color: "#14B8A6"},
  { id: 2, title: "AI Chatbot Interface", tag: "AI", hours: "3–5 hrs", tools: ["Python", "OpenAI", "FastAPI"], color: "#14B8A6" },
  { id: 3, title: "Analytics Dashboard", tag: "Dashboard", hours: "2–4 hrs", tools: ["D3.js", "React", "REST"], color: "#14B8A6" },
  { id: 4, title: "Auth & User System", tag: "Backend", hours: "3–4 hrs", tools: ["Node", "JWT", "PostgreSQL"], color: "#14B8A6"},
];

function ProjectHub() {
  return (
    <div className="project-hub">
      {PROJECTS.map(p => (
        <div key={p.id} className="project-card" style={{ "--pc": p.color }}>
          <div className="project-top">
            <span className="project-icon">{p.icon}</span>
            <span className="project-tag" style={{ color: p.color, background: p.color + "18" }}>{p.tag}</span>
          </div>
          <h4 className="project-title">{p.title}</h4>
          <div className="project-meta">
            <span className="project-duration">{p.hours}</span>
            <div className="project-tools">
              {p.tools.map(t => <span key={t} className="tool-chip">{t}</span>)}
            </div>
          </div>
          <button className="project-btn" style={{ borderColor: p.color, color: p.color }}>Start Project</button>
        </div>
      ))}
    </div>
  );
}

// ─── 4. AI ASSISTANT DEMO ─────────────────────────────────────────────────
const AI_THREAD = [
  { label: "Error", content: "TypeError: Cannot read property 'map' of undefined\n  at App.jsx:24", type: "error" },
  { label: "AI Explains", content: "Your `data` prop is undefined on first render.\nAdd a default value or null check.", type: "explain" },
  { label: "AI Fixes", content: "const items = data ?? [];\nreturn items.map(item => (\n  <Item key={item.id} {...item} />\n));", type: "fix" },
];

function AIAssistantDemo() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const [q, setQ] = useState("");

  const advance = () => {
    if (step < AI_THREAD.length - 1) {
      setTyping(true);
      setTimeout(() => { setStep(s => s + 1); setTyping(false); }, 700);
    }
  };

  return (
    <div className="ai-demo">
      <div className="ai-thread">
        {AI_THREAD.slice(0, step + 1).map((s, i) => (
          <div key={i} className={`ai-bubble ai-b-${s.type}`}>
            <span className="ai-bubble-label">{s.label}</span>
            <pre className="ai-bubble-content">{s.content}</pre>
          </div>
        ))}
        {typing && <div className="ai-typing"><span /><span /><span /></div>}
      </div>
      <div className="ai-sidebar">
        {step < AI_THREAD.length - 1
          ? <button className="ai-action-btn" onClick={advance}>{step === 0 ? "Ask AI to Explain" : "Apply Fix"}</button>
          : <button className="ai-action-btn ai-reset-btn" onClick={() => setStep(0)}>↺ Reset Demo</button>
        }
        <div className="ai-input-row">
          <input className="ai-input" placeholder="Ask AI anything…" value={q} onChange={e => setQ(e.target.value)} />

        </div>
      </div>
    </div>
  );
}

// ─── 5. PROGRESS TRACKER ──────────────────────────────────────────────────
const PATHS = [
  { name: "JavaScript Fundamentals", pct: 82, color: "14B8A6" },
  { name: "React & Frontend", pct: 54, color: "#14B8A6" },
  { name: "Node.js & APIs", pct: 31, color: "#14B8A6" },
];
const SKILL_BADGES = ["Fast Learner", "7-Day Streak", "Problem Solver", "First Project"];

function ProgressTracker() {
  return (
    <div className="progress-wrap">
      <div className="badges-row">
        {SKILL_BADGES.map(b => <span key={b} className="badge-chip">{b}</span>)}
      </div>
      <div className="paths-list">
        {PATHS.map(p => (
          <div key={p.name} className="path-item">
            <div className="path-item-top">
              <span>{p.badge}</span>
              <span className="path-name">{p.name}</span>
              <span className="path-pct" style={{ color: p.color }}>{p.pct}%</span>
            </div>
            <div className="path-bar-track">
              <div className="path-bar-fill" style={{ width: `${p.pct}%`, background: p.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="next-task-block">
        <span className="next-task-eyebrow">Next Recommended</span>
        <div className="next-task-card">
         
          <div>
            <div className="next-task-title">React Hooks Deep Dive</div>
            <div className="next-task-meta">45 min · Interactive Lab</div>
          </div>
          <button className="next-task-btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

// ─── 6. LIVE LABS ─────────────────────────────────────────────────────────
const SESSIONS = [
  { id: 1, title: "Build a REST API from Scratch", time: "Today, 6:00 PM", mentor: "Sarah K.", initials: "SK", live: true, color: "#14B8A6" },
  { id: 2, title: "React Performance Optimization", time: "Tomorrow, 5:00 PM", mentor: "Alex R.", initials: "AR", live: false, color: "#14B8A6" },
  { id: 3, title: "System Design for Beginners", time: "Wed, 7:00 PM", mentor: "Priya M.", initials: "PM", live: false, color: "#14B8A6" },
];

function LiveLabs() {
  return (
    <div className="live-labs">
      {SESSIONS.map(s => (
        <div key={s.id} className={`session-card ${s.live ? "session-live" : ""}`}>
          {s.live && <span className="live-pill">LIVE NOW</span>}
          <h4 className="session-title">{s.title}</h4>
          <div className="session-footer">
            <div className="mentor-row">
              <div className="mentor-avatar" style={{ background: s.color }}>{s.initials}</div>
              <div>
                <div className="mentor-name">{s.mentor}</div>
                <div className="session-time">{s.time}</div>
              </div>
            </div>
            <button
              className={`session-btn ${s.live ? "session-btn-live" : ""}`}
              style={!s.live ? { borderColor: s.color, color: s.color } : {}}
            >
              {s.live ? "Join Live" : "Register"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────
function Section({ id, badge, title, accent, subtitle, children }) {
  return (
    <div className="sl-section" id={id}>
      <div className="sl-section-head">
        <span className="sl-eyebrow">{badge}</span>
        <h2 className="sl-title">{title} <span className="sl-accent">{accent}</span></h2>
        <p className="sl-subtitle">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────
export default function SkillLab() {
  return (
    <div className="skilllab-page">
      {/* Original hero — untouched */}
      <HeroSection />

      {/* Upgraded feature sections */}
      <div className="sl-features-wrapper">

        <Section id="lab" badge="Live Environment" title="Interactive" accent="Lab Preview"
          subtitle="Write, run, debug, and get AI help — all in one place. Feel the real dev experience.">
          <LabPreview />
        </Section>

        <Section id="arena" badge="Gamified" title="Practice" accent="Arena"
          subtitle="Sharpen your skills with filtered challenges, timer mode, and streak scoring.">
          <PracticeArena />
        </Section>

        <Section id="projects" badge="Industry-Grade" title="Project" accent="Hub"
          subtitle="Build real-world projects with tagged stacks, estimated durations, and industry tools.">
          <ProjectHub />
        </Section>

        <Section id="ai" badge="AI-Powered" title="AI Assistant" accent="Demo"
          subtitle="See how AI explains errors, suggests fixes, and answers your coding questions instantly.">
          <AIAssistantDemo />
        </Section>

        <Section id="progress" badge="Your Journey" title="Progress" accent="Tracker"
          subtitle="Track skill completion, earn badges, and get personalised next-step recommendations.">
          <ProgressTracker />
        </Section>

        <Section id="live" badge="Real Mentorship" title="Live" accent="Labs"
          subtitle="Join live coding sessions with expert mentors. Learn together, build faster.">
          <LiveLabs />
        </Section>

        {/* Final CTA */}
        <div className="sl-final-cta">
          <span className="sl-eyebrow">Limited Spots</span>
          <h2 className="sl-final-title">Ready to Level Up?</h2>
          <p className="sl-final-sub">Join 12,000+ developers who are building real skills, today.</p>
          <div className="sl-final-actions">
           <Link to="/skill-lab"> <button className="skilllab-cta-btn">Start Practicing Today</button></Link>
            <Link to="/contact"><button className="sl-secondary-btn">Explore Projects</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
}