import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react" 
 import axios from "axios"; 
 import { toast } from "react-toastify"; 
const Login = () => { 
  const navigate=useNavigate(); 
  const {setshowlogin,backendUrl,setToken,setuser}=useContext(AppContext) 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  
    const onsubmitHandler= async(e)=>{
     e.preventDefault();
     try {
      const {data}= await axios.post(backendUrl+'/api/user/login',{name,email,password})  
      if(data.success){
    setToken(data.token)  
    setuser(data.user)  
    localStorage.setItem('token',data.token)  
    toast.success("Login Succesfull")  
    navigate('/')
      } else {
        // Show error toast when server responds with success: false
        toast.error(data.message || "Login failed")
        return; // stop further execution
      }
     }  catch (error) {
        console.log(error)
     toast.error(error.response?.data?.message || "Something went wrong")
     }
     }
  return (
    <>  
    <Navbar/>
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">  
    
  <motion.form  onSubmit={onsubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500 " 
   initial={{opacity:0.2,y:50}}
   transition={{duration:0.3}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
  
  
  
  > 
     <h2 className="text text-center text-2xl text-neutral-700 font-medium" > Welcome back!  PLease Login to continue</h2>  

     

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5" > 
      <img src={assets.email_icon} alt="" />  
      <input  onChange={e=>setEmail(e.target.value)} value={email} className="outline-none text-sm" type="email" placeholder="Enter your Email " required />
     </div> 

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5" > 
      <img src={assets.lock_icon} alt="" />  
      <input onChange={e=>setpassword(e.target.value)} value={password}   className="outline-none text-sm" type="password" placeholder="Enter your password " required />
     </div> 
      
      <button className=" bg-blue-600 w-full text-white py-2 mt-3  rounded-full" >Login </button> 
   
       <p className=" mt-2 text-center" >Don't have a account ?    <Link to ={"/signup"}> <span   className="text-blue-600 cursor-pointer" > Sign up</span> </Link>  </p>   
     
     < img 
    
    onClick={()=>{
      setshowlogin(false ) 
       navigate('/')
     }}
 src={assets.cross_icon} className="absolute top-5 right-5 cursor-pointer" alt="" />

     </motion.form>  
</div>
    </>
  )
};

export default Login;
