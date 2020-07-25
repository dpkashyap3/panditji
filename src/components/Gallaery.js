import React from 'react'
import {motion} from "framer-motion"

const pageload={
    initial:{
        y:"-100vh",
        x:"-50vw"
    },
    animate:{
        y:0,
        x:0,
        transition:{
            delay:0.3
        }
    }
}

function Gallaery() {
    return (
        <motion.div className="container intro" variants={pageload} initial="initial" animate="animate">
            <div className="row">
                <div className="col-lg-12 banner text-white">
                    <h1 className="display-4"><strong>Gallery</strong></h1>
                </div>
            </div>
        </motion.div>
    )
}

export default Gallaery
