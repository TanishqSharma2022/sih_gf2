export default function Register(){
    return(
            <>
                <div className="w-full grid place-items-center p-4">
                    <div className="w-[50%] border rounded-xl shadow-xl h-[100vh] p-12">
                        <h1 className="font-semibold  text-xl">Register here and grow your career</h1>    
                        <div >
                            <form className="py-12 flex flex-col">
                            <label className="py-4 text-md font-semibold ">Full Name</label>
                            <input type="text" placeholder="What is your full name?" className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Email-ID</label>
                            <input type="email" placeholder="Enter your email id here." className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Password</label>
                            <input type="password" placeholder="Create a new password for your account" className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Mobile Number</label>
                            <input type="number" placeholder="Enter your Mobile No." className="border p-4 rounded-xl "  />

                            <input type="submit" value="Register" className="bg-blue-500 text-white font-semibold p-4 rounded-xl mt-8 cursor-pointer" /> 
                        </form>
                        </div>
                    </div>                    
                </div>
            </>
    )
}
