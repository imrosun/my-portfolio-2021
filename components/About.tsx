import React from 'react'
import { motion } from 'framer-motion';
import Image from "next/image";
import heroImg from "./images/hero2.jpg";

type Props = {};

export default function About({ }: Props) {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="overflow-hidden flex relative flex-col text-center md:text-left md:flex-row 
                xl:flex-row max-w-7xl px-10 min-h-screen justify-evenly  mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <div className='md:w-3/4 flex flex-col sm:flex-row justify-between gap-5'>
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
                    className="px-2 rounded-full object-cover md:rounded-lg xl:w-[300px] xl:h-[300px]">
                    <Image className="md:px-5 md:mb-0 flex-shrink-0 
                    w-56 h-56 rounded-lg object-cover "
                        priority src={heroImg} /* layout="responsive" objectFit='cover' */ alt="" />
                </motion.div>

                <div className="flex-1 items-center text-center space-y-5 ">
                    <h4 className="text-4xl font-semibold md:text-left text-center">
                        Here is a {" "}
                        <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}background
                    </h4>
                    <p className="md:text-left text-center text-base">
                        A dedicated full-stack developer with a strong foundation in both front-end and back-end development, possessing a proven
                        ability to design, develop, and deploy robust web applications. Committed to delivering high-quality, user-centric digital
                        experiences. <br></br>
                        Experienced in Android and Web. I am also interested in blockchain.
                        Open-Source and Cloud-Native enthusiast, building community on twitter.
                        I have been building projects since my college. Feel free to check them on my GitHub profile.
                        Open to remote work. Currently learning DevOps.
                    </p>                   
                </div>
            </div>
        </motion.div>
    );
}
