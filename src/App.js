import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "Git / GitHub", level: 80 },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "724.One",
    period: "2024 – Present",
    description:
      "Building reusable React components, improving performance, and collaborating with designers to ship polished UI.",
  },
  {
    role: "React Intern",
    company: "724.One",
    period: "2023 – 2024",
    description:
      "Implemented responsive dashboards and helped migrate legacy pages to modern React-based layouts.",
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, showcasing projects and blogs.",
    link: "#",
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard with charts, filters and responsive layout.",
    link: "#",
  },
  {
    title: "Landing Page",
    description: "Conversion-focused landing page with modern design.",
    link: "#",
  },
];

function App() {
  const [isDark, setIsDark] = useState(false);

  // add/remove dark class on body for full-page background
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-body");
    } else {
      document.body.classList.remove("dark-body");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={isDark ? "app dark" : "app"}>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">
          <span className="logo">Qasim Ali</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* HERO / HEADER */}
      <section className="hero" id="top">
        <div className="hero-left">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
        <div className="hero-right">
          <h1>Qasim Ali</h1>
          <h2>Frontend Developer | React Enthusiast</h2>
          <p>
            Passionate about building clean, modern, and responsive web
            applications. I enjoy turning ideas into real products with great
            user experience.
          </p>

          <div className="hero-actions">
            <a href="/cv.pdf" download className="btn primary">
              <FaDownload /> Download CV (PDF)
            </a>
            <a href="#contact" className="btn ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-icons">
            <a
              href="mailto:ranaqasimali1223@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/qasimali1223"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/qasimali1428"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <p>
          I am a frontend developer focused on writing clean, efficient code and
          building delightful user interfaces. I am comfortable with JavaScript,
          React, and modern CSS, and I enjoy learning new tools and
          technologies.
        </p>
      </section>

      {/* SKILLS WITH ANIMATED BARS */}
      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ "--level": `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>
                  {exp.role} – <span>{exp.company}</span>
                </h3>
                <p className="timeline-period">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target={project.link === "#" ? "_self" : "_blank"}
                rel="noreferrer"
                className="project-link"
              >
                View project <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2 className="section-title">Contact</h2>
        <p>
          I’m open to opportunities, collaborations, and interesting projects.
          Feel free to reach out!
        </p>
        <div className="contact-details">
          <p>
            <FaEnvelope /> youremail@example.com
          </p>
          <p>
            <FaLinkedin /> linkedin.com/in/your-linkedin
          </p>
          <p>
            <FaGithub /> github.com/your-github
          </p>
        </div>
      </section>

      <footer className="footer">
        <a href="#top" className="back-to-top">
          Back to top ↑
        </a>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
