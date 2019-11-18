import React from 'react';
// import { Link } from 'react-router-dom'
import Search from "../component/Search"
import NavBar from '../component/NavBar'
import Header from '../component/Header'
import PropertyContainer from '../component/PropertyContainer'
export default function Gallery() {
    return (
        <div>
            <NavBar />
            <Header />
            {/* <Search /> */}
            < PropertyContainer />
        </div>
    );
}
