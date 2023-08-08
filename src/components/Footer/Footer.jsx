import  "./Footer.css";




const Footer = () =>{


    return (

<footer className = "footer">
      <div className = "footer-container">
          {/* <div>
              <h2>FAITH SAMUELS</h2>
              <p>Welcome to faithsamuelsphotography, where we strive to capture the beauty of life through our lens!
                 We believe that every moment is worth preserving, and that is why we are passionate about creating timeless memories that will last a lifetime.. </p>
          </div> */}



          <div> 
              <h3>Contact US!</h3>
              <p> Subscribe to our newsletter to get notified whenever we have awesome photo-packages.</p>
              <div className = "subs">
                  <i className = "fas fa-envelope"></i>
                  <input type = "email" id = "email" placeholder="Email Address" />
                  <button type = "submit">SUBSCRIBE</button>
              </div>
          </div>
      </div>








      <p>&copy; Copyright FAITHSAMUELS. 2023</p>
  </footer>


    )
}




export default Footer;



