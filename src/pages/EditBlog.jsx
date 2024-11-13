import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { getBlogByIdAPI, saveEditBlogAPI } from '../services/allAPI';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    category: '',
  });


  const fetchBlog = async () => {
    try {
      const response = await getBlogByIdAPI(id);
      if (response.status === 200) {
        setBlog(response.data);  
      } else {
        alert('Failed to fetch blog data');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveEditBlogAPI(id,blog);
      if (response.status === 200) {
        alert('Blog updated successfully');
        navigate(`/blogs`); 
      } else {
        alert('Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update blog');
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div  style={{ paddingTop: '150px' }}>
     <div className="container border rounded shadow mb-5 pt-4">
          <h2 className='mb-5 fw-semibold '>Edit Blog</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label className='fw-semibold'>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog title"
                name="title"
                value={blog.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            <Form.Group controlId="formCategory" className="mb-3">
              <Form.Label className='fw-semibold'>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter blog category"
                name="category"
                value={blog.category}
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            <Form.Group controlId="formContent" className="mb-3">
              <Form.Label className='fw-semibold'>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter blog content"
                name="content"
                value={blog.content}
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            <Button variant="success mb-5" type="submit">
              Save Changes
            </Button>
          </Form>
     </div>
    </div>
  );
};

export default EditBlog;
