import React from 'react'
import {motion} from "framer-motion"


function Services() {
    const onload={
        initial:{
            y:"-100vh"
        }
        ,
        animate:{
            y:0
            ,
            transition:{
                delay:0.3,
                type:"spring",
                stiffness:100
            }
        }
    }
    return (
        <div>
        <motion.div variants={onload} initial="initial" animate="animate" className="intro banner text-white container">
        <div className="row m-5 p-5">
        <div className="card card-trans">
        <motion.h1 className="display-4 card-title p-3"><strong>Astrological Services</strong></motion.h1>

        <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
           <div class="card card-trans">
           <img src="..." class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Grah Pravesh</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Go somewhere</a>
           </div>
         </div>
           </div>   

           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
           <div class="card card-trans">
           <img src="..." class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Katha Path</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Go somewhere</a>
           </div>
         </div>
           </div>   

           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5">
           <div class="card card-trans">
           <img src="..." class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Palmistry</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Go somewhere</a>
           </div>
         </div>
           </div>   

           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5">
           <div class="card card-trans">
           <img src="..." class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Marriage</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Go somewhere</a>
           </div>
         </div>
           </div>   


           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5">
           <div class="card card-trans">
           <img src="..." class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Vastu</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Go somewhere</a>
           </div>
         </div>
           </div>   

           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5">
           <div class="card card-trans">
           <img src="..." class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Kundli Reading</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-warning">Go somewhere</a>
           </div>
         </div>
           </div>   



        </div>
        </div>
        </div>   
        </div>
        </motion.div>
        
        </div>
    )
}

export default Services
