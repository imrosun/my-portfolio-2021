import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20", "20", "50", "80", "20"],
    }}
    transition={{
        duration: 2.5,
    }}
    className="relative flex justify-center items-center mx-auto">
        <div className='rounded-full absolute border border-[#808dad] h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='rounded-full absolute border border-[#101c44] h-[300px] w-[300px] mt-52'/>
        <div className='rounded-full border border-[#101c44] h-[400px] w-[400px] mt-52  absolute'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[550px] w-[550px] mt-52 absolute animate-pulse'/>
        <div className='snap-start rounded-full border border-[#101c44] h-[700px] w-[700px] mt-52  absolute'/>
    </motion.div>
  );
}
export default BackgroundCircles;