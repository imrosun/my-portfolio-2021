import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import spot from "./images/spot.png";
import react from "./images/icon/react.png";
import typescript from "./images/icon/typescript.png";
import next from "./images/icon/nextjs.png";

type Props = {}

function ExperienceCard({ }: Props) {
    return <article className="flex flex-col rounded-lg space-y-1 bg-[#70879c] md:p-10 p-5 
        hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200">
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duation: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex '>
            {/* w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center   */}
            <div className='flex gap-2 w-full justify-left items-left'>
                <div className="flex top-20 rounded-full border border-gray-500 object-cover w-20 h-20  
                    xl:w-14 xl:h-14 filter items-center group-hover:grayscale transition duration-300 ">
                    <Image
                        className="flex top-20 items-center rounded-full border border-gray-500 object-cover  
                        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300" src={spot} alt="" />
                </div>
                <div>
                    <h4 className="text-2xl font-light">Jr. Software Developer</h4>
                    <div className='md:inline-flex gap-2'>
                        <p className="font-bold text-md">Spot Transit Tech</p>
                        <p className=''>[Aug 2023 - Present]</p>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="">

            {/* <div className="flex justify-center h-10">
                <Image className="rounded-full flex-1 h-10 w-10" src={react} />
                <Image className="rounded-full flex-1 w-10 h-10 object-cover" src={next} />
                <Image className="rounded-full flex-1 h-10 w-10" src={typescript} />
            </div> */}

            <ul className="list-disc space-y-1 ml-5 text-md text-justify">
                <li>
                    Developed a full-stack web application using the MERN stack, implemented a CI/CD pipeline to automate the
                    deployment process, ensuring reliability and scalability on AWS. Leveraged Amazon CloudWatch for comprehensive
                    application monitoring, ensuring optimal performance and reliability.</li>
                <li>
                    Engaged with clients to gather requirements, provide updates, and ensure satisfaction with the final product.
                    Collaborated with cross-platform teams, delivering production-grade projects on time while meeting industry
                    standards. Facilitated regular feedback sessions to iteratively improve and align project outcomes.
                </li>

                <li>Integrated RESTful APIs, facilitating seamless communication between front-end and back-end systems and
                    enhancing overall application functionality.</li>

                <div className="hidden md:block">
                    <li>
                        Implemented a robust firewall security solution on AWS to safeguard the application, enhancing overall system
                        protection. Integrated AWS S3 buckets for managing and storing static assets.
                    </li>
                </div>
            </ul>
        </div>
    </article>;
}

export default ExperienceCard;