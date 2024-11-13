import React, { useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [showAddButton, setShowAddButton] = useState(location.pathname !== '/addblogs');
     useEffect(() => {
         setShowAddButton(location.pathname !== '/addblogs');
         }, [location.pathname]);

  return (
    <>
      <Navbar style={{ zIndex: 1 }} className="bg-info position-fixed w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand style={{ color: 'white' }} className="fs-5 fw-bolder">
              <i className="fa-solid fa-blog fa-xl me-2"></i>
              <span>StoryScribe</span>
            </Navbar.Brand>
          </Link>
          <div className="d-flex justify-content-center flex-grow-1">
            <ul  className="list-unstyled d-flex justify-content-center m-0 fw-bold">
              <li className="px-3">
                <Link to="/" className="text-white text-decoration-none hover:text-blue">
                  Home
                </Link>
              </li>
              <li className="px-3">
                <Link to="/blogs" className="text-white text-decoration-none hover:text-blue">
                  Blogs
                </Link>
              </li>
              <li className="px-3">
                <Link to="/about" className="text-white text-decoration-none hover:text-blue">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
           { showAddButton && <Link to={'/addblogs'}>
              <i style={{height:'35px',width:'35px',display:'flex',justifyContent:'center',alignItems:'center'}} className="fa-solid fa-plus text-white bg-primary rounded-5 p-2 "></i>
            </Link>}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
