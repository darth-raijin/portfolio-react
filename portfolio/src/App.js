import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import './css/mystyles.css';
// import "./App.css";

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
        <div className="nav">
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
          </div>
        </div>

        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
