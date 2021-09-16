import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from "react-router-dom";
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        
        <Hero >
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at ksh 1500">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>

            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>


   );
}
