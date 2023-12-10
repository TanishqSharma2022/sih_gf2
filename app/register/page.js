"use client"

import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { SelectInput } from "@/components/Select";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Select from "react-select";
import { MultiSelectInput } from "@/components/MultiSelect";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register(){

    const router = useRouter();

    const gender_options = [
        {
            value: 'Male'
        },
        {
            value: 'Female'
        },
        {
            value: 'Others'
        },
        
    ]
    const education_options = [
        {
            value: 'M. Tech'
        },
        {
            value: 'M. Sc.'
        },
        {
            value: 'Not Applicable'
        },
        
    ]
    const job_location_options = [
        {value: 'Delhi'},
        {value: 'Mumbai'},
        {value: 'Bangalore'},
        {value: 'Chennai'},
        {value: 'Kolkata'},
        {value: 'Hyderabad'},
        {value: 'Pune'},
        {value: 'Ahmedabad'},
    ]

const methods =useForm();
const onSubmit = methods.handleSubmit(async(data) => {
    try{
        await axios.post("http://127.0.0.1:5000/add_user", JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (response) {
            console.log(response);
            toast.success("User added successfully")
            router.push("/otpauthentication")

          })
          .catch(function (error) {
            console.log(error);
            toast.error(error.response.data.error)
          });

    }catch(err){
        console.log(err)
        toast.error(err.response.data.error)

    }

});




    return(
            <>
                <div className="w-full grid place-items-center p-4">
                    <div className="w-full md:w-[50%] border rounded-xl shadow-xl  p-6 md:p-12">
                        <h1 className="font-semibold  text-xl">Register here and grow your career</h1>    
                        <div >
                            <FormProvider {...methods}>
                            <form className="py-12 flex flex-col" onSubmit={e => e.preventDefault()} noValidate>
                            
<div>
        <Input
            label="name"
            type="text"
            id="name"
            name="name"
            placeholder="What is your full name?"
            validation={{required: {value: true, message: 'Name is required'}}}
          />
          <Input
            label="password"
            type="password"
            name="password"
            id="password"
            placeholder="Create a new password here."
            validation={{
                required: {
                    value: true, 
                    message: 'Password is required'}
                , 
                minLength: {
                    value: 8, 
                    message: 'Password must be at least 8 characters long'
                }}}
          />
          <Input
            label="email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email-address here."
            validation={{required: {value: true, message: 'Email is required'}}}

          />
          <Input
            label="mobile"
            type="mobile"
            name="mobile"
            id="mobile"
            placeholder="Enter your email-address here."
            validation={{required: {value: true, message: 'Email is required'}}}

          />


          <Input
            label="username"
            type="username"
            name="username"
            id="username"
            placeholder="Add a unique username."
            validation={{required: {value: true, message: 'Username is required'}}}

          />
          {/* <Input
            label="date of birth"
            type="date"
            name="dob"
            id="dob"
            placeholder="Enter your date of birth."
            validation={{required: {value: true, message: 'Date of Birth is required'}}}
          />

          <SelectInput
          label="gender"
          id="gender"
          placeholder=""
          options={gender_options}
          />

        <Input

            label="Current Address"
            type="text"
            name="current_address"
            id="caddress"
            placeholder="What is your current address?"
            validation={{required: {value: true, message: 'Fill your Current Address'}}}
          />
          <Input

            label="Permanent Address"
            type="text"
            name="permanent_address"
            id="paddress"
            placeholder="What is your permanent address?"
            validation={{required: {value: true, message: 'Fill your Permanent Address'}}}
          />
          <Checkbox
            label="Do you have any disability?"
            type="checkbox"
            name="disable"
            id="disable"
            placeholder=""
            validation={{}}
          />
          <Input
            label="Aadhaar Number"
            type="number"
            name="aadhaar_no"
            id="aadhaar"
            placeholder="Enter your Aadhaar number."
            validation={{required: {value: true, message: 'Enter your Aadhaar Number'}}}
          />

          <MultiSelectInput
          name="skills"
          label="Select your skills"
            className="w-full  p-4 rounded-xl"
            id="skills"
            
          />

        <SelectInput
            name="education"
          label="education"
          id="education"
          placeholder=""
          options={education_options}
          />

        <SelectInput
            name="job_location"
          label="preferred job locatioon"
          id="job_location"
          placeholder=""
          options={job_location_options}
          />
        
         */}
        
        </div>


          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white font-semibold p-4 rounded-xl mt-8 cursor-pointer"
          >
            Register
          </button>






                            
                        </form>
                        </FormProvider>
                        </div>
                    </div>                    
                </div>
            </>
    )
}
