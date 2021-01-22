import React, { useState, useEffect, onChange } from 'react';
// import actions from '../api/index';
import ptPic from '../images/webp/bruceLizAbla.webp';
import ele4 from '../images/ele4.png';
import ele2 from '../images/ele2.png';
import ele3 from '../images/ele3.png';
import {Link} from 'react-router-dom';
import bannerTrial2 from '../images/webp/bannerTrial2.webp';
import covidBanner from '../images/webp/covidFall2020.webp';
import EHangleBanner from '../images/webp/teleMedFall2020Banner.webp';
import HBOTpic from '../images/webp/HBOT.webp';
import insuranceBanner from '../images/webp/insuranceFall2020Banner.webp';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import swal from 'sweetalert';
import kittyBanner from '../images/webp/qualCareBan6.webp';

function Home(props) {
    
    return (
        <div>
        
        <article className="carouselArt">
        <Carousel autoPlay={true} infiniteLoop={true} onChange={onChange} showThumbs={false} showStatus={false} interval={3200} >
            <div>
                <img src={bannerTrial2} alt="bannerWithDr.Ruben" className="bannerPic"/>
            </div>
            <div>
                <img src={covidBanner} alt="our covid response" className="bannerPic"/>
            </div>
            <div>
                <img src={kittyBanner} alt="kitty works on patient foot" className="bannerPic"/>
            </div>
            <div>
                <img src={EHangleBanner} alt="our covid response" className="bannerPic"/>
            </div>
            <div>
                <img src={insuranceBanner} alt="text about our insurance info" className="bannerPic"/>
            </div>
            
        </Carousel>
        </article>
            {/* <SimpleImageSlider width={window} height={300} images={funzone} /> */}
            {/* <img src={bannerTrial2} alt="bannerWithDr.Ruben" className="bannerPic"/> */}

            <header className="homeHeader2">
                {/* <p>Welcome to Encompass HealthCare!</p> */}
                <p id="opener">Michigan's Premier Infectious Disease Specialist & Wound Care Facility</p>
                {/* <p id="opener2">Call us now! (248)624-9800</p> */}
                <p id="opener2">Call us now! <a href="tel:+2486249800" id="phoneCall">(248)624-9800</a></p>
            </header>

            <div className="homeSection1">
            {/* need a new picture of dr. ruben with a patient, a hand shake or hug would be perfect. */}
            <img src={ptPic} alt="Dr. Ruben with a Patient" className="homeSection1Pic"/>
            <p>We're committed to providing impeccable patient care in a safe and welcoming outpatient environment.</p>

            {/* <button className="patientButton">Patient Testimonials</button>     */}
            </div>
            <div className="homeSection2">
            <h2>About Us</h2>
            <p>At Encompass HealthCare & Wound Medicine we provide a complete portfolio of healing modalities, techniques, and professionals. We are open 7 days a week to accomodate our unique patient base and we built Encompass with every patient in mind! Our ground floor entry includes plenty of accessible parking along with automatic doors extra-wide hallways and other ADA compliant accomodtions. Finally, our friendly and competent staff set us even further apart from other practices. We work hard to make every patient's experience with us a positive one, so they can focus on their healing process!</p>
            <p></p>
            </div>
            <div className="homeSection3">
                <p>As Metro-Detroit's only full-service wound healing & infection facility, we're equipped with hosipital-quality modalities while giving patients the flexibility of outpatient care.</p>
                
                <img src={HBOTpic} alt="inside of a hyperbaric chamber" className="homeSection1Pic"/>
                {/* <button className="serviceButton">View Our Services</button>     */}
            </div>
            <br></br>
            <br></br>
            <div className="homeSection4">
                <article className="eleGroup">
                    <img src={ele4} alt="" className="element1"/>
                    <h5 id="eleTitle">Infectious Disease Consults</h5>
                    <p>Dr. Ruben, our Infectious Disease Specialist, has healed countless patients by treating the patient as a whole, not just the symptoms. Infectious Disease Consults typically require a physician or case manager referral and are made available within 48 hours. Our state of the art outpatient infusion suite offers IV Antibiotics and Infusion Therapies available 7 days/week.</p>
                </article>
                <article className="eleGroup">
                    <img src={ele2} alt="" className="element1"/>
                    <h5 id="eleTitle">Wound Care Services</h5>
                    <p id="elep">Forget weekly debridements and painful treatments! Chronic wounds or wounds over 4 weeks old, can be healed and cured at Encompass HealthCare! Our staff treats the 5 underlying causes of non-healing, attacking the source of the problem and healing the wound from the inside out.</p>
                </article>
                <article className="eleGroup">
                    <img src={ele3} alt="" className="element1"/>
                    <h5 id="eleTitle">Hyperbaric Medicine</h5>
                    <p >We are equipped with hospital-grade Individual/Monoplace Hyperbaric Chambers available for treating patients with indicated maladies. We have seen patients with bone infections, burns and other ailments present with marked improvements after carefully prescribed Hyperbaric Treatments. Find a full list of indications <Link to={`/Services`}>here</Link>.</p>
                </article>
            </div>
            <div class="homeSection5">
                <h3>Safety is our First Priority!</h3>
                <p id="sec5p">We're following CDC reccommendations carefully, keeping our office clean, wearing masks, and following social distancing guidelines whenever possible. Our goal is not only to keep our staff members safe, but to also provide a safe place for our patients. Please help us maintain safety, wear your mask and practice social distancing when possible.</p>
            </div>
        </div>
    );
}

export default Home;

//<p>"Every aspect of the environment and care is superb!" -Roger</p>
//<p>"Their staff is very informative, friendly, and caring!" -Blair</p>
//<p>"Encompass HealthCare is outstanding in all areas! Really wonderful. 
//Physician Dr. Ruben and his staff know what they're doing!" -Amy</p>
