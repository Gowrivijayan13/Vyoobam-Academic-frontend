import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/vyoobamlogo_rm.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="header-container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">

            <Link to="/find-learning" className={`nav-link ${location.pathname === "/find-learning" ? "active-link" : ""}`}>
              Find Learning
            </Link>

            <Link to="/discover-paths" className={`nav-link ${location.pathname === "/discover-paths" ? "active-link" : ""}`}>
              Discover Paths
            </Link>

            <Link to="/skill-lab" className={`nav-link ${location.pathname === "/skill-lab" ? "active-link" : ""}`}>
              Skill Lab
            </Link>

            <Link to="/earn-credentials" className={`nav-link ${location.pathname === "/earn-credentials" ? "active-link" : ""}`}>
              Earn Credentials
            </Link>

            <Link to="/career-launchpad" className={`nav-link ${location.pathname === "/career-launchpad" ? "active-link" : ""}`}>
              Career Launchpad
            </Link>

            <Link to="/who-we-are" className={`nav-link ${location.pathname === "/who-we-are" ? "active-link" : ""}`}>
              Who We Are
            </Link>

          </nav>

          {/* Right Buttons */}
          <div>
            <button className="btn btn-secondary">Join</button>
          </div>

          {/* Mobile Toggle */}
          <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/find-learning" onClick={() => setMenuOpen(false)}>Find Learning</Link>
        <Link to="/discover-paths" onClick={() => setMenuOpen(false)}>Discover Paths</Link>
        <Link to="/skill-lab" onClick={() => setMenuOpen(false)}>Skill Lab</Link>
        <Link to="/earn-credentials" onClick={() => setMenuOpen(false)}>Earn Credentials</Link>
        <Link to="/career-launchpad" onClick={() => setMenuOpen(false)}>Career Launchpad</Link>
        <Link to="/who-we-are" onClick={() => setMenuOpen(false)}>Who We Are</Link>
      </div>
    </>
  );
}

export default Header;