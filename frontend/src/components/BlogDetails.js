import React, {useState, useEffect} from 'react';
import axios from 'axios';
import actions from '../api';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';
 



function BlogDetails(props) {


  const [blogDetail, setBlogDetail] = useState([]);
  useEffect(() => {
    async function getBlogDetails() {
      let res = await actions.getBlogDetails(props.match.params.id);
    console.log(res.data.blogs)
      setBlogDetail(res?.data.blogs);
    }
      getBlogDetails();
  }, []);

//   console.log(props);
//   let details = props.blogs.find((eachblog) => {
//     return eachblog === props.match.params.id; 
//   });

// return(
//   <div>
//     {details.title}
//     {details.body}
//   </div>
// )

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
          <h2>Full Blog Pages Coming Soon...Stay Tuned!</h2>
      </section> */}
      <img src={blogDetail.image} alt="blog pic"/>
      <h2>{blogDetail.title}</h2>
      <p>{blogDetail.body}</p>

      {/* <div>
        {showBlogs()}
      </div> */}

    </div>
);

}

export default BlogDetails;