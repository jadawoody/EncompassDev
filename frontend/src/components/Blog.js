import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/webp/EHlogo.webp';
import axios from "axios";
import actions from "../api";
import swal from 'sweetalert';
// import blogDetails from './BlogDetails';

function Blog(props) {
const [blog, setBlog] = useState([]);
useEffect(() => {
  async function getBlogs() {
    let res = await actions.getBlogs("/api");
    console.log(res.data.blogs)
    setBlog(res?.data?.blogs)
  }
  getBlogs();
}, []);


// this function maps through the database and displays the blog body for the selected blog
const showDetails = () => {
  return blog.map((eachblog) => {
    return(
      <p>{eachblog.body}</p>
    )
  })
}

// this function maps through the database and displays the blog info
const showBlogs = () => {
  return blog.map((eachblog) => {
    return (
      <div className="eachBlogBigDiv">
      <article>
        <img src={eachblog.image} alt="blog pic" id="blogimg1"/>
      </article>
      <div className="eachBlogDiv">
        <h3>{eachblog.title}</h3>
        <h4>{eachblog.datePublished} </h4>
        <h5>{eachblog.summary}</h5>
        {/* <Link to={`/ReadingBlog/${blog._id}`}  className="readMoreLink">Read More</Link> */}
        <Link to={`/blog/${eachblog._id}`} className="readMoreLink" >Read More</Link>
        {/* <button onclick="showDetails()" className="readMoreLink" >Read More</button> */}
      </div>
      </div>
    )
  })
}

function blogNotLoaded(){
  return <h2>This may take a moment to load...</h2>
}

// {swal({
//   title: "Loading...",
//   text: "Our blogs may take a moment to load from the database. We appreciate your patience!",
//   icon: "success",
//   button: "Okay!",
//   })}

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
              {/* <h2>Blogs Coming Soon...Stay Tuned!</h2> */}
              {/* <h2>This may take a moment to load...</h2> */}
          </section>

          <div>
            {showBlogs()}
          </div>

          <br/>
          <br/>
          <br/>
          <section className="blogSect3">
              <h2>Have you been to our Media Room?</h2>
              <p>Visit the link below and check out the Encompass HealthCare Media Room - an official collection of our best videos and commercial features!</p>
              
              <a href={`https://encompasshealthcare.newswire.com/`} target="_blank" className="blogSect3Link"><p>Encompass HealthCare Media Room</p></a>
          </section>
          <br/>
          <br/>
          

                      {/* {showDetails()} */}

        </div>
    );
}

export default Blog;