import React from 'react'
import pandit from "../images/panditji2.png"
import logo from "../images/logo.png"
import {motion} from "framer-motion"

function Jumbo() {
    return (
        <motion.div initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.3,type:"spring"}}>
        <div class="intro">
        <motion.h1 animate={{fontSize:60}} class="display-4 ml-5 text-white banner">Welcome to <img src={logo} alt="logo"/> Online</motion.h1>
        <h3 class="ml-5 text-white tagtext">Perfect Solution Finder For You</h3>
        <div class="row mt-3">
        <button type="button" class="btn btn-outline-light btn-lg">Get The Solution Now</button>
     </div>
        <motion.img initial={{filter:"grayscale(100%)"}} animate={{filter:"grayscale(0%)"}} class="mt-3 img-fluid" src={pandit} height="480" width="640" alt="pandit"/>
     </div> 
        </motion.div>
    )
}

export default Jumbo
