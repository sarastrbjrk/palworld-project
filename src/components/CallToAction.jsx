import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CallToAction.css'; 

function CallToAction() {
  return (
    <div className="callToAction">
        <h2>A sneak peak of the hottest game right now</h2>   
        <p>
          Palworld or "Pokemon with Guns" is a survival open-world RPG where you catch pals, build bases, explore biomes, and fight bosses.  
          </p>  
        <div className="route-item">
          <Link to="/guide">Check out tutorial</Link>
      </div>
    </div>
  );
}

export default CallToAction;