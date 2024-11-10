"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-banner font-sans bg-repeat flex bg-bottom w-full h-screen xs:pt-0 bg-cover text-white"
    >
      <div className="space-y-0.5 xs:space-y-4 xs:space-x-2 xs:flex xs:flex-col xs:justify-center xs:items-center xs:w-full xs:p-2 w-1/2 pl-32 pt-44 xs:pt-36 xs:text-center">
        <h1 className="font-bold xs:text-[2.6rem] text-[2.6rem]">
          Hi, I&apos;m{" "}
          <span className="xs:whitespace-nowrap text-[#00abcf]">Jawaid Ali</span>
        </h1>

        <div className="text-[32px] font-semibold text-[#00abcf] xs:text-[30px]">
          <Typewriter
            options={{
              strings: [
                "A Web Developer",
                "Content Creator",
                "Blogger",
                " & Web Designer.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="pt-4 text-sm">
          I&apos;m a dedicated developer passionate about crafting innovative
          solutions. With expertise in HTML, CSS, TypeScript, I thrive on
          tackling challenges and bringing ideas to life through code. Let&apos;s
          build something amazing!
        </p>

        <div className="space-x-8 pt-8">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/jawaidaliofficial/")
            }
            className="w-[100px] rounded-lg p-[4px] bg-[#00abcf] text-[#07151f] font-semibold hover:text-[#00abcf] hover:border-2 hover:border-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400 hover:bg-[#07151f]"
          >
            Hire Me
          </button>

          <button
            onClick={() =>
              (window.location.href = "https://www.instagram.com/nawab_javedali/")
            }
            className="w-[100px] rounded-lg p-[3px] border-2 border-[#00abcf] text-[#00abcf] font-semibold hover:text-[#07151f] hover:border-2 hover:bg-[#00abcf] hover:border-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400"
          >
            Let&apos;s Talk
          </button>
        </div>

        <div className="flex space-x-6 pt-20 xs:pt-28 text-[#00cbcf]">
          <a
            href="https://www.facebook.com/profile.php?id=100083658815943&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#00abcf] text-xs p-2 rounded-3xl hover:text-[#07151f] hover:bg-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/nawab_javedali/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#00abcf] text-xs p-2 rounded-3xl hover:text-[#07151f] hover:bg-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/jawaidaliofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#00abcf] text-xs p-2 rounded-3xl hover:text-[#07151f] hover:bg-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/jawaidali735"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#00abcf] text-xs p-2 rounded-3xl hover:text-[#07151f] hover:bg-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400"
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>

      <div className="mt-12 m-2 w-1/2 xs:w-0 hover:bg-[#030b10] hover:opacity-[.8] duration-300 animate-manip-active-hover delay-4s"></div>
    </div>
  );
};

export default Hero;
