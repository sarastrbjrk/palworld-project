import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/Carousel';

function Home() {
  return (
    <>
        <h2>Pals Carousel Page</h2>
            <CarouselComponent />
        <div className="route-item">
            <Link to="/guide">How to play</Link>
        </div>
    </>
  ) 
}

export default Home;