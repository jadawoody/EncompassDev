import React from 'react';
import operatingPic from '../images/webp/ultra.webp';
import placeHold from '../images/placeholder 2.jpg';
import {Link} from 'react-router-dom';
import logoPic from '../images/webp/EHlogo.webp';
import needID from '../images/webp/needIDconsult.webp';
function Physicians(props) {
    return (
        <div className="physTotal">
          <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div>
          <section className="physIntroSection">
            <h2 id="physIntro">For Our Referring Physicians & Healthcare Providers</h2>
            <p>Referrals are welcome here at Encompass HealthCare & Wound Medicine! Dr. Bruce Ruben works with other physicans who have patients with infectious diseases, stubborn, non-healing wounds, or overlapping medical problems with which they need help. Infectious disease patients require a doctor or healthcare provider referral in order to be seen, but wound care patients do not.</p>
          </section>

          <section className="physSec1">
            <img src={needID} alt="Dr. Ruben teaching" className="bruceTeachPic" />
            <article className="physSecArt">
            <h3 class="physHeads">Doctor Referrals are Important to Us!</h3>
            <p>If you are a doctor and need a consult on a patient, simply call our office and we will make every effort to see your patient within a 48 hour period. Oftentimes, our referring doctors send their patients right over to us the same day. You can count on our staff to fit your patient into our schedule as quickly as possible. </p>
            <p>In addition, Dr. Ruben offers telemedicine and communication via FaceTime, Skype, email, or by whatever means necessary. With today's technology, nothing is impossible! A patient can be helped in person or from a remote location. Dr. Ruben also consults with Nurse Case Managers, Insurance Adjusters, family members, and other parties invested in the patient's care. </p>

            </article>
          </section>

        <section className="physSec2">
        <p>Dr. Ruben follows an old fashioned style of practice whereby he will stop whatever he is doing to speak with a referring physician. Following his consultations, Dr. Ruben provides direct feedback about your patients care and progress. Dr. Ruben believes strongly in making himself available so your patient can receive the unique, individualized and urgent care for which you are seeking.</p>
        <p>At Encompass, we hope to work as an adjunct to your practice, adding our expertise in infection, wound management, venous ablation, nutrition, and others, to your patients' treatment plans when needed!</p>
        </section>
        
        <section>
        <article className="physSec3Art">
        <div className="physSec3brick">
        <h3 className="physHeads">Infectious Disease Consultations:</h3>
        <ol>
            <li>Acute Cellulitis</li>
            <li>Acute Wound Infection</li>
            <li>Bone and Joint Infection (Osteomyelitis)</li>
            <li>Urinary Tract Infection</li>
            <li>Respiratory Tract Infection</li>
            <li>Intra-Abdominal Infection</li>
            <li>Cardiovascular Infection</li>
            <li>Gastrointestinal Tract Infection</li>
            <li>Fever</li>
        </ol>
        </div>
        <img src={operatingPic} className="physSec3Pic" alt="" />
        </article>

        <article className="physSec3Art">
        <div className="physBrick" id="brick1">
        <h3 className="physHeads">Infusion Therapies:</h3>
        <ol>
            <li>Remicade</li>
            <li>IV Antibiotics</li>
            <li>Alpha-1 Proteinase Inhibitor</li>
            <li>Along with most other FDA approved infusion medications and therapies</li>
        </ol>
        </div>
        <div className="physBrick">
        <h3 className="physHeads">Wound Healing:</h3>
        <ol>
            <li>Wound Care</li>
            <li>Venous Insufficiency</li>
            <li>Lymphedema</li>
            <li>Offloading & Immobilization</li>
            <li>Debridement</li>
        </ol>
        </div>
        </article>


        </section>

        <div className="apptDiv">
        <h4 className="physHeads" id="aptHead">Appointments:</h4>
        <ol>
            <li>Call our office and ask to speak directly with Dr. Ruben, our medical director, or with Kitty, our office facilitator. Our office phone: 248-624-9800</li>
            {/* <br></br> */}
            <li>For an ID consult, your direct referral is preferred. Please have our Patient Referral form filled out if you cannot reach us via phone. </li>
        </ol>
        </div>
        </div>
    );
}

export default Physicians;