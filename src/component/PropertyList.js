import React from 'react';
import Property from './Property'
import Footer from '../component/FooterPage'
export default function PropertyList({ rooms }) {
    // console.log(rooms);

    return (
        <section data-aos="fade-up" className="property-gallery-wrapper">
            <h1 className="gallery-title"> Our <span>Properties</span> </h1>
            <div className="gallery">
                {rooms.map(item => {
                    return <Property key={item.id} room={item} />
                })}
            </div>
            <Footer />
        </section>
    );
}
