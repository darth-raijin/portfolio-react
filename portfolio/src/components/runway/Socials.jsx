import React, { Component } from "react";

import "../../sass/mystyles.scss";

export class Socials extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                    <div class="content has-text-centered">
                        <p>
                            <div class="columns">
                                <div class="column">GitHub</div>
                                <div class="column">LinkedIn</div>
                            </div>
                            <hr id="hr-line" />
                            <br />
                            <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" async />
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Socials;
