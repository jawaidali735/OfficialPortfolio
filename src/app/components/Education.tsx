import { SlCalender } from "react-icons/sl";
export default function Education() {
  return (
    <div id="education" className="font-sans xs:overflow-x-hidden bg-[#07151f] text-white pt-20 pb-10 ">
      <h1 className="font-bold text-3xl p-8 text-center text-white">
        My<span className="text-[#00abcf]"> Journey</span>{" "}
      </h1>

      <div className="flex xs:flex xs:flex-col xs:px-0  px-28 space-x-6  ">
        <div className="xs:w-full w-1/2 xs:pl-8 space-y-2 ">
          <h3 className="text-lg font-bold ">Education</h3>

          <div className=" space-y-6 border-l-2 border-[#00abcf] xs:px-6 xs:pl-8 px-8 ">
            <span className=" left-[6.3rem] xs:left-[1.3rem] w-6 h-6 bg-[#00abcf] rounded-full absolute  hover:scale-110 transition-transform duration-300 "></span>
            <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300">
              <div className=" space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]">
                  {" "}
                  <SlCalender /> 2016
                </span>
                <h3 className=" font-bold">Matariculation</h3>
                <p className="text-sm">
                Completed matriculation with honors, excelling in subjects like mathematics, science, and others, demonstrating strong academic performance and dedication.
                </p>
              </div>
            </div>

            <span className=" left-[6.3rem] xs:left-[1.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300"></span>
            <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300">
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]">
                  {" "}
                  <SlCalender /> 2016 - 2018
                </span>
                <h3 className="font-bold">Intermediate</h3>
                <p className="text-sm">
                Achieved distinction in intermediate studies, with a focus on pre-engineering subjects, demonstrating proficiency and dedication to academic excellence.
                </p>
              </div>
            </div>

            <span className=" left-[6.3rem] xs:left-[1.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute hover:scale-110 transition-transform duration-300"></span>
            <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300">
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]">
                  {" "}
                  <SlCalender /> 2019 - 2023
                </span>
                <h3 className="font-bold">Graduation</h3>
                <p className="text-sm">
                Graduated from the University of Sindh with an associated degree in Bachelor of Commerce (B.Com), specializing in business management, finance, and economics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experiance */}

        

        <div className=" xs:w-full w-1/2 xs:pl-2 space-y-2 xs:pt-16  ">
          <h3 className="text-lg font-bold">Experiance</h3>

          <div className=" space-y-6 border-l-2 xs:px-12 xs:pl-8  border-[#00abcf] px-8 ">
            <span className=" left-[39.4rem] xs:left-[1.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300"></span>
            <div className="border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300">
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]">
                  {" "}
                  <SlCalender /> 2024
                </span>
                <h3 className="font-bold">GenAI, Web 3.0, and Metaverse - Intenship</h3>
                <p className="text-sm">
                Currently interning and learning at <b>Governor Sindh Initiative for GenAI, Web 3.0, and Metaverse,</b> gaining valuable industry experience and skills.
                </p>
              </div>
            </div>

            <span className=" left-[39.4rem] xs:left-[1.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute hover:scale-110 transition-transform duration-300"></span>
            <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300">
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]">
                  {" "}
                  <SlCalender /> 2024 - 2024
                </span>
                <h3 className="font-bold">CodSoft - Intenship</h3>
                <p className="text-sm">
                Completed a 4-week internship at Codsoft, gaining hands-on experience and enhancing skills in web development and project management.
                </p>
              </div>
            </div>

            <span className=" left-[39.4rem] xs:left-[1.3rem] w-6 h-6 bg-[#00abc0] rounded-full absolute  hover:scale-110 transition-transform duration-300"></span>
            <div className=" border-2 border-[#00abcf] rounded-lg p-2 hover:bg-[#07151f]  hover:scale-110 transition-transform duration-300">
              <div className="space-y-2">
                <span className="flex items-center gap-3 text-[#00abcf]">
                  {" "}
                  <SlCalender /> 2021 - 2022
                </span>
                <h3 className="font-bold">Infomatec - Medical Billing</h3>
                <p className="text-sm">
                I have an experience of one year at Infomatec, a IT Medical Billing company where i handled claims of provider. I used to handle AR claims, calling to insurances and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
