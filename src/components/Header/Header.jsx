import './Header.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuClick = () => {
      console.log('Mobile menu clicked!');

      setMobileMenuOpen(!isMobileMenuOpen);
    };

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
          {/* <ScrollLink to="/" smooth={true} duration={500} offset={-70}>
            Home
          </ScrollLink> */}
          <Link to="/home" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <ScrollLink to="bio-section" smooth={true} duration={500} offset={-70}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="project-section"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Services
          </ScrollLink>
        </li>
      </ul>
    </div>

    <div className="nav-right">
      <ul className="navbar-right">
        {/* Right navigation items */}
        <li>
          <ScrollLink to="footer-section" smooth={true} duration={500} offset={-70}  >
            Blog
          </ScrollLink>
        </li>
        <li>
          <Link to="/gallery" className="active">
            Gallery
          </Link>
        </li>
        <li>
          <ScrollLink to="footer-section" smooth={true} duration={500} offset={-70}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  </div>

  <div id="mobile" onClick={handleMobileMenuClick}>
    {/* Toggle mobile menu icon */}
    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} id="bar" />

  </div>
</nav>

    </>
  );
};

export default Header;
