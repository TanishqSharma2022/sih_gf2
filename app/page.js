import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen w-full flex-col items-center justify-between ">
      <div className="backgroundImage  w-full h-[90vh] md:h-[80vh] shadow-xl    p-6 md:p-12">
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
    </main>
  )
}
