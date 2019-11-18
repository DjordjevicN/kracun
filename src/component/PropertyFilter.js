import React from 'react';
// import Property from '../component/Property'
import { useContext } from 'react'
import { RoomContext } from '../Context'
export default function PropertyFilter() {
    const context = useContext(RoomContext);
    // console.log(context);


    return (
        <div>
            {/* <div className="gallery">
                {rooms.map(item => {
                    return <Property key={item.id} room={item} />
                })}
            </div> */}
        </div>
    );
}
