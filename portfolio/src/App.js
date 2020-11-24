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
      {/* <div className="App">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="nav-items">
            <Link to="/home" className="navbar-item">
              HOME
            </Link>
            <Link to="/about" className="navbar-item">
              ABOUT
            </Link>
            <Link to="/projects" className="navbar-item">
              PROJECTS
            </Link>
            <Link to="/contact" className="navbar-item">
              CONTACT
            </Link>
            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav> */}

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={logo} width="112" height="28" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-end">
          <div class="navbar-start">
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

      {/* Change routes here */}
      <Route path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
