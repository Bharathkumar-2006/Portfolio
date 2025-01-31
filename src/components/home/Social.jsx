import './home.css'

const Social = () => {


  return (
    <div className="home__social">
      <div className="group relative">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"          
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <span className="tooltip-content">GitHub</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <span className="tooltip-content">LinkedIn</span>
      </div>

      <div className="group relative">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
        >
          <i className="uil uil-dribbble"></i>
        </a>
        <span className="tooltip-content">TryHackMe</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <span className="tooltip-content">Instagram</span>
      </div>
    </div>
  );
};

export default Social;
