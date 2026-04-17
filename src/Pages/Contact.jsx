import { useState } from "react";
import "./Contact.css";
import hero from "../assets/hero.png"; 
const Contact=()=> {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "+91 ", message: "" });
  };

  return (
    <div className="contact-page page-container">
      {/* ── HERO SECTION ── */}
      <section className="contact-hero">
        {/* Decorative blobs */}
        <div className="blob blob-yellow" />
        <div className="blob blob-purple" />
        <div className="blob blob-pink" />

        <div className="hero-content">
          <span className="hero-tag">We'd love to hear from you</span>
          <h1 className="hero-heading">
            Let's Start a{" "}
            <span className="highlight-box">Conversation</span>
          </h1>
          <p className="hero-sub">
            Have a question, need guidance, or exploring your next step? We're
            here to help you move forward with confidence.
          </p>
        </div>

        {/* Student image — mirrors the hero image from the template */}
        <div className="hero-image-wrap">
          <div className="image-blob-bg" />
          <img src={hero} alt="Student" className="hero-img" />
          {/* Floating icon badges like in the template */}
          <div className="badge badge-mail">✉️</div>
          <div className="badge badge-chat">💬</div>
          <div className="badge badge-star">⭐</div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="contact-body">
        {/* ── FORM CARD ── */}
        <div className="contact-form-card">
          <h2>Send us a Message</h2>

          {submitted && (
            <div className="success-banner">
              Message sent! We'll respond within 24 hours.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label>
                Full Name <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label>
                Email Address <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label>
                Phone Number <span className="req">*</span>
              </label>
              <div className="input-wrap">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us what you're looking for — courses, internships, or career guidance."
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message →
            </button>
          </form>
        </div>

        {/* ── SIDE INFO CARD ── */}
        <div className="contact-info-card">
          {/* About */}
          <div className="info-block about-block">
            <div className="brand-logo-sm">
              <div className="logo-orb" />
              <span>Vyoobam</span>
            </div>
            <h3>Vyoobam Learning Hub</h3>
            <p>
              Vyoobam is a modern learning platform designed to bridge the gap
              between education and real-world careers. We help students and
              professionals gain practical skills, hands-on experience, and the
              confidence to succeed in today's fast-changing tech industry.
            </p>
          </div>

          {/* Contact Details */}
          <div className="info-block details-block">
            <h4>Contact Details</h4>
            <ul className="contact-list">
              <li>
                <div>
                  <span className="clabel">Email</span>
                  <a href="mailto:support@vyoobam.com">support@vyoobam.com</a>
                </div>
              </li>
              <li>
                <div>
                  <span className="clabel">Phone</span>
                  <a href="tel:9003179142">+91 9003179142</a>
                </div>
              </li>
              <li>
                <div>
                  <span className="clabel">Location</span>
                  <span>Anees Nagar, 815, Mutthupillai Mandapam, Kumbakonam, Tamil Nadu 612401</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Support Line */}
          <div className="info-block support-block">
            <p>
              Need quick help? Our team typically responds within{" "}
              <strong>24 hours</strong>.
            </p>
          </div>

          {/* Social */}
          <div className="info-block social-block">
            <h4>Connect With Us</h4>
            <p>
              Stay updated with new courses, internships, and career tips.
              Follow us and be part of our learning community.
            </p>
            <div className="social-icons">
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="Instagram">Ig</a>
              <a href="#" className="social-btn" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="contact-cta">
        <div className="cta-blob" />
        <div className="cta-content">
          <h2>Your Journey Starts Here</h2>
          <p>
            Take the first step towards building real-world skills and a
            successful career.
          </p>
          <div className="cta-btns">
            <button className="btn btn-primary">Send Message</button>
            <button className="btn btn-secondary">Explore Courses</button>
          </div>
        </div>
        {/* Partner strip — mirrors the template's partner bar */}
        <div className="partners-strip">
          <span className="partners-label">Explore 100+ Expert-Curated Courses to Elevate Your Skills and Future</span>
          <div className="partner-logos">
            <span>Grow</span>
            <span>Success</span>
            <span>Future</span>
            <span>Skills</span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;