import React from 'react';
import { useContext } from 'react'
import { RoomContext } from '../Context'


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
export default function Search({ rooms }) {
    const context = useContext(RoomContext)
    // console.log(rooms);
    const { handleChange, type, price, address, status, location, size, bedrooms, maxPrice } = context

    console.log(price);

    //   getting unique types
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    // location
    let locations = getUnique(rooms, 'location');
    locations = ['all', ...locations];
    // map to jsx
    locations = locations.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    // status
    let propertyStatus = getUnique(rooms, 'status');
    propertyStatus = ['all', ...propertyStatus];
    // map to jsx
    propertyStatus = propertyStatus.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })




    return (
        <section data-aos="fade-left" className="search-section">
            <div className="search-wrapper">
                <form className="search">
                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type" className='label-tag'>Tip Nekretnine</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    {/* end select type  */}
                    {/* select location */}
                    <div className="form-group">
                        <label htmlFor="location" className='label-tag'>Lokacija</label>
                        <select name="location" id="location" value={location} className="form-control" onChange={handleChange}>
                            {locations}

                        </select>
                    </div>
                    {/* end select   */}

                    {/* select location */}
                    <div className="form-group">
                        <label htmlFor="status" className='label-tag'>Lokacija</label>
                        <select name="status" id="status" value={status} className="form-control" onChange={handleChange}>
                            {propertyStatus}

                        </select>
                    </div>
                    {/* end select   */}
                    {/*                  
                    <div className="form-group">
                        <label htmlFor="price">Cena</label>
                        <div className="price-input">
                            <input type='number' name='minPrice' id='price' value={price} onChange={handleChange} className="size-input" />
                            <input type='number' name='maxPrice' id='price' value={maxPrice} onChange={handleChange} className="size-input" />
                        </div>
                    </div>
                    */}

                </form>
            </div>
        </section>
    );
}



