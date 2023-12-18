"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import JobCard from "./JobCard";
import {  useEffect, useState } from "react";
import {PuffLoader} from 'react-spinners'


export default function Job() {
  const [input, setInput] = useState("");
  const [Jobdata, setJobdata] = useState(null);
  const [Jobs, setFilteredJobs] = useState(null);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getJobs() {
      const { data, error } = await supabase.from("job_listings").select("");
      if (error) {
        console.log(error);
      }
      setJobdata(data);
      setFilteredJobs(data);
    }
    getJobs();
  }, []);

  const searchJobs = () => {
    const filteredJobs = Jobdata.filter((job) => {
      return (
        job.job_title.toLowerCase().includes(input.toLowerCase()) ||
        job.location.toLowerCase().includes(input.toLowerCase()) ||
        job.companyname.toLowerCase().includes(input.toLowerCase())
      );
    });
    setFilteredJobs(filteredJobs);
  };

  

  return (
    <>
      <div className="mt-6 p-2 md:p-12 flex flex-col gap-4">
        <div className="flex w-full md:flex-row flex-col gap-6 justify-between items-center py-4">
          <h1 className="font-bold text-2xl">
            Total Job Count: {Jobs && Jobs.length}
          </h1>
          <div className="flex gap-4">
            <input
              className="border rounded-xl px-4 py-2 shadow-md"
              type="text"
              placeholder="Jobs/Location/Company..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="border rounded-xl bg-[#294dff] text-white px-4 py-2 shadow-sm hover:shadow-lg border-blue-200 hover:border-blue-600"
              onClick={searchJobs}
            >
              Search
            </button>
          </div>
        </div>

            {!Jobs && 
            <div className="w-full h-[80vh] flex items-center justify-center">
                <PuffLoader color="#38BDF8"  />    
            </div>
            }

            {Jobs != null && Jobs.length === 0 &&

        <>
            <div className="w-full h-[60vh] flex items-center justify-center">
                <h1 className="text-2xl font-bold text-center">No Jobs Found</h1>
            </div>
        </>
    
  }


          {Jobs &&
            Jobs.map((job) => {
              return (
                <div key={job.id}>
                  <JobCard key={job.id} job={job} />
                </div>
              );
            })}

      </div>
    </>
  );
}
