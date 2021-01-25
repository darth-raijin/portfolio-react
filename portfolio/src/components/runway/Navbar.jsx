import React, { useState } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

import About from "../../About.js";
import Contact from "../../Contact.js";
import Main from "../../Main.js";

import "../../sass/mystyles.scss";

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <h1 class="title is-5" id="portfolio-text">
                MOHAMED MACOW
              </h1>
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
          <div
            id="navbarBasic"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-end">
              <nav class="menu menu--dustu">
                <Link to="/" className="navbar-item menu__item">
                  <span class="menu__item-name">Home</span>
                </Link>
                <Link to="/about" className="navbar-item menu__item" id="link">
                  <span class="menu__item-name">About</span>
                </Link>
                <Link
                  to="/contact"
                  className="navbar-item menu__item"
                  id="link"
                >
                  <span class="menu__item-name">Contact</span>
                </Link>
              </nav>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}
