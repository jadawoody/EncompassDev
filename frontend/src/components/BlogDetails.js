import React, {useState, useEffect} from 'react';
import axios from 'axios';
import actions from '../api';
import {Link} from 'react-router-dom';
import logoPic from '../images/EH logo.jpg';

function BlogDetails(props) {

  const [blog, setBlog] = useState([]);

  const [blogDetail, setBlogDetail] = useState([]);
  useEffect(() => {
    async function getBlogDetails() {
      let res = await actions.getBlogDetails(props.match.params.id);
    // console.log(res.data.blogs.image)
      setBlogDetail(res?.data.blogs);
    }
      getBlogDetails();
  }, []);


  return (
    <div>

      <div className="logoDiv">
        <Link to={`/`}><img id="navLogo" src={logoPic} alt="Encompass HealthCare Logo" /></Link>
      </div>
      <section className="teamIntro">
          <h2>Encompass HealthCare Blog</h2>
      </section>
      
      <img id="blogDeetPic" src={blogDetail.image} alt="blog pic"/>
      <h2 id="blogDeetTitle">{blogDetail.title}</h2>
      <div id="blogDeetAllBody">
      <p id="blogDeetBody">{blogDetail.body1}</p>
      <p id="blogDeetBody">{blogDetail.body2}</p>
      <p id="blogDeetBody">{blogDetail.body3}</p>
      <p id="blogDeetBody">{blogDetail.body4}</p>
      <p id="blogDeetBody">{blogDetail.body5}</p>
      <p id="blogDeetBody">{blogDetail.body6}</p>
      <p id="blogDeetBody">{blogDetail.body7}</p>
      </div>


      {/* <div>
        {showBlogs()}
      </div> */}

    </div>
);

}

export default BlogDetails;