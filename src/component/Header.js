import React from 'react';

import LogoPart1 from '../images/logo-sklop/part-1.png'
import LogoPart2 from '../images/logo-sklop/part-2.png'
import LogoPart3 from '../images/logo-sklop/part-3.png'
import LogoPart4 from '../images/logo-sklop/part-4.png'
// import NavBar from './NavBar';


export default function Header() {
    return (
        <div className='header'>

            <div className="hero-animation">
                <div className="logo-animation" data-aos="fade-up">
                    <img className="e1" src={LogoPart1} alt="pic" />
                    <img className="e1" src={LogoPart2} alt="pic" />
                    <img className="e1" src={LogoPart3} alt="pic" />
                    <img className="e1" src={LogoPart4} alt="pic" />
                </div>
                <div className="animation-text">
                    <h1 className="t1">AGENCIJA ZA</h1>
                    <h1 className="t2">NEKRETNINE</h1>
                </div>
            </div>
        </div>
    );
}
