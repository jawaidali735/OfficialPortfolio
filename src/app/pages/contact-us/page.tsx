export default function contactUs(){
    return(
        <div className="px-64 space-y-2 text-center font-sans">
            <h1 className="font-bold text-3xl p-8 text-center">Contact <span className="text-[#00abf0]">Me!</span></h1>
            <form  className="space-y-2">
                
                <div className="flex space-x-4">
                <div className="border-2 border-[#00abc0] rounded-md w-1/2">
                    
                    <input type="text" className=" bg-transparent rounded-md border-transparent p-3 w-full shadow-md outline-none" placeholder="enter your name" required />
                </div>

                <div className="border-2 border-[#00abc0] w-1/2 rounded-md">
                    
                    <input type="email" className=" bg-transparent rounded-lg border-transparent p-3 w-full shadow-md outline-none" placeholder="enter your name" required />
                </div>

                
                
                </div>

                <div className="flex space-x-4">
                <div className="border-2 border-[#00abc0] rounded-md w-1/2">
                    
                    <input type="text" className=" bg-transparent rounded-lg border-transparent p-3 w-full shadow-md outline-none" placeholder="enter your name" required />
                </div>

                <div className="border-2 border-[#00abc0] w-1/2 rounded-md">
                    
                    <input type="email" className=" bg-transparent rounded-lg border-transparent p-3 w-full shadow-md outline-none" placeholder="enter your name" required />
                </div>

                
                
                </div>
                <div className=" border-2 border-[#00abc0] rounded-md">
                    
                    <textarea className=" bg-transparent rounded-lg border-transparent p-2 w-full  outline-none min-h-52" placeholder="your message" required />
                </div>
                
                <button className=" rounded-lg p-1 bg-[#00abf0] text-[#07151f] font-semibold hover:text-white hover:border-2 hover:border-[#00abf0] transition duration-300 hover:shadow-lg hover:shadow-blue-400  ">Send message</button>
            </form>
        </div>
    )
}