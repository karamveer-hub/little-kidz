// Gallery.jsx

import React from 'react';
import {gallery} from '../gallery'
import Navbar from './Navbar'
import Footer from './Footer';
 // Import your CSS file for styling

const Gallery = () => {
  // Assuming you have an array of image file names
  
  return (
    <React.Fragment>
      <Navbar/>
    <div className="gallery-container container display_flex">
      {gallery.map((image, index) => (
        <img
        key={index}
        src={image.imgSrc} // Update the path accordingly
        alt={`School Image ${index + 1}`}
        className="gallery-image br4"
        />
      ))}
    </div>
    <Footer/>

        </React.Fragment>
  );
};

export default Gallery;
