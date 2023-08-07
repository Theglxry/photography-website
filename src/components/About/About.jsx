import "./About.css";

const About = () => {
  return (
    <>
    <section className="about-container">
      <div className="about-wrapper">
        <div className="paddings about-details">
          <h1> ABOUT ME </h1>
          <p>
            {" "}
            A tristique tincidunt quam eu vel. Sed lectus at mauris aliquet
            pellentesque elementum dolor tincidunt in.A tristique tincidunt quam
            eu vel. Sed lectus at mauris aliquet pellentesque elementum dolor
            tincidunt in.A tristique tincidunt quam eu vel. Sed lectus at mauris
            aliquet pellentesque elementum dolor tincidunt in.{" "}
          </p>
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
        <img src="./fs.jpg" alt="" />
      </div>

    </section>
    <hr></hr>
</>
  );
};

export default About;
