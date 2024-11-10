"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen); 
  }

  return (
    <div
      className={` fixed top-0 w-full flex justify-between p-6 px-32 xs:px-10 transition-colors duration-300 ${
        isScrolled ? "bg-[#081b29]" : "bg-transparent"
      } text-white font-sans z-20 `}
    > 
      <div className="font-bold xs:text-xl text-2xl">Jawaid Ali</div>

      
      <div className="hidden md:flex gap-4 px-4">
        <div className="text-[#00abcf]">
          <Link href="/">Home</Link>
        </div>
        <div className="hover:text-[#00abcf]">
          <Link href="#about">About Us</Link>
        </div>
        <div className="hover:text-[#00abcf]">
          <Link href="#education">Education</Link>
        </div>
        <div className="hover:text-[#00abcf]">
          <Link href="#skills">Skills</Link>
        </div>
        <div className="hover:text-[#00abcf]">
          <Link href="#project">Projects</Link>
        </div>
        <div className="hover:text-[#00abcf]">
          <Link href="#contact">Contact Us</Link>
        </div>
      </div>

      
      <button className="md:hidden " onClick={handleMenu}>
        <div className="text-3xl"><IoIosMenu /></div>
      </button>

     
      {isMenuOpen && (
        <div className="fixed inset-0  bg-black bg-opacity-80 z-30 flex flex-col items-center p-6 xs:px-10  ">
          <div className="flex justify-between w-full">
            <div className="font-bold text-2xl text-white">Jawaid Ali</div>
            <button onClick={handleMenu}>
              <div className="text-3xl text-white"><FaXmark /></div>
            </button>
          </div>
          <div className="flex flex-col mr-64 gap-6 mt-10 text-white text-lg">
            <Link href="/" className="text-[#00abcf] " onClick={handleMenu}>Home</Link>
            <Link href="#about" className="hover:text-[#00abcf] " onClick={handleMenu}>About Us</Link>
            <Link href="#education" className="hover:text-[#00abcf] " onClick={handleMenu}>Education</Link>
            <Link href="#skills" className="hover:text-[#00abcf] " onClick={handleMenu}>Skills</Link>
            <Link href="#project" className="hover:text-[#00abcf] " onClick={handleMenu}>Projects</Link>
            <Link href="#contact" className="hover:text-[#00abcf]" onClick={handleMenu}>Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
