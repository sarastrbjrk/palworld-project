import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="text-block">
        <h3>
          Palworld or "Pokemon with Guns" is a survival open-world RPG where you catch pals, build bases, explore biomes, and fight bosses.  
        </h3>  
        <h3>
          After you've caught a pal you can use it in fights and unlock their "partner" skills, e.g Relaxaurus' partner skill is a missile launcher. 
        </h3>  
        <h3>
          In Palworld there are almost 200 different pals, let's check some of them out below. 
        </h3>  
        <div className="hero-button">
          <Link to="/quiz">Check out pals!</Link>
      </div>
    </div>
  );
}

export default CallToAction;