import React from "react";
import Clients from "../parts/Clients";
import Feature from "../parts/Feature";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Pricing from "../parts/Pricing";

function Homepage() {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Hero></Hero>
                <Clients></Clients>
                <Feature></Feature>
                <Pricing></Pricing>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Homepage;
