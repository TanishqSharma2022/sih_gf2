'use client'
import Number from "@/components/Number";
import { CiSearch } from "react-icons/ci";
import {Fade, Slide} from 'react-awesome-reveal'
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";


export default function Home() {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const number_cards = [
    {
      title: "Available Govt. Jobs",
      number: 2131,
    },
    {
      title: "Available Pvt. Jobs",
      number: 123,
    },
    {
      title: "Registered Users",
      number: 400
    }
]
// const [response, setResponse] = useState(null)


const JobRecommend = () => {

  router.push('/search?search_words='+search+'')
  
}



  return (
    <main className="flex overflow-x-hidden min-h-screen w-full flex-col items-center justify-between ">
    <Fade>
      <div className="backgroundImage  w-full h-[110vh] md:h-[80vh] shadow-xl    p-6 md:p-12 ">

        <div className="w-full md:w-[50%] flex flex-col items-center justify-center  shadow-2xl py-4 md:p-6 bg-white/20 backdrop-blur-lg  relative top-[10%] ">
          <h1 className="text-4xl md:text-5xl p-4  font-bold drop-shadow-lg text-white font-gilroy">Find the job that fits your life</h1>
          <p className="text-lg text-white p-4 drop-shadow-lg font-sans">With Indeed, you can search millions of jobs online to find the next step in your career. With tools for job search, CVs, company reviews and more, were with you every step of the way.</p>
          
          
          
          <div className="flex md:w-full  rounded-2xl flex-col md:flex-row gap-6 justify-between  md:h-[10vh] w-[90%] relative border md:rounded-full bg-white shadow-lg p-4">
            <div className="  flex flex-col md:flex-row gap-2  items-center" >
              <CiSearch className="text-black h-[50px] w-[50px] hidden md:flex" />
            <input
            className="md:shadow-none shadow-lg rounded-full text-center h-[6vh] border md:border-none md:h-full w-full font-sans font-semibold" 
            placeholder="Job title / Company "
            onChange={(e) => setSearch(e.target.value)}
            />
            <span className="text-gray-300 font-bold  hidden md:flex">|</span>
            <input className="md:shadow-none shadow-lg rounded-full h-[6vh] text-center md:h-full w-full  border md:border-none font-sans font-semibold" placeholder="City / State / Pincode" />
            </div>
            <button 
            className=" px-6 grid h-[6vh] md:h-full place-items-center shadow-lg rounded-full bg-black/80 hover:bg-black text-white"
            onClick={JobRecommend}
            >Search</button>
            </div>
        </div>

      </div>
      </Fade>

    <div className="w-full py-[100px] p-12  grid place-items-center ">
    <div className="md:w-[80%] w-full flex gap-6  flex-col md:flex-row  items-center justify-center">
{
  number_cards.map((card) => (
      <div key={card.title} className="bg-gray-100 p-4 rounded-[10px]   shadow-lg border flex flex-col items-center justify-around ">
      <div className="px-8 py-5  relative top-0  w-full h-[50%]  rounded-[10px]">
        <h1 className="text-2xl text-center text-[#294dff] font-bold drop-shadow-lg">
          {card.title}
          </h1>
      </div>
      <div className="font-bold  text-3xl mb-6">

      <Number n={card.number} />
        
      </div>
      
      </div>
    ))}
     


    </div>
    </div>

    <div className="w-full py-[100px] p-12 border grid place-items-center bg-gray-100">
      <Fade delay={500}>
      <h1 className="font-bold text-5xl py-12 ">Find <span className="text-[#294dff]">Jobs</span> for everyone</h1>
      </Fade>
    <div className="md:w-[80%] grid gap-6  grid-cols-1 md:grid-cols-2 items-center justify-center">
      <Slide>
      <div className="p-8 bg-white hover:border-black cursor-pointer min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://as1.ftcdn.net/v2/jpg/03/84/32/54/1000_F_384325407_gS2y9nFEEz9naX7mYMhEG2K2lZ8i1UAY.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
      <h1 className="text-3xl text-center font-bold">Jobs for Disable People</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      </Slide>

      <Slide direction="right">
        <div className="p-8  bg-white hover:border-black cursor-pointer min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://as1.ftcdn.net/v2/jpg/06/10/96/50/1000_F_610965057_Gt77k82wZWSQjGXWBq6qHLdlLnSJqWuc.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
     
     <h1 className="text-3xl text-center font-bold">Government Jobs</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      </Slide>
      <Slide>
        <div className="p-8  bg-white hover:border-black cursor-pointer min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://as1.ftcdn.net/v2/jpg/06/10/96/50/1000_F_610965071_6AeeUS1elu9GVK7Cv5SzC0tSR3nWbnkt.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
     
     <h1 className="text-3xl text-center font-bold">Private Jobs</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      </Slide>
      <Slide direction="right">
        <div className="p-8 bg-white hover:border-black cursor-pointer  min-h-[200px] shadow-lg border flex flex-col items-center justify-center  gap-6 ">
      <img 
      src="https://t4.ftcdn.net/jpg/02/79/66/93/240_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg" 
      className="h-[100px] rounded-[50%] drop-shadow-lg" />
     
     <h1 className="text-3xl text-center font-bold">Jobs for Women</h1>
      <p className="font-bold text-white text-4xl "></p>
      </div>
      </Slide>

    </div>
    </div>

    </main>
  )
}
