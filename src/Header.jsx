import { useState } from "react";
import Logo from "./assets/icon-Denny-noBG.png";
import downloadResume from "./assets/resume-Denny.pdf";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Navigasi Desktop */}
        <nav className="header-nav desktop-nav">
          <ul className="header-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

                {/* Logo */}
        <div className="header-logo">
          <a href="/">
            <img src={Logo} alt="Denny Suwando Pratama" />
            
          </a>
        </div>

        {/* Tombol Resume Desktop */}
        <div className="header-resume desktop-resume">
          <a href={downloadResume} download="resume-Denny.pdf">
            <button className="download-btn">Download My Resume</button>
          </a>
        </div>

        {/* Hamburger Mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Project</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            <li>
              <a href={downloadResume} download="resume-Denny.pdf" onClick={toggleMenu}>
                <button className="download-btn mobile-resume-btn">Download My Resume</button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;