import React from 'react';
import { Link } from 'react-router-dom';
import { GuideList } from '../components/GuideList';

function Home() {
  return (
    <>
        <h2 className="inknut-antiqua-regular">Palworld tutorial</h2>
        <GuideList />
        <div className="route-item">
            <Link to="/pals">Check out pals</Link>
        </div>
    </>
  ) 
}

export default Home;