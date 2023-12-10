'use client'
import React, { useState } from "react";
import { set } from "react-hook-form";
import OtpInput from "react-otp-input";

export default function otp() {

    const [otp, setOtp] = useState("");


    // function OTPVerify() {
    //     confirmationResult
    //       .confirm(otp)
    //       .then(async (result) => {
    //         // User signed in successfully.
    //         const user = result.user;
    //         console.log(user, "Otp verified");
    //         // ...
    //       })
    //       .catch((error) => {
    //         // User couldn't sign in (bad verification code?)
    //         // ...
    //       });
    //   }
  return (
    <div className="border w-full h-[100vh] grid place-items-center">
        <div className="w-full grid place-items-center gap-12">
      <OtpInput
        inputStyle=" rounded-xl h-12 !w-14 text-3xl border shadow-lg text-lg visible text-black"
        containerStyle="flex gap-4 "
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputType="number"
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus
        isInputNum

      />
      <button className="border rounded-xl p-4 px-6 shadow-lg" >Verify OTP</button>
      </div>
    </div>
  );
}
