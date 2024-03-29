// AboutUs.jsx

import React from 'react';
import '../App.scss'
import Navbar from './Navbar';
import Footer from './Footer';
const AboutUs = () => {
  return (
    <React.Fragment>

    <Navbar/>
    <div className="about-us-container display_fleX_col">
      <div className="about-us-content display_flex_col">
        <h1>About Us</h1>
        <p>
          Welcome to our company! We are passionate about creating innovative solutions and providing
          excellent services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <p>
          Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce
          nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
      </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

export default AboutUs;
