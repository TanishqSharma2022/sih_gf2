import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import JobCard from "./JobCard";

export default async function Job(){
    const supabase = createClientComponentClient();
    const {data, error} = await supabase.from('job_listings').select('')
    if(error){
        console.log(error)
    }
    return(
        <>
        <div className='mt-6 p-2 md:p-12 flex flex-col gap-4'>
            {data && data.map((job) => {
                return(
                    <>
                    {/* <h1>{job.job_title}</h1> */}
                    <JobCard key={job} job={job} />
                    </>
                )
            })}
        </div>
        </>
    )
}