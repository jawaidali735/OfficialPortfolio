import { SlCalender } from "react-icons/sl";
export default function education(){
    return(
        <div className="font-sans">
            <h1 className="font-bold text-3xl p-8 text-center"><span className="text-[#00abf0]">My</span> Journey</h1>

                <div className="flex px-28 space-x-6  ">
                <div className="w-1/2 space-y-2  " >
                <h3 className="text-lg font-bold">Education</h3>
                
                <div className=" space-y-6 border-l-2 border-[#00abcf] px-8 ">
                <span className=" left-[6.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300 "></span>
                <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300">
                <div className=" space-y-2"> 
                   <span className="flex items-center gap-3 text-[#00abcf]"> <SlCalender/>  2016</span>
                    <h3 className=" font-bold">Matariculation</h3>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores neque exercitationem aperiam.</p>
                    </div>
                </div>

                 <span className=" left-[6.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300"></span>   
                <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300">
                <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]"> <SlCalender/>  2016 - 2018</span>
                    <h3 className="font-bold">Inter</h3>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores neque exercitationem aperiam.</p>
                    </div>
                </div>

                <span className=" left-[6.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute hover:scale-110 transition-transform duration-300"></span>
                <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300">
                <div className="space-y-2"> 
                <span className="flex items-center gap-3 text-[#00abcf]"> <SlCalender/>  2018 - 2022</span>
                    <h3 className="font-bold">Graduation</h3>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores neque exercitationem aperiam.</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Experiance */}

            <div className="w-1/2 space-y-2" >
                <h3 className="text-lg font-bold">Experiance</h3>
                
                

                <div className=" space-y-6 border-l-2 border-[#00abcf] px-8">

                <span className=" left-[39.4rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300"></span>   
                <div className="border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300">
                <div className="space-y-2"> 
                <span className="flex items-center gap-3 text-[#00abcf]"> <SlCalender/>  2016</span>
                    <h3 className="font-bold">Matariculation</h3>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores neque exercitationem aperiam.</p>
                    </div>
                </div>
                

                <span className=" left-[39.4rem] w-6 h-6 bg-[#00abc0] rounded-full absolute hover:scale-110 transition-transform duration-300"></span>
                <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300">
                <div className="space-y-2"> 
                <span className="flex items-center gap-3 text-[#00abcf]"> <SlCalender/>  2016</span>
                    <h3 className="font-bold">Matariculation</h3>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores neque exercitationem aperiam.</p>
                    </div>
                </div>

                <span className=" left-[39.4rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300"></span>
                <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300" >  
                
                <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]"> <SlCalender/>  2016</span>
                    <h3 className="font-bold">Matariculation</h3>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores neque exercitationem aperiam.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}