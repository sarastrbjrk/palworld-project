import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
        <h2>Palworld tutorial</h2>
        <ul>
            <li> 1  </li>
            <li> 1  </li>
            <li> 1  </li>
            <li> 1  </li>
            <li> 1  </li>
            <li> 1  </li>
        </ul>
        <li className="link-item"> 
        <Link to="/pals"> Pals</Link>
        </li>
    </>
  ) 
}

export default Home;