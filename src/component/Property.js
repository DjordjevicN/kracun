import React from 'react';
import { FaHome, FaBed, FaBath } from 'react-icons/fa';
import defaultImg from '../images/details-2.jpeg'
import { Link } from 'react-router-dom'

export default function Property({ room }) {


    const { images, price, name, slug, size, status, location, bedrooms, bathrooms } = room
    return (
        <div>
            <div className="property-card" >
                <Link to={`/property/${slug}`} >
                    <img src={images[0] || defaultImg} alt="singleRoom" />
                </Link>

                <p className="price-box">
                    &euro; {price}
                </p>

                <p className="property-status"> {status}</p>
                <h3 className="card-title">{name}</h3>
                <p className="property-address">
                    {location}
                </p>
                <div className="card-border"></div>
                <div className="card-icons">
                    <ul>
                        <li><FaHome /> {size}&#13217;</li>
                        <li><FaBed /> {bedrooms}</li>
                        <li><FaBath /> {bathrooms}</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}
