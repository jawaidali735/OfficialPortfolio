"use client";

import { motion } from "framer-motion";

const aboutMeContent = [
    {
        title: "My Journey Begins",
        description: "I'm Jawaid Ali, a passionate developer with a knack for creating innovative solutions. My journey in tech started at a young age.",
    },
    {
        title: "Professional Growth",
        description: "Over the years, I've honed my skills in various technologies, focusing on front-end development and user experience.",
    },
    {
        title: "Collaborative Spirit",
        description: "Collaboration is key! I enjoy working with diverse teams, sharing ideas, and crafting beautiful applications.",
    },
    {
        title: "Let's Connect",
        description: "I'm always looking for new opportunities to collaborate and innovate. If you're interested, feel free to reach out!",
    },
];

export default function About() {
    return (
        <div className="flex flex-col items-center px-6 pt-24 overflow-x-hidden lg:px-36 bg-[#07151f] text-white text-center py-12 relative w-full">
            <h1 className="text-4xl font-bold mb-8">
                About <span className="text-[#00abcf]">Me</span>
            </h1>
            <div className="relative w-full flex flex-col items-center">
                {/* Vertical line for larger screens only */}
                <div
                    className="absolute h-full w-1 bg-[#00abcf] z-0 hidden md:block"
                    style={{ left: "50%", top: "0" }}
                />

                {aboutMeContent.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        className={`relative z-10 rounded-lg p-6 shadow-lg mx-4 my-4 flex flex-col justify-between backdrop-blur-lg bg-[#00abcf]/50 border-none border-white/70 hover:bg-[#00abcf]/10 transition-all duration-300 
                        ${index % 2 === 0 ? "md:self-start" : "md:self-end"} md:w-[50%] w-[90%]`}
                        style={{
                            position: "relative",
                            left:
                                window.innerWidth >= 768
                                    ? index % 2 === 0
                                        ? "-13px" // Left alignment for large screens
                                        : "17px"  // Right alignment for large screens
                                    : "0", // Center for small screens
                        }}
                    >
                        <div className="hover:scale-110 transition-transform duration-300">
                            <h2 className="text-5xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{item.title}</h2>
                            <p className="text-base text-white/70 break-words p-4">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
