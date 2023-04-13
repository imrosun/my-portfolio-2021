import React from 'react'
import { SocialIcon } from "react-social-icons"; 
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'> {/* To keep both divs in single line */}
        <motion.div 
        /* Framer motion */
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon url="https://www.github.com/imrosun" fgColor='gray' bgColor='transparent'
            target="Welcome to Roshan's GitHub" rel="noopener noreferrer"/>
            <SocialIcon url="https://leetcode.com/imrosun/" target="_blank" rel="noopener noreferrer"
            fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://www.twitter.com/imrosun" target="_blank" rel="noopener noreferrer"
            fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://www.linkedin.com/in/roshan-sharma-/" target="_blank" rel="noopener noreferrer"
            fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <Link href="#contact">
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Hire me</p>
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            {/* md: medium screen, xl: extra large */}
            
        </motion.div>
        </Link>
    </header>
  )
}   
