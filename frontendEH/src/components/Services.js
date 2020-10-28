import React from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
import treatBanner from '../images/treatmentPlans.png'
function Services(props) {
    return (
     <div className="serviceTotal">

        <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
        </div>
        <br></br>
        <br></br>
        <header className="servHeader">
            <h3>Services & Treatments</h3>
            <h3>at Encompass HealthCare & Wound Medicine</h3>
            <p>Our team strives to create treatment plans that work for you! We've carefully cultivated a broad set of treatments, services and care options in order to offer a truly comprehensive healthcare facility.</p>
        </header>
        <img src={treatBanner} alt="banner with staff at work" id="flatBannerB" />
        <h3 className="servIntroLine">Our Core Services</h3>
        <div className="divOfSec">
        <section className="servSec1">
            <article className="servArt">
                <h5>Infectious Disease Consult</h5>
                <p>Dr. Bruce Ruben, one of the top Infectious Disease(ID) specialists in the region, leads our ID team. He believes in treating the cause of the illness or maladies rather than only treating the symptoms themselves. Dr. Ruben is able to provide full-scale Infectious Disease care in conjuction with our outpatient IV center.</p>
            </article>

            <article className="servArt">
                <h5>Outpatient IV Therapy</h5>
                <p>We offer outpatient IV services 7 days/week to help patients avoid hospital visits! We supply and administer all medications and treatments within our own facility, no need to stop at another pharmacy. We are able to infuse and administer all FDA approved medications and treatments, under the licensure of our medical director, Dr. Ruben.</p>
            </article>
            </section> 
            <section className="servSec2">  
            <article className="servArt">
                <h5>Wound Care</h5>
                <p>We believe in Wound Healing here at Encompass HealthCare! We don't just treat your wounds, we heal them. Our team works together to offer an array of wound care services including offloading, immobilization, casting, topical treatments, and others.</p>
            </article>
        
          
            <article className="servArt">
                <h5>Hyperbaric Oxygen Treatment (HBOT)</h5>
                <p>We offer Hyperbaric Medicine to patients with indicated maladies. Some of the more common uses are for severe burns, bone infections, chronic or infected wounds, arterial insufficiencies, and compartment syndrome. To get access to our Hyperbaric Chambers, you must first have it prescribed by Dr. Ruben or a referring physician/healthcare provider.</p>
            </article>
            </section> 
            <section className="servSec3">
            <article className="servArt">
                <h5>Venous Ablation</h5>
                <p>Offered for patients with venous insufficiencies and venous stasis wounds. At Encompass HealthCare, we use a mechanical ablating system called <a href={`https://clarivein.com/`}>ClariVein.</a> This allows Dr. Ruben and our ultrasound technician, Liz, to isolate the problem vein all the way to the root at the ankle, without jeopardizing important nerves and tissues! </p>
            </article>
            </section>

            <section className="servSec4">
                <h5>More Services we Offer</h5>
                <ul className="servList">
                <li>Unna Boot Wrapping</li>
                <li>Debridement</li>
                <li>Pneumatic Compression Pumps</li>
                <li>Manual Lymphatic Drainage</li>
                <li>Stem Cell Therapy</li>
                <li>Skin Substitutes</li>
                <li>Multi-Layer Compression Wrapping</li>
                <li>Nutrition</li>
                <li>Diuretics</li>
                <li>Acupuncture</li>
                </ul>
            </section>
        
        </div>


     </div>
    );
}

export default Services;