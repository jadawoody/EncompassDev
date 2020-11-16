import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
import axios from "axios";
import actions from "../api";
// import blogDetails from './BlogDetails';

// GOALS FOR BLOG PAGE:

// MAP THROUGH DB AND PULL BLOGS FROM BACKEND, DISPLAY ON FRONTEND
// CREATIVE FRONTEND DESIGN WITH MOST RECENT BLOG POST AS FEATURED POST ON TOP OF PAGE. 
// ALL OTHER BLOG POSTS ARE LISTED BELOW POST SECTION SHOULD INCLUDE: IMAGE, TITLE, DATE, 
// SUMMARY ( 2-3 LINES), LINK TO "CONTINUE READING" WHICH TAKES READER TO BLOG DETAILS PAGE
// WHERE THEY CAN READ ENTIRE BLOG, FULL SCREEN.
function Blog(props) {
const [blog, setBlog] = useState([]);
useEffect(() => {
  async function getBlogs() {
    let res = await actions.getBlogs("/api");
    setBlog(res?.data?.blogs)
  }
  getBlogs();
}, []);


// const showDetails = () => {
//   return blog.map((eachblog) => {
//     return(
//       <p>{eachblog.body}</p>
//     )
//   })
// }

const showBlogs = () => {
  return blog.map((eachblog) => {
    return (
      <div className="eachBlogBigDiv">
      <article>
        <img src={eachblog.image} alt="blog pic"/>
      </article>
      <div className="eachBlogDiv">
        <h3>{eachblog.title}</h3>
        <h4>{eachblog.datePublished} </h4>
        <h5>{eachblog.summary}</h5>
        {/* <Link to={`/ReadingBlog/${blog._id}`}  className="readMoreLink">Read More</Link> */}
        <Link to={`/ReadingBlog`} className="readMoreLink" >Read More</Link>
      </div>
      </div>
    )
  })
}



    return (
        <div>

          <div className="logoDiv">
            <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
          </div>
          <section className="teamIntro">
              <h2>Encompass HealthCare Blog</h2>
              <p>Interested in learning more about Encompass HealthCare? Check here for our monthly blogs! We'll keep you updated on services and treatments available at Encompass, conditions we treat, infectious disease news, wound care techniques, and more!</p>
          </section>

          {/* <section className="blogSect2">
              <h2>Blogs Coming Soon...Stay Tuned!</h2>
          </section> */}

          <div>
            {showBlogs()}
          </div>
                      {/* {showDetails()} */}

        </div>
    );
}

export default Blog;