// Gallery.js
import React from "react";
import Hero from "../../components/Hero/Hero";
import GalleryData from "./GalleryData";
import "./Gallery.css";
import Booknow from "../../components/Booknow/Booknow";

const Gallery = () => {
  // { title: "PORTRAITS", imageUrl: "/portraitcover_11zon.webp", instagramUrl: "https://www.instagram.com/faithsamuelsphotog/?hl=en" },
  // { title: "FAMILY PORTRAITS", imageUrl: "/familycover_11zon.webp", instagramUrl: "https://www.instagram.com/faithsamuelsphotog/?hl=en" },
  
  // Add the same Instagram URL for other categories

  return (
    <section className="gallery-container">
      <Hero backgroundImage="/zenithmanager_11zon.webp" />

      <div className="gallery-section">
        <div className="gallery-items-container">
          <div className="grid gallery-items">
            <GalleryData
              title="PORTRAITS"
              imageUrl="/portraitcover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="FAMILY PORTRAITS"
              imageUrl="/familycover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="EVENTS"
              imageUrl="/eventcover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="FASHION"
              imageUrl="/fashioncover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="HEADSHOT"
              imageUrl="/headshotcover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="CORPORATE"
              imageUrl="/corporate-cover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="KIDS"
              imageUrl="/kidscover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="COMPANIES"
              imageUrl="/companies-cover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />

            <GalleryData
              title="WEDDING"
              imageUrl="/wedding-cover_11zon.webp"
              instagramUrl="https://www.instagram.com/faithsamuelsphotog/?hl=en" // Replace with your Instagram URL
            />
          </div>
        </div>
      </div>

      <Booknow />
    </section>
  );
};

export default Gallery;
