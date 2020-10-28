import React from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
import CMPic from '../images/case-manager (1).jpg';

function CM(props) {
    return (
        <div>
        <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div>
          
          <section className="physIntroSection">
          <h2 className="CMHeads">For Our Referring Case Managers</h2>
          <p className="CMpara">Good news! At Encompass Healthcare, we work regularly and closely with Case Managers all over the state of Michigan! Because we are an outpatient office rather than a hospital, we offer tremendous flexibility for the nurse case managers' and patients' schedules. </p>
          </section>

          <section className="CMsec1">
          <img id="CMimage" src={CMPic} alt="caseManager with patient" />
          <article >
          <h3 className="CMHeads">We Appreciate the Importance of a Case Manager's Role!</h3>
          <p className="CMpara">Dr. Ruben, along with our entire staff, have taken the time to understand the roles, duties, and responsibilities Case Managers have as an essential liaison and advocate for patients. We know Case Managers need to access all reasonably necessary medical care and report back to insurance claim adjusters about your patients' treamtment. </p>
          </article>
          </section>

        <h3 className="CMHeads">Encompass HealthCare & Wound Medicine is a full-service outpatient facility.</h3>
        <p className="CMpara">We are fortunate to offer centralized multidiscipline medical and surgical services in a disability modified single site location. Our office is uniquely modified to accommodate patients with high cervical spinal cord injuries and the consequential physical disabilities that might limit patient access in other outpatient settings.</p>
        </div>
    );
}

export default CM;