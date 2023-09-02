// import { Link } from "react-scroll";
import { Link } from 'react-router-dom';
import "./DisplayImages.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const DisplayImages = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="portfolio-wrapper">
      <h1 className="paddings">
        {" "} Creating memories for a lifetime{" "}
      </h1>
      <hr></hr>

    

<div className="glass display-wrapper">


<div className="image-container" 
        data-aos="fade-up" 
        data-aos-duration="700">
{/* <h2> . . . . . . .  </h2>   */}
<img src="./mm1.webp" alt=""     />
</div>


<div className="image-container" 
        data-aos="fade-up" 
        data-aos-duration="800"

>
{/* <h2> . . . . . . .  </h2>   */}
<img src="./tk.webp" alt=""     />
</div>


<div className="image-container" 
        data-aos="fade-up" 
        data-aos-duration="1000"
>
{/* <h2> . . . . . . .  </h2>   */}
<img src="./fam.webp" alt=""     />
</div>



<div className="image-container   center-box"
        data-aos="fade-up" 
        data-aos-duration="1200"
>


<div class="circle" data-folder-name ="portraits">
<Link to="/gallery" href="#"> 
View portfolio 
</Link>
</div>

</div>



</div>
    </section>
  );
};

export default DisplayImages;
