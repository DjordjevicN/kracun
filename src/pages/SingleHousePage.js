import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import Footer from '../component/FooterPage'
import Navbar from '../component/NavBar'
import { GiResize } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';

export default class SingleHousePage extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const property = getRoom(this.state.slug);
        // console.log(property);
        if (!property) {
            return (
                <div className="error">
                    <h3>There is no property by that name</h3>
                    <Link to="/gallery" className="btn-primary">
                        Go back to Gallery
                </Link>
                </div>
            );
        }
        // const room = getRoom()

        const { name, description, size, price, images, type, status, location, bedrooms, bathrooms } = property
        let singleImage = images.map((image, index) => {
            return <img className="smallImage" key={index} src={image} alt="img" />
        })
        console.log(singleImage);

        return (
            <div>
                <Navbar />
                <div className="single-property-wrapper">
                    <div className="hero-image">
                        <img src={images[0]} alt="img" />
                    </div>
                    <h1 className="single-property-title ">{name}</h1>
                    <div className="small-images">
                        {singleImage}
                    </div>
                    <div data-aos="fade-up" className="single-property-information">
                        <h1 className="property-title">{name}</h1>
                        <p className="address">{location}</p>
                        <div className="info">
                            <h4 className="property-size"><GiResize /> Size: {size}m2</h4>
                            <h4 className="property-size"><FaBed /> Bedrooms: {bedrooms}</h4>
                            <h4 className="property-bathrooms"><FaBath />  Bathrooms: {bathrooms}</h4>
                            <h4 className='property-capacity'>Status: {status}</h4>
                            <h4 className="property-size">Tip Nekretnine: {type}</h4>
                            <h4 className='property-price'>Cena:  {price} &euro;</h4>
                        </div>
                        <p className="property-description">{description}</p>


                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}
