'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import JobCard from "../job/JobCard";

export default  function Search(){

    const [response, setResponse] = useState(null)
    const searchParams = useSearchParams();
    const search = searchParams.get("search_words");

    useEffect(()=>{
    async function fetchData(){
        try {
        const url = 'https://sih-flask.vercel.app/api/job_recommend';
        const data = {
          search_words: search
        };
    
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const jsonResponse = await response.json();
        setResponse(jsonResponse);

      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData()
    }, [response])


      return(
        <>
        <div className="min-h-screen p-12 flex flex-col gap-6">
        {response && response.map((job) => (

            <JobCard key={job.title} job={job} />
                
        ))}
        {response && response.length == 0 && <h1 className="text-4xl font-bold">No Jobs Found regarding <span className="text-[#295dff]">{search} </span>...</h1>}
        </div>
        </>
      )
}