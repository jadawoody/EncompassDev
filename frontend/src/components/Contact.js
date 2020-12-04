import React from 'react';
import bruceContact from '../images/bruceContactPic.png';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
import Location from './Location';
import EHonMap from '../images/mapEHGoogle.png';

function Contact(props) {
    return (
        <div id="totalContact">
        <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div>

        <header className="contactHeader">
            <h2>Contact Us</h2>
            <p>Here you can find all of our contact information, our location, links to our patient reviews and testimonials, as well as a link to write your own review for us! We aim to be as accessible as possible and we truly appreciate our patient feedback!</p>

        </header>
        <img src={bruceContact} alt="bruce with phone number & site url" className="bruceContactPic"/>

        <section id="contactSect1">
        <div className="contactDiv1">
            <h5>Location</h5> 
            <a href="https://www.google.com/maps/place/Encompass+Healthcare/@42.5575789,-83.4404175,17z/data=!3m1!4b1!4m5!3m4!1s0x8824a520d4edb1ef:0x3e3c600b75dfa1d5!8m2!3d42.557575!4d-83.4382235" id="phoneCall" target="_blank"><p>Encompass HealthCare & Wound Medicine</p>
            <p>2300 Haggerty Road, Suite 1190</p>
            <p>West Bloomfield, MI 48323</p></a>
            <h5>Phone</h5>
            <a href="tel:+2486249800" id="phoneCall"><p>(248)624-9800</p></a>
            <h5>Fax</h5>
            <p>(248)624-9825</p>

            <h5>Hours</h5>
            <p>Mon-Fri: 8am-5pm | Sat & Sun 8am-12pm</p>
            <h5>Google</h5>
            <a href="https://g.page/encompasshealthcare?gm" target="_blank" id="googleBizProf"><p>Click here to visit our Google Business Profile</p></a>
            <h5>Please leave us a Review on Google</h5>
            <a href="https://g.page/encompasshealthcare/review?rc" target="_blank" id="googleBizProf"><p>Click here! We appreciate feedback from our patients!</p></a>
            <h5>Read our reviews across all platforms</h5>
            <a href="https://birdeye.com/encompass-healthcare-and-wound-medicine-156719312272612" target="_blank" id="googleBizProf"><p>Click here to see more reviews or write your own!</p></a>
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