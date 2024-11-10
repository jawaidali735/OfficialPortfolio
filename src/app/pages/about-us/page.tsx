import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <div className="flex justify-center flex-col items-center bg-[#07151f] text-white text-center pt-8 pb-8 space-y-4 font-sans">
            <h1 className="font-bold text-3xl pb-8">
                About <span className="text-[#00abf0]">Me</span>
            </h1>
            <div className="flex justify-center items-center w-full max-w-[500px] h-[400px]">
                <Image
                    src="/about.png"
                    alt="About Me"
                    width={500}
                    height={400}
                    className="object-cover rounded-lg border border-[#00abf0] hover:bg-[#f0faff] hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="bg-[#07151f] text-white text-center rounded-lg p-6 border-2 border-[#00abf0] hover:scale-105 transition-transform duration-300">
                <h2 className="font-bold text-2xl">Jawaid Ali</h2>
                <p className="text-base text-white/70 break-words my-4">
                    I&apos;m a dedicated and experienced developer deeply passionate about crafting innovative solutions. With expertise in various areas, including development, blogging, SEO, and content writing, I thrive on tackling complex challenges and bringing creative ideas to life through elegant and efficient code. Let&apos;s collaborate and build something truly amazing together. Together, we can make a difference!
                </p>
                <button className="rounded-lg p-1 bg-[#00abf0] text-[#07151f] font-semibold hover:text-white hover:border-2 hover:border-[#00abf0] transition duration-300 hover:shadow-lg hover:shadow-blue-400">
                    Read more
                </button>
            </div>
        </div>
    );
}
