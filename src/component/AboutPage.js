import React from 'react';
import teamImage from '../images/team.png'

export default function AboutPage() {
    return (
        <div>
            <div className="about-wrapper" id="about">
                <div className="about" >
                    <div data-aos="fade-right" className="photo">
                        <img src={teamImage} alt="" />
                    </div>
                    <div data-aos="fade-left" className="about-text">
                        <h1 className="about-title">
                            Ko Smo Mi
                        </h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque, neque illo fugit
                        ut porro
                        tempore quasi beatae, pariatur quidem eligendi repellat quibusdam sint quos voluptatum
                        magni
                        perferendis inventore exercitationem tempore quasi beatae, pariatur quidem eligendi
                        repellat
                        quibusdam sint quos voluptatum magni
                        perferendis inventore exercitationem tempore quasi beatae, pariatur quidem eligendi
                        repellat
                        quibusdam sint quos voluptatum magni
                        perferendis inventore exercitationem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque, neque illo fugit
                            ut porro
                            tempore quasi beatae, pariatur quidem eligendi repellat quibusdam sint quos voluptatum
                            magni
                        perferendis inventore exercitationem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
