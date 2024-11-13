import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogByIdAPI } from '../services/allAPI'; 

const ViewBlog = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  const fetchBlogDetails = async () => {
    try {
      const result = await getBlogByIdAPI(id);
      if (result.status >= 200 && result.status < 300) {
        setBlog(result.data);
        console.log(result.data);
      } else {
        alert("Failed to fetch blog details!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  return (
    <div style={{paddingTop:'100px',paddingBottom:'100px'}} className="">
      {blog ? (
        <div className="container shadow d-flex flex-column justify-content-center">
          <h1 className="text-center fw-bold mt-5">{blog.title}</h1>
          <div className="d-flex justify-content-center">
            <img
              className="rounded-3 ms-5 mt-4"
              src={blog.imageUrl || "https://via.placeholder.com/600x300"}
              alt={blog.title}
            />
          </div>
          <p className="my-5 text-center px-5">{blog.content}</p>
        </div>
      ) : (
        <p className="text-center">Loading blog details...</p>
      )}
    </div>
  );
};

export default ViewBlog;





