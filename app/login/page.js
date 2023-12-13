"use client";

import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { SelectInput } from "@/components/Select";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Select from "react-select";
import { MultiSelectInput } from "@/components/MultiSelect";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const methods = useForm();
  const onSubmit = methods.handleSubmit(async (data) => {
    console.log(data);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        console.log("LOGIN SUCCESSFUL...");
        const id = await axios.get("http://localhost:5000/get_user");
        router.push(`/user/dashboard/${data.id}`);

        // Do something after successful login
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
    }
  });

  return (
    <>
      <div className="w-full grid place-items-center p-4">
        <div className="w-full md:w-[50%] border rounded-xl shadow-xl  p-6 md:p-12">
          <h1 className="font-semibold  text-xl">
            Login here and find your passion.
          </h1>
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
  );
};

export default Login;
