import React, { Component } from "react";

import "../../sass/mystyles.scss";
import Socials from "./Socials.jsx";

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="footer">
                <hr id ="hr-line"/>
                    <div className="columns is-vcentered">
                    <div class="column has-text-centered">


                                    <p class="slogan has-text-left">
                                    Change is inevitable. Growth is optional.  
                                    </p>
                                    
                                <p class="slogan-ownership has-text-left">Owned and Developed by Mohamed Macow</p>

                    </div> 
                    <div className="column">             
                            <Socials></Socials>
                    </div>        
                            <br/>
                            </div>
                            <a href="https://bulma.io">
                                <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" async/>
                            </a>
                    
                    
                </footer>
            </div>
        );
    }
}

export default Footer;
