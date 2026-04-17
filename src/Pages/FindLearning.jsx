import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./FindLearning.css";

/* ── Data ─────────────────────────────────────────────── */
const CATEGORIES = [
  { id: "fullstack", label: "Full Stack Development", count: 48 },
  { id: "web",  label: "Web Development", count: 72 },
  { id: "data", label: "Data Science", count: 55 },
  { id: "design", label: "UI/UX Design", count: 39 },
];

const COURSES = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    category: "fullstack",
    level: "Intermediate",
    duration: "3–6 Months",
    mode: "Online",
    rating: 4.9,
    students: 12400,
  
    desc: "Master React, Node.js, MongoDB, and deploy production-grade apps from scratch.",
   
  },
  {
    id: 2,
    title: "UI/UX Design: Zero to Pro",
    category: "design",
    level: "Beginner",
    duration: "1–3 Months",
    mode: "Online",
    rating: 4.8,
    students: 8700,
    
    desc: "Learn Figma, design systems, user research, and prototyping principles.",
    
  },
  {
    id: 3,
    title: "Data Science with Python",
    category: "data",
    level: "Intermediate",
    duration: "3–6 Months",
    mode: "Online",
    rating: 4.7,
    students: 9800,
    
    desc: "NumPy, Pandas, Scikit-learn, and real-world ML projects.",
   
  },
  {
    id: 4,
    title: "Modern JavaScript & ES2024",
    category: "web",
    level: "Beginner",
    duration: "1–3 Months",
    mode: "Offline",
    rating: 4.6,
    students: 6500,
   
    desc: "Closures, asygnc/await, modules — modern JS from fundamentals to advanced.",
    
  },
  {
    id: 5,
    title: "Advanced React & Next.js",
    category: "fullstack",
    level: "Advanced",
    duration: "3–6 Months",
    mode: "Online",
    rating: 4.9,
    students: 5300,
   
    desc: "Server components, App Router, streaming, and performance optimization.",
    
  },
  {
    id: 6,
    title: "Machine Learning A–Z",
    category: "data",
    level: "Advanced",
    duration: "3–6 Months",
    mode: "Online",
    rating: 4.8,
    students: 7100,
   
    desc: "Supervised, unsupervised, deep learning, and neural network architecture.",
   
  },
  {
    id: 7,
    title: "Responsive Web Design Mastery",
    category: "web",
    level: "Beginner",
    duration: "1–3 Months",
    mode: "Online",
    rating: 4.5,
    students: 4200,
    
    desc: "CSS Grid, Flexbox, animations, and building pixel-perfect layouts.",
   
  },
  {
    id: 8,
    title: "Product Design Thinking",
    category: "design",
    level: "Intermediate",
    duration: "1–3 Months",
    mode: "Offline",
    rating: 4.7,
    students: 3900,
   
    desc: "Design sprints, usability testing, and launching user-centric products.",
   
  },
];

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
const DURATIONS = ["All", "1–3 Months", "3–6 Months"];
const MODES = ["All", "Online", "Offline"];

/* ── Component ─────────────────────────────────────────── */
export default function FindLearning() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [level, setLevel] = useState("All");
  const [duration, setDuration] = useState("All");
  const [mode, setMode] = useState("All");
  const [saved, setSaved] = useState([]);

  const toggleSave = (id) =>
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const q = search.toLowerCase();
      if (q && !c.title.toLowerCase().includes(q) && !c.desc.toLowerCase().includes(q))
        return false;
      if (activeCategory !== "all" && c.category !== activeCategory) return false;
      if (level !== "All" && c.level !== level) return false;
      if (duration !== "All" && c.duration !== duration) return false;
      if (mode !== "All" && c.mode !== mode) return false;
      return true;
    });
  }, [search, activeCategory, level, duration, mode]);

  return (
    <main className="fl-page">

      {/* ── Hero Banner ── */}
      <section className="fl-hero">
        <div className="fl-hero-bg" aria-hidden="true">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>
        <div className="fl-hero-content">
          <p className="fl-eyebrow">Learning Paths for the Future</p>
          <h1 className="fl-hero-title">
            Find the <span className="fl-gradient-text">Right Course</span><br />
            for You
          </h1>
          <p className="fl-hero-sub">
            Thousands of curated courses. One clear path forward.
          </p>

          {/* Search Bar */}
          <div className="fl-search-bar">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, skills, topics…"
              className="fl-search-input"
            />
            {search && (
              <button className="fl-search-clear" onClick={() => setSearch("")}>✕</button>
            )}
          </div>

          {/* Quick links */}
          <div className="fl-quick-links">
            <span className="fl-quick-label">Quick&nbsp;Links:</span>
            {["Popular Courses", "Trending Skills", "Recently Added"].map((q) => (
              <button key={q} className="fl-quick-chip">{q}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Body ── */}
      <section className="fl-body">
        <div className="fl-container">

          {/* ── Sidebar Filters ── */}
          <aside className="fl-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Filters</h3>

              <div className="filter-block">
                <p className="filter-block-label">Level</p>
                <div className="filter-pill-group">
                  {LEVELS.map((l) => (
                    <button
                      key={l}
                      className={`filter-pill${level === l ? " active" : ""}`}
                      onClick={() => setLevel(l)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-block">
                <p className="filter-block-label">Duration</p>
                <div className="filter-pill-group">
                  {DURATIONS.map((d) => (
                    <button
                      key={d}
                      className={`filter-pill${duration === d ? " active" : ""}`}
                      onClick={() => setDuration(d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-block">
                <p className="filter-block-label">Mode</p>
                <div className="filter-pill-group">
                  {MODES.map((m) => (
                    <button
                      key={m}
                      className={`filter-pill${mode === m ? " active" : ""}`}
                      onClick={() => setMode(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                className="fl-reset-btn"
                onClick={() => {
                  setLevel("All");
                  setDuration("All");
                  setMode("All");
                  setActiveCategory("all");
                  setSearch("");
                }}
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* ── Content Area ── */}
          <div className="fl-content">

            {/* Category Tabs */}
            <div className="fl-categories">
              <button
                className={`cat-tab${activeCategory === "all" ? " active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All Courses
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`cat-tab${activeCategory === c.id ? " active" : ""}`}
                  onClick={() => setActiveCategory(c.id)}
                >
                  <span>{c.icon}</span> {c.label}
                  <span className="cat-count">{c.count}</span>
                </button>
              ))}
            </div>

            {/* Results Info */}
            <div className="fl-results-info">
              <span>
                Showing <strong>{filtered.length}</strong> course{filtered.length !== 1 ? "s" : ""}
                {search && <> for "<strong>{search}</strong>"</>}
              </span>
            </div>

            {/* Course Grid */}
            {filtered.length === 0 ? (
              <div className="fl-empty">
                <p>No courses match your filters.</p>
                <button
                  className="fl-reset-btn"
                  onClick={() => {
                    setLevel("All");
                    setDuration("All");
                    setMode("All");
                    setActiveCategory("all");
                    setSearch("");
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="fl-grid">
                {filtered.map((course) => (
                  <div key={course.id} className="course-card" style={{ "--card-accent": course.accent }}>
                    <div className="card-top">
                      <button
                        className={`card-save${saved.includes(course.id) ? " saved" : ""}`}
                        onClick={() => toggleSave(course.id)}
                        aria-label="Save course"
                      >
                        {saved.includes(course.id) ? "❤️" : "🤍"}
                      </button>
                    </div>

                    <div className="card-accent-bar" />

                    <div className="card-body">
                      <h3 className="card-title">{course.title}</h3>
                      <p className="card-desc">{course.desc}</p>

                      <div className="card-meta">
                        <span className="meta-chip meta-level">{course.level}</span>
                        <span className="meta-chip meta-mode">{course.mode}</span>
                        <span className="meta-chip meta-duration">⏱ {course.duration}</span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <div className="card-rating">
                        <span className="star">★</span>
                        <span className="rating-val">{course.rating}</span>
                        <span className="rating-count">({course.students.toLocaleString()})</span>
                      </div>
                      <Link to="#" className="card-cta">
                        Enroll Now →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}