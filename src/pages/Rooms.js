import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from "react-router-dom";

function Rooms() {
    return (
        <Hero hero="roomsHero" >
            <Banner title="our rooms">
                <Link  to='/' className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
       
    );
};

export default Rooms


