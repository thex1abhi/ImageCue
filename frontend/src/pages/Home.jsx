import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Description from "../components/Description";
import Reviews from "../components/Reviews";
import GenerateBtn from "../components/GenerateBtn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div> 
            <Navbar/>
            <Header /> 
           <Steps />
           <Description/> 
           <Reviews/> 
           <GenerateBtn/> 
           <Footer/>
        </div>
    )
};

export default Home;
 
