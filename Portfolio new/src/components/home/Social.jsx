import  { useRef } from 'react';
import hoverSoundFile from '../../assets/effects/pop-sound-effect-226108.mp3';
import './home.css'

const Social = () => {
  const hoverSound = useRef(new Audio(hoverSoundFile)); 

  const playSound = () => {
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0; 
      hoverSound.current.play().catch((error) => {
        console.error('Error playing sound:', error);
      });
    }
  };

  console.log('Hello')

  return (
    <div className="home__social">
      <div className="group relative">
        <a
          href="https://github.com/chamithKavinda"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound} 
        >
          <i className="uil uil-github-alt"></i>
        </a>
        <span className="tooltip-content">GitHub</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/chamith-kavinda-880330282"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-linkedin"></i>
        </a>
        <span className="tooltip-content">LinkedIn</span>
      </div>

      <div className="group relative">
        <a
          href="https://dribbble.com/ChamithKavinda"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-dribbble"></i>
        </a>
        <span className="tooltip-content">Dribbble</span>
      </div>

      <div className="group relative">
        <a
          href="https://www.instagram.com/_chamith_kavinda_13/"
          target="_blank"
          rel="noopener noreferrer"
          className="home__social-icon"
          onMouseEnter={playSound}
        >
          <i className="uil uil-instagram"></i>
        </a>
        <span className="tooltip-content">Instagram</span>
      </div>
    </div>
  );
};

export default Social;
