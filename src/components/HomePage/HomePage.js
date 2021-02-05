import React, { Component } from "react";
import Hero from '../Hero/Hero';
import Features from '../Features/Features';

class HomePage extends Component {

    render() {
        return (
            <>
            <Hero/>
            <main>
                <Features/>
            </main>
            </>
        )
    }
}

export default HomePage;
 