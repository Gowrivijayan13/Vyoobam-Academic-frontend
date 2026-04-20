import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../assets/vyoobamlogo_rm.png";

const navLinks = [
  { to: "/find-learning",    label: "Find Learning" },
  { to: "/discover-paths",   label: "Discover Paths" },
  { to: "/skill-lab",        label: "Skill Lab" },
  { to: "/earn-credentials", label: "Earn Credentials" },
  { to: "/career-launchpad", label: "Career Launchpad" },
  { to: "/who-we-are",       label: "Who We Are" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>

        {/* LEFT — Logo only, no background */}
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Vyoobam logo" />
          </Link>
        </div>

        {/* CENTER — Nav pill */}
        <nav className="header-nav-pill">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${isActive(link.to) ? "active-link" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — Join button only, no background */}
        <div className="header-join">
          <button className="btn">Join</button>
        </div>

        {/* MERGED PILL — shown only on scroll */}
        <div className="header-merged">

          <Link to="/" className="merged-logo">
            <img src={logo} alt="Vyoobam logo" />
          </Link>

          <div className="merged-divider" />

          <nav className="merged-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${isActive(link.to) ? "active-link" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="merged-divider" />

          <button className="btn merged-btn">Join</button>

        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <button className="btn" style={{ marginTop: "1rem" }}>Join</button>
      </div>
    </>
  );
}

export default Header;