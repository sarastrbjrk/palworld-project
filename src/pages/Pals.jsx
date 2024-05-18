import React from 'react';
import { Link } from 'react-router-dom';

function Pals() {
    return (
        <>
            <h2>Pals Carousel Page</h2>
            <li className="link-item"> 
            <Link to="/"> Home</Link>
            </li>
        </>
      ) 
}

export default Pals;