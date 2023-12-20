"use client";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { SelectInput } from "@/components/Select";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Select from "react-select";
import { MultiSelectInput } from "@/components/MultiSelect";
import { useRouter } from "next/navigation";
import { create } from '@mui/material/styles/createTransitions';
import toast from 'react-hot-toast';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import supabase from "@/supabase";



const Login = () => {
  const router = useRouter();

  const methods = useForm();
  const [captchaToken, setCaptchaToken] = useState();
  const captcha = useRef();


  // const [user, setUser] = useState(null)
  //   const [loading, setLoading] = useState(true)
const supabase = createClientComponentClient()  
// useEffect(() =>  {
//   async function getUser(){
//     const {data: {user}} = await supabase.auth.getUser()
//     setUser(user)
//     setLoading(false)
//   }

//   getUser()
// }, [])

// console.log(user, loading)

  const onSubmit = methods.handleSubmit(async (data) => {
    // console.log(data);÷

    try {

// supabase logic 
      const email = data.email;
      const password = data.password;
      if (!captchaToken) {
        toast.error("Please complete the captcha verification.");
        return;
      }


      const res  = await supabase.auth.signInWithPassword({
        email,
        password,
        options: { captchaToken: captchaToken, },
      })
      if (response.error) {
        throw new Error(response.error.message);
      }
      const {user} = await supabase.auth.getUser()
      // const { data: sih, error } = await supabase.

      router.refresh()
      console.log(res)

      router.push(`/client/${res.data.user.id}}`)

      

      // const response = await axios.post("https://sih-flask.vercel.app/login", {
      //   email: data.email,
      //   password: data.password,
      // });

      // if (response.status === 200) {
      //   console.log("LOGIN SUCCESSFUL...");
      //   const id = await axios.get("https://sih-flask.vercel.app/get_user");
      //   router.push(`/user/dashboard/${response.data.id}`);
      //   console.log(response.data.id)

        // Do something after successful login
      // }
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      toast.error("Wrong email or password")
    }
  });

  // if(loading){
  //   console.log("Loading")
  //   return(
  //   <>
  //     Loading..
  //   </>)
  // }

  // if(user){
  // }


  return (
    <>
      <div className="w-full grid place-items-center p-4 h-[100vh]  ">
        <div className="w-full md:w-[40%] border rounded-xl shadow-xl p-6 md:p-12 bg-white border-black/20">
          <h1 className="font-semibold text-3xl">
            Log In
          </h1>
          <p className="mt-6 text-gray-400">Dont have an account.    
          <Link className='text-blue-600 underline underline-offset-5' href="/register">Sign Up</Link> </p>
          <div>
            <FormProvider {...methods}>
              <form
                className="py-6 flex flex-col"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <div>
                  <Input
                    label="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email-address here."
                    validation={{
                      required: { value: true, message: "Email is required" },
                    }}
                  />
                  <Input
                    label="password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    validation={{
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    }}
                  />
                  <div className='w-full text-right'>
                  <h1 className='text-[#294dff] hover:underline cursor-pointer'>
                    Forgot your Password?
                  </h1>
                  </div>
                </div>
                <div className="mt-6">
                  <HCaptcha
                    ref={captcha}
                    sitekey="f88ee0ec-b7ab-43c5-a4fa-1a12594d7d21"
                    onVerify={setCaptchaToken}
                  />
                </div>

                <button
                  onClick={onSubmit}
                  className="bg-[#294dff] text-white font-semibold p-4 rounded-xl mt-8 cursor-pointer shadow-lg hover:border-blue-500 hover:bg-blue-600"
                >
                  Log In
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
