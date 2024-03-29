import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import Image from "next/image";
import heroImg from "../components/images/CollegeAnime.jpg"; 
import Link from "next/link";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-[#0e1630] text-white h-screen snap-y snap-mandatory 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Roshan Sharma</title>
      </Head>

      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero/>        
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Projects/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
        <div className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer">
          <Image className="flex absolute items-center justify-center h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                  src={heroImg} /* layout="responsive" objectFit='cover' */ alt=""/> 
        </div>
      </footer>
      </Link>
      
    </div>
  );
};

export default Home;
