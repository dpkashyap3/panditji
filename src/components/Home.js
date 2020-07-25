import React from 'react'
import Jumbo from "./Jumbo"
import About from "./About"
import Contact from "./Contact"
import Horoscope from "./Horoscope"
import Services from "./Services"
import Gallery from "./Gallaery"
import {Route,Switch} from "react-router-dom";
import {FiFacebook,FiInstagram,FiTwitter,FiPhoneCall,FiMail} from "react-icons/fi"
import "./Jumbo.css"

function Home() {
    return (
        <div>
           <div className="jumbo">
            <div className="row">
           <div class="col-lg-10">
           <Switch>
             <Route path="/" exact component={Jumbo}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/horoscope" component={Horoscope}/>
             <Route path="/services" component={Services}/>
             <Route path="/gallery" component={Gallery}/>
            </Switch>
            </div>
         
             
             <div class="col-lg-2 text-white social">
             <ul>
                <li><FiFacebook/></li>
                <li><FiInstagram/></li>
                <li><FiTwitter/></li>
                <li><FiPhoneCall/></li>
                <li><FiMail/></li>
             </ul>
          </div> 
          </div>
         </div>
      </div>
          
    )
}

export default Home

