import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill/Skill';
import Skill1 from './Skill/Skill1';
import Skill2 from './Skill/Skill2';
import Skill3 from './Skill/Skill3';
import Skill4 from './Skill/Skill4';
import Skill5 from './Skill/Skill5';
import Skill6 from './Skill/Skill6';
import Skill7 from './Skill/Skill7';
import Skill8 from './Skill/Skill8';
import Skill9 from './Skill/Skill9';
import Skill10 from './Skill/Skill10';
import Skill11 from './Skill/Skill11';
import Skill12 from './Skill/Skill12';
import Skill13 from './Skill/Skill13';
import Skill14 from './Skill/Skill14';

type Props = {}

function Skills (props: Props){
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition= {{ duration: 1.5 }}
    className="h-screen md:relative flex flex-col text-center md:text-left 
      max-w-[2000px] xl:px-10 min-h-screen justify-start md:justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="pt-20 md:pt-0 md:absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills</h3>

        <h3 className="uppercase tracking-[3px] pb-4 text-gray-500 text-sm">
            Hover over skill for current proficiency</h3>

        <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-10 sm:gap-5">
            <Skill/>
            <Skill1/>
            <Skill2/>
            <Skill3/>
            <Skill4/>
            <Skill5/>
            <Skill6/>
            <Skill7/>
            <Skill8/>
            <Skill9/>
            <Skill10/>
            <Skill11/>
            <Skill12/>
            <Skill13/>
            <Skill14/>
        </div>
    </motion.div>
  )
}

export default Skills;