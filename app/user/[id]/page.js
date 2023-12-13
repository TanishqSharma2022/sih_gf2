'use client'

import { useEffect, useState } from "react";

export default function User({params}){


    const [data, setData] = useState("");

    useEffect(() => {
        
      const fetchData = async () => {
        // Fetch data from an API
        const response = await fetch(`http://localhost:5000/api/resource/${params.id}`);
        const result = await response.json();
        setData(result);
      };
  
      fetchData();
    }, []);
console.log(data)


    return(<>
        
        <div className="w-full grid place-items-center p-4">
            Email: {data.email}
            <br/>
            Name: {data.name}
            <br/>
            Mobile: {data.mobile}
            <br/>
            Address: {data.address}
            <br/>
            City: {data.city}
            <br/>
            State: {data.state}
            <br/>
            Country: {data.country}
            <br/>
            Aadhaar: {data.aadhaar}
            <br/>
            skills: {data.skills}
            
            </div>
        </>)
}

