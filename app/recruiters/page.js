'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Recruiters(){

    const supabase = createClientComponentClient();
    const [company, setCompany] = useState([]);
    useEffect(() => {
      async function getJobs() {
        const { data, error } = await supabase.from("job_listings").select("companyname, company_description", {distinct: true});
        if (error) {
          console.log(error);
        }
        setCompany(data);
        console.log(data)
      }
      getJobs();
    }, []);




    return(
        <>
        <div className='h-[100vh] p-12'>
            <h1>Recruiters</h1>
        </div>
        </>
    )
}