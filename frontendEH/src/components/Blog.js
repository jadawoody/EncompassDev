import React from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';

// GOALS FOR BLOG PAGE
// CREATE MODEL, BLOG (BACKEND)
// CREATE NEW INSTANCES OF BLOG MODELS FROM BACKEND, SAVE IN DB
// MAP THROUGH DB AND PULL BLOGS FROM BACKEND, DISPLAY ON FRONTEND
// CREATIVE FRONTEND DESIGN WITH MOST RECENT BLOG POST AS FEATURED POST ON TOP OF PAGE. 
// ALL OTHER BLOG POSTS ARE LISTED BELOW POST SECTION SHOULD INCLUDE: IMAGE, TITLE, DATE, 
// SUMMARY ( 2-3 LINES), LINK TO "CONTINUE READING" WHICH TAKES READER TO BLOG DETAILS PAGE
// WHERE THEY CAN READ ENTIRE BLOG, FULL SCREEN.
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