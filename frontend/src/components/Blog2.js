import React from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/webp/EHlogo.webp';
import axios from "axios";
import actions from "../api";
import swal from 'sweetalert';

function Blog2(props) {
    return (
        <div>
            <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div>
          <section className="blogIntro">
              <h2>Encompass HealthCare Blog</h2>
              <p>Interested in learning more about Encompass HealthCare? Check here for our monthly blogs! We'll keep you updated on services and treatments available at Encompass, conditions we treat, infectious disease news, wound care techniques, and more!</p>
          </section>


          <section className="blogSect2">
              <h2>Blogs Coming Soon...Stay Tuned!</h2>
              {/* <h2>This may take a moment to load...</h2> */}
          </section>

            <section className="eachBlogBigDiv">
                <img src='images/whatToKnowBlogTemp.jpg' alt="What You Need to Know About COVID-19" id="blogimg1"/>
                <article className="eachBlogDiv">
                <h3>Title</h3>
                <h4>Date Published</h4>
                <h5>Summary Summary Summary Summary Summary</h5>
                <a href="/WhatToKnowCOVID19" className="readMoreLink" >Read More</a>
                </article>
            </section>



        </div>
    );
}

export default Blog2;