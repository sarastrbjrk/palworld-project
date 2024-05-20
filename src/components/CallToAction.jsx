import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="text-block">
        <p>
          Palworld or "Pokemon with Guns" is a survival open-world RPG where you catch pals, build bases, explore biomes, and fight bosses.  
        </p>  
        <p>
          After you've caught a pal you can use it in fights and unlock their "partner" skills - Relaxaurus' partner skill is a missile launcher. 
        </p>  
        <div className="route-item">
          <Link to="/quiz">Check out pals!</Link>
      </div>
    </div>
  );
}

export default CallToAction;