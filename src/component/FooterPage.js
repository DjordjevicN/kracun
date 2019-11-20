import React from 'react';
import { IoIosPin, IoIosPhonePortrait } from 'react-icons/io'
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaCaretRight } from 'react-icons/fa'

export default function FooterPage() {
    return (
        <div>
            <div id="contact" className="footer">
                <div className="contact" data-aos="fade-right">
                    <h1 className="contact-title">
                        Kontakt
                </h1>
                    <ul>
                        <li><IoIosPin /> Jurija Gagarina 43a, Smederevo</li>
                        <li><FaEnvelope /> nekretnine@gmail.com</li>
                        <li><IoIosPhonePortrait /> 060/1234567</li>
                        <li><FaPhone /> 011/1234567</li>
                    </ul>
                </div>

                <div className="our-promises" data-aos="fade-down">
                    <h1 className="promises-title">Agencija Kračun</h1>
                    <ul>
                        <li><FaCaretRight /> Naš tim poseduje znanje i iskustvo garantuje da ćete dobiti</li>
                        <li><FaCaretRight /> Pravnu sigurnost</li>
                        <li><FaCaretRight /> Finansijsku sigurnost</li>
                        <li><FaCaretRight /> Pravovremene i korisne informacije</li>
                    </ul>
                </div>
                <div className="our-social" data-aos="fade-left">
                    <h1 className="social-title">Pratite Nas</h1>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedinIn /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
