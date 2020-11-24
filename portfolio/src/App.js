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
      <div className="App">
        <nav className="navbar">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="nav-items">
            <Link to="/home" className="nav-item">
              HOME
            </Link>
            <Link to="/about" className="nav-item">
              ABOUT
            </Link>
            <Link to="/projects" className="nav-item">
              PROJECTS
            </Link>
            <Link to="/contact" className="nav-item">
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
        </nav>

        {/* Change routes here */}
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
