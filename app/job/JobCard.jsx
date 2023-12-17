export default function JobCard({job}){

    return(<>
        <div className="hover:border-black cursor-pointer p-6 w-full shadow-lg border rounded-2xl">
            <h1 className="font-bold text-2xl">{job.job_title}</h1>
            <p className="mt-2">{job.job_description}</p>
<div className="flex justify-between items-center">
            <h1 className="mt-4"><b>Company:</b> {job.companyname}</h1>
            <h1 className="mt-4"><b>Location:</b> {job.location}</h1>
            </div>
        </div>
    
    </>)

}