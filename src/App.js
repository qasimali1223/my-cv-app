import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="header">
        <img src="/profile.png" alt="Profile" className="profile-pic" />

        <div className="header-info">
          <h1>Qasim Ali</h1>
          <p>Frontend Developer | React Developer | UI Designer</p>
        </div>
      </div>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          Passionate React developer with experience in building modern,
          responsive, and user-friendly web applications. I love turning ideas
          into beautiful digital products.
        </p>
      </section>

      <section className="section skills">
        <h2>Skills</h2>

        <div className="skill">
          <span>React</span>
          <div className="bar"><div style={{ width: "90%" }}></div></div>
        </div>

        <div className="skill">
          <span>JavaScript</span>
          <div className="bar"><div style={{ width: "85%" }}></div></div>
        </div>

        <div className="skill">
          <span>HTML & CSS</span>
          <div className="bar"><div style={{ width: "95%" }}></div></div>
        </div>

        <div className="skill">
          <span>Git / GitHub</span>
          <div className="bar"><div style={{ width: "80%" }}></div></div>
        </div>
      </section>

      <section className="section experience">
        <h2>Experience</h2>

        <div className="card">
          <h3>Frontend Developer – 724.One</h3>
          <p className="date">2024 – Present</p>
          <p>
            Developed UI components, improved website performance, and created
            reusable design elements using React.
          </p>
        </div>

        <div className="card">
          <h3>React Intern – XYZ Tech</h3>
          <p className="date">2021 – 2022</p>
          <p>
            Helped develop dashboard components and implemented responsive
            layouts for client projects.
          </p>
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>📧 ranaqasimali1428@gmail.com</p>
        <p>📍 Lahore, Pakistan</p>
        <p>🔗 www.linkedin.com/in/qasim-ali-6b4092269</p>
      </section>
    </div>
  );
}

export default App;
