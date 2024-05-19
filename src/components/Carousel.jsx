import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css';  

// Map the text to the image source 
const imageSrc = {
  "lamball": "images/paldeck/001.png",
  "cattiva": "images/paldeck/002.png",
  "chikipi": "images/paldeck/003.png",
  "teafant": "images/paldeck/016.png",
  "direhowl": "images/paldeck/026.png",
  "bristla": "images/paldeck/030.png",
  "mozzanda": "images/paldeck/033B.png",
  "leezpunk": "images/paldeck/045.png",
  "robinquill": "images/paldeck/048.png",
  "dinossom": "images/paldeck/064.png",
  "tombat": "images/paldeck/068.png",
  "katress": "images/paldeck/075.png",
  "relaxaurus": "images/paldeck/085.png",
  "kingpaca": "images/paldeck/089.png",
  "mammorest": "images/paldeck/090.png",
  "quivern": "images/paldeck/095.png",
};

function CarouselImage({ text }) {
  
  return (
    <img
      className="carousel-image"
      src={imageSrc[text]} 
      alt={text} // Alt text based on text prop
    />
  );
}

function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel>
        {Object.keys(imageSrc).map((key) => (
          <Carousel.Item key={key}>
            <CarouselImage text={key} />
            <Carousel.Caption>
              <h3>{`${key.charAt(0).toUpperCase() + key.slice(1)}`}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
