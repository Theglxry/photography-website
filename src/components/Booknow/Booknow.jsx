import './Booknow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Booknow  = () => {


return(

 



<div className="form-container">
      <h1> BOOK NOW !</h1>

      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faCalendar}  style={{color: '#ffff'}}/>
        </div>
        <input type="text" className="input-field" placeholder="Calendar" />
      </div>



      <div className='row'>
      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input type="text" className="input-field" placeholder="Name" />
      </div>




      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input type="text" className="input-field" placeholder="Last Name" />
       </div>
      </div>



<div className='row'>
      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input type="email" className="input-field" placeholder="Email" />
      </div>



      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <input type="tel" className="input-field" placeholder="Phone" />
      </div>

      </div>



      <div className="form-group">
        <div className="icon">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <input type="select" className="input-field" placeholder="Location" />
      </div>




      <button type="submit" className="button submit-btn">Submit</button>
    </div>
)
}

export default Booknow;