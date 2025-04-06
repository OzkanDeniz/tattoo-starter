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
  return <div className='bg-pink-200'>Hero</div>;
};

export default Hero;
