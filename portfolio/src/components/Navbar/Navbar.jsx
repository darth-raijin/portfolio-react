import React from 'react'
import logo from "./logo.svg";

// Import BrowserRouter, Route and Link
import { BrowserRouter, Route, Link } from "react-router-dom";

// Import other pages
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";


const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
      {
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/home' className='navbar-item'>
        <img src={logo} width="112" height="28" alt="portfolio-logo" />
        </a>

        <a
          role='button'
          className={'navbar-burger burger'}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbar' className='navbar-menu'>
        <div className='navbar-end'>
        <Link to="/home" className="navbar-item">
              Home
            </Link>

            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/projects" className="navbar-item">
              Projects
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item" href = "/about">About</a>
                <a class="navbar-item" href ="/projects">Projects</a>
                <a class="navbar-item" href = "/contact">Contact</a>
              </div>
            </div>
        </div>
      </div>
    </nav>
  }

      {/* Change routes here */}
      <Route path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
        </div>
    )
}

export default Navbar
