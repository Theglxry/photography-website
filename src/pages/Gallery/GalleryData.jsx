// GalleryItem.js
// import React from "react";
import PropTypes from "prop-types";
import "./Gallery.css";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const GalleryItem = ({ title, imageUrl , instagramUrl }) => {
    useEffect(() => {
        AOS.init();
      }, []);

  return (

    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">


    <div className="img-container"   
        // data-aos="fade-up" 
        // data-aos-duration="600"
     >
      <div className="single-img">
         <img src={imageUrl} alt={title} style={{ width: "100%" }} />


        <div className="content">
          <div className="zoom-text" data-folder-name="portraits">
            Click Me
          </div>
        </div>

        <div className="single-img-content">
          <h3 className="title">{title}</h3>
        </div>
      </div>
    </div>

</a>

  );
};

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default GalleryItem;
