// "use client";

import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useEffect, useState } from "react";
import {cookies} from 'next/headers'
import Profile from "./Profile";
import { createClient } from '@/utils/supabase/client'
// import supabase from "@/supabase";

export default async function Page() {

  const supabase = createClientComponentClient()
    const { data: sih, error } = await supabase.from("sih").select()
    const session = supabase.auth.getSession()
    
  return session  ? (
    <>
    {/* <pre>{JSON.stringify(sih, null, 2)}</pre> */}
    <div className="w-full p-4 bg-gray-100 h-[150vh] flex md:p-6 justify-center">
          {sih && <Profile data={sih[0]} />}
    </div>
    </>
  ) : (<>
    <div className="w-full bg-black/10 h-[100vh] flex md:p-12 justify-center">
  No data found
  </div>
  </>)
}
