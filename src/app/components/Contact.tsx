export default function Contact(){
    return(
        <div id="contact" className="px-64 bg-gradient-to-t from-[#07151f] to-[#134b57]  space-y-2 text-center font-sans pt-20 pb-12 xs:flex xs:flex-col xs:px-4 ">
            <h1 className="font-bold text-3xl p-8 text-center">Contact <span className="text-[#00abcf]">Me!</span></h1>
            <form  className="space-y-4 xs:space-y-8">
                
                <div className="flex space-x-4 xs:flex xs:flex-col xs:space-x-0 xs:space-y-8">
                <div className="border-2 border-[#00abcf] rounded-md  xs:w-full w-1/2 ">
                    
                    <input type="text" className=" bg-transparent rounded-md border-transparent p-3 w-full shadow-md outline-none" placeholder="Your name" required />
                </div>

                <div className="border-2 border-[#00abcf] xs:w-full w-1/2 rounded-md">
                    
                    <input type="email" className=" bg-transparent rounded-lg border-transparent p-3 w-full shadow-md outline-none" placeholder="Your email address" required />
                </div>

                
                
                </div>

                <div className="flex space-x-4 xs:flex xs:flex-col xs:space-x-0 xs:space-y-8">
                <div className="border-2 border-[#00abcf] rounded-md xs:w-full w-1/2">
                    
                    <input type="number" className=" bg-transparent rounded-lg border-transparent p-3 w-full shadow-md outline-none" placeholder="Your phone number" required />
                </div>

                <div className="border-2 border-[#00abcf] xs:w-full w-1/2 rounded-md">
                    
                    <input type="text" className=" bg-transparent rounded-lg border-transparent p-3 w-full shadow-md outline-none" placeholder="Subject email (Optional)"  />
                </div>

                
                
                </div>
                <div className=" border-2 border-[#00abcf] rounded-md">
                    
                    <textarea className=" bg-transparent rounded-lg border-transparent p-2 w-full  outline-none min-h-52" placeholder="your message" required />
                </div>
                
                <button className=" rounded-lg p-2  bg-[#00abcf] text-[#07151f] font-semibold hover:text-[#00abcf] hover:border-2 hover:border-[#00abcf] transition duration-300 hover:shadow-lg hover:bg-[#07151f] hover:shadow-blue-400 ">Send message</button>
            </form>
        </div>
    )
}