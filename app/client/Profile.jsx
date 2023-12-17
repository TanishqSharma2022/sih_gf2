import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const Profile = ({ data }) => {

    const cleanedArray = data?.skills
    .replace(/[\[\]']+/g, '') // Remove square brackets
    .split(', ') // Split into an array
    .map((element) => element.replace(/"/g, '')); 


    return(
        <>{data && 
         <div className="w-full bg-gray-400/10 grid place-items-center md:p-4 border">
            <div className="md:w-[50%] w-full border flex flex-col items-center bg-white">
        <div className="  md:flex-row  md:p-12 p-6 grid gap-6 ">
          <div className="profile w-full items-center justify-center md:py-0 py-4 flex ">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1702539950~exp=1702540550~hmac=10d27a26116d79bf30cfe8e08e5e5ef279d26344aa4b48a5caf65cb6a635b36f"
              className="rounded-full shadow-lg  h-[110px] "
            />
          </div>
          <div className="flex flex-col p-6">
            <h1 className="font-semibold text-2xl text-center">{data.name}</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MdOutlineEmail /> {data.email}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BsTelephone />
                {data.mobile}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <SlLocationPin />
                {data.state}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <SlLocationPin />
                {data.address}
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6">
            <h1 className="font-semibold text-xl">Skills</h1>
            <div className="mt-4 flex gap-3">
            {data.skills  && 
              cleanedArray.map((skill) => {
                return (
                  <div
                    className="p-2 text-md  border rounded-[40px]"
                    key={skill}
                  >
                    {skill}
                  </div>
                );
              })}
          </div>
        </div>
        </div>
        </div>
        <div className=" mt-6 md:w-[50%] rounded-2xl shadow-lg p-12 flex bg-white flex-col">

        </div>
      </div>
        }
        
        </>
    )
}

export default Profile;