import { useState } from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [ showNav, setShowNav ] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 50 ) {
        setShowNav(true);
    } else {
        setShowNav(false);
    }
  }

  window.addEventListener('scroll', changeBg);
  
  return (
    <nav className={ showNav ? 'nav active' : 'nav'}>
      <Link to="name" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>

      <ul className="menu">
        <li>
          <Link to="intro" spy={true} smooth={true} duration={500} className='active'>Home</Link>
        </li>
        <li>
          <Link to="features" spy={true} smooth={true} duration={500}>Features</Link>
        </li>
        <li>
          <Link to="services" spy={true} smooth={true} duration={500}>Services</Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
        <Link to="intro" className='hey'>App</Link>
    </nav>
  );
};

export default Navbar;
