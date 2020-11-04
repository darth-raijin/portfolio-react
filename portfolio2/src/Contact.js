import React from "react"
import logo from './logo.svg';
import './css/mystyles.css';

function Contact(props) {
  document.title = "Contact"
  return (
    <div>
    <div class="field">
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div class="buttons">
        <a class="button is-primary">Primary</a>
        <a class="button is-link">Link</a>
      </div>
      </div>
  )
}
 
export default Contact;