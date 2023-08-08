import "./About.css";

const About = () => {
  return (
    <>
    <section className="about-container">
      <div className="about-wrapper">
        <div className="paddings about-details">
          <h1> ABOUT US </h1>
          <h2>FAITH SAMUELS</h2>
              <p>Welcome to faithsamuelsphotography, where we strive to capture the beauty of life through our lens!
                 We believe that every moment is worth preserving, and that is why we are passionate about creating timeless memories that will last a lifetime.. </p>
        </div>
        {/* <hr></hr> */}

        <div className="paddings services">
        <h1 className="paddings">Services</h1>

       <ul>
        <li>Fashion Photography</li>
        <li>Wedding Photography</li>
        <li>Commercial Photography</li>
        <li>Photo Studio</li>

       </ul>
        </div>


      </div>

      <div className="aboutImg">
        <img src="./fs.webp" alt="" />
      </div>

    </section>
    <hr></hr>
</>
  );
};

export default About;
