"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
    import supabase from "@/supabase";
import { useRouter } from "next/navigation";

export default function Navbar () {
const router = useRouter();
    const [user, setUser] = useState(null);
    useEffect(() => {
      const session = supabase.auth.getSession();
      setUser(session?.user || null);
  
      // Subscribe to changes in authentication state
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        setUser(session?.user || null);
      });
  
      return () => {
        // Cleanup the auth listener when the component unmounts
        authListener.subscription.unsubscribe();
      };
    }, []);

    // console.log(user)

async function logout(){
    await supabase.auth.signOut();
    router.push('/')
    setUser(null);
}


    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <div className="h-[10vh]  w-full shadow-lg flex items-center justify-center p-4">
            <div className="w-full md:w-[80%] h-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                <img className="h-[6vh] aspect-ratio-1 drop-shadow-sm " src="/images/Seal_of_Punjab.gif" />
<h1 className="font-bold text-lg  text-left">                PUNJAB GHAR<br /> GHAR ROZGAR</h1>
</div>
            <div className="md:visible invisible">
                <ul className=" flex md:flex-row flex-col gap-6 items-center">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/job"><li>Jobs</li></Link>
                    <Link href="/recruiters"><li>Recruiters</li></Link>
                    <Link href="/companies"><li>Companies</li></Link>
                    {!user && <>
                        <Link href="/login"><li><button className="border p-2 px-4 bg-black text-white rounded-full ">Login</button></li></Link>
                    <Link href="/register"><li><button className="p-2 px-4 border border-black rounded-full hover:bg-gray-600/10 ">Register</button></li></Link>
                    </>
                    }
                    {user && <>
              <Link href="/client">
                <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1702539950~exp=1702540550~hmac=10d27a26116d79bf30cfe8e08e5e5ef279d26344aa4b48a5caf65cb6a635b36f"
              className="rounded-full shadow-lg  h-[40px] "
            />
            </Link>          
                    <button className="p-2 px-4 border border-black rounded-full hover:bg-gray-600/10 " onClick={() => logout()}>Log Out</button>
             
                    </>}
                   
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
                    <Link href="/job"><li>Jobs</li></Link>
                    <Link href="/recruiters"><li>Recruiters</li></Link>
                    <Link href="/companies"><li>Companies</li></Link>
                    {!user && <>
                    <Link href="/login"><li ><button >Login</button></li></Link>
                    <Link href="/register"><li><button>Register</button></li></Link>
                    </>
                    }
                    {user && <><button onClick={() => logout()}>Log Out</button></>}
                    <Link href="/hire"><li>Want to Hire?</li></Link>

                </ul>
                </div>
            </div>

        </div>
    )
}