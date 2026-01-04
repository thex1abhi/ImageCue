import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <> 
    <div className="flex items-center justify-between gap-4 py-3 mt-8 ">
         
         <img src="/icon.png" alt="" width={150} /> 
         <p className="flex-1 border-l  pl-4 text-sm text-gray-500 max-sm:hidden " >Copyright@ImageCue | All rights reserved</p> 
         <div className="flex gap-2.5" > 
         <Link to="https://facebook.com" >   <img src={assets.facebook_icon} alt=""  width={35} /> </Link> 
         <Link to="https://instagram.com" > <img src={assets.instagram_icon} alt=""  width={35} /> </Link>
           <Link  to="https://x.com" > <img src={assets.twitter_icon} alt=""  width={35} /> </Link>
         </div>
    </div> 
    </>
  )
};

export default Footer;
