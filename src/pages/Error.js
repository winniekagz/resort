import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero';
import { Link } from "react-router-dom"

function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/" classname="btn-primary">
                    Back to Home
                    </Link>

            </Banner>
        </Hero>
        
    )
}

export default Error
