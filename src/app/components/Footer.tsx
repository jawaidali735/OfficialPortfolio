import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";


const Footer = ()=> {
    return(
            <div id="footer" className="flex justify-between py-[1.5rem] bg-[#07151f] text-white px-24  xs:flex xs:flex-col-reverse  xs:items-center xs:text-center xs:text-xs xs:px-0">
                <div>
                    <p>©Copyright 2024 by Jawaid Ali | All Rights Reserved.</p>
                </div>

                <div className=" xs:mb-6 border-[.1rem] rounded-[.6rem] p-[.5rem]  bg-[#00abcf] border-[#00abcf] text-[#07151f] text-sm hover:text-[#00abcf] hover:border-2 hover:border-[#00abcf] transition duration-300 hover:shadow-lg hover:shadow-blue-400 hover:bg-[#07151f]">
                <Link href="#hero"><FaArrowUp/></Link> 
                </div>

                
            </div>
    )
}

export default Footer;