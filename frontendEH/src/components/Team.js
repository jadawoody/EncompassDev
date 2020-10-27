import React from 'react';
import BER from '../images/Bruce-new-heashot1.jpg';
import placeHold from '../images/Placeholder Photo.jpg';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';

function Team(props) {
    return (
        <div className="teamPage">
            <div className="logoDiv">
                <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
            </div>
            <section className="teamIntro">
                <h2>Meet our Team!</h2>
                <p>We are lucky to have such wonderful people on our team! Our staff includes three physicians and several other medical professionals who take pride in the excellent patient care and high-level treatment we offer at Encompass HealthCare! Our staff members have been extensively trained in a diverse set of skills for Infectious Disease and Wound Healing health care services.</p>
            </section>

           <section className="Tsec1">
                <div className="textBox1">
                <h4>Dr. Bruce E. Ruben</h4>
                <p>Dr. Ruben is our Medical Director, owner, and founder and is triple board certified in Internal Medicine, Infectious Disease, and Undersea Hyperbaric Medicine. Dr. Ruben developed Encompass HealthCare in order to assist physicians by providing excellent specialty health care and to help patients avoid the risk and cost of hospital visits! Dr. Ruben's goal has always been to create a comprehensive outpatient center for infection and wound care, precluding hospitilization. </p>
                </div>
                <img src={BER} alt="Dr. Bruce Ruben Headshot" className="Tsec1Pic"/>
            </section> 

            <section className="Tsec2">
                <img src={placeHold} alt="Kitty Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Dr. Frazie, MD</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </section>

            <section className="Tsec1">
                <div className="textBox1">
                <h4>Dr. Eric J. Greenberg, MD</h4>
                <p>Dr. Greenberg is one of our covering physicians. When Dr. Ruben cannot be available, Dr. Greenberg often steps in to help and care for our patietns. Dr. Greenberg is an emergency and family medicine specialist based in Southfield, MI.</p>
                </div>
                <img src={placeHold} alt="Greenburg headshot" className="Tsec1Pic"/>
            </section>

            <section className="Tsec2">
                <img src={placeHold} alt="Kitty Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Kitty</h4>
                <p>Katherine "Kitty" Carpenter is our Office Manager. Kitty handles our patient schedule and a great deal of the wound care responsibilities at the office. Kitty is also our Traveling Wound Care specialist. On occasion, and in special circumstances, Kitty makes trips to long term care facilities for patients who cannot travel to us.</p>
                </div>
            </section> 

            <section className="Tsec1">
                
                <div className="textBox1">
                <h4>Robin Rampson</h4>
                <p>Robin is our in-house pharmacist. She purchases and manages all of our medications, prepares all infusion therapies and keeps detailed records of dosages for all patients. Our patients are in the best hands when it comes to Robin, she is always prepared and doling out smiles!</p>
                </div>
                <img src={placeHold} alt="Robin Headshot" className="Tsec1Pic"/>
            </section> 

            <section className="Tsec2">
                <img src={placeHold} alt="Shenaria Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Shenaria Harris</h4>
                <p>Shenaria is our wonderful IV technician. She assists each and every patient who steps into our state of the art infusion suite. Shenaria administers IV medications and therapies and also assists with wound care services around the office.</p>
                </div>
            </section> 

            <section className="Tsec1">
                <div className="textBox1">
                <h4>Tia Wilson</h4>
                <p>Tia is a big part of our team. She is in charge of billing, bookkeeping, and handles insurance issues and questions for the office and for patients.</p>
                </div>
                <img src={placeHold} alt="Tia Headshot" className="Tsec1Pic"/>

            </section> 

            <section className="Tsec2">
                <img src={placeHold} alt="Marayna Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Marayna Puchalski</h4>
                <p>Marayna is another one of our billing and insurance experts. She runs the billing department alongside Tia. You'll find Marayna at the front desk, helping patients with billing and insurance.</p>
                </div>
            </section> 

            <section className="Tsec1">
                <div className="textBox1">
                <h4>Chris Carpenter</h4>
                <p>Chris is our Hyperbaric Oxygen Chamber Technician. With over 10 years of experience of working with patients with disabilities and caring for others, you're sure to have a great visit whenever you get to work with Chris. His positive attitude is sure to brighten your day!</p>
                </div>
                <img src={placeHold} alt="Chris Headshot" className="Tsec1Pic"/>

            </section> 

            <section className="Tsec2">
                <img src={placeHold} alt="Jada Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Jada Woody</h4>
                <p>Jada is our Sales & Marketing respresentative for new patient acquisition. She helps our team with marketing, brand management, and software engineering. Jada helps Encompass HealthCare build relationships with other physicians and medical professionals, and helps them refer patients to us when applicable.</p>
                </div>
            </section> 

           

        </div>
    );
}

export default Team;