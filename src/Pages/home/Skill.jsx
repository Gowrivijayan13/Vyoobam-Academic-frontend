import React, { useEffect, useRef, useState } from "react";
import "./Skill.css";
import lock from "../../assets/lock.png";

/* ── Data ── */
const skillItems = [
  {
    icon: "📄",
    title: "Resume Guidance",
    desc: "Craft a job-winning resume that stands out to recruiters.",
  },
  {
    icon: "🗣️",
    title: "Communication Skills",
    desc: "Present ideas clearly and confidently in professional settings.",
  },
  {
    icon: "🛠️",
    title: "Project-Based Learning",
    desc: "Apply concepts by building real projects that employers value.",
  },
  {
    icon: "🌐",
    title: "Industry Exposure",
    desc: "Connect with live scenarios and industry best practices daily.",
  },
];

const stats = [
  { emoji: "🎓", value: "1000+", label: "Students Enrolled" },
  { emoji: "📚", value: "200+", label: "Projects Completed" },
  { emoji: "🧑‍💻", value: "50+", label: "Expert Mentors" },
  { emoji: "⭐", value: "4.8", label: "Student Rating" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "This course helped me understand real-world concepts through practical projects. The internship experience made learning much easier.",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "The mentors were incredibly supportive. I landed my first job within two months of completing the program. Highly recommended!",
    stars: 5,
  },
  {
    name: "Kavya Nair",
    role: "Data Science Intern",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "I loved how every module was tied to a real project. The resume guidance gave me the confidence to apply to top companies.",
    stars: 5,
  },
];

/* ── Animated Counter ── */
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
          const suffix = target.replace(/[0-9.]/g, "");
          const duration = 1800;
          const steps = 60;
          const increment = numeric / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numeric) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(
                (Math.floor(current * 10) / 10).toString() + suffix
              );
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="sk-stat-num">{count || "0"}</span>;
}

export default function Skill() {
  const skillRef = useRef([]);
  const impactRef = useRef(null);
  const testiRef = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("sk-visible");
        });
      },
      { threshold: 0.1 }
    );
    skillRef.current.forEach((el) => el && observer.observe(el));
    if (impactRef.current) observer.observe(impactRef.current);
    testiRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* auto-rotate testimonials */
  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % testimonials.length),
      4000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ───── SKILL DEVELOPMENT SECTION ───── */}
      <section className="sk-skill-section" id="skills">
        <div className="sk-container">
          {/* Header */}
          <div className="sk-section-header">
            <span className="sk-eyebrow">Skill Development</span>
            <h2 className="sk-heading">
              Build Skills That <span className="sk-gradient-text">Matter</span>
            </h2>
            <p className="sk-subtext">
              We focus on helping you develop practical knowledge,
              problem-solving ability, and confidence to work on real projects.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="sk-skill-grid">
            {skillItems.map((item, i) => (
              <div
                key={i}
                className="sk-skill-card"
                ref={(el) => (skillRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="sk-skill-icon">{item.icon}</div>
                <h3 className="sk-skill-title">{item.title}</h3>
                <p className="sk-skill-desc">{item.desc}</p>
                <div className="sk-card-line" />
              </div>
            ))}
          </div>

          {/* Banner image strip */}
          <div className="sk-img-strip">
            <img
              src={lock}
              alt="Skill building workshop"
              className="sk-strip-img"
            />
            <div className="sk-strip-overlay">
              <p className="sk-strip-quote">
                "Practical skills open doors that degrees can only knock on."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── LEARNING IMPACT SECTION ───── */}
      <section className="sk-impact-section" id="impact">
        <div className="sk-container">
          <div
            className="sk-impact-inner"
            ref={impactRef}
          >
            <div className="sk-impact-left">
              <span className="sk-eyebrow">Our Numbers</span>
              <h2 className="sk-heading">
                Our <span className="sk-gradient-text">Learning Impact</span>
              </h2>
              <p className="sk-subtext sk-subtext--left">
                Every number here is a student who took the leap, stayed
                committed, and came out with skills that made a difference.
              </p>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80"
                alt="Students learning"
                className="sk-impact-img"
              />
            </div>

            <div className="sk-stats-grid">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="sk-stat-card"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <span className="sk-stat-emoji">{s.emoji}</span>
                  <Counter target={s.value} />
                  <span className="sk-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS SECTION ───── */}
      <section className="sk-testi-section" id="testimonials">
        <div className="sk-container">
          <div className="sk-section-header">
            <span className="sk-eyebrow">Student Reviews</span>
            <h2 className="sk-heading">
              What Our <span className="sk-gradient-text">Students Say</span>
            </h2>
          </div>

          <div className="sk-testi-grid">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`sk-testi-card ${i === active ? "sk-testi-active" : ""}`}
                ref={(el) => (testiRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.1}s` }}
                onClick={() => setActive(i)}
              >
                <div className="sk-testi-stars">
                  {"★".repeat(t.stars)}
                </div>
                <p className="sk-testi-text">"{t.text}"</p>
                <div className="sk-testi-author">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="sk-testi-avatar"
                  />
                  <div>
                    <span className="sk-testi-name">{t.name}</span>
                    <span className="sk-testi-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="sk-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`sk-dot ${i === active ? "sk-dot--active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}