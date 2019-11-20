import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power4 } from 'gsap';

import LogoPart1 from '../images/logo-sklop/part-1.png'
import LogoPart2 from '../images/logo-sklop/part-2.png'
import LogoPart3 from '../images/logo-sklop/part-3.png'
import LogoPart4 from '../images/logo-sklop/part-4.png'


export default function Header() {
    let tl1 = new TimelineMax({})
    let element1 = useRef()
    let element2 = useRef()
    let element3 = useRef()
    let element4 = useRef()
    let entireElement = useRef()
    let animationText = useRef()
    useEffect(() => {
        tl1
            .to(entireElement, 1, {
                css: { visibility: "visible" }
            })
            .from(entireElement, 1, {
                x: -1000,
                opacity: 0,
                ease: Power4.inOut
            })
            .from(element1, 1, {
                x: -150,
                opacity: 0
            })
            .from(element2, 1, {
                y: 200,
                x: 200,
                rotation: 90,
                opacity: 0
            }, '-=1')
            .from(element3, 1, {
                y: -200,
                x: 200,
                rotation: 90,
                opacity: 0
            }, '-=1')
            .from(element4, 1, {
                y: -150,
                x: 500,
                rotation: 90,
                opacity: 0
            }, '-=1')
            .to(element4, .4, {
                x: 100
            })
            .to(element4, .125, {
                x: 0
            }, 'ww')
            .from(animationText, .125, {
                x: -50,
                opacity: 0
            }, 'ww')
    }, []);
    return (
        <div className='header'>

            <div ref={el => { entireElement = el }} className="hero-animation">
                <div className="logo-animation" data-aos="fade-up">
                    <img ref={el => { element1 = el }} className="e1" src={LogoPart1} alt="pic" />
                    <img ref={el => { element2 = el }} className="e1" src={LogoPart2} alt="pic" />
                    <img ref={el => { element3 = el }} className="e1" src={LogoPart3} alt="pic" />
                    <img ref={el => { element4 = el }} className="e1" src={LogoPart4} alt="pic" />
                </div>
                <div ref={el => { animationText = el }} className="animation-text">
                    <h1 className="t1">AGENCIJA ZA</h1>
                    <h1 className="t2">NEKRETNINE</h1>
                </div>
            </div>
        </div >
    );
}
