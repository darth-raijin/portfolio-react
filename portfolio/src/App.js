import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/runway/main.jsx"

// Import BrowserRouter, Route and Link
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  document.title = "mohamed macow"
  return (
    <div>
      <MainPage/>
    </div>
  );
}

function Test() {return
}

export default App;
