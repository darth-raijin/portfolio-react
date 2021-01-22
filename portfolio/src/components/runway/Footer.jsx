import React, { Component } from "react";

import "../../sass/mystyles.scss";
import Socials from "./Socials.jsx";

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                    <div class="content has-text-centered">
                    <img src={process.env.PUBLIC_URL + '/favicon.ico'} class = "slogan-logo" />
                        <p>
                            <section class="section">
                                    <p class="slogan has-text-left">
                                    Change is inevitable. Growth is optional.  
                                    </p>
                                    
                                <p class="slogan-ownership has-text-left">Owned and Developed by Mohamed Macow</p>
                            </section>
                            
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
