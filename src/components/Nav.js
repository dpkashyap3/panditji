import React from 'react'
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
import {FcHome,FcServices,FcGallery,FcContacts,FcAbout,FcRadarPlot} from "react-icons/fc"


function Nav() {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark text-white fixed-top">
        <div class="container">
        <span class="navbar-brand logo"><img src={logo} height="70" width="120" alt="logo"/></span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <Link class="nav-item mr-5 hover" to="/"><FcHome style={{fontSize:30}}/> Home</Link> 
            <Link class="nav-item mr-5 hover" to="/Horoscope"><FcRadarPlot style={{fontSize:30}}/>Horoscope </Link>
            <li class="nav-item mr-5 hover"><FcServices style={{fontSize:30}}/>Astro Services </li>
            <Link class="nav-item mr-5 hover" to="/about"><FcAbout style={{fontSize:30}}/>About Us</Link> 
            <li class="nav-item mr-5 hover"><FcGallery style={{fontSize:30}}/>Gallary </li>
            <Link class="nav-item mr-5 hover" to="/contact"><FcContacts style={{fontSize:30}}/>Contact Us</Link>
        </ul>
        </div>
        </div>
      </nav>
    
    )
}

export default Nav
