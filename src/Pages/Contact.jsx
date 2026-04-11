import React, { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("❗ Please fill in all required fields (Name, Email, Message)");
      return;
    }

    const subject = encodeURIComponent(formData.subject || "New Message from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:prtmdenny@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });

    alert("✅ Message prepared! Your email client will open now.");
  };

  return (
    <section className="contact" id="contact">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">
          Let’s connect! I’m open to job opportunities and collaborations.
        </p>
      </div>

      <div className="contact-container">
        {/* Kolom Kiri - Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          
          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <p className="label">Email</p>
              <a href="mailto:prtmdenny@gmail.com">prtmdenny@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📱</span>
            <div>
              <p className="label">WhatsApp</p>
              <a href="https://wa.me/6285121252408" target="_blank" rel="noopener noreferrer">
                +62 851-2125-2408
              </a>
            </div>
          </div>

          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <p className="label">Location</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://linkedin.com/in/dennysuwando" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 7C5.12 7 4 5.88 4 4.5 4 3.12 5.12 2 6.5 2 7.88 2 9 3.12 9 4.5 9 5.88 7.88 7 6.5 7zM20 19h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V19h-3v-11h3v1.5c.88-1.32 2.34-2 3.88-2 2.76 0 5 2.24 5 5V19z"/>
              </svg>
            </a>
            <a href="https://github.com/prtmdenny" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.044-.015-2.051-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.221 0 4.609-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Kolom Kanan - Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn-send">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;