import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from '../components/Carousel';


function Pals() {
    return (
        <>
            <h2>Pals Carousel Page</h2>
            <CarouselComponent />
            <div className="route-item">
                <Link to="/"> Back to main</Link>
             </div>
        </>
      ) 
}

export default Pals;