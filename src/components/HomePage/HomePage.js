import React, { Component } from "react";
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

class HomePage extends Component {

    render() {
        return (
            <main>
                <h2>homepage</h2>
                <Features/>
                <Reviews/>
            </main>
        )
    }
}

export default HomePage;
