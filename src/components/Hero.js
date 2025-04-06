import React from "react";
//import hero data
import { heroData } from "../data";
//import motion
import { motion } from "framer-motion";
//import fadeIn
import { fadeIn } from "../variants";

const Hero = () => {
  //destructure herdata
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px] ">
      <div className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end ">
        {/* text & btn */}
        <div className="text-white">
          {/* text */}
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {/* btn */}
          <div>
            <button>
              {btnText} <div>{btnIcon}</div>
            </button>
          </div>
        </div>
        {/* outline text */}
        <div className="hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText"></div>
      </div>
    </section>
  );
};

export default Hero;
