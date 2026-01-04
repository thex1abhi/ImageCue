import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react"; 
import { AppContext } from "../context/AppContext"; 
import {useNavigate} from "react-router-dom"
import { motion } from "motion/react"
const GenerateBtn = () => { 
   const {user,setshowlogin}=useContext(AppContext)  
    const navigate=useNavigate()
    const  onClickHandler =()=>{
     if(user){
      navigate("/result")
     } else{
    navigate("/login")
     }  
    }
  return (
    <> 
 <div className=" pb-16 text-center" >
    <h1 className="text-2xl  md:text-3xl lg-text-4xl mt-4 font-semibold text-neutral-800 py-6" > See The magic , Try Now  </h1>
   <motion.button className="inline-flex items-center gap-2 px-12 py-3 rounded-2xl bg-black text-white m-auto hover:scale-105 transition-all duration-500"  
    whileHover={{scale:1.05}}
       whileTap={{scale:0.95}} 
       initial={{opacity:0}}
       animate={{opacity:1}} 
       transition={{default:{duration:0.5},opacity:{delay:0.5,duration:1}}}
        onClick={onClickHandler}
   >   Generate Images
    <img src={assets.star_group} alt="error"   
     className="h-6" />  
     </motion.button>
 </div>
    </> 
  )
};

export default GenerateBtn;
