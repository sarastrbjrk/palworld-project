import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="callToAction">
        <p>
          Palworld or  is a survival open-world RPG where you catch pals, build bases, explore biomes, and fight bosses.  
          </p>  
        <div className="route-item">
          <Link to="/quiz">Check out tutorial</Link>
      </div>
    </div>
  );
}

export default CallToAction;