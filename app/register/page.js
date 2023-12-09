"use client"

import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { SelectInput } from "@/components/Select";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Select from "react-select";
import { MultiSelectInput } from "@/components/MultiSelect";

export default function Register(){

    const [name, setName] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")

    const [number, setnumber] = useState("")
    const [dob, setdob] = useState("")
    const [gender, setgender] = useState("")
    const [caddress, setcaddress] = useState("")
    const [paddress, setapddress] = useState("")
    const [disability, setdisability] = useState("")
    const [aadhaar, setaadhaar] = useState("")

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

const methods =useForm();
const onSubmit = methods.handleSubmit(data => {
    console.log(data)
});




    return(
            <>
                <div className="w-full grid place-items-center p-4">
                    <div className="w-full md:w-[50%] border rounded-xl shadow-xl  p-6 md:p-12">
                        <h1 className="font-semibold  text-xl">Register here and grow your career</h1>    
                        <div >
                            <FormProvider {...methods}>
                            <form className="py-12 flex flex-col" onSubmit={e => e.preventDefault()} noValidate>
                            {/* <label className="py-4 text-md font-semibold ">Full Name</label>
                            <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="What is your full name?" className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Email-ID</label>
                            <input value={email} onChange={(event) => setemail(event.target.value)} type="email" placeholder="Enter your email id here." className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Password</label>
                            <input value={password} onChange={(event) => setpassword(event.target.value)} type="password" placeholder="Create a new password for your account" className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Mobile Number</label>
                            <input value={number} onChange={(event) => setnumber(event.target.value)} type="number" placeholder="Enter your Mobile No." className="border p-4 rounded-xl "  />
                            <label className="py-4 text-md font-semibold ">Additional Information</label>
                            <label className="py-4 text-md font-semibold ">Date of Birth</label>
                            <input value={dob} onChange={(event) => setdob(event.target.value)} type="date" placeholder="Enter your Mobile No." className="border p-4 rounded-xl "  /> */}
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
          label="Select your skills"
            className="w-full  p-4 rounded-xl"
            id="skills"
            
          />

        <SelectInput
          label="education"
          id="education"
          placeholder=""
          options={education_options}
          />
        
        
        
        </div>


          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white font-semibold p-4 rounded-xl mt-8 cursor-pointer"
          >
            Submit Form
          </button>






                            
                        </form>
                        </FormProvider>
                        </div>
                    </div>                    
                </div>
            </>
    )
}
