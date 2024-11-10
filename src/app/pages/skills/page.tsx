export default function aboutT() {
  return (
    <div className=" overflow-x-hidden font-sans pb-20 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <h1 className="font-bold text-3xl p-8 text-center "><span className="text-[#00abf0]">My</span> Journey</h1>
      <div className="flex space-x-10 px-28 sm:flex-col lg:flex-row sm:items-center ">
        <div className="w-1/2 space-y-6 ">
        <h3 className="text-lg font-bold">Coding Skills</h3>

          <div className="p-6 h-50 border-2 border-[#00abcf] space-y-4 rounded-xl hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300 ">
            <h3 className="flex">
              html <span className="px-[85%]">65%</span>
            </h3>
            <div className="h-8 border-2 border-[#00abcf] p-2 rounded-xl">
              <div className="h-3 w-[65%] bg-[#00abcf] rounded-xl"> </div>
            </div>
            <h3 className="flex">
              Css <span className="px-[87%]">50%</span>
            </h3>
            <div className="h-8 border-2 border-[#00abcf] p-2 rounded-xl">
              <div className="h-3 w-[50%] bg-[#00abcf] rounded-xl"> </div>
            </div>
            <h3 className="flex">
              TypeScript <span className="px-[75%]">40%</span>
            </h3>
            <div className="h-8 border-2 border-[#00abcf] p-2 rounded-xl">
              <div className="h-3 w-[40%] bg-[#00abcf] rounded-xl"> </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 space-y-6 ">
        <h3 className="text-lg font-bold">Professional Skills</h3>

          <div className="p-6 h-50 border-2 border-[#00abcf] space-y-4 rounded-xl hover:bg-[#f0faff]  hover:scale-110 transition-transform duration-300">
            <h3 className="flex gap-[322px]">
              Web Design <span className="">60%</span>
            </h3>
            <div className="h-8 border-2 border-[#00abcf] p-2 rounded-xl">
              <div className="h-3 w-[60%] bg-[#00abcf] rounded-xl"> </div>
            </div>
            <h3 className="flex gap-[270px]">
              Web Development <span>50%</span>{" "}
            </h3>
            <div className="h-8 border-2 border-[#00abcf] p-2 rounded-xl">
              <div className="h-3 w-[50%] bg-[#00abcf] rounded-xl"> </div>
            </div>
            <h3 className="flex gap-[350px]">
              Blogging <span >70%</span>
            </h3>
            <div className="h-8 border-2 border-[#00abcf] p-2 rounded-xl">
              <div className="h-3 w-[70%] bg-[#00abcf] rounded-xl"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
