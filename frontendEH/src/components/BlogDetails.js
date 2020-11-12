import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogDetails(props) {
    const [blogDetail, setBlogDetail] = useState([]);

    useEffect(() => {
        async function getBlogDetails() {
          let res = await axios.get(
            //asking the backend to find the match for the users input id, and then display the data connected to that id
            `http://localhost:5000/Blog/${props.match.params.id}`
          );
          //console.log(res.data);
          setBlogDetail(res.data.blog);
        }
    
        getBlogDetails();
      }, []);

    return (
        <div>
            <p>Title: {blogDetail.title}</p>
            <p>Description: {blogDetail.body}</p>
        </div>
    );
}

export default BlogDetails;