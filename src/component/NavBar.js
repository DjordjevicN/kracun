import React from 'react';
import logo from '../images/kracunlogops.png'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>

            <div className="navigation">
                <div className="logo-wrapper">
                    <img src={logo} alt="pic" />
                    <h1 className="logoTitle">KRAČUN <br /> <span>AGENCIJA ZA NEKRETNINE</span></h1>
                </div>
                <div className="nav-bar">
                    <ul>
                        <Link to='/'> <li>Početna</li></Link>
                        <a href="#about">
                            <li>O nama</li>
                        </a>
                        <a href="#contact">
                            <li>Kontakt</li>
                        </a>
                        <Link to='/Gallery'> <li>Galerija</li></Link>

                    </ul>
                </div>

            </div>
        </div >
    );
}
