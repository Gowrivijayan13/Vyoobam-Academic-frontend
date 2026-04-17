import { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    id: 1,
    question: "What is the course duration?",
    answer:
      "Our programs range from 3 to 12 months depending on the track you choose. Each course is thoughtfully structured with live sessions, recorded content, and hands-on projects so you learn at a pace that fits your lifestyle without sacrificing depth.",
  },
  {
    id: 2,
    question: "Are classes online or offline?",
    answer:
      "All classes are conducted fully online via our interactive platform, giving you the freedom to learn from anywhere in the world. Live sessions are scheduled on weekends and evenings, with recordings available 24/7 so you never miss a beat.",
  },
  {
    id: 3,
    question: "Do I get a certificate?",
    answer:
      "Yes! Upon successful completion of your course, you'll receive a verified digital certificate recognized by our industry partners. You can share it directly on LinkedIn or add it to your resume to stand out to employers.",
  },
  {
    id: 4,
    question: "Are internships included?",
    answer:
      "Absolutely. Our premium tracks include guaranteed internship placements with our 200+ hiring partners. Even in our standard courses, you'll get access to our exclusive internship portal, career counseling, and placement support to help you land your first role.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section">
      {/* Left Column */}
      <div className="faq-left">
        <span className="faq-badge">
          <span className="faq-badge-dot" />
          Frequently asked questions
        </span>
        <h2 className="faq-heading">
          Frequently asked{" "}
          <span className="faq-heading-gradient">questions</span>
        </h2>
        <p className="faq-subtext">
          Choose a plan that fits your learning goals and schedule. No hidden
          fees, no surprises just straightforward access to world-class
          education.
        </p>

        <div className="faq-decoration">
          <div className="faq-deco-circle faq-deco-1" />
          <div className="faq-deco-circle faq-deco-2" />
        </div>
      </div>

      {/* Right Column */}
      <div className="faq-right">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              onClick={() => toggle(faq.id)}
            >
              <div className="faq-item-header">
                <span className="faq-question">{faq.question}</span>
                <button
                  className={`faq-icon-btn ${isOpen ? "faq-icon-btn--open" : ""}`}
                  aria-label={isOpen ? "Collapse" : "Expand"}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L7 10L12 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className={`faq-answer-wrapper ${isOpen ? "faq-answer-wrapper--open" : ""}`}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}