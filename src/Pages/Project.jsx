import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Rakomsis 4.0",
    category: "Full-Stack Web Application",
    description: "Developed and refined the Rakomsis 4.0 website, including UI migration, frontend development using Vue.js and JavaScript, implementation of interactive features, form validation, and user experience optimization in preparation for the system launch in 2026.",
    images: [
      "/Rakomsis/Login.png",
      "/Rakomsis/Customer-View.png",
      "/Rakomsis/Management.png",
      "/Rakomsis/Product.png",
      "/Rakomsis/Sales-Lead.png"
    ],
    tech: ["Vue.js", "Vite", "SCSS", "MySQL"],
    github: "https://github.com/prtmdenny/Rakomsis-Project.git",
    demo: "https://rakomsis.com/",
    features: [
      "Interactive Dashboard UI",
      "User Registration & Management",
      "Progress Monitoring System",
      "Report Generation & Statistics"
    ]
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description: "A modern portfolio website built with React.js featuring smooth animations, React Router, and fully responsive design.",
    images: [
      "/Portfolio/Hero.jpg",
      "/Portfolio/Skills.jpg",
      "/Portfolio/Project.jpg"
    ],
    tech: ["React", "React Router", "Tailwind CSS"],
    github: "https://github.com/prtmdenny/My-Portfolio.git",
    features: [
      "Single Page Application",
      "Smooth Animations",
      "Responsive Design"
    ]
  },
  {
    id: 3,
    title: "Clothing Store UI Practice",
    category: "Frontend Practice",
    description: "Practice project focused on building a clean and modern e-commerce clothing store interface using HTML and CSS.",
    images: [
      "/Ecommerce/Dashboard.png",
      "/Ecommerce/Product.png",
      "/Ecommerce/About-us.png"
    ],
    tech: ["HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/prtmdenny/HTML-CSS-Practice.git",
    features: [
      "Modern UI Design",
      "Mobile-First Approach",
      "Hover Effects"
    ]
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      setIsZoomed(false);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
      setIsZoomed(false);
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>Here are some of the projects I've worked on as a frontend developer showcasing my skills and experience.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.images[0]} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <button 
                  className="btn-view-details"
                  onClick={() => openModal(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal dengan Zoom + Gallery */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>

            {/* Gallery Gambar */}
            <div className="modal-gallery">
              <button className="gallery-btn prev" onClick={prevImage}>←</button>
              
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title}
                className={`modal-image ${isZoomed ? 'zoomed' : ''}`}
                onClick={toggleZoom}
              />

              <button className="gallery-btn next" onClick={nextImage}>→</button>
            </div>

            {/* Thumbnail Preview */}
            <div className="thumbnail-container">
              {selectedProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsZoomed(false);
                  }}
                />
              ))}
            </div>

            {/* Project Info */}
            <div className="modal-info">
              <h2>{selectedProject.title}</h2>
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-desc">{selectedProject.description}</p>

              <div className="modal-tech">
                <h4>Tech Stack</h4>
                <div className="tech-stack">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-buttons">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                  View on GitHub
                </a>
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                    Try Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;