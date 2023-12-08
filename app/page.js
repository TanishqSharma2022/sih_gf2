import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen w-full flex-col items-center justify-between ">
      <div className="border w-full md:h-[80vh] shadow-lg bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-black bg-opacity-10 bg-cover p-6 md:p-12">
        <div className="w-full md:w-[50%] grid place-items-center shadow-2xl py-4 md:p-6 bg-white/30 backdrop-blur-lg  relative top-[10%] ">
          <h1 className="text-4xl md:text-6xl p-4  font-bold drop-shadow-lg  text-white">Find the job that fits your life</h1>
          <p className="text-white p-4 drop-shadow-lg font-sans">With Indeed, you can search millions of jobs online to find the next step in your career. With tools for job search, CVs, company reviews and more, were with you every step of the way.</p>
          
          
          
          <div className="flex  rounded-2xl flex-col md:flex-row gap-6 justify-between border-black md:h-[10vh] w-[90%] relative border md:rounded-full bg-white shadow-lg p-4">
            <div className="  flex flex-col md:flex-row gap-2  items-center" >
              <CiSearch className="h-[50px] w-[50px] hidden md:flex" />
            <input className="rounded-full text-center h-[6vh] border md:border-none md:h-full w-full font-sans font-semibold" placeholder="Job title / Company " />
            <span className="text-gray-300 font-bold  hidden md:flex">|</span>
            <input className="rounded-full text-center h-[6vh] md:h-full w-full  border md:border-none font-sans font-semibold" placeholder="City / State / Pincode" />
            </div>
            <button className=" px-4 grid h-[6vh] md:h-full place-items-center shadow-lg rounded-full bg-black text-white">Search</button>
            </div>
        </div>
      </div>
    </main>
  )
}
