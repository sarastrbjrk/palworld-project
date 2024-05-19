import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="callToAction">
        <h2>Here's a sneak peak of the hottest game right now</h2>     
        <div className="route-item">
          <Link to="/guide">Check out tutorial</Link>
      </div>
    </div>
  );
}

export default CallToAction;