import React,{useState} from 'react'
import axios from "axios"   
import {motion} from "framer-motion"
import data from "./data.json"
function Sunsign(props) {

  const [select, setselect] = useState("")
  const [horos, sethoros] = useState()

  const getHoro=()=>{
    console.log(props.name)
    axios.get()
    .then(response=>{
      sethoros(response)
    })
    .catch(err=>{
      console.log(err)
    })
    
  }

    return (
        <div>
        <motion.div initial={{y:250,opacity:0.1}} transition={{ type:"tween",duration:0.2,stiffness:500}} animate={{y:0,opacity:1}} class="card border-0 sunsign-bg bg-transparent mb-5 popcard" onClick={getHoro}>
        <motion.img src={props.images} height="200px" width="200px" class="img-fluid p-3 ml-5" alt="Sun Sign"/>
        {
         
        }
        </motion.div>
        </div>
    )
}

export default Sunsign




