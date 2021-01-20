import React, { Component } from "react";

import "../../sass/mystyles.scss";

export class Hero extends Component {
  render() {
    return (
      <div>
        <section class="hero is-fullheight-with-navbar has-bg-img">
          <div class="hero-body">
            <div class="container">
              <h2 class="subtitle">Hello, my name is</h2>
              <h1 class="title">Mohamed Macow.</h1>
              <button class="button is-link">Learn more about me!</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
