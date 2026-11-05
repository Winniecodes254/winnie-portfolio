import "./App.css";

const projects = [
  {
    number: "01",
    title: "MindBridge AI",
    category: "MENTAL WELLNESS PLATFORM",
    description:
      "A mental wellness platform featuring mood tracking, grounding exercises, emergency contacts and support resources.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Winniecodes254/mindbridge-ai",
  },
  {
    number: "02",
    title: "LiveEdit AI Plugin System",
    category: "OPEN SOURCE CONTRIBUTION",
    description:
      "Contributed to an open-source project focused on integrating external AI providers into an existing application.",
    technologies: ["Python", "AI", "Git"],
    link: "https://github.com/Winniecodes254/LiveEdit-plug-in-system",
  },
  {
    number: "03",
    title: "Jobs Website",
    category: "WEB DEVELOPMENT",
    description:
      "A web development project exploring website design and practical frontend development.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/Winniecodes254/jobs-website",
  },
];

const skills = [
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "React",
  "HTML & CSS",
  "MySQL",
  "Git & GitHub",
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          W<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact Me ↗
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              COMPUTER SCIENCE STUDENT & DEVELOPER
            </p>

            <h1>
              Building ideas
              <br />
              into <span>digital reality.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm Winnie Achieng. I'm a Computer Science student
              passionate about software development, technology and
              creating solutions that make a difference.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore my work ↗
              </a>
              <a href="#contact" className="secondary-button">
                Let's connect
              </a>
            </div>

            <div className="hero-location">
              <span>📍</span> Nairobi, Kenya
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-top">
                <span>MY CREATIVE SPACE</span>
                <span className="card-dots">● ● ●</span>
              </div>

              <div className="code-window">
                <p><span>01</span> const developer = {"{"}</p>
                <p><span>02</span> &nbsp; name: "Winnie",</p>
                <p><span>03</span> &nbsp; passion: "Technology",</p>
                <p><span>04</span> &nbsp; mindset: "Always learning",</p>
                <p><span>05</span> &nbsp; goal: "Build & innovate"</p>
                <p><span>06</span> {"}"};</p>
              </div>

              <div className="visual-footer">
                <span>CREATING SOMETHING MEANINGFUL</span>
                <span>✦</span>
              </div>
            </div>

            <div className="floating-badge">Open to opportunities ✨</div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">01 / ABOUT ME</div>

          <div className="about-content">
            <h2>
              Curious mind.
              <br />
              <span>Creative builder.</span>
            </h2>

            <div className="about-text">
              <p>
                I'm a second-year Computer Science student at
                Kenyatta University, Kenya, with a growing interest
                in software engineering and technology.
              </p>

              <p>
                I enjoy learning by building projects, exploring
                different programming languages and collaborating
                on ideas that solve real-world problems.
              </p>

              <p>
                My journey is about continuous growth, curiosity
                and turning what I learn into things people can use.
              </p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-label">02 / MY TOOLKIT</div>
          <h2>Technologies I work with.</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>✦</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>

          <div className="projects-heading">
            <h2>Things I've been building.</h2>
            <p>A selection of projects and contributions.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="education section">

          <div className="education-card">
            <div>
              <h3>Kenyatta University</h3>
              <p>Bachelor of Science in Computer Science</p>
              <span>Mama Ngina University College</span>
            </div>

            <div className="education-year">
              2025 — 2029
              <span>Expected graduation</span>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-label">05 / GET IN TOUCH</div>

          <h2>
            Have an idea?
            <br />
            <span>Let's build something.</span>
          </h2>

          <p>
            I'm always interested in connecting with people,
            exploring opportunities and collaborating on meaningful
            technology projects.
          </p>

          <a
            href="mailto:w4024569@gmail.com"
            className="primary-button"
          >
            Say hello ↗
          </a>

          <div className="social-links">
            <a href="https://github.com/Winniecodes254" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/winnie-achieng-ab3530374"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:w4024569@gmail.com">
              Email ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">W<span>.</span></a>
        <p>Designed & built by Winnie Achieng © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;