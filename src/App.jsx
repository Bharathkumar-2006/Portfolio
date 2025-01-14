import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">MyPortfolio</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
const Home = () => {
  return (
      <section className="home" id="home">
          <div className="home-container">
              <img src="/my-portfolio/src/assets/react.svg" alt="Profile" className="profile-photo" />
              <h1>Hi, Im Bharath Kumar</h1>
              <p>Cybersecurity Enthusiast & Aspiring Ethical Hacker</p>
          </div>
      </section>
  );
}

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h1>About Me</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi, Im Bharath Kumar, a passionate Computer Science student with a keen interest in Cybersecurity, Networking, Linux, and Ethical Hacking. Im constantly exploring new technologies and deepening my understanding of Blockchain, Data Structures, and Algorithms.
                        </p>
                    </div>                    
                </div>
            </div>
        </section>
    );
}
const Projects = () => {
    const projectList = [
        {
            title: 'Port Scanning Tool',
            description: 'A tool that scans open ports on a given IP address or domain using Python Flask.',
            link: '#'
        },
        {
            title: 'Honeyfiles Project',
            description: 'A monitoring tool for honeyfiles using Python, MySQL, and various API integrations.',
            link: '#'
        },
        {
            title: 'Firewall Analysis tool',
            description: 'abcd',
            link: '#'
        }        
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Skills = () => {
    const skillsList = [
        { skill: 'Cybersecurity', level: 'Expert' },
        { skill: 'Networking', level: 'Expert' },
        { skill: 'Linux', level: 'Advanced' },
        { skill: 'Ethical Hacking', level: 'Advanced' },
        { skill: 'Blockchain', level: 'Intermediate' },
        { skill: 'Data Structures & Algorithms', level: 'Intermediate' },
        { skill: 'C/C++', level: 'Advanced' },
        { skill: 'Java', level: 'Advanced' },
        { skill: 'Python', level: 'Expert' },
        { skill: 'Astrophysics (Interest)', level: 'Enthusiast' },
    ];

    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h1>My Skills</h1>
                <div className="skills-grid">
                    {skillsList.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <h3>{skill.skill}</h3>
                            <p>{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>I&apos;d love to hear from you! Fill out the form below or connect with me on social media.</p>
                
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="mailto:your-email@example.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>
            </div>
        </section>
    );
}
export default App
