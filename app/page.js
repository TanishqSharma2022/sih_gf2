import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen w-full flex-col items-center justify-between ">
      <div className="backgroundImage  w-full h-[110vh] md:h-[80vh] shadow-xl    p-6 md:p-12">
        <div className="w-full md:w-[50%] flex flex-col items-center justify-center  shadow-2xl py-4 md:p-6 bg-white/20 backdrop-blur-lg  relative top-[10%] ">
          <h1 className="text-4xl md:text-5xl p-4  font-bold drop-shadow-lg  text-white">Find the job that fits your life</h1>
          <p className="text-lg text-white p-4 drop-shadow-lg font-sans">With Indeed, you can search millions of jobs online to find the next step in your career. With tools for job search, CVs, company reviews and more, were with you every step of the way.</p>
          
          
          
          <div className="flex md:w-full  rounded-2xl flex-col md:flex-row gap-6 justify-between md:border-black md:h-[10vh] w-[90%] relative border md:rounded-full bg-white shadow-lg p-4">
            <div className="  flex flex-col md:flex-row gap-2  items-center" >
              <CiSearch className="h-[50px] w-[50px] hidden md:flex" />
            <input className="md:shadow-none shadow-lg rounded-full text-center h-[6vh] border md:border-none md:h-full w-full font-sans font-semibold" placeholder="Job title / Company " />
            <span className="text-gray-300 font-bold  hidden md:flex">|</span>
            <input className="md:shadow-none shadow-lg rounded-full text-center h-[6vh] md:h-full w-full  border md:border-none font-sans font-semibold" placeholder="City / State / Pincode" />
            </div>
            <button className=" px-4 grid h-[6vh] md:h-full place-items-center shadow-lg rounded-full bg-black text-white">Search</button>
            </div>
        </div>
      </div>



    <div className="w-full py-[100px] p-12 border grid place-items-center bg-[#93C5FD]">
    <div className="md:w-[80%] w-full flex gap-6  flex-col md:flex-row  items-center justify-center">
      <div className="bg-white rounded-[30px] min-h-[200px]   shadow-lg border flex flex-col items-center justify-between gap-6 ">
      <div className="px-8 py-5 relative top-0 border w-full h-[50%] bg-gradient-to-r from-[#0EA5E9] to-blue-400 rounded-[30px]">
        <h1 className="text-3xl text-center text-white font-bold drop-shadow-lg">Available Govt. Jobs</h1>
      </div>
      <p className="font-bold  text-4xl mb-6">5000</p>
      </div>
      <div className="bg-white rounded-[30px] min-h-[200px]   shadow-lg border flex flex-col items-center justify-between gap-6 ">
      <div className="px-8 py-5 relative top-0 border w-full h-[50%] bg-gradient-to-r from-[#0EA5E9] to-blue-400 rounded-[30px]">
        <h1 className="text-3xl text-center text-white font-bold drop-shadow-lg">Available Govt. Jobs</h1>
      </div>
      <p className="font-bold  text-4xl mb-6">5000</p>
      </div>
      <div className="bg-white rounded-[30px] min-h-[200px]   shadow-lg border flex flex-col items-center justify-between gap-6 ">
      <div className="px-8 py-5 relative top-0 border w-full h-[50%] bg-gradient-to-r from-[#0EA5E9] to-blue-400 rounded-[30px]">
        <h1 className="text-3xl text-center text-white font-bold drop-shadow-lg">Available Govt. Jobs</h1>
      </div>
      <p className="font-bold  text-4xl mb-6">5000</p>
      </div>
     


    </div>
    </div>

    <div className="w-full py-[100px] p-12 border grid place-items-center">
    <div className="md:w-[80%] grid gap-6  grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div className="p-8  hover:border-black cursor-pointer min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://as1.ftcdn.net/v2/jpg/03/84/32/54/1000_F_384325407_gS2y9nFEEz9naX7mYMhEG2K2lZ8i1UAY.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
      <h1 className="text-3xl text-center font-bold">Jobs for Disable People</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      <div className="p-8  hover:border-black cursor-pointer min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://as1.ftcdn.net/v2/jpg/06/10/96/50/1000_F_610965057_Gt77k82wZWSQjGXWBq6qHLdlLnSJqWuc.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
     
     <h1 className="text-3xl text-center font-bold">Government Jobs</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      <div className="p-8  hover:border-black cursor-pointer min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://as1.ftcdn.net/v2/jpg/06/10/96/50/1000_F_610965071_6AeeUS1elu9GVK7Cv5SzC0tSR3nWbnkt.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
     
     <h1 className="text-3xl text-center font-bold">Private Jobs</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      <div className="p-8 hover:border-black cursor-pointer  min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://t4.ftcdn.net/jpg/02/79/66/93/240_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
     
     <h1 className="text-3xl text-center font-bold">Jobs for Women</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>

    </div>
    </div>

    </main>
  )
}
