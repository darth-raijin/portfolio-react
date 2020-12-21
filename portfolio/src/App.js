import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
// import "./css/mystyles.css";
// import "./App.css";
import "./sass/mystyles.scss";

// Import BrowserRouter, Route and Link
import { BrowserRouter, Route, Link } from "react-router-dom";

// Import other pages
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

function App() {
  document.title = "Macow";
  return (
    <BrowserRouter>
      {
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
        <img src={logo} width="112" height="28" />
        </a>

        <a
          role='button'
          className={'navbar-burger burger'}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className='navbar-menu'>
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
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
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
  );
}

export default App;
