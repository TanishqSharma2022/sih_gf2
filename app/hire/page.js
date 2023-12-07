export default function hire(){
    return(
        <div className="md:p-12 w-full p-6 h-[90vh] border-black flex bg-[url('https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover items-center justify-center flex-col gap-12  md:py-12">
            <div className=" flex items-center justify-center flex-col  gap-6 z-0">
                <a className="text-xl drop-shadow-lg text-center italic">We are keen to help you evolve your recruitment process..</a>
                <h1 className="text-4xl drop-shadow-lg font-bold">Contact Us</h1>
                
            </div>
            <div className="flex flex-col md:grid w-full md:grid-cols-2 md:w-[50%] gap-6">
                <input placeholder="Name" className=" shadow-lg p-4 border rounded-xl Name"></input>
                <input placeholder="Email" className=" shadow-lg p-4 border rounded-xl Email"></input>
                <input placeholder="Mobile No." className=" shadow-lg p-4 border rounded-xl Mobile no."></input>
                <input placeholder="Designation" className=" shadow-lg p-4 border rounded-xl Designation"></input>
                <input placeholder="Organization Type" className=" shadow-lg p-4 border rounded-xl Organization Type"></input>
                <input placeholder="Company Name" className=" shadow-lg p-4 border rounded-xl Company Name"></input>
                <input placeholder="No. Of Employees" className=" shadow-lg p-4 border rounded-xl No. of Employees"></input>
                <input placeholder="Company Location" className=" shadow-lg p-4 border rounded-xl Company Location"></input>
            <button className="col-span-2 shadow-lg p-4 bg-blue-500 rounded-full text-white text-xl ">Submit</button>



            </div> 
        </div>
    )
}