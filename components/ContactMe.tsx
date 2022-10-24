import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
type Props = {};

function ContactMe({}: Props) {

const { register, handleSubmit } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = formData =>{
    window.location.href = 'mailto: imrosun@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${FormData.message} (${FormData.email})';
};

  return (
    <div className="overflow-hidden h-screen flex flex-col relative text-center 
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto item-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="relative top-32 text-center items-center flex flex-col space-y-3">
            <h3 className="text-3xl font-semibold text-center ">
                {/* I have got just what you need.{" "} */}
                Say Hi, Contact me through an email.{" "}
                <span className="decoration-[#F7AB0A]/50 underline">Let{"'"}s talk</span>
            </h3>
            <div className="relative ">
                <div className="flex items-center space-x-3 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl">Remote</p>
                </div>   
                <div className="flex items-center space-x-3 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl">+91-95******10</p>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl">imrosun@gmail.com</p>
                </div>
                             
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text"/> 
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>
                </div>
                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>
                <textarea {...register('message')} placeholder="Message" className="contactInput" ></textarea>
                <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black 
                font-bold text-lg">Submit</button>
                {/* bg-[#3982b3] */}
            </form>
        </div>
    </div>
    
  );
}
export default ContactMe;