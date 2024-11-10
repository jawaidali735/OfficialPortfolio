export default function Skills() {
    return (
      <div id="skills" className=" overflow-x-hidden font-sans pt-20 pb-20 bg-gradient-to-t text-white from-[#07151f] to-[#134b57]  ">
                      <h1 className="font-bold text-3xl p-8 text-center ">My <span className="text-[#00abcf]">Skills</span> </h1>
        <div className="flex space-x-10 px-28 xs:px-4 xs:space-x-0 xs:space-y-12 xs:flex xs:flex-col">
          <div className="xs:w-full w-1/2 space-y-6  ">
          <h3 className="text-lg font-bold">Coding Skills</h3>
  
            <div className="p-6 h-50 xs:p-4  border-2 border-[#00abcf] space-y-4 xs:space-y-2 rounded-lg hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300 font-bold">
              <h3 className="flex">
                html <span className="px-[85%] xs:px-[80%] ">65%</span>
              </h3>
              <div className="h-8 border-2 xs:h-[1.5px] border-[#00abcf] p-2 rounded-lg">
                <div className="h-3 xs:h-2 xs:mt-[-4px] w-[65%] bg-[#00abcf] rounded-xl"> </div>
              </div>
              <h3 className="flex">
                Css <span className="px-[87%] xs:px-[82%]">50%</span>
              </h3>
              <div className="h-8 border-2 xs:h-[1.5px] border-[#00abcf] p-2 rounded-lg">
                <div className="h-3 w-[50%] xs:h-2 xs:mt-[-4px] bg-[#00abcf] rounded-xl"> </div>
              </div>
              <h3 className="flex">
                TypeScript <span className="px-[75%] xs:px-[66%]">40%</span>
              </h3>
              <div className="h-8 border-2 xs:h-[1.5px] border-[#00abcf] p-2 rounded-lg">
                <div className="h-3 w-[40%] xs:h-2 xs:mt-[-4px]  bg-[#00abcf] rounded-xl"> </div>
              </div>
            </div>
          </div>
  
          <div className="xs:w-full w-1/2 space-y-6  ">
          <h3 className="text-lg font-bold">Professional Skills</h3>
  
            <div className="p-6 h-50 xs:p-4  border-2 border-[#00abcf] space-y-4 xs:space-y-2 rounded-lg hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300 font-bold">
              <h3 className="flex whitespace-nowrap">
                web design <span className="px-[70%] xs:px-[63%] ">65%</span>
              </h3>
              <div className="h-8 border-2 xs:h-[1.5px] border-[#00abcf] p-2 rounded-lg">
                <div className="h-3 xs:h-2 xs:mt-[-4px] w-[65%] bg-[#00abcf] rounded-xl"> </div>
              </div>
              <h3 className="flex whitespace-nowrap">
                Web Development <span className="px-[57%] xs:px-[46%]">50%</span>
              </h3>
              <div className="h-8 border-2 xs:h-[1.5px] border-[#00abcf] p-2 rounded-lg">
                <div className="h-3 w-[50%] xs:h-2 xs:mt-[-4px] bg-[#00abcf] rounded-xl"> </div>
              </div>
              <h3 className="flex whitespace-nowrap">
                Content Creator <span className="px-[62%] xs:px-[52%]">40%</span>
              </h3>
              <div className="h-8 border-2 xs:h-[1.5px] border-[#00abcf] p-2 rounded-lg">
                <div className="h-3 w-[40%] xs:h-2 xs:mt-[-4px]  bg-[#00abcf] rounded-xl"> </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  