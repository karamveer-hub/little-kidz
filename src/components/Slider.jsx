// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'images/13.jpg',
    'images/14.jpg',
  ];

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
