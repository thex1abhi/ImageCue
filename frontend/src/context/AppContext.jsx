import axios from "axios";
import React, { createContext } from "react";
import { useState } from 'react'
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {
   const [user, setuser] = useState(false);
   const [showlogin, setshowlogin] = useState(false);
   const [token, setToken] = useState(localStorage.getItem('token'));

   const backendUrl = import.meta.env.VITE_BACKEND_URL

   
    const generateimage=async (prompt) => {
      try {
         const {data}=await axios.post(backendUrl+'/api/image/generate-image',{prompt},
            {headers:{ token}})  
     
            if(data.success){
               return data.resultImage
            } else{
                // use server-provided message when available
                toast.error(data.message || "Something went wrong")
                return null
            }
      } catch (error) {
         console.log(error)
         toast.error(error.response?.data?.message || "Cannot generate Image ")
         return null
      }
    } 

    const value = {
      user, setuser, showlogin, setshowlogin, backendUrl,token,setToken,generateimage
   }

   return (
      <AppContext.Provider value={value} >
         {props.children}
      </AppContext.Provider>
   )
}
export default AppContextProvider


