import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Linkedin, MessageCircle, GitHub, Globe, Terminal } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Active section detection
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                BK
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`${
                    activeSection === item
                      ? 'text-indigo-400 border-b-2 border-indigo-400'
                      : 'text-gray-300 hover:text-indigo-400'
                  } capitalize transition-all duration-300 py-1`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`${
                    activeSection === item
                      ? 'text-indigo-400 bg-gray-800/50'
                      : 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800/30'
                  } block px-3 py-2 rounded-md text-base font-medium capitalize transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Floating Action Button */}
      <a
        href="#home"
        className={`fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ${
          scrollProgress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <Terminal size={24} />
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: `radial-gradient(circle at center, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.1) 0%, transparent 70%)`,
                animation: `float ${Math.random() * 10 + 5}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center px-4 relative z-10">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse" />
          <img
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white/10 relative z-10"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Hi, I&apos;m Bharath Kumar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Cybersecurity Enthusiast & Ethical Hacker
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="group relative px-6 py-3 overflow-hidden rounded-lg bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full opacity-10" />
            <span className="relative">Get in Touch</span>
          </a>
          <a
            href="#projects"
            className="group relative px-6 py-3 overflow-hidden rounded-lg bg-transparent text-indigo-400 border-2 border-indigo-400 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 w-0 bg-indigo-400 transition-all duration-300 ease-out group-hover:w-full opacity-10" />
            <span className="relative">View Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm Bharath Kumar, a passionate cybersecurity enthusiast and ethical hacker. I am currently pursuing a BE in Computer Science and Engineering at Sri Eshwar College of Engineering. My expertise spans cybersecurity, networking, Linux, and ethical hacking. I am also delving into blockchain, data structures, algorithms, and programming languages like C, C++, Java, and Python. Beyond technology, I have a deep interest in space and astrophysics, constantly seeking knowledge about the universe.
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-indigo-400 mb-2">Project {i + 1}</h3>
              <p className="text-gray-300 mb-4">
                Description of project {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center"
              >
                View Details <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Cards */}
          {['Cybersecurity', 'Networking', 'Linux', 'Ethical Hacking', 'Blockchain', 'Data Structures', 'Algorithms', 'C', 'C++', 'Java', 'Python', 'Astrophysics'].map((skill, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-indigo-400 mb-2">{skill}</h3>
              <p className="text-gray-300">
                Proficient in {skill}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-4">
              Feel free to reach out for collaborations or just a friendly chat. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-indigo-400" size={24} />
                <a href="mailto:email@example.com" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">email@example.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="text-indigo-400" size={24} />
                <a href="https://linkedin.com/in/yourprofile" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">LinkedIn</a>
              </div>
              <div className="flex items-center space-x-4">
                <GitHub className="text-indigo-400" size={24} />
                <a href="https://github.com/yourusername" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">GitHub</a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className></label>
                </div>
                </form>
                </div>
                </div>
                </div>
                
                </section>
                
  
  )
  }