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


  const onSubmit = methods.handleSubmit(async (data) => {
    
  
  

    try {
      if (!captchaToken) {
        toast.error("Please complete the captcha verification.");
        return;
      }

// supabase logic 
      const email = data.email;
      const password = data.password;
      const cpassword = data.cpassword;
     





      if(cpassword !== password){
        return toast.error("Password does not match...")
      }

      const uppercaseRegex = /[A-Z]/;
      const digitRegex = /\d/;
      const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

      if (!uppercaseRegex.test(password)) {
        return toast.error("Password must contain at least one uppercase letter.");
      } else if (!digitRegex.test(password)) {
        return toast.error("Password must contain at least one digit.");
      } else if (!specialCharRegex.test(password)) {
        return toast.error("Password must contain at least one special character.");
      }

      await supabase.auth.signUp({
        email,
        password,
        options:{
            redirectTo: `${location.origin}/auth/callback?email=${email}`,
            captchaToken: captchaToken,
        }
      })
      captcha.current.resetCaptcha()


      router.refresh()

      toast.success("Email sent to your email address. Please verify your email address to continue.");


      router.push(`/register`)

      

      // const response = await axios.post("http://localhost:5000/login", {
      //   email: data.email,
      //   password: data.password,
      // });

      // if (response.status === 200) {
      //   console.log("LOGIN SUCCESSFUL...");
      //   const id = await axios.get("http://localhost:5000/get_user");
      //   router.push(`/user/dashboard/${response.data.id}`);
      //   console.log(response.data.id)

        // Do something after successful login
      // }
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      toast.error("Wrong email or password")
    }
  });
 
  

  return (
    <>
      <div className="w-full grid place-items-center p-4 h-[100vh]  ">
        <div className="w-full md:w-[40%] border rounded-xl shadow-xl p-6 md:p-12 bg-white border-black/20">
          <h1 className="font-semibold text-3xl">
            Sign Up
          </h1>
          <p className="mt-6 text-gray-400">Already have an account.    <Link className='text-blue-600 underline underline-offset-5' href="/register">Log In</Link> </p>
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
                   <Input
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm password"
                    validation={{
                      required: {
                        value: true,
                        message: "Password is required",
                      }

                    }}
                  />
    
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
                  Sign Up
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
