import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
// import "./css/mystyles.css";
// import "./App.css";
import "./sass/mystyles.scss";
import Navbar from "./components/Navbar.jsx"
// Import BrowserRouter, Route and Link
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  document.title = "Macow";
  return (
    <div>
      <Navbar/>
      <h1>ting go brr</h1>
    </div>
  );
}

function Test() {return
}

export default App;
