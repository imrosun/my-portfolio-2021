import React from 'react'
import { motion } from "framer-motion";   
import Image from "next/image";
import heroImg from "../images/icon/nextjs.png";  

type Props = {
    directionLeft?: boolean;
};

function Skill5({directionLeft} : Props){
  return (
    <div className="group relative flex cursor-pointer">
        <motion.div
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{ duation: 1 }}
        whileInView={{ opacity: 1, x: 0 }}  
        className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-20 h-20  
        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 
        ease-in-out">     
        <Image 
        className="rounded-full border border-gray-500 object-cover w-20 h-20  
        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 
        ease-in-out" 
        src={heroImg} alt=""/>
        </motion.div>        
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
        ease-in-out group-hover:bg-white h-20 w-20 md:h-20 md:w-20 xl:w-20 xl:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="flex-3xl font-bold text-black opacity-100">80%</p>
          </div>
        </div>
    </div>
  )
}

export default Skill5;