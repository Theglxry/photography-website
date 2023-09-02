import './Companies.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Companies = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
<section className='c-wrapper'
  data-aos="fade-up" 
 data-aos-duration="700"
>





<h1 className='paddings'> BRANDS THAT TRUSTS US </h1>
<div className='paddings innerWidth flexCenter c-container'>



<div className='c-img'> 
<img src='./Total.png'  alt='total logo' />
</div>


<div className='c-img'> 
<img src='./LS.png'  alt='lagos state govt' />
</div>


<div className='c-img'> 
<img src='./Moove.jpeg'  alt='moove ng' />
</div>


<div className='c-img'> 
<img src='./DDE.jpeg'  alt='doctor dolor ent' />
</div>


<div className='c-img'> 
<img src='./zenith.webp'  alt='zenith bank ' />
</div>


<div className='c-img'> 
<img src='./zanna.png'  alt='zenith bank ' />
</div>



</div>







</section>

        
    )
}


export default Companies;