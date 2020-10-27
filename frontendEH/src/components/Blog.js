import React from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';

function Blog(props) {
    return (
        <div>

          <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div>
  
        </div>
    );
}

export default Blog;