import { useState } from "react";
import "./Contact.css";
import hero from "../assets/hero.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0j41ccl",
        "template_7lcaur8",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "s87SPucOWGMXh9uBy",
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setForm({ name: "", email: "", phone: "+91 ", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Failed to send message");
        },
      );
  };

  return (
    <div className="contact-page page-container">
      {/* HERO */}
      <section className="contact-hero">
        <div className="blob blob-yellow" />
        <div className="blob blob-purple" />
        <div className="blob blob-pink" />

        <div className="hero-content">
          <span className="hero-tag">We'd love to hear from you</span>
          <h1 className="hero-heading">
            Let's Start a <span className="highlight-box">Conversation</span>
          </h1>
          <p className="hero-sub">
            Have a question, need guidance, or exploring your next step? We're
            here to help you move forward with confidence.
          </p>
        </div>

        <div className="hero-image-wrap">
          <div className="image-blob-bg" />
          <img src={hero} alt="Student" className="hero-img" />
          <div className="badge badge-mail">✉️</div>
          <div className="badge badge-chat">💬</div>
          <div className="badge badge-star">⭐</div>
        </div>
      </section>

      {/* MAIN */}
      <section className="contact-body">
        {/* FORM CARD */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-ui">
              <h2>Message Sent Successfully!</h2>
              <p>
                Thanks for reaching out to <strong>VyoobamTech</strong>. Our HR
                team will review your message and get back to you within
                <strong> 24 hours</strong>.
              </p>
              <p className="sub-text">
                Keep an eye on your inbox-we’re excited to connect with you!
              </p>

              <button
                className="btn btn-primary"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2>Send us a Message</h2>

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

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* SIDE INFO (unchanged) */}
        <div className="contact-info-card">
          <div className="info-block about-block">
            <div className="brand-logo-sm">
              <div className="logo-orb" />
              <span>Vyoobam</span>
            </div>
            <h3>Vyoobam Learning Hub</h3>
            <p>
              Vyoobam is a modern learning platform designed to bridge the gap
              between education and real-world careers.
            </p>
          </div>

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
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
