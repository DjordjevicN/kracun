import React, { Component } from 'react';

import { RoomContext } from '../Context'
import Loading from '../component/Loading'
import Property from './Property'
export default class FeaturedProperty extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Property key={room.id} room={room} />
        })
        // console.log(rooms);


        return (
            <div className="featured-content">
                <div className="gallery-wrapper">
                    <h1 className="gallery-title">
                        Featured <span>Property</span></h1>
                    <div className="gallery">
                        {loading ? <Loading /> : rooms}


                    </div>

                </div>
            </div>
        );
    }
}

// import { FaHome, FaBed, FaBath } from 'react-icons/fa';
// import PropertyImg1 from '../images/details-2.jpeg'
/*{ <div className="featured-content">
               <div className="gallery-wrapper">
                   <h1 className="gallery-title" data-aos='fade-up'>
                       Featured <span>Property</span></h1>
                   <div className="gallery">

                       <div className="property-card" data-aos="fade-up">
                           <img src={PropertyImg1} alt="" />
                           <p className="price-box">
                               od $ 34000
                   </p>
                           <p className="property-status"> Na Prodaju</p>
                           <h3 className="card-title">Naziv Nekretnine</h3>
                           <p className="property-address">
                               Jurija Gagarina 34a , Smederevo
                   </p>
                           <div className="card-border"></div>
                           <div className="card-icons">
                               <ul>
                                   <li><FaHome /> 40m2</li>
                                   <li><FaBed /> 3</li>
                                   <li><FaBath /> 1</li>
                               </ul>
                           </div>

                       </div>

                   </div>

               </div>
           </div> }*/