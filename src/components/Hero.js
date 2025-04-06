import React from 'react';
//import hero data 
import {heroData} from "../data"
//import motion
import {motion} from "framer-motion"
//import fadeIn
import {fadeIn} from "../variants"


const Hero = () => {
  //destructure herdata
  const {title,subtitle, btnText,btnIcon} = heroData
  return <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px] '>
    <div className="container mx-auto">
      {/* text & btn */}
      
    </div>
  </section>;
};

export default Hero;
