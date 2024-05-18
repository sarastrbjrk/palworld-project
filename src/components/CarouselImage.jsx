import React from 'react';


function CarouselImage({ text }) {
  // Map the text to the image source (this is an example, you can modify it as needed)
  const imageSrc = {
    "001": "images/paldeck/001.png",
    "002": "images/paldeck/002.png",
    "003": "images/paldeck/003.png",
  };

  return (
    <img
      className="carousel-image"
      src={imageSrc[text]} // Image source based on text prop
      alt={text} // Alt text based on text prop
    />
  );
}

export default CarouselImage;