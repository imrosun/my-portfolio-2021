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
        md:text-left md:flex-row max-w-7xl md:justify-evenly justify-start mx-auto items-center">
        <h3 className="md:absolute pt-16 md:pt-0 pb-10 md:pb-0 top-20 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="relative sm:top-10 text-center items-center flex flex-col space-y-2">
            <h3 className="break-before text-3xl px-4 text-center">
                {/* I have got just what you need.{" "} */}
                Say Hi, Contact me through an email.{" "} 
                <span className="break-before-auto decoration-[#F7AB0A]/50 underline">Let{"'"}s talk</span>
            </h3>
            <div className="relative ">
                <div className="flex items-center space-x-3 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl">India</p>
                </div>   
                {/* <div className="flex items-center space-x-3 justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl">+91-95******10</p>
                </div> */}
                <div className="flex items-center space-x-3 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                    <p className="text-1xl">imrosun@gmail.com</p>
                </div>           
            </div>           
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full max-w-lg mx-auto pl-4 pr-4">
                <div className="flex flex-col sm:flex-row justify-between w-full space-y-2 sm:space-y-0 sm:space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput flex-1" type="text"/> 
                    <input {...register('email')} placeholder="Email" className="contactInput flex-1" type="email"/>
                </div>
                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>
                <textarea {...register('message')} placeholder="Message" className="contactInput"></textarea>
                <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
            </form>
        </div>
    </div>
    
  );
}
export default ContactMe;