import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-dennySVG.svg";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Navigasi Kiri - Desktop */}
        <nav className="header-left">
          <ul className="header-list">
            <li><Link to="/">Hero</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Logo di Tengah */}
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="Denny Suwando Pratama" />
          </Link>
        </div>

        {/* Tombol Resume - Desktop */}
        <div className="header-right">
          <a 
            href="/resume-Denny.pdf" 
            download="Resume-Denny.pdf" target="_blank"
          >
            <button className="download-btn">Download My Resume</button>
          </a>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Project</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          
          {/* Tombol Resume di Mobile Menu */}
          <a 
            href="/resume-Denny.pdf" 
            download="Resume-Denny.pdf"
            target="_blank"
            onClick={toggleMenu}
          >
            <button className="download-btn mobile-resume-btn">
              Download My Resume
            </button>
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;