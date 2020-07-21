import React from 'react'
import {motion} from "framer-motion"
import Aries from "../images/SunSign/Aries.png"
import Aquarius from "../images/SunSign/Aquarius.png"
import Cancer from "../images/SunSign/Cancer.png"
import Capricon from "../images/SunSign/Capricon.png"
import Gemini from  "../images/SunSign/Gemini.png"
import Pisces from  "../images/SunSign/Pisces.png"
import Sagittarius from "../images/SunSign/Sagittarius.png"
import Scorpoion from "../images/SunSign/Scorpio.png"
import Taurus from "../images/SunSign/Taurus.png"
import Virgo from  "../images/SunSign/Virgo.png"
import Libra from "../images/SunSign/Libra.png"
import Leo from "../images/SunSign/Leo.png"
import Sunsign from "./Sunsign"

function Horoscope() {

    const sunsign=
        [
        {
            "name":"aries",
            "url":Aries
        },
        {
            "name":"aquarius",
            "url":Aquarius
        },
        {
            "name":"cancer",
            "url":Cancer
        },   
        {
            "name":"capricon",
            "url":Capricon
        },
        {
            "name":"gemini",
            "url":Gemini
        },
        
        {
            "name":"leo",
            "url":Leo
        },
        {
            "name":"libra",
            "url":Libra
        },
        {
            "name":"sagittarius",
            "url":Sagittarius
        },
        {
            "name":"scorpion",
            "url":Scorpoion
        },
        {
            "name":"taurus",
            "url":Taurus
        },
        {
            "name":"virgo",
            "url":Virgo
        },
        {
            "name":"pisces",
            "url":Pisces
        },
    ]
    

    return (
        
            <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{delay:0.3,type:"tween"}} className="intro banner text-white container">
                <div className="row m-5 p-5">
                <div className="card card-trans">
                <motion.h1 className="display-4 card-title p-3"><strong>Horoscope</strong></motion.h1>

                <div className="container">
                <div className="row">
                    
                        {
                            sunsign.map(item=>(
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <Sunsign images={item.url} name={item.name}/>
                                </div>    
                            ))
                        }
                    
                    
                    </div>
                </div>
                </div>   
                </div>
                </motion.div>
                
                
        
    )
}

export default Horoscope
