import React from "react";
import { assets, reviews } from "../assets/assets";
import { motion } from "motion/react"
const Reviews = () => {
  return (
    <> 
    <motion.div className="flex flex-col items-center justify-center my-18 " 
    initial={{opacity:0.2,y:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    
    > 
          <h1  className="text-3xl sm:text-4xl font-semibold " >Customer Reviews</h1> 
          <p  className="text-gray-500 mb-12 " >Know what our Users are saying</p>  

  <div className="flex flex-wrap gap-6" >  
    {reviews.map((reviews,index)=>( 
      <div  key={index} className="bg-orange-100 p-12 rounded-lg shadow-md border-0 w-80 m-auto cursor pointer hover:scale-[1.02] transition-all " >  
    <div className="flex flex-col items-center" > 
      <img src={reviews.image} alt=""  className="rounded-full w-14" /> 
      <h2  className="text-xl font-semibold mt-3" > {reviews.name} </h2> 
      <p className="text-gray-500 mb-4" > {reviews.role} </p> 
      <div className="flex mb-4" >
        {Array(reviews.stars).fill().map((item,index)=>(
         <img src={assets.rating_star} alt="" key={index} />
        ))}
         </div>  
         <p> {reviews.text} </p> 
    </div> 
      </div>
    ))} 
  </div>
           
    </motion.div>
    </>
  )
};
   
export default Reviews;
