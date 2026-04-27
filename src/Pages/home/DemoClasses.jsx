import "./DemoClasses.css";
import {Link} from "react-router-dom"
const features = [
  {
    icon: "",
    label: "Live Interactive Session",
    desc: "Real-time learning with our expert mentors",
  },
  {
    icon: "",
    label: "Ask Anything — Q&A Included",
    desc: "Get your doubts cleared on the spot",
  },
  {
    icon: "",
    label: "Curriculum Walkthrough",
    desc: "See exactly what you'll learn over the course",
  },
  {
    icon: "",
    label: "Zero Commitment Required",
    desc: "Explore freely — no payment, no pressure",
  },
];

export default function DemoClasses() {
  return (
    <section className="demo-section">
      {/* Background blobs */}
      <div className="demo-blob demo-blob--teal" />
      <div className="demo-blob demo-blob--pink" />

      <div className="demo-inner">
        {/* ── Left: Text Content ─────────────────────── */}
        <div className="demo-left">
          <span className="demo-badge">
            <span className="demo-badge-pulse" />
            Demo Classes
          </span>

          <h2 className="demo-heading">
            Try Before
            <br />
            <span className="demo-heading-gradient">You Start</span>
          </h2>

          <p className="demo-body">
            Attend a free demo class to experience our teaching approach — no
            strings attached. Get a real feel for our curriculum, mentors, and
            community before you commit.
          </p>

          <div className="demo-meta">
            <div className="demo-meta-item">
              <span className="demo-meta-icon"></span>
              <span>60 min session</span>
            </div>
            <div className="demo-meta-item">
              <span className="demo-meta-icon"></span>
              <span>Every Saturday</span>
            </div>
            <div className="demo-meta-item">
              <span className="demo-meta-icon"></span>
              <span>100% Online</span>
            </div>
          </div>

          <Link to="/contact" className="demo-cta">
            <span>Book Free Demo</span>
          
          </Link>

          <p className="demo-disclaimer">
            No credit card required &nbsp;·&nbsp; Instant confirmation
          </p>
        </div>

        {/* ── Right: Feature Card ────────────────────── */}
        <div className="demo-right">
          <div className="demo-card">
            <div className="demo-card-header">
              <div className="demo-card-avatar">
                <span>MK</span>
              </div>
              <div className="demo-card-mentor">
                <p className="demo-card-name">Mentor: vijayan N.</p>
                <p className="demo-card-role">Senior Full‑Stack Developer · 9 yrs exp</p>
              </div>
              <span className="demo-live-badge">LIVE</span>
            </div>

            <div className="demo-card-divider" />

            <p className="demo-card-label">What's inside your free demo</p>

            <ul className="demo-features">
              {features.map((f, i) => (
                <li key={i} className="demo-feature-item" style={{ "--i": i }}>
                  <span className="demo-feature-icon">{f.icon}</span>
                  <div>
                    <p className="demo-feature-label">{f.label}</p>
                    <p className="demo-feature-desc">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="demo-card-footer">
              <div className="demo-seats">
                <div className="demo-seats-avatars">
                  {["A", "B", "C", "D"].map((l, i) => (
                    <span key={i} className="demo-seat-avatar" style={{ "--j": i }}>
                      {l}
                    </span>
                  ))}
                </div>
                <p>
                  <strong>240+</strong> students joined this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}