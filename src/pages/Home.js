import React from 'react';
import Header from '../component/Header'
import Navbar from '../component/NavBar'
import FeaturedProperty from '../component/FeaturedProperty'
import AboutPage from '../component/AboutPage'
import FooterPage from '../component/FooterPage'
import AOS from 'aos'
import 'aos/dist/aos.css';


export default function Home() {

    AOS.init({
        duration: 1000,
        offset: 200
    })

    return (
        <div>
            <Navbar />
            <Header />
            <FeaturedProperty />
            <AboutPage />
            <FooterPage />

        </div>
    );
}
