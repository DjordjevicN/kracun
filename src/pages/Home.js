import React from 'react';
import Header from '../component/Header'
import Navbar from '../component/NavBar'
import FeaturedProperty from '../component/FeaturedProperty'
import AboutPage from '../component/AboutPage'
import FooterPage from '../component/FooterPage'



export default function Home() {
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
