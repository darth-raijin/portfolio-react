import React, { useState } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireExtinguisher, faHome, faAddressCard, faTasks, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import About from "../../About.js";
import Projects from "../../Projects.js";
import Contact from "../../Contact.js";

import "../../sass/mystyles.scss";

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a href="/home" className="navbar-item">
              <FontAwesomeIcon
                icon={faFireExtinguisher}
                size = "1em"
                alt="portfolio-logo"
                id = "logo-icon"
              />
            </a>

            <a
              onClick={() => setisActive(!isActive)}
              role="button"
              className={`navbar-burger burger ${
                isActive ? "active" : "is-active"
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasic"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasic" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
              <FontAwesomeIcon
                icon={faHome}
                alt="home-icon"
                id = "icon" 
              />
                <h1 id = "icon-text">Home</h1>
              </Link>

              <Link to="/about" className="navbar-item" id = "link">
              <FontAwesomeIcon
                icon={faAddressCard}
                alt="about-icon"
                id = "icon"
              />
                <h1 id = "icon-text">About</h1>
              </Link>
              <Link to="/projects" className="navbar-item" id = "link">
              <FontAwesomeIcon
                icon={faTasks}
                alt="projects-icon"
                id = "icon"
              />
               <h1 id = "icon-text">Projects</h1>
              </Link>
              <Link to="/contact" className="navbar-item" id = "link">
              <FontAwesomeIcon
                icon={faEnvelope}
                alt="contact-icon"
                id ="icon"
              />
                <h1 id = "icon-text">Contact</h1>
              </Link>
            </div>
          </div>
        </nav>
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}
