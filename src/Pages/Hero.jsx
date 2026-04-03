import AnimationPicture from "../assets/animation-picture.png";
import AnimationPicture2 from "../assets/animation-picture2.png";
import AnimationPicture3 from "../assets/animation-picture3.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Gambar di tengah atas */}
        <div className="hero-img">
          <img 
            src={AnimationPicture} 
            alt="Denny Suwando Pratama" 
          />
            <img 
              src={AnimationPicture3} 
              alt="Denny Suwando Pratama" 
            />
          <img 
            src={AnimationPicture2} 
            alt="Denny Suwando Pratama" 
          />
        </div>

        {/* Teks */}
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="highlight1">Denny</span> Suwando 
            <span className="highlight2"> Pratama</span>
          </h1>

          <p className="hero-bio">
            Hello, I am a Frontend Developer with a strong interest in building web applications using React.js. 
            I enjoy transforming ideas into interactive, responsive interfaces that deliver a great user experience. 
            I am also open to learning new programming languages and continuously developing my skills toward becoming a Full Stack Developer.
          </p>

          {/* Tombol Projects & Contact */}
          <div className="hero-button">
            <a href="/projects" className="btn-primary">Check out my projects →</a>
            <a href="/contact" className="btn-secondary">Contact me →</a>
          </div>

          {/* Social Icons - GitHub & LinkedIn */}
          <div className="hero-social">
            <a href="https://github.com/prtmdenny" target="_blank" rel="noopener noreferrer" className="social-icon">
              {/* GitHub Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.044-.015-2.051-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.221 0 4.609-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/dennysuwando" target="_blank" rel="noopener noreferrer" className="social-icon">
              {/* LinkedIn Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 7C5.12 7 4 5.88 4 4.5 4 3.12 5.12 2 6.5 2 7.88 2 9 3.12 9 4.5 9 5.88 7.88 7 6.5 7zM20 19h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V19h-3v-11h3v1.5c.88-1.32 2.34-2 3.88-2 2.76 0 5 2.24 5 5V19z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;