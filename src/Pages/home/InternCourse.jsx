import React, { useEffect, useRef } from "react";
import "./InternCourse.css";
import {Link} from"react-router-dom"

const courses = [
  {
    title: "Full Stack Development",
    tag: "Most Popular",
    img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&q=80",
    desc: "Master frontend & backend technologies to build complete web applications from scratch.",
    badge: "#00C2CB",
  },
  {
    title: "Web Development",
    tag: "Beginner Friendly",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    desc: "Learn HTML, CSS, JavaScript and modern frameworks to craft stunning web experiences.",
    badge: "#FF4F8B",
  },
  {
    title: "Data Science",
    tag: "High Demand",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    desc: "Analyse data, build models and derive insights using Python, Pandas and ML tools.",
    badge: "#00C2CB",
  },
  {
    title: "UI/UX Design",
    tag: "Creative Track",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    desc: "Design user-first interfaces with Figma, design systems and real-world prototyping.",
    badge: "#FF4F8B",
  },
];

const internHighlights = [
  {
    icon: "🚀",
    title: "Live Project Experience",
    desc: "Work on real client projects alongside your learning journey.",
  },
  {
    icon: "🎓",
    title: "Expert Mentorship",
    desc: "Get guided by industry professionals with hands-on experience.",
  },
  {
    icon: "📜",
    title: "Internship Certificate",
    desc: "Earn a verified certificate to showcase your practical skills.",
  },
];

const includes = [
  "Real-world projects",
  "Industry tools",
  "Hands-on learning",
];

export default function InternCourse() {
  const cardsRef = useRef([]);
  const internRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ic-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    if (internRef.current) observer.observe(internRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ───── COURSES SECTION ───── */}
      <section className="ic-courses-section" id="courses">
        <div className="ic-container">
          {/* Header */}
          <div className="ic-section-header">
            <span className="ic-eyebrow">What We Offer</span>
            <h2 className="ic-heading">
              Explore Our{" "}
              <span className="ic-gradient-text">Skill-Based Courses</span>
            </h2>
            <p className="ic-subtext">
              Build strong technical skills with our industry-focused courses
              designed for real-world learning.
            </p>
          </div>

          {/* Includes pills */}
          <div className="ic-includes-row">
            {includes.map((item, i) => (
              <span key={i} className="ic-pill">
                ✦ {item}
              </span>
            ))}
          </div>

          {/* Course Cards */}
          <div className="ic-courses-grid">
            {courses.map((course, i) => (
              <div
                key={i}
                className="ic-course-card"
                ref={(el) => (cardsRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="ic-card-img-wrap">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="ic-card-img"
                  />
                  <span
                    className="ic-card-tag"
                    style={{ background: course.badge }}
                  >
                    {course.tag}
                  </span>
                </div>
                <div className="ic-card-body">
                  <h3 className="ic-card-title">{course.title}</h3>
                  <p className="ic-card-desc">{course.desc}</p>
                  <button className="ic-card-btn">
                    Explore Course 
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="ic-cta-wrap">
            <Link to ="/find-learning"><button className="ic-primary-btn">
              View All Courses
              <span className="ic-btn-shine" />
            </button></Link>
          </div>
        </div>
      </section>

      {/* ───── INTERNSHIP SECTION ───── */}
      <section className="ic-intern-section" id="internship">
        <div className="ic-container">
          <div
            className="ic-intern-inner"
            ref={internRef}
          >
            {/* Left */}
            <div className="ic-intern-left">
              <span className="ic-eyebrow ic-eyebrow--light">
                Internship Programs
              </span>
              <h2 className="ic-heading ic-heading--white">
                Learn by Doing –{" "}
                <span className="ic-gradient-text">Internship Programs</span>
              </h2>
              <p className="ic-subtext ic-subtext--light">
                Gain practical experience by working on real-time projects. Our
                internships help you apply what you learn in real scenarios.
              </p>

              <div className="ic-intern-highlights">
                {internHighlights.map((h, i) => (
                  <div key={i} className="ic-highlight-card">
                    <span className="ic-highlight-icon">{h.icon}</span>
                    <div>
                      <h4 className="ic-highlight-title">{h.title}</h4>
                      <p className="ic-highlight-desc">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

             <Link to="/contact"> <button className="ic-primary-btn ic-primary-btn--outline">
                Apply for Internship 
              </button></Link>
            </div>

            {/* Right – image collage */}
            <div className="ic-intern-right">
              <div className="ic-collage">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                  alt="Internship teamwork"
                  className="ic-collage-main"
                />
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
                  alt="Mentorship"
                  className="ic-collage-thumb"
                />
                <div className="ic-collage-badge">
                  <span className="ic-badge-num">500+</span>
                  <span className="ic-badge-label">Interns Placed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}