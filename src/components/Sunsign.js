import React,{useState} from 'react'
import axios from "axios"   

function Sunsign(props) {

  const [select, setselect] = useState("")
  const [horos, sethoros] = useState({
    today:"",
    week:"",
    month:""
  })

  const getHoro=()=>{
    console.log(props.name)
    axios.get(`http://horoscope-api.herokuapp.com/horoscope/today/leo`)
    .then(response=>{
      console.log(response)
    })
    .catch(err=>{
      console.log(err)
    })
    
  }

    return (
        <div>
        <div class="card border-0 sunsign-bg bg-transparent mb-5 popcard" onClick={getHoro}>
        <img src={props.images} height="200px" width="200px" class="img-fluid p-3 ml-5" alt="Sun Sign"/>
        
        </div>
        </div>
    )
}

export default Sunsign




