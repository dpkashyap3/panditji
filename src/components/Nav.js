import React from 'react'
import logo from "../images/logo.jpeg"
function Nav() {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark text-white bg-transparent fixed-top">
        <div class="container">
        <span class="navbar-brand logo"><img src={logo} height="70" width="120" alt="logo"/></span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-5 hover">Home </li>
            <li class="nav-item mr-5 hover">Horoscope </li>
            <li class="nav-item mr-5 hover">Astro Services </li>
            <li class="nav-item mr-5 hover">About Me </li>
            <li class="nav-item mr-5 hover">Gallary </li>
            <li class="nav-item mr-5 hover">Contact Us</li>
        </ul>
        </div>
        </div>
      </nav>
    
    )
}

export default Nav
