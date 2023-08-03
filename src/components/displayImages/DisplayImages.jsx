import "./DisplayImages.css";

const DisplayImages = () => {
  return (
    <section className="portfolio-wrapper">
      <h1 data-aos="fade-up" className="paddings">
        {" "} Creating memories for a lifetime{" "}
      <hr></hr>

      </h1>
    

<div className="glass display-wrapper">


<div className="image-container" >
<h2> . . . . . . .  </h2>  
<img src="./mm1.webp" alt=""     />
</div>


<div className="image-container" >
{/* <h2> . . . . . . .  </h2>   */}
<img src="./tk.webp" alt=""     />
{/* <h1 className="glass" data-aos="fade-up"><a href="gallery.html"> View gallery &gt;&gt;&gt;&gt;  </a> </h1> */}

</div>


<div className="image-container" >
{/* <h2> . . . . . . .  </h2>   */}
<img src="./fam.webp" alt=""     />

</div>



<div className="image-container   center-box" >
{/* <h2> . . . . . . .  </h2>   */}
{/* <img src="./fam.webp" alt=""     /> */}

<div class="circle" data-folder-name ="portraits">
<a href="#"> 
View portfolio 
</a>
</div>

</div>



</div>
    </section>
  );
};

export default DisplayImages;
