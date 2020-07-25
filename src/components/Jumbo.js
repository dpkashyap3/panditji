import React from 'react'
import pandit from "../images/panditji2.png"
import logo from "../images/logo.png"
import {motion} from "framer-motion"

function Jumbo() {

    const pageload={
        initial:{
            x:'100vw'
        },
        animate:{
            x:0,
            transition:{
                
                type:"spring",
                mass:0.4,
                dumping:8,
                when:"beforeChildren",
                staggerChild:2
            }
            
        }
    }
    const child={
        initial:{
            y:20
            
        },
        animate:{
            y:0,
            color:"white"
        },
        transition:{
            delay:0.3,
            type:"spring"
        }
    }
    return (
        <motion.div variants={pageload}  initial="initial" animate="animate">
        <div class="intro">
        <motion.h1 variants={child} class="display-4 ml-5 text-white banner">Welcome to <img src={logo} alt="logo"/> Online</motion.h1>
        <motion.h3 variants={child} npclass="ml-5 text-white tagtext">Perfect Solution Finder For You</motion.h3>
        <div class="row mt-3">
        <motion.button whileHover={{scale:1.1}} transition={{yoyo:10}} type="button" class="btn btn-outline-light btn-lg">Get The Solution Now</motion.button>
     </div>
        <motion.img initial={{filter:"grayscale(100%)"}} animate={{filter:"grayscale(0%)"}} class="mt-3 img-fluid" src={pandit} height="480" width="640" alt="pandit"/>
     </div> 
        </motion.div>
    )
}

export default Jumbo
