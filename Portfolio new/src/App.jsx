import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/servicess/Services';
import Work from './components/work/Work';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AnimatedCursor from 'react-animated-cursor';

const App = () => {

    return (
        <>
            <Header/>
            <main className='main'>
                <AnimatedCursor/>
                <Home/>
                <Qualification/>
                <Skills/>
                <Services/>
                <Work/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}

export default App