import React from 'react'
import pandit from "../images/panditji.png"
import {motion} from "framer-motion"

function About() {
    return (
        
            <motion.div initial={{x:'100vw'}} animate={{x:0}} transition={{delay:0.3}} className="intro banner text-white container">
                <div className="row m-5 p-5">
                <div className="col-lg-8 card card-trans">
                <motion.h1 className="display-4 card-title p-3"><strong>Panditji.Com</strong></motion.h1>
                
                <p className="card-body resText ">
                www.PunditJi.com is worlds’ leading “Hindu Spiritual Portal” launched with the solo objective to help in & cater various kinds of worship & religious needs of Hindu population across the world. Our country & religion are the most ancient & rich reservoir of moral values & Scientific rituals. There is a strong reason behind every festival or ritual of Hindu Religion. The worshipper gets the best results only If the worship rituals are performed using good quality ingredients & correct pronunciation of the “Sanskrit Mantras”. The growing materialism has blurred our understanding of these sacred important of these rituals & our religious which is the biggest of all in the world. Off the late there have been consistent & focus efforts to bring back the glory to HINDU. We have determination to provide you a worry-free, pleasant worship / puja experience. You can book from a wide range of highly qualified and experienced Pandits, pooja products and pure Vedic samagri for any of your puja. Book a temple trip or tirth yatra, or simply customize a puja ritual. Long distance customers can also opt for an E-Puja, where our Panditji will effectively guide you through the entire puja ritual on real-time video call
                </p>
                </div>   
                
                <div className="col-lg-4 p-5">
                <motion.img animate={{scale:1}} initial={{scale:0.1}} src={pandit} alt="panditji"/>
                </div>
                </div>
                </motion.div>
                
                
        
    )
}

export default About
