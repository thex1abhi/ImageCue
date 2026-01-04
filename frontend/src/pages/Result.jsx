import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { AppContext } from "../context/AppContext"
import { motion } from "motion/react"
import { useContext } from "react";
const Result = () => { 

  const [image, setimage] = useState("/images/demo1.png");
   const [isimageLoaded, setIsimageLoaded] = useState(false);
    const [Loading, setLoading] = useState(false);
     const [input, setInput] = useState('');
     const {generateimage}=useContext(AppContext)


     const formsubmitHandler= async(e)=>{
     e.preventDefault()
     setLoading(true)
     if(input){
      const image=await generateimage(input)
      if(image){
setIsimageLoaded(true)
setimage(image)
      }
     }
     setLoading(false) 
  }

  return ( 
    <>
      <div>

        <Navbar />
        <motion.form 
        initial={{opacity:0.2,y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}} 
         onSubmit={formsubmitHandler} className="flex flex-col min-h-[90] justify-center items-center" action="">
          <div  >
            <div className="relative items-center justify-center flex border " >
              <img src={image} alt="" height={300} width={300} className=" max-w-sm rounded  " />
              <span className={` absolute bottom-0 left-0 h-1 bg-blue-500 ${Loading? 'w-full transition-all duration-[10s]':'w-0' }`} >   </span>
            </div> 
          <p className={!Loading ? 'hidden' :'' } > Loading.... </p>
          </div  >  
          {!isimageLoaded &&   
          <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-5 rounded-full  " >
             <input 
              onChange={e=> setInput(e.target.value)} value={input} 
              type="text " placeholder="Please Describe what you want to Create" className=" flex-1 outline-none ml-8 max-sm:w-20 placeholder-color " /> 
             <button type="submit" className=" bg-zinc-900  text-white px-10 sm:px-16 py-3 rounded-full" >   
               Generate
             </button>
          </div>   
}  
 
 {isimageLoaded && 
           <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full" >
            <p  onClick={()=>{setIsimageLoaded(false)}} 
             className="  bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer  " >Generate Another</p> 
            <a href={image} download className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer" >Download</a> 
           </div> 
}  
        </motion.form> 
        <Footer />
      </div>
    </>
  )
};

export default Result;
