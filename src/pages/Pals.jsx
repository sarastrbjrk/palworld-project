import React from 'react';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';


function Pals() {
    return (
        <>
            <h2>Pals Carousel Page</h2>
            <Carousel />
            <div className="route-item">
                <Link to="/"> Back to main</Link>
             </div>
        </>
      ) 
}

export default Pals;