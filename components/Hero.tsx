import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"; 
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";
import heroImg from "./images/Madevpura.png";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
    const {text, count} = useTypewriter({
        words: [
            "Hi, My name is Roshan Sharma",
            "Guy-who-loves-learning-new-technologies.tsx",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center"> {/* overflow-hidden will adjust circle to more up*/}
        <BackgroundCircles/>
        <div className="relative sm:h-32 sm:w-40 h-60 w-60 mx-auto object-cover"> {/* same as below rounded-full is not supported in div */}
            <Image className="rounded-full"
            priority src={heroImg} /* layout="responsive" objectFit='cover' */ alt=""/>
        </div>
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-4 sm:pb-2 sm:pt-2 tracking-[10px]">Full-Stack Developer</h2>
            <h1 className="text-4xl lg:text-3xl font-semibold px-10"> 
                <span className="mr-3">{text}</span>
                <Cursor cursor-color="yellow"/> 
            </h1> 
            <div className="sm:pt-5 pt-5">
                <Link href="#about"><button className="heroButton">About</button></Link>
                <Link href="#experience"><button className="heroButton">Experience</button></Link>
                <Link href="#skills"><button className="heroButton">Skills</button></Link>
                <Link href="#projects"><button className="heroButton">Projects</button></Link>
            </div>
        </div>
    </div>
  );
}