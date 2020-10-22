import React from 'react';
import bruceContact from '../images/bruceContactPic.png';

function Contact(props) {
    return (
        <div id="totalContact">

        <header className="contactHeader">
            <h2>Contact Us</h2>
        </header>
        <div className="contactDiv1">
            <img src={bruceContact} alt="bruce with phone number & site url" className="bruceContactPic"/>
            <h5>Location</h5> 
            <p>Encompass HealthCare & Wound Medicine</p>
            <p>2300 Haggerty Road, Suite 1190</p>
            <p>West Bloomfield, MI 48323</p>
            <h5>Phone</h5>
            <p>(248)624-9800</p>
            <h5>Fax</h5>
            <p>(248)624-9825</p>

            <h5>Hours</h5>
            <p>Mon-Fri: 8am-5pm | Sat & Sun 8am-12pm</p>
        </div>

        </div>
    );
}

export default Contact;