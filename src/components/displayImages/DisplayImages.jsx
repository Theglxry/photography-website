import "./DisplayImages.css";

const DisplayImages = () => {
  return (
    <section className="section-1">
      <h1 className="glass" data-aos="fade-up">
        {" "} Capturing moments from today…Creating memories for a lifetime{" "}
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
<h2> . . . . . . .  </h2>  
<img src="./fam.webp" alt=""     />
</div>


</div>
    </section>
  );
};

export default DisplayImages;
