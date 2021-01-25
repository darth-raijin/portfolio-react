import React, { Component } from "react";

import "../../sass/mystyles.scss";

export class Hero extends Component {
  render() {
    return (
      <div>
        <section class="hero is-fullheight-with-navbar has-bg-img">
          <div class="hero-body">
            <div class="container">
              <h2 class="subtitle is-3">Hello, my name is</h2>
              <h1 class="title is-1">Mohamed Macow.</h1>
              <h3 class="subtitle">I'm a design-minded software engineer <br/> focused on building beautiful interfaces.</h3>
              <button class="button is-link glow-on-hover">Learn more about me!</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
