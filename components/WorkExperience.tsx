import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ExperienceCard2 from "./ExperienceCard2";

type Props = {}

function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="">
      <div className="h-screen md:relative md:px-32 flex overflow-hidden flex-col text-left 
        max-w-full px-4 mx-auto justify-start md:justify-center items-center z-0">
        <h3 className="pt-20 md:pt-0 md:absolute top-20 uppercase tracking-[20px] pb-4 text-gray-500 text-2xl">
          Experience</h3>
        <div className="w-full flex md:pt-10 space-x-5 overflow-x-scroll sm:px-10 snap-x 
            snap-mandatory overall-y-hidden scrollbar scrollbar-medium 
            scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ExperienceCard />
          {/* <ExperienceCard2/> */}
          {/* <ExperienceCard/> */}
        </div>
      </div>
    </motion.div>
  )
}

export default WorkExperience