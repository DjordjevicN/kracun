import React from 'react';
// import PropertyFilter from "./PropertyFilter";
import Search from '../component/Search'
import PropertyList from "./PropertyList";
import { RoomConsumer } from '../Context'
import Loading from './Loading'
export default function PropertyContainer() {
    return (
        <RoomConsumer>
            {
                value => {
                    // console.log(value);
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) {
                        return <Loading />
                    }

                    return (
                        <div>
                            <Search rooms={rooms} />
                            {/* <PropertyFilter rooms={rooms} /> */}
                            <PropertyList rooms={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>

    );
}

