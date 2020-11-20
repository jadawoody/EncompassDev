import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import actions from '../api';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
 
//this page is routed as /ReadingBlog

function BlogDetails(props) {

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    async function getBlogs() {
      let res = await actions.getBlogs("/api");
      setBlog(res?.data?.blogs)
    }
    getBlogs();
  }, []);

  const showBlogs = () => {
    console.log("christmasMusic")
    return blog.map((eachblog) => {
      return (
        <div className="eachBlogBigDiv">
        <article>
          <img src={eachblog.image} alt="blog pic"/>
        </article>
        <div className="eachBlogDiv">
          <h3>{eachblog.title}</h3>
          <h4>{eachblog.body} </h4>
          
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

      <section className="blogSect2">
          <h2>Full Blog Pages Coming Soon...Stay Tuned!</h2>
      </section>

      {/* <div>
        {showBlogs()}
      </div> */}

    </div>
);

  
  // const [blog, setBlog] = useState([]);

  // useEffect(() => {
  //   async function getBlogDetails() {
  //     let res = await actions.getBlogDetails("/api");
  //     console.log("rabbitHole");
  //     setBlog(res?.data?.blog);
  //   }

  //   getBlogDetails();
  // }, []);

  // return (
  //   <div>
  //     <p>Title: {blog?.title} </p>
  //     <p>Description: {blog?.body} </p>
  //   </div>
  // );
}

export default BlogDetails;