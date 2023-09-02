import React from "react";
import { Element } from 'react-scroll';
import Hero from "../Hero/Hero";
import About from "../About/About";
import DisplayImages from "../displayImages/DisplayImages";
import Companies from "../Companies/Companies";
import Booknow from "../Booknow/Booknow";

const Landingpage = () => {
    return (
        <div>
              <Element name="hero">
                <Hero backgroundImage="/hero-img.webp" />
            </Element>
            <Element name="displayImages">
                <DisplayImages />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="companies">
                <Companies />
            </Element>
            <Element name="booknow">
                <Booknow />
            </Element>
        </div>
    )
}

export default Landingpage;
