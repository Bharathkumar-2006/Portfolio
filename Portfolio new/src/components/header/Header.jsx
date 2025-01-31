import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
    /* Toggle menu */
    const [Toggle, showMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY;

            sections.forEach(section => {
                if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.getAttribute('id'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (section) => {
        setActiveSection(section);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Chamith</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>
                                <i className="uil uil-file-alt nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={`nav__link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => handleClick('skills')}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className={`nav__link ${activeSection === 'services' ? 'active' : ''}`} onClick={() => handleClick('services')}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className={`nav__link ${activeSection === 'portfolio' ? 'active' : ''}`} onClick={() => handleClick('portfolio')}>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
