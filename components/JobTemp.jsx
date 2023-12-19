export default function JobTemp({job}){

    return(<>
        <div className="hover:border-black w-[300px] h-[300px] flex justify-around flex-col cursor-pointer p-8 bg-[rgba(48,67,159,0.95)]   text-white  shadow-lg border rounded-2xl ">
            <div>
            <h1 className="font-bold text-2xl drop-shadow-lg">{job.job_title}</h1>
            <p className="mt-2">{job.job_description}</p>
            </div>
            <div className="flex justify-between items-center ">
                <h1 className="mt-6"><b>Company:</b> {job.companyname}<br />
                <b>Location:</b> {job.location}</h1>
            </div>
        </div>
    
    </>)

}