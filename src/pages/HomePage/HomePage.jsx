import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Experience from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
           
        </div>
    );
};

export default HomePage;