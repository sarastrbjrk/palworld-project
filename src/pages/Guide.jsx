import React from 'react';
import { Link } from 'react-router-dom';
import { GuideList } from '../components/GuideList';

function Pals() {
    return (
        <>
            <h2 className="inknut-antiqua-regular">Palworld tutorial</h2>
            <GuideList />
            <div className="route-item">
                <Link to="/"> Go back</Link>
             </div>
        </>
      ) 
}

export default Pals;