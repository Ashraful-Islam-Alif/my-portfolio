import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Skills from './Skills/Skills';
import Projects from './Project/Projects';
import AboutME from './AboutME/AboutME';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutME></AboutME>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;