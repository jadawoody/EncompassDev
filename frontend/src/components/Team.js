import React from 'react';
import BER from '../images/webp/Bruce-new-heashot1 (1).webp';
import placeHold from '../images/placeholder 2.jpg';
import {Link} from 'react-router-dom';
import logoPic from '../images/webp/EHlogo.webp';
import robinHead from '../images/robin1.jpg';
import shenariaHead from '../images/shenaria2.jpg';
import kittyHead from '../images/kitty2.jpg';
import jadaHead from '../images/jada4.jpg';
import peterHead from '../images/peter1.jpg';

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
                <h4>Bruce E. Ruben, MD</h4>
                <p>Dr. Ruben is our Medical Director, owner, and founder and is triple board certified in Internal Medicine, Infectious Disease, and Undersea Hyperbaric Medicine. Dr. Ruben developed Encompass HealthCare in order to assist physicians by providing excellent specialty health care and to help patients avoid the risk and cost of hospital visits!  Dr. Ruben's goal has always been to create a comprehensive outpatient center for infection and wound care, precluding hospitilization. </p>
                </div>
                <img src={BER} alt="Dr. Bruce Ruben Headshot" className="Tsec1Pic"/>
            </section> 

            <section className="Tsec2">
                <img src={placeHold} alt="Frazie Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Marius Frasie, MD</h4>
                <p>Dr. Frasie is our second physician at Encompass HealthCare. He often covers our patient care and appointments when Dr. Ruben is away or unavailable. Dr. Frasie is based in Rochester, Michigan, graduated from Wayne State University's Medical School in 1995, and specializes in Internal Medicine. Dr. Frasie brings excellent patient care and expertise each day at Encompass HealthCare!</p>
                </div>
            </section>

            
            <section className="Tsec1">
                <div className="textBox1">
                <h4>Kitty</h4>
                <p>Katherine "Kitty" Carpenter is our Office Facilitator. Kitty handles our patient schedule and a great deal of the wound care responsibilities at the office. Kitty is also our Traveling Wound Care specialist. On occasion, and in special circumstances, Kitty makes trips to long term care facilities for patients who cannot travel to us.</p>
                </div>
                <img src={kittyHead} alt="Kitty Headshot" className="Tsec1Pic"/>

            </section> 

            <section className="Tsec2">
            <img src={robinHead} alt="Robin Headshot" className="Tsec2Pic"/>

                <div className="textBox2">
                <h4>Robin Rampson</h4>
                <p>Robin is our in-house pharmacist. She purchases and manages all of our medications, prepares all infusion therapies and keeps detailed records of dosages for all patients. Our patients are in the best hands when it comes to Robin, she is always prepared and doling out smiles!</p>
                </div>
            </section> 

            <section className="Tsec1">
                <div className="textBox1">
                <h4>Shenaria Harris</h4>
                <p>Shenaria is our wonderful IV technician. She assists each and every patient who steps into our state of the art infusion suite. Shenaria administers IV medications and therapies and also assists with wound care services around the office.</p>
                </div>
                <img src={shenariaHead} alt="Shenaria Headshot" className="Tsec1Pic"/>

            </section> 

            <section className="Tsec2">
            <img src={placeHold} alt="Tia Headshot" className="Tsec2Pic"/>

                <div className="textBox2">
                <h4>Tia Wilson</h4>
                <p>Tia is a big part of our team. She is in charge of billing, accounting, and also medical insurance coverage. When patients have quesitons about medical insurances or services being covered and paid for after being seen at Encompass HealthCare, Tia will get an answer or solution as soon as possible.</p>
                </div>

            </section> 

            <section className="Tsec1">
                <div className="textBox1">
                <h4>Marayna Battle</h4>
                <p>Marayna is another one of our billing and insurance experts. She runs the billing department alongside Tia and is very helpful to patients who have questions about their coverage. You'll find Marayna at the front desk, helping patients with billing and insurance.</p>
                </div>
                <img src={`../images/marayna1.jpg`} alt="Marayna Headshot" className="Tsec1Pic"/>

            </section> 

            <section className="Tsec2">
            <img src={`../images/chris1.jpg`} alt="Chris Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Chris Carpenter</h4>
                <p>Chris is our Hyperbaric Oxygen Chamber Technician. With over 10 years of experience of working with patients with disabilities and caring for others, you're sure to have a great visit whenever you get to work with Chris. His positive attitude is sure to brighten your day!</p>
                </div>

            </section> 

            <section className="Tsec1">
                <div className="textBox1">
                <h4>Peter Eshun</h4>
                <p>Peter is our on-site Executive Chef! As a part of Dr. Ruben's initiative to provide a full-circle and complete care unit at Encompass, Peter provides nutritious meals for our patients and our staff each day! This is especially important for patients receiving IV antibiotics or medications. We provide protein rich meals, snacks, and shakes for these patients especially. Patients' family members and care-takers are also welcome to enjoy Peter's wonderful food!</p>
                </div>
                <img src={peterHead} alt="Peter headshot" className="Tsec1Pic"/>
            </section>

            <section className="Tsec2">
                <img src={jadaHead} alt="Jada Headshot" className="Tsec2Pic"/>
                <div className="textBox2">
                <h4>Jada Woody</h4>
                <p>Jada is our Sales & Marketing respresentative for new patient acquisition. She helps our team with marketing, brand management, and software engineering. Jada helps Encompass HealthCare build relationships with other physicians and medical professionals, and helps them refer patients to us when applicable.</p>
                </div>
            </section> 

           

        </div>
    );
}

export default Team;