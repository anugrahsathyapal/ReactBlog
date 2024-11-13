import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { saveBlogAPI } from '../services/allAPI';

const Addblogs = () => {
  const [blogDetails, setBlogDetails] = useState({
    title: '', 
    category: '', 
    email: '', 
    imageUrl: '', 
    content: ''
  });

  const handleUploadBlog = async (e) => {
    e.preventDefault();
    const { title, category, email, imageUrl, content } = blogDetails; 
    if (title && category && email && imageUrl && content) { 
      try { 
        const result = await saveBlogAPI(blogDetails);
        if (result) { 
          alert('Blog post created successfully!'); 
          setBlogDetails({ title: '', category: '', email: '', imageUrl: '', content: '' });
        } else {
          alert('Failed to create blog post'); 
        } 
      } catch (error) { 
        console.error('Error:', error);
        alert('An error occurred while creating the blog post');
      } 
    } else {
      alert('Please fill all the fields'); 
    }
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center pb-5">
      <div className="container d-flex justify-content-center">
        <div className="w-50 border border-2 shadow-lg p-4 rounded bg-white">
          <img className='w-100 rounded-3 mb-3' style={{ height: '200px' }} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxk8K_A_2nKo-jCgoM1mW6rN2iBvgsB-Jvt6Q2uVTQnsonSzenKDTkGsYMlEv-IwNLad8uFVY2Wz3xTehh_VT80vaBin4CBKBZNCF_svlg52i-MR_pB5ACc0eaUOwDIVogvaFOqiE5_5kXTX9PzfaIjz5KJwOqYMiPRrS8DrskMzQjNJh8cMLDGjWQ/d/ARTISTIC-COLORFUL-AI-LANDSCAPE-1192023.png" alt="Blog preview" />
          <Form onSubmit={handleUploadBlog}>
            <Form.Group className="mb-3" controlId="Title">
              <Form.Control 
                type="text" 
                placeholder="Enter the title !!!" 
                value={blogDetails.title} 
                onChange={(e) => setBlogDetails({ ...blogDetails, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Category">
              <Form.Control 
                type="text" 
                placeholder="Enter the category !!!"  
                value={blogDetails.category} 
                onChange={(e) => setBlogDetails({ ...blogDetails, category: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Control 
                type="text" 
                placeholder="Enter your email !!!"  
                value={blogDetails.email} 
                onChange={(e) => setBlogDetails({ ...blogDetails, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ImageUrl">
              <Form.Control 
                type="text" 
                placeholder="Enter the blog image url !!!"  
                value={blogDetails.imageUrl} 
                onChange={(e) => setBlogDetails({ ...blogDetails, imageUrl: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Content">
              <Form.Label className='ms-1'>Blog Content</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                placeholder="Write your blog here..." 
                value={blogDetails.content} 
                onChange={(e) => setBlogDetails({ ...blogDetails, content: e.target.value })}
              />
            </Form.Group>

            <button type="submit" className='btn btn-dark w-100'>Create Post</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Addblogs;
