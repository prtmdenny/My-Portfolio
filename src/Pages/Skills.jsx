import React from "react";

const skillsData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Frontend Development",
    items: ["JavaScript (ES6+)", "React.js", "HTML5 & CSS3", "Vue.js", "Responsive Design", "Component-Based Architecture"],
    progress: 88
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Backend & API",
    items: ["REST API Integration", "Node.js (Basic)", "Express.js (Basic)"],
    progress: 68
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: "Database",
    items: ["MySQL", "CRUD Operations", "Database Fundamentals"],
    progress: 75
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: "Tools & Technologies",
    items: ["Git & GitHub", "Postman", "Figma", "Visual Studio Code"],
    progress: 92
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Testing & Debugging",
    items: ["Selenium", "Debugging", "Bug Fixing"],
    progress: 70
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
    ),
    title: "Additional Skills",
    items: ["Problem Solving", "Critical Thinking", "Basic UI/UX Understanding"],
    progress: 85
  }
];

function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-container">
        <div className="skills-header">
          <h1>Skills</h1>
          <p>Here are some of the technical skills and tools I have experience with as a frontend and aspiring full-stack developer.</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index} style={{ animationDelay: `${index * 100}ms` }}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.title}</h3>
              
              <ul className="skill-list">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.progress}%` }}></div>
                </div>
                <span className="progress-text">{skill.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;