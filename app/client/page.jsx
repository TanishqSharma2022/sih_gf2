// "use client";

import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useEffect, useState } from "react";
import {cookies} from 'next/headers'
import Profile from "./Profile";



export default async function Page() {
    const supabase = createServerComponentClient({cookies});
    const session = supabase.auth.getSession();

    const { data: sih, error } = await supabase.from("sih").select()
    
  return session  ? (
    <>
    {/* <pre>{JSON.stringify(sih, null, 2)}</pre> */}
    <div className="w-full bg-black/10 h-[100vh] flex md:p-12 justify-center">
          {sih && <Profile data={sih[0]} />}
    </div>
    </>
  ) : (<>
    <div className="w-full bg-black/10 h-[100vh] flex md:p-12 justify-center">
  No data found
  </div>
  </>)
}
