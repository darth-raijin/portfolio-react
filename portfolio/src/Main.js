import React from "react"
import './css/mystyles.css';

import Hero from "./components/runway/Hero.jsx"
import Footer from "./components/runway/Footer.jsx"

function Main(props) {
  document.title = "mohamed macow"
  return (
    <div>
      <Hero/>
      <h1>Home Page</h1>
    </div>
  )
}

export default Main;