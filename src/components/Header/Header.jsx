import './Header.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';
import { useState } from 'react';



const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = () => {
      console.log('Mobile menu clicked!');

      setMobileMenuOpen(!isMobileMenuOpen);
    };

// console.log(isMobileMenuOpen);

  return (
    <>
<nav className={`innerWidth ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>


<div className=' logo-container'>
      <img className='logo' src='1c.png'/>
      </div>



  <div className="paddings nav-container">

    <div className="nav-left">
      <ul className="navbar-left">
        {/* Left navigation items */}
        <li>
          <Link to="hero-section" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="bio-section" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="project-section"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Services
          </Link>
        </li>
      </ul>
    </div>

    <div className="nav-right">
      <ul className="navbar-right">
        {/* Right navigation items */}
        <li>
          <Link to="footer-section" smooth={true} duration={500} offset={-70}  >
            Blog
          </Link>
        </li>
        <li>
          <Link to="footer-section" smooth={true} duration={500} offset={-70}
            className="active" >
            Gallery
          </Link>
        </li>
        <li>
          <Link to="footer-section" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>

  <div id="mobile" onClick={handleMobileMenuClick}>
    {/* Toggle mobile menu icon */}
    {/* <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} id="bar"></i> */}
    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} id="bar" />

  </div>
</nav>

    </>
  );
};

export default Header;
