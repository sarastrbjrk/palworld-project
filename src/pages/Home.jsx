import React from 'react';
import CarouselComponent from '../components/Carousel';
import CallToAction from '../components/CallToAction';

function Home() {
  return (
    <div className="home-page">
      <CarouselComponent />
      <CallToAction />
    </div>
  ) 
}

export default Home;