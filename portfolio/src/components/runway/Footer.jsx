import React, { Component } from "react";

import "../../sass/mystyles.scss";
import Socials from "./Socials.jsx";

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                    <div class="content has-text-centered">
                        <p>
                            <h1 class="subtitle">Owned and Developed by Mohamed Macow</h1>
                            <Socials></Socials>
                            <hr id ="hr-line"/>
                            <br/>
                            <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" async/>
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
