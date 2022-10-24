import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCard2 from "./ExperienceCard2";

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition= {{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0">
    <div className="h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience</h3>
      <div className="relative top-12 w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
      snap-mandatory overall-y-hidden scrollbar scrollbar-medium 
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ExperienceCard/>
          <ExperienceCard2/>
          {/* <ExperienceCard/> */}
      </div>
    </div>
    </motion.div>
  )
}

export default WorkExperience