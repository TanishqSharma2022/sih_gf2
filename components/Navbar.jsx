"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import supabase from "@/supabase";
import { usePathname, useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import {Fade} from 'react-awesome-reveal'


export default function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    
    const path = usePathname();
  
  
  
  
  
  
  
  
  
  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user || null);

    // Subscribe to changes in authentication state
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      // Cleanup the auth listener when the component unmounts
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/");
    setUser(null);
    setShowMenu(false);
  }

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="h-[10vh]  w-full shadow-xl flex items-center justify-center p-4 font-noto bg-white">

      <div className="w-full md:w-[90%] h-full flex items-center justify-between">
      <Fade>

        <div className="flex items-center gap-4">
          <img
            className="h-[6vh] aspect-ratio-1 drop-shadow-sm "
            src="/images/Seal_of_Punjab.gif"
          />
          <h1 className="font-bold text-lg  text-left ">
            PUNJAB GHAR
            <br /> GHAR ROZGAR
          </h1>
        </div>
        </Fade>

        <Fade>

        <div className="md:visible invisible">
          <ul className=" flex md:flex-row flex-col gap-7 items-center text-lg nav_list">
            <Link href="/">
              <li className={`${path == '/' ? "text-[#294dff]" : ""}`}>Home</li>
            </Link>
            <Link href="/job">
              <li className={`${path == '/job' ? "text-[#294dff]" : ""}`}>Jobs</li>
            </Link>
            <Link href="/recruiters">
              <li className={`${path == '/recruiters' ? "text-[#294dff]" : ""}`}>Recruiters</li>
            </Link>

            {!user && (
              <>
                <Link href="/login">
                  <li>
                    <button className="border p-2 px-6 bg-[#294dff] text-white rounded-full ">
                      Login
                    </button>
                  </li>
                </Link>
                <Link href="/register">
                  <li>
                    <button className="p-2 px-6 border border-[#294dff] text-[#294dff] rounded-full hover:bg-[#2a3982] hover:text-white">
                      Register
                    </button>
                  </li>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link href="/client">
                  <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1702539950~exp=1702540550~hmac=10d27a26116d79bf30cfe8e08e5e5ef279d26344aa4b48a5caf65cb6a635b36f"
                    className="rounded-full shadow-lg  h-[40px] "
                  />

                </Link>

                <button
                  className="p-2 px-4 border bg-[#294dff] text-white shadow-lg rounded-full hover:bg-[#283fb3]  "
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </>
            )}

            <li className="font-bold hover:text-black ">|</li>

            <Link href="/hire">
              <li>Want to Hire?</li>
            </Link>
          </ul>
        </div>
        </Fade>

      </div>


      <div className="absolute right-6 visible md:invisible flex items-center gap-6">
      {user &&  <Link href="/client">
                  <img
                    src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1702539950~exp=1702540550~hmac=10d27a26116d79bf30cfe8e08e5e5ef279d26344aa4b48a5caf65cb6a635b36f"
                    className="rounded-full shadow-lg  h-[40px] "
                  />
                </Link>}
        <RxHamburgerMenu
          className="h-[3vh] w-[3vh]"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>



      <div
        className={`w-full visible md:invisible h-[100vh] z-10 transition-all bg-white text-black absolute top-0 ${
          showMenu ? "right-0" : "right-[100vh]"
        }`}
      >
       
        <IoCloseOutline
          className="h-[5vh] w-[5vh] text-black absolute right-12 top-8"
          onClick={() => setShowMenu(!showMenu)}
        />

        <div className="border w-full h-full flex flex-col text-2xl">
          <ul className="flex flex-col justify-left gap-6 font-bold tracking-loose h-[100vh] mt-[100px] p-12 ">
            <Link href="/" onClick={() => setShowMenu(false)}>
              <li className="flex gap-6 items-center">
                <IoHomeOutline />
                Home
              </li>
            </Link>
            <Link href="/job" onClick={() => setShowMenu(false)}>
              <li className="flex gap-6 items-center">
                <MdComputer />
                Jobs
              </li>
            </Link>
            <Link href="/recruiters" onClick={() => setShowMenu(false)}>
              <li className="flex gap-6 items-center">
                <MdWorkOutline />
                Companies
              </li>
            </Link>

            {!user && (
              <>
                <Link href="/login" onClick={() => setShowMenu(false)}>
                  <li className="flex gap-6 items-center">
                    <CiLogin />
                    <button>
                        Login
                    </button>
                  </li>
                </Link>
                <Link href="/register" onClick={() => setShowMenu(false)}>
                  <li className="flex gap-6 items-center">
                    <IoMdLogIn />
                    <button>
                        Register
                    </button>
                  </li>
                </Link>
              </>
            )}
            {user && (
              <>
                <button
                  onClick={() => logout()}
                  className="flex items-center gap-6"
                >
                  <CiLogout />
                  Log Out
                </button>
              </>
            )}
            <Link href="/hire" onClick={() => setShowMenu(false)}>
              <li className="flex gap-6 items-center">
                <FaChalkboardTeacher />
                Want to Hire?
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
