import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#345', color: '#fff' }} className="p-5 container-fluid">
      <div className="d-flex justify-content-between">
        {/* Intro */}
        <div style={{ width: '400px' }}>
          <h5><i className='fa-solid fa-blog fa-xl me-2 pb-5'></i> Story Scribe </h5>
          <p>Designed and built with all the love in the world by the Scribe team with the help of our contributors.</p>
          <p>Code licensed Scribes, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* Links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/blogs'} style={{ textDecoration: 'none', color: '#fff' }}>Blogs Page</Link>
          <Link to={'/'} style={{ textDecoration: 'none', color: '#fff' }}>Home Page</Link>
          <Link to={'/about'} style={{ textDecoration: 'none', color: '#fff' }}>About Page</Link>
        </div>
        {/* Guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{ textDecoration: 'none', color: '#fff' }} href='https://react.dev/' target='_blank' rel="noopener noreferrer">React</a>
          <a style={{ textDecoration: 'none', color: '#fff' }} href='https://reactrouter.com/en/main' target='_blank' rel="noopener noreferrer">React Router</a>
          <a style={{ textDecoration: 'none', color: '#fff' }} href='https://react-bootstrap.github.io/' target='_blank' rel="noopener noreferrer">React Bootstrap</a>
        </div>
        {/* Contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='Enter your Email here!!!' type="text" className='form-control me-2' />
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="https://x.com/i/flow/login" style={{ textDecoration: 'none', color: '#fff' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-twitter'></i></a>
            <a href="https://www.instagram.com/accounts/login/" style={{ textDecoration: 'none', color: '#fff' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-instagram'></i></a>
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" style={{ textDecoration: 'none', color: '#fff' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-facebook'></i></a>
            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fmynetwork%2Fgrow%2F" style={{ textDecoration: 'none', color: '#fff' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-linkedin'></i></a>
            <a href="https://github.com/login" style={{ textDecoration: 'none', color: '#fff' }} target='_blank' rel="noopener noreferrer"><i className='fa-brands fa-github'></i></a>
            <a href=" tel:+91-6202402000" style={{ textDecoration: 'none', color: '#fff' }} target='_blank'><i className='fa-solid fa-phone'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright ©; November 2024 Story Scribe App. Built with React.</p>
    </footer>
  )
}

export default Footer;
