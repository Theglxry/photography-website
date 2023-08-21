// import backgroundImage from "./hero-img.jpg";
import "./Hero.css";
import Header from "../Header/Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero-wrapper">
      <Header />

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="glass flexColStart  intro-container "
      >
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          className="intro-caption "
        >
          <h4>PHOTOGRAPHY STUDIO</h4>
          <div className="divider"></div>
        </span>

        <div data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="1000" className=" overflow-container flexColStart">
          <h2>
            Professional Photos <br />
            Guaranteed At FaithSamuels <br />
            Studios
          </h2>
        </div>

        <p data-aos="fade-up"> book a photo shoot session today! </p>
        <a href="book-section">
          <button className="ic-btn button"> BOOK NOW </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
