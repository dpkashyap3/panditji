import React from 'react'
import pandit from "../images/panditji2.png"
import "./Jumbo.css"

function Jumbo() {
    return (
        <div>
           <div className="jumbo">
             <div class="intro">
                <h1 class="display-4 ml-5 text-white banner">Welcome to Panditji Online</h1>
                <h3 class="ml-5 text-white tagtext">Perfect Solution Finder For You</h3>
                <div class="row mt-3">
                <button type="button" class="btn btn-outline-light btn-lg">Get The Solution Now</button>
                </div>
                <img class="mt-3" src={pandit} height="480" width="640" alt="pandit"/>
             </div>
           </div>            
        </div>
    )
}

export default Jumbo
