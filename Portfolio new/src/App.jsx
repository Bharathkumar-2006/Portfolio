import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
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
                <Work/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}

export default App