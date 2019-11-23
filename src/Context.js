import React, { Component } from 'react';
// import items from './data'
import Client from './Contentful'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //
        price: 0,
        type: "sve",
        address: '',
        status: 'sve',
        location: 'sve',
        size: 0,
        bedrooms: 0,
        bathrooms: 0,
        maxPrice: 0
    }
    getData = async () => {
        try {
            let response = await Client.getEntries({})

            let rooms = this.formatData(response.items)
            // console.log(rooms);
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(item => item.price))

            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                maxPrice
            })

        }
        catch (error) {
            console.log(error);

        }
    }
    componentDidMount() {
        this.getData()


    }
    handleChange = (event) => {
        console.log('change');

        const target = event.target
        // const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        const value = target.value;
        this.setState({
            [name]: value
        }, this.filterRooms)
        // const value = event.target.value


    }
    filterRooms = () => {
        let {
            rooms,
            price,
            type,
            address,
            status,
            location,
            size,
            bedrooms,
            bathrooms,
            maxPrice } = this.state;

        let tempRooms = [...rooms];
        //type
        if (type !== 'sve') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        if (location !== 'sve') {
            tempRooms = tempRooms.filter(room => room.location === location)
        }
        if (status !== 'sve') {
            tempRooms = tempRooms.filter(room => room.status === status)
        }
        tempRooms = tempRooms.filter(room => room.price >= 0 && room.price <= maxPrice)


        this.setState({
            sortedRooms: tempRooms
        })
        console.log(tempRooms);




    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url
            );
            let room = { ...item.fields, images, id };
            return room
        })
        return tempItems
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room
    };
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }