import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Profile = ({ data }) => {

    const cleanedArray = data?.skills
    .replace(/[\[\]']+/g, '') // Remove square brackets
    .split(', ') // Split into an array
    .map((element) => element.replace(/"/g, '')); 


    return(
        <div className=" ">
          {data && 
         <div className="w-full flex flex-col items-center gap-6 md:p-4   ">
          <div className="md:w-[90%]  w-full  bg-white rounded-[40px] ">
            <div className="  md:flex-row  md:p-12 p-6 grid gap-6   ">
              <div className="profile  w-full gap-12 justify-start md:py-0 py-4 flex flex-col md:flex-row rounded-[40px] ">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1702539950~exp=1702540550~hmac=10d27a26116d79bf30cfe8e08e5e5ef279d26344aa4b48a5caf65cb6a635b36f"
                  className="rounded-[20px] shadow-lg w-[110px] md:h-[150px] md:w-[150px] "
                />
                <div className="flex flex-col  ">
                <h1 className="font-semibold text-4xl text-[#294dff]">{data.name}</h1>
                <div className="mt-4 flex gap-3">
                {data.skills  && 
                  cleanedArray.map((skill) => {
                    return (
                      <div
                        className="p-1 px-4 text-sm  border rounded-[40px] text-[#294dff] border-[#294dff]"
                        key={skill}
                      >
                        {skill}
                      </div>
                    );
                  })}
              </div>
                <div className="mt-4 grid grid-cols-1 md:flex gap-4">
                  <div className="flex items-center gap-2   text-sm">
                    <MdOutlineEmail color="#294dff" /> {data.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsTelephone  color="#294dff" />
                    {data.mobile}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <SlLocationPin  color="#294dff" />
                    {data.state}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <SlLocationPin  color="#294dff" />
                    {data.address}
                  </div>
                </div>
              </div>
              </div>
              
            
            </div>
        </div>
        <div className="md:w-[90%]  w-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="  md:flex-row  md:p-12 p-6 bg-white  rounded-[40px]">
        <h1 className="font-semibold text-3xl text-[#294dff]">Skills</h1>
        <div className="mt-4 flex gap-3">
                {data.skills  && 
                  cleanedArray.map((skill) => {
                    return (
                      <div
                        className=" mt-4 p-2 px-5 text-lg  border rounded-[40px] text-[#294dff] border-[#294dff]"
                        key={skill}
                      >
                        {skill}
                      </div>
                    );
                  })}
              </div>
          </div>
          <div className="  md:flex-row  md:p-12 p-6 bg-white  rounded-[40px]">
          <h1 className="font-semibold text-2xl text-[#294dff]">My Resume</h1>
                  <input type="file" className="bg-[#294dff] text-white p-4 w-[80%] rounded-[20px] placeholder:text-white text-center mt-6 cursor-pointer" placeholder="Upload your Resume" />
          </div>
          </div>

   
      </div>
        }
        
        </div>
    )
}

export default Profile;