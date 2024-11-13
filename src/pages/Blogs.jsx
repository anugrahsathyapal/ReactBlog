import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteBlogAPI, getAllBlogsAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogDetails, setBlogDetails] = useState([]);

  const getBlogs = async () => {
    try {
      const result = await getAllBlogsAPI();
      if (result.status >= 200 && result.status < 300) {
        setBlogDetails(result.data);
      } else {
        alert("Failed to fetch data!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await deleteBlogAPI(id);
      getBlogs();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div style={{ paddingTop: '100px' }} className="container d-flex justify-content-evenly align-content-center flex-wrap">
      {blogDetails.length ? (
        blogDetails.map((blog) => (
          <Card key={blog.id} className="shadow mb-4" style={{ width: '21rem' }}>
            <Card.Img
              className="p-1 rounded-3"
              variant="top"
              src={blog.imageUrl || "https://via.placeholder.com/150"}
            />
            <Card.Body>
              <i className="fa-solid fa-tags mb-3">
                <span className="text-primary ms-2 fw-lighter">#{blog.category || "nature"}</span>
              </i>
              <Card.Title className="text-center fw-bold">{blog.title}</Card.Title>
              <Card.Text className="text-center">
                {blog.content ? blog.content.substring(0, 100) + "..." : "No content available"}
              </Card.Text>
              <div className="d-flex justify-content-center gap-3 align-items-center mt-3">
                <Link to={`/${blog.id}/view`} className="text-decoration-none">
                  <i className="fa-solid fa-eye bg-primary p-2 rounded text-white"></i>
                </Link>
                <Link to={`/${blog.id}/edit`} className="text-decoration-none">
                  <i className="fa-solid fa-pen-to-square bg-success text-white p-2 rounded"></i>
                </Link>
                <Button variant="link" onClick={() => deleteBlog(blog.id)} className="p-0">
                  <i className="fa-solid fa-trash bg-danger text-white p-2 rounded"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center">No blogs available.</p>
      )}
    </div>
  );
};

export default Blogs;
