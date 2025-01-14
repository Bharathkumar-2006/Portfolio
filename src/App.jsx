import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <About />
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
                    <div className="about-image">
                        <img src="" alt="Bharath Kumar" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App
