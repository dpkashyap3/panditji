import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav/>
      <Home/>
      </Router>
    </div>
  );
}

export default App;
