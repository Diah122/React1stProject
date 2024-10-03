import React, { useState } from 'react';
import logo from '../assets/Images/logo.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="navbar navbar-large navbar-white">
        <div className="navbar-container">
          {/* Brand */}
          <a className="navbar-brand" href="# /">
            <img src={logo} alt="" width="60px" className="img-fluid" />
          </a>

          {/* Contact Info */}
          <div className="contact-info container">
            <span className="dg-phone">+91 9999999999</span>
            <span className="dg-email">Diah.design@gmail.com</span>
            {/* <i className="fa-brands fa-square-behance"></i> */}
          </div>

          {/* Open Button */}
          <button className="dg-toggler" onClick={toggleSidebar}>
            <span className="dg-toggler-icon"></span>
            <span className="dg-toggler-icon"></span>
            <span className="dg-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <i className="fa-solid fa-xmark" onClick={toggleSidebar}></i>
        </div>

        <ul className="navbar-nav navbar-nav-mobile">
          <li><a className="nav-link active" href="#home">Home</a></li>
          <li><a className="nav-link" href="#about">About</a></li>
          <li><a className="nav-link" href="#experience">Experience</a></li>
          <li><a className="nav-link" href="#skills">Skills</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
          <li><a className="nav-link" href="#partners">Partners</a></li>
          <li><a className="nav-link" href="#testimonials">Testimonials</a></li>
          <li><a className="nav-link" href="#news">News</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-small-footer">
          <p>© Diah. 2020. All Rights Reserved.</p>
        </div>
      </div>

      <nav className="navbar-footer navbar-footer-white">
        <div className="dg-social">
          <ul className="dg-social-icons mr-auto mr-lg-0 d-none d-sm-block">
            <li><a href="#/"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="#/"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#/"><i className="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
