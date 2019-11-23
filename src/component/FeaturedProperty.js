import React, { Component } from 'react';

import { RoomContext } from '../Context'
import Loading from '../component/Loading'
import Property from './Property'
// import AOS from 'aos'
// import 'aos/dist/aos.css';



export default class FeaturedProperty extends Component {
    // componentDidMount() {
    //     AOS.init({
    //         duration: 3000
    //     })
    // }
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Property key={room.id} room={room} />
        })

        return (
            <div data-aos='fade-up' className="featured-content">
                <div className="gallery-wrapper">
                    <h1 className="gallery-title">
                        Premium <span>Ponuda</span></h1>
                    <div className="gallery">
                        {loading ? <Loading /> : rooms}


                    </div>

                </div>
            </div>
        );
    }

}

