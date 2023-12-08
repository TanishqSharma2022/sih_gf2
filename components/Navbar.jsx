"use client"
import Link from "next/link"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";


export default function Navbar () {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <div className="h-[10vh] border border-black w-full shadow-lg flex items-center justify-center p-4">
            <div className="w-full md:w-[80%] h-full flex items-center justify-between">
                <img className="h-[6vh] aspect-ratio-1 drop-shadow-sm " src="/images/Seal_of_Punjab.gif" />

            <div className="md:visible invisible">
                <ul className=" flex md:flex-row flex-col gap-6 items-center">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/jobs"><li>Jobs</li></Link>
                    <Link href="/recruiters"><li>Recruiters</li></Link>
                    <Link href="/companies"><li>Companies</li></Link>
                    <Link href="/login"><li><button className="border p-2 px-4 bg-black text-white rounded-full ">Login</button></li></Link>
                    <Link href="/register"><li><button className="p-2 px-4 border border-black rounded-full hover:bg-gray-600/10 ">Register</button></li></Link>
                    <li className="font-bold">|</li>
                    <Link href="/hire"><li>Want to Hire?</li></Link>

                </ul>
            </div>
            
            </div>
            <div className="absolute right-6 visible md:invisible ">
            <RxHamburgerMenu className="h-[3vh] w-[3vh]" onClick={() => setShowMenu(!showMenu)} />
            </div>
            <div className={`w-full visible md:invisible h-[100vh] z-10 transition-all bg-black absolute top-0 ${showMenu ? "right-0" : "right-[100vh]"}`}>
                <IoCloseOutline className="h-[5vh] w-[5vh] text-white absolute right-12 top-8" onClick={() => setShowMenu(!showMenu)}/>

                <div className="w-full h-full grid place-items-center text-center text-2xl">
                <ul className=" text-white flex flex-col gap-6">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/jobs"><li>Jobs</li></Link>
                    <Link href="/recruiters"><li>Recruiters</li></Link>
                    <Link href="/companies"><li>Companies</li></Link>
                    <Link href="/login"><li ><button >Login</button></li></Link>
                    <Link href="/register"><li><button>Register</button></li></Link>
                    <Link href="/hire"><li>Want to Hire?</li></Link>

                </ul>
                </div>
            </div>

        </div>
    )
}