// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

 // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container display_flex_col">
        <div className="container display_flex" >
      <div className="footer-column">
      <Link to="/"><img src="../images/logo.png" alt="The Little Kidz Logo" className='logo'/></Link>

      </div>

      <div className="footer-column">
        <h5>Quick Links</h5>
        <ul className='display_flex_col'>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/events" >Events</Link></li>
        <li><Link to="/services" >Services</Link></li>
        </ul>
      </div>

      {/* <div className="footer-column">
        <h5>Events</h5>
        <ul>
        <Link to="/" ><img src="images/Vector2.png" style={{filter:"invert(1)"}} alt=""/></Link>
        <Link to="/" ><img src="images/Vector3.png" style={{filter:"invert(1)"}} alt=""/></Link>
        <Link to="/" ><img src="images/Vector4.png" style={{filter:"invert(1)"}} alt=""/></Link>
        <Link to="/" ><img src="images/Vector5.png" style={{filter:"invert(1)"}} alt=""/></Link>
        </ul>
      </div> */}

      <div className="footer-column">
        <h5>Follow Us On</h5>
        <ul className='display_flex'>
        <Link to="/" ><img src="images/Vector2.png" style={{filter:"invert(1)"}} alt="" className='socialIcons'/></Link>
        <Link to="/" ><img src="images/Vector3.png" style={{filter:"invert(1)"}} alt="" className='socialIcons'/></Link>
        <Link to="/" ><img src="images/Vector4.png" style={{filter:"invert(1)"}} alt="" className='socialIcons'/></Link>
        <Link to="/" ><img src="images/Vector5.png" style={{filter:"invert(1)"}} alt="" className='socialIcons'/></Link>
        </ul>
      </div>
      </div>
      <div className="copyright">
            <p>Copyright © The Little Kidz School</p>
        </div>
    </footer>
  );
};

export default Footer;
