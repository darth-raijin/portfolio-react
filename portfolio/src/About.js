import React from "react";
import "./css/mystyles.css";

function About(props) {
  document.title = "About";
  return (
    <section class="section">
      <div class="container">
        <h1 class="title">
          <i id="about-icon" class="fas fa-user-secret" /> Who am I?
        </h1>
        <p>
          Thanks for checking out this site! I'm a student at{" "}
          <a href="https://www.sdu.dk/da/uddannelse/bachelor/softwareengineering">
            the Southern University of Denmark.
          </a>
          <br />
          I love a challenge - whether it is related to personal development, or
          working out the bugs of a web application. An important element of my
          toolbox is my eye for captivating UI and the ability to produce
          graphic content.
          <br />
          <br />
          For you to better be able to understand my character, take a peek at
          some of my values: <br/>
          <div class="columns">
            <div class="column">
              <ul>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> Integriy</li>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> Personal development</li>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> Freedom</li>
              </ul>
            </div>
            <div class="column">
              <ul>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Desire for Knowledge</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Humbleness</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Personal development</li>
              </ul>
            </div>
          </div>
        </p>
        <br />
        <h1 class="title">
          <i id="about-icon" class="fas fa-code" /> Skillset</h1>
          Here are some of the skills I am familiar with: 
          <div class="columns">
            <div class="column">
              <ul>
                <li class="has-text-weight-bold">Languages</li>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> Java</li>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> Python</li>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> SQL</li>
                <li><i id="yellow-icon" class="fas fa-caret-right"/> JavaScript</li>
              </ul>
            </div>
            <div class="column">
              <ul>
              <li class="has-text-weight-bold">Libraries and Frameworks</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> JavaFX</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> jQuery</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Flask</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> React</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Node.JS</li>
              </ul>
            </div>
            <div class="column">
              <ul>
              <li class="has-text-weight-bold">Tools</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Git/GitHub</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Docker</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Kubernetes</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> UML</li>
              </ul>
            </div>
            <div class="column">
              <ul>
              <li class="has-text-weight-bold">Other</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> Graphic Design</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> HTML</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> CSS/SCSS</li>
              <li><i id="yellow-icon" class="fas fa-caret-right"/> UNIX</li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}

export default About;
