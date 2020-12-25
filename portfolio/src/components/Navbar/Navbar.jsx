import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div>
      <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a href="/home" className="navbar-item">
                <FontAwesomeIcon icon={ faLaptopCode } width="112" height="28" alt="portfolio-logo" color="white" />
              </a>

              <a
                role="button"
                className={"navbar-burger burger"}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbar" className="navbar-menu">
              <div className="navbar-end">
                <a href="/home" className="navbar-item">
                  Home
                </a>

                <a href="/about" className="navbar-item">
                  About
                </a>
                <a href="/projects" className="navbar-item">
                  Projects
                </a>
                <a href="/contact" className="navbar-item">
                  Contact
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-a">More</a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="/about">
                      About
                    </a>
                    <a class="navbar-item" href="/projects">
                      Projects
                    </a>
                    <a class="navbar-item" href="/contact">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
    </div>
  );
};

export default Navbar;
