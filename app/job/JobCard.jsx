export default function JobCard({job}){

    return(<>
        <div className=" cursor-pointer p-6 w-full shadow-lg border rounded-2xl ">
            <div className="flex md:flex-row flex-col gap-8  justify-between  md:items-center">
<div>
            <h1 className="font-bold text-2xl">{job.job_title}</h1>
            <p className="mt-2">{job.job_description}</p>
            </div>
            <button className="text-white bg-[#294dff] px-8 p-2 shadow-lg hover:bg-[#283fb3] rounded-lg cursor-pointer hover:border-black border text-xl">Apply</button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="mt-4"><b>Company:</b> {job.companyname}</h1>
                <h1 className="mt-4"><b>Location:</b> {job.location}</h1>
            </div>
        </div>
    
    </>)

}