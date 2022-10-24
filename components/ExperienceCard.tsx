import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "./images/Indium.png"; 
import heroImg1 from "./images/icon/selenium.png"; 
import heroImg2 from "./images/icon/jira1.png"; 
import heroImg3 from "./images/icon/testrail.png"; 

type Props = {}

function ExperienceCard({}: Props) {
  return <article className="flex flex-col rounded-lg space-y-1 flex-shrink-0
  w-[200px] md:w-[300px] xl:w-[500px] items-center snap-center bg-[#70879c] p-5 
  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
    <motion.div
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duation: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}  
        viewport={{ once: true }}
        className="top-20 rounded-full border border-gray-500 object-cover w-10 h-10  
        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300">  
         {/* w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center   */}
        <Image 
        className="top-20 rounded-full border border-gray-500 object-cover w-10 h-10  
        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300" src={heroImg} alt=""/>
        </motion.div> 
        <div className="px-0 md:px-10 ">
            <h4 className="text-2xl font-light">Associate Test Engineer</h4>
            <p className="font-bold text-1xl mt-1">Indium Software</p>
            {/* <div className="gap-1 h-10 w-30 jutify-between rounded-full flex ">
                <Image className="rounded-full" src={heroImg1}/> 
                <Image className="rounded-full" src={heroImg3}/> 
                <Image className="rounded-full" src={heroImg2}/>  
            </div> */}
            <p>May-2021 Jan-2022</p>
            <ul className="list-disc space-y-1 ml-5 text-md ">
                <li>Working as a part of the Android build tester team, taking care of user-reported queries, 
                    writing bugs.  </li>
                <li>Checking the in-app payment gateway on the Android platform by making purchase.</li>
                <li>I learn new domains quickly, which boosted our testing team by 15% and led us 
                    to win the cash price for completing the tests and passing it for production</li>
            </ul>
        </div>
  </article>;
}

export default ExperienceCard;