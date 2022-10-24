import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";
import heroImg from "./images/hero2.jpg"; 

type Props = {};

export default function About({}: Props) {
  return (

    <motion.div
        initial={{opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition= {{ duration: 1.5 }}     
        className="overflow-hidden flex relative flex-col text-center md:text-left md:flex-row 
        xl:flex-row max-w-7xl px-10 min-h-screen justify-evenly  mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.div 
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{ duration: 1.2, }}
            viewport={{ once: true }}
            className="absolute top-[140px] md:px-3 px-5 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
                object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[300px] xl:h-[300px]">
            <Image className=" top-24 md:px-5 -mb-20md:mb-0 flex-shrink-0 
                w-56 h-56 rounded-full object-cover 
                md:rounded-lg md:w-64 md:h-94 xl:w-[500px] xl:h-[600px]"
                priority src={heroImg} /* layout="responsive" objectFit='cover' */ alt=""/>
            </motion.div>
            
        <div className="absolute items-center text-center space-y-5  md:top-[420px] top-[320px] "> 
            <h4 className="text-4xl font-semibold ">
                Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}background
            </h4>
            <p className=" absolute text-base">
            I am a Software Developer experienced in Android and Web. I am also interested in blockchain.
            Open-Source and Cloud-Native enthusiast, building community on twitter.      
            I have been building projects since my college. Feel free to check them on my GitHub profile.               
            Open to remote work. Currently learning DevOps.
            </p>
        </div> 
    </motion.div>
  );
}
