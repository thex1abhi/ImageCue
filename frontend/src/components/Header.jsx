
import { motion } from "motion/react"
import { useContext } from "react"; 
import { AppContext } from "../context/AppContext"; 
import {useNavigate} from "react-router-dom"
const Header = () => { 
   
  const {user}=useContext(AppContext)  
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
      <motion.div className="flex flex-col justify-center items-center text-center my-14"
initial={{opacity:0.2,y:100 }} 
transition={{duration:1}}
whileInView={{opacity:1,y:0}} 
viewport={{once:true}} 
>
        <div className="text-stone-600  inline-flex text-center gap-2 bg-white px-6 py-1 
        rounded-full border border-neutral-500 " 
        initial={{opacity:0,y:-20 }} 
animate={{opacity:1,y:0}} 
transition={{duration:0.8 ,delay:0.2}}
        >
          <p>Free Text to Image Generator</p>
        </div>

        <h2 className="text-3xl max-w-[300px] sm:max-w-[590px] sm:text-6xl mx-auto mt-5 text-center " >Turn text to <span className="text-red-600">image</span> , in seconds.</h2>
        <p className="text-center max-w-full mx-auto mt-3" >
          Turn your thoughts into paintings, characters,  and more — powered by the magic of AI.
        </p>
        <motion.button className="sm:text-lg text-white cursor-pointer  bg-black w-auto mt-7 px-12 py-2.5 flex items-center  rounded-2xl gap-2 " 
        whileHover={{scale:1.05}}
       whileTap={{scale:0.95}} 
       initial={{opacity:0}}
       animate={{opacity:1}} 
       transition={{default:{duration:0.5},opacity:{delay:0.5,duration:1}}}
        onClick={onClickHandler}
        >Generate Images
          <img src="generate.png" alt="error" className="h-5 w-5" /></motion.button> 

        <motion.div className="flex flex-wrap justify-center mt-10 gap-3"  
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.2,duration:1}} 

> 
          <motion.img className="rounded hover:scale-105 transition-all border duration-300 cursor-pointer max-sm:w-10" 
          
          src="/images/demo.jpeg" alt="error" width={90} /> 

          <img className="rounded hover:scale-105 transition-all border duration-300 cursor-pointer max-sm:w-10" src="/images/demo1.png" alt="error" width={90} /> 

          <img className="rounded hover:scale-105 transition-all border duration-300 cursor-pointer max-sm:w-10" src="/images/demo2.jpeg" alt="error" width={90} />
          <img className="rounded hover:scale-105 transition-all border duration-300 cursor-pointer max-sm:w-10" src="/images/demo3.jpeg" alt="error" width={90} />
          <img className="rounded hover:scale-105 transition-all border duration-300 cursor-pointer max-sm:w-10" src="/images/demo4.jpeg" alt="error" width={90} />
          <img className="rounded hover:scale-105 transition-all border duration-300 cursor-pointer max-sm:w-10" src="/images/demo5.jpeg" alt="error" width={90} />

        </motion.div>
        < p  className="mt-2 font-semibold"  >Images generated using ImageCue</p>
      </motion.div>

    </>
  )
};

export default Header;
