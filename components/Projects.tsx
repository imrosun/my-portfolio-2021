import React from 'react'
import Image from "next/image";
import heroImg from "./images/Project1.png"; 
import heroImg1 from "./images/Project2.png";
import html from "./images/icon/HTML.png"; 
import css from "./images/icon/css1.png"; 
import scss from "./images/icon/scss.jpg";
import javascript from "./images/icon/JS.png"; 
import typescript from "./images/icon/typescript.png";
import firebase from "./images/icon/firebase.jpg"; 
import jasonDB from "./images/icon/JasonPowerDB.png"; 
import {motion} from "framer-motion";

type Props = {}

function Projects({}: Props) {
  // const projects = [1, 2, 3];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overall-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-medium scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"> 
        {/* z-20 for keeping that layer to top */}
        {/* {projects.map((project, i) => ( */}
          <motion.div
          initial={{
            y: -300,
            opacity:0}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:1.2}}
          viewport={{once: true}}
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen ">
          <Image className="object-scale-down rounded-full w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen"
                priority src={heroImg} /* layout="responsive" objectFit='cover' */ alt=""/>
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Case Study 1 of 2: {" "}
              <span className="underline decoration-[#F7AB0A]/50">
              <a href="https://github.com/imrosun/Infant-Vaccination-System" 
              target="_blank" rel="noopener noreferrer">Infant Vaccine System</a>
              </span>
              {/* Case Study { i + 1} of {projects.length}: */}
            </h4>
            {/* <ul >
              <li>Stack: HTML & CSS, Java, AngularJS, Firebase</li>
            </ul> */}
            <div className=" grid grid-flow-col justify-start gap-5">
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={html} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={scss} alt=""/> </div>
              
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={javascript} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={typescript} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={firebase} alt=""/> </div>
            </div>
            <p className= "break-before text-lg text-center md:text-left">
              Developed an android-based application to remind around 100 parents about their infant child’s next 
              vaccination.
              I have added ten hospitals real doctors with their names and available time.
            </p>
          </div>
        </motion.div>
        {/* ))}  */}

          <motion.div
          initial={{
            y: -300,
            opacity:0}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:1.2}}
          viewport={{once: true}}
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen ">
          <Image className="object-scale-down rounded-full w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen"
                priority src={heroImg1} /* layout="responsive" objectFit='cover' */ alt=""/>
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Case Study 2 of 2:{" "}
                <span className="underline decoration-[#F7AB0A]/50">
                  <a href="https://github.com/imrosun/StudentHTMLformJPDB" 
                  target="_blank" rel="noopener noreferrer">Student Registration</a>
                </span>
            </h4>
            <div className=" grid grid-flow-col justify-start gap-5">
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={html} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={css} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={javascript} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={jasonDB} alt=""/> </div>
            </div>
            <p className="text-lg text-center md:text-left">
            Created a website that aided in the registration of students for participation in an event and the Keep record of 
            it. JasonPowerDB is an online database by Login2Xplore
            </p>
          </div>
        </motion.div>
        {/* ))}                                                                                                                                                                               */}
        </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] skew-y-12 ">

      </div>
    </motion.div>
  )
}
export default Projects;