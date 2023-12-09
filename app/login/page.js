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

  
   

const methods =useForm();
const onSubmit = methods.handleSubmit(data => {
    console.log(data)
});




    return(
            <>
                <div className="w-full grid place-items-center p-4">
                    <div className="w-full md:w-[50%] border rounded-xl shadow-xl  p-6 md:p-12">
                        <h1 className="font-semibold  text-xl">Login here and find your passion.</h1>    
                        <div >
                            <FormProvider {...methods}>
                            <form className="py-6 flex flex-col" onSubmit={e => e.preventDefault()} noValidate>
                            
<div>
        
        <Input
            label="email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email-address here."
            validation={{required: {value: true, message: 'Email is required'}}}

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
                    message: 'Password is required'}
                , 
                minLength: {
                    value: 8, 
                    message: 'Password must be at least 8 characters long'
                }}}
          />
          
          
        
        </div>


          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white font-semibold p-4 rounded-xl mt-8 cursor-pointer"
          >
            Login
          </button>






                            
                        </form>
                        </FormProvider>
                        </div>
                    </div>                    
                </div>
            </>
    )
}
