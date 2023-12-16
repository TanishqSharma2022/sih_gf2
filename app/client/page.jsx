"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState(null);
  const supabase = createClientComponentClient();
  const [user_details, setUser_details] = useState(null);
  useEffect(() => {
    const getData = async () => {
      //   const { data } = await supabase.auth.getUser()
      const { data } = await supabase.auth.getUser();
      if(data){
      const { data: sih, error } = await supabase.from("sih").select('*').eq("user_id", data.user.id);
      setUser_details(sih);

      if (error) {
        console.error('Error fetching data:', error.message);
        return;
      }
      
    }
      setUser(data);
    };

    getData();
  }, []);

  return user ? (
    <>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    <pre>{JSON.stringify(user_details, null, 2)}</pre>
    </>
  ) : (
    <p>Loading users...</p>
  );
}
