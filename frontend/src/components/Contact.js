import React from 'react';
import bruceContact from '../images/bruceContactPic.png';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
import Location from './Location';
import EHonMap from '../images/mapEHGoogle.png';

function Contact(props) {
    return (
        <div id="totalContact">
        {/* <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div> */}

        <header className="contactHeader">
            <h2>Contact Us</h2>
        </header>
        <img src={bruceContact} alt="bruce with phone number & site url" className="bruceContactPic"/>

        <section id="contactSect1">
        <div className="contactDiv1">
            <h5>Location</h5> 
            <p>Encompass HealthCare & Wound Medicine</p>
            <p>2300 Haggerty Road, Suite 1190</p>
            <p>West Bloomfield, MI 48323</p>
            <h5>Phone</h5>
            <a href="2486249800" id="phoneCall"><p>(248)624-9800</p></a>
            <h5>Fax</h5>
            <p>(248)624-9825</p>

            <h5>Hours</h5>
            <p>Mon-Fri: 8am-5pm | Sat & Sun 8am-12pm</p>
            <h5>Google</h5>
            <a href="https://g.page/encompasshealthcare?gm" target="_blank" id="googleBizProf"><p>Click here to visit our Google Business Profile</p></a>
            <h5>Please leave us a Review on Google</h5>
            <a href="https://g.page/encompasshealthcare/review?rc" target="_blank" id="googleBizProf"><p>Click here! We appreciate feedback from our patients!</p></a>
        </div>
        
        <img src={EHonMap} id="EHonMap" alt="encompass healthcare on map"/>
        {/* <GoogleMap /> */}
        </section>
          {/* <article>
              <Location/>
          </article> */}
          
        </div>
    );
}

export default Contact;