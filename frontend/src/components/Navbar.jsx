
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
 import { toast } from "react-toastify";



const Navbar = () => { 
    const {user}=useContext(AppContext)
    const navigate=useNavigate()  
   const {setuser}=useContext(AppContext) 




    const handlelogout= async()=>{
      try {
         await setuser(null)  
         localStorage.removeItem('token')
         toast.success("Logout Successfull")
      } catch (error) {
        console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong")
      }
    }
  
  return (
    <> 
    <div  className="flex items-center justify-between py-4" > 
      <Link to='/'>
      <img src="/icon.png" alt="error" className="  w-28  sm:w-60 md:w-23 lg:w-32 " /> 
      </Link> 
      <div> {user ? <div className="flex items-center gap-3" > 
         <p  className="md:text-xl text-sm" >Hello {user.name}</p>
             <button onClick={handlelogout} className="cursor-pointer bg-zinc-800  px-2 py-1  
         sm:px-3 sm:py-2  md:px-4 md:py-3  lg:px-5 lg:py-3   hover:bg-zinc-600 hover:scale-110 text-sm  text-white rounded-2xl" >Logout</button> 
    
      </div> : <div  className=" flex gap-3" > 
         <button  onClick={()=>navigate("/signup")} className="cursor-pointer bg-zinc-800 px-2 py-1  
         sm:px-3 sm:py-2  md:px-4 md:py-3  lg:px-5 lg:py-3 text-sm   hover:bg-zinc-600 hover:scale-110  text-white rounded-2xl" >Signup</button>  
          <button onClick={()=>navigate("/login")} className="cursor-pointer bg-zinc-800 px-2 py-1  
         sm:px-3 sm:py-2  md:px-4 md:py-3  lg:px-5 lg:py-3 text-sm  hover:bg-zinc-600 hover:scale-110  text-white rounded-2xl" >Login</button> 

      </div> }
       
      </div>
    </div> 
    </>
  )
};

export default Navbar;
 