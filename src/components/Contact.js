import React,{useState} from 'react'
import pandit from "../images/contact.png"
import {motion} from "framer-motion"

function Contact() {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [tel, settel] = useState();
    const [comment, setcomment] = useState();

    

    return (
            <motion.div initial={{y:'100vh'}} animate={{y:0}} transition={{delay:0.3}} className="intro banner text-white container">
                <div className="row m-5 p-5">
               
                <div className="col-lg-8 card card-trans">
                <motion.h1 className="display-4 card-title p-3"><strong>Contact Us</strong></motion.h1>
                    <form>
                    <table class="table text-white  table-borderless">
                  
                    <tbody>
                      <tr>
                        <th scope="row">Name</th>
                        <td><input className="form-control" onChange={(e)=>setname(e.target.value)} value={name} type="text" name="name" /></td>
                        
                      </tr>
                      <tr>
                      <th scope="row">E-Mail ID</th>
                      <td><input className="form-control" onChange={(e)=>setemail(e.target.value)} value={email} type="email" name="email"/></td>
                        
                      </tr>
                      <tr>
                      <th scope="row">Mobile No</th>
                      <td><input className="form-control" onChange={(e)=>settel(e.target.value)} value={tel} type="tel" name="tel"/></td>
                      </tr>
                      <tr>
                      <th scope="row">Query To Ask</th>
                      <td><textarea className="form-control" onChange={(e)=>setcomment(e.target.value)} value={comment} type="" name="tel"/></td>
                      </tr>
                      <tr>
                      <th scope="row"></th>
                      <td><button className="btn btn-lg btn-warning">Submit</button></td>
                      </tr>
                    </tbody>
                  </table>
                    </form>
                </div>   
                
                <div className="col-lg-4 p-5">
                <motion.img animate={{scale:1}} initial={{scale:0.1}} src={pandit} alt="panditji"/>
                </div>
                </div>
                </motion.div>
                
                
        
    )
}

export default Contact
