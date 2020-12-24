import React from "react";



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
                <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Ffree%2Ffacebook-icon-transparent-background.html&psig=AOvVaw2S7WFAtHfHMXsy4bNb2hcK&ust=1608899333409000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDl2J_P5u0CFQAAAAAdAAAAABAp" width="112" height="28" alt="portfolio-logo" />
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
