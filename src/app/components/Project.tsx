"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";





const Project = () => {
    // Array to store project details
    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio that effectively showcases my diverse skills, completed projects, and professional growth journey to date.",
        devstack: "Html, Css, Ts & Next.js",
        link: "www.facebook.com",
        src: "/portfolio.jpeg"
      },
      {
        title: "E-commerce Site",
        description: "A personal portfolio showcasing my skills and projects. A personal portfolio showcasing my skills and projects et aliqua.",
        devstack: "Next.js",
        link: "null",
        src: "/"
      },
      {
        title: "Resume Builder",
        description: "A powerful resume builder tool designed to simplify creating polished, professional resumes tailored to individual career goals.",
        devstack: "Html, Css, Ts",
        link: "www.facebook.com",
        src:"/resume.png"
      },
      {
        title: "Landing Page Website",
        description: "Developed a simple landing page during an internship at Codsoft, focusing on clean design and user engagement.",
        devstack: "Html, Css, Js",
        link: "https://landing-page-website-iota.vercel.app/",
        src:"/landing.png"
      },
      {
        title: "Calculator",
        description: "Built an interactive calculator with essential arithmetic functions, designed for smooth user experience and responsiveness.",
        devstack: "Html, Css, Js",
        link: "https://calculator-pi-five-38.vercel.app/",
        src:"/cal.png"
        
      },
    ];
  
    return (
      <div id="project" className="text-white xs:overflow-x-hidden bg-gradient-to-b font-sans from-[#07151f] to-[#134b57]  py-18 xs:px-4 pt-18 pb-14">
        <h1 className="font-bold text-3xl p-8 pt-28  text-center ">My <span className="text-[#00abcf]">Projects</span> </h1>
        <div className="max-w-[1000px] mt-20 mx-auto space-y-16 xs:space-y-24">
            {projects.map((project, index)=>(
                <motion.div
                key={index}
                initial={{opacity: 1, y: 75}}
                whileInView = {{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.25}}
                className={`mt-12 flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse xs:gap-0 gap-12" : "flex-col md:flex-row xs:flex-col-reverse  "}`}
                >
                    <div className="  hover:scale-110 transition-transform duration-300">
                        <h2 className="text-5xl my-4 text-white/70">{`0${index + 1}`}</h2>
                        <h2 className="text-4xl">{project.title}</h2>
                        <p className="text-base text-white/70 break-words p-4">{project.description}</p>
                         <p className={`text-lg font-semibold ${
    index === projects.length - 1 ? "text-black" : "text-[#00abcf]"
  }`}>{project.devstack}</p> 
                        <div className="w-64 h-[1px] bg-gray-400 my-4">
                            <a href={project.link} target="_blank" 
  rel="noopener noreferrer"  className="mr-6 hover:underline flex items-center gap-3">View Project <motion.span
    animate={{
        x: [0, -5, 5, 0],
    }}
    transition={{
        duration: 1, 
        repeat: Infinity, 
        repeatType: "loop", 
    }}
>
    <FaArrowLeftLong />
</motion.span> </a>
                        </div>
                    </div>

                        <div className="flex justify-center items-center  w-full max-w-[500px] xs:h-[200px] h-[400px]">
                            <Image src={project.src} alt={project.title}   width={500} 
                                height={350} className="  object-cover border
                                                       rounded border-gray-700 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300"/>
                        </div>
                        
                </motion.div>

                
            ))}
        </div>
      </div>
    );
  };
  
  export default Project;
  