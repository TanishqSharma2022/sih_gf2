'use client'
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function otp() {

    const [otp, setOtp] = useState("");
  return (
    <div className="border">
      {/* <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      /> */}
    </div>
  );
}
