"use client";

import { useEffect, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

export default function User({ params }) {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from an API
      const response = await fetch(
        `https://sih-flask.vercel.app/api/resource/${params.id}`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full bg-gray-400/20 grid place-items-center p-4 border">
        <div className="md:w-[50%] rounded-2xl shadow-lg p-12 flex bg-white">
          <div className="profile w-[30%]">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1702539950~exp=1702540550~hmac=10d27a26116d79bf30cfe8e08e5e5ef279d26344aa4b48a5caf65cb6a635b36f"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="flex flex-col p-6">
            <h1 className="font-semibold text-xl">{data.name}</h1>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
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
        </div>

        <div className=" mt-6 md:w-[50%] rounded-2xl shadow-lg p-12 flex bg-white flex-col">
          <h1 className="text-xl font-semibold">Skills:</h1>
          <div className="mt-4 flex gap-3">
            {data.skills &&
              data.skills.split(",").map((skill) => {
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


        <div className=" mt-6 md:w-[50%] rounded-2xl shadow-lg p-12 flex bg-white flex-col">

        </div>
      </div>
    </>
  );
}
