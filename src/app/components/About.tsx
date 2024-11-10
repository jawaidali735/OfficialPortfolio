"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();
    return (
        <div id="about" className="flex flex-col items-center bg-[#07151f] text-white text-center pt-24 xs:pb-36 pb-28 space-y-4 font-sans xs:text-center">
            <h1 className="font-bold text-3xl pb-8">About <span className="text-[#00abcf]">Me</span></h1>
            <div className="relative w-[200px] h-[200px] flex justify-center items-center overflow-visible">
            
                <motion.svg
                    className="absolute"
                    width="280"  
                    height="280" 
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="200"  
                        stroke="#00abcf"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
                
                
                <div className="w-[200px] h-[200px] border-2 border-[#00abcf] rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                        width={200}
                        height={200}
                        src="/about.png"
                        alt="Responsive image"
                        className="rounded-full"
                    />
                </div>
            </div>

            <h2 className="font-bold text-xl pt-4">Jawaid Ali</h2>
            <p className="px-32 xs:px-8 text-sm">
                I&apos;m a dedicated and experienced developer deeply passionate about crafting innovative solutions. With expertise in various areas, including development, blogging, SEO, and content writing, I thrive on tackling complex challenges and bringing creative ideas to life through elegant and efficient code. Let&apos;s collaborate and build something truly amazing together. Together, we can make a difference!
            </p>

            <div className="xs:pt-24">
               <button onClick={() => router.push("/about")} className="rounded-lg p-1 bg-[#00abcf] text-[#07151f] font-semibold hover:border-2 hover:border-[#00abcf] hover:text-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400 hover:bg-[#07151f]">Read more</button>
            </div>
        </div>
    );
}
