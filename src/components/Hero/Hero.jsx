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

      {/* <div className="arrow bounce">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          ! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license (Commercial License)
          Copyright 2023 Fonticons, Inc.
          <path d="M544 416L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zm22.6-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L480 274.7 480 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96zm-320-45.3c-12.5-12.5-32.8-12.5-45.3 0L160 274.7 160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7L54.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>

        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          ! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license (Commercial License)
          Copyright 2023 Fonticons, Inc.
          <path d="M544 416L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zm22.6-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L480 274.7 480 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96zm-320-45.3c-12.5-12.5-32.8-12.5-45.3 0L160 274.7 160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7L54.6 233.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z" />
        </svg>
      </div> */}

      {/* hero intro container */}

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

        <div
          data-aos="fade-up-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className=" overflow-container flexColStart"
        >
          <h2>
            Professional Photos <br />
            Guaranteed At FaithSamuels <br />
            Studios
          </h2>
        </div>

        <p data-aos="fade-up"> book a photo shoot session today </p>
        <a href="book-section">
          <button className="button"> BOOK NOW </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
