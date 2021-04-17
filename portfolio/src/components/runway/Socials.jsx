import React, { Component } from "react";

import "../../sass/mystyles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab)

export class Socials extends Component {
    render() {
        return (
            <div>
                
                    <div class="content has-text-centered">
                            <div class="columns">
                                <div class="column">
                                    <span class="icon is-large">
                                        <a href="https://github.com/macow-lab" class="button"> <i class="fab fa-2x fa-fw fa-github"></i>
                                        Github
                                        </a>
                                    </span>
                                </div>
                                <div class="column">
                                    <span class="icon is-large">
                                        <a href="https://www.linkedin.com/in/mohamedmacow/" class="button"> <i class="fab fa-2x fa-fw fa-linkedin"></i>
                                        LinkedIn
                                        </a>
                                    </span>
                                    
                                </div>
                                <div class="column">
                                    <span class="icon is-large">
                                        <a href="https://www.behance.net/empathyden2717" class="button"> <i class="fab fa-2x fa-fw fa-behance"></i>
                                        Behance
                                        </a>
                                    </span>
                                    
                                </div>
                            </div>

                    </div>

            </div>
        );
    }
}

export default Socials;
