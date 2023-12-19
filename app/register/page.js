"use client";
import * as React from "react";
import PropTypes from "prop-types";
import { Input as BaseInput, inputClasses } from "@mui/base/Input";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { auth } from "../firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import OTPInput from "react-otp-input";
import Link from "next/link";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  OutlinedInput,
  FormGroup,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, styled } from "@mui/system";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import supabase from "@/supabase";

const Input = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <BaseInput
      slots={{
        root: InputRoot,
        input: InputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

Input.propTypes = {
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
  }),
};

function getSteps() {
  return [
    "Basic information",
    // "Contact Information",
    "Personal Information",
  ];
}

const BasicForm = () => {
  const { control } = useFormContext();
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  // const handleChange = (prop) => (event) => {

  //   const newPass = event.target.value;
  //   // console.log(newPass);

  //   if (newPass.length >= 8) {
  //     setValues({ ...values, [prop]: event.target.value });
  //   } else {
  //     toast.error("Password must be at least 8 characters long");
  //   }
  // }

  

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const [num, setNum] = useState()
  
  const handleChange = (e) => {
    // const regex = /^[0-9/b]+$/;
    const regex = /^[0-9]{10}$/


    if (e.target.value < 9999999999 ) {
      setValue(e.target.value);
      console.log(e.target.value)
    }
  };
  const [value, setValue] = React.useState('');
  // const handleChange = (e) => setValue(e.target.value);


  return (
    <>
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <TextField
            required
            id="full-name"
            label="Full Name"
            variant="outlined"
            placeholder="Enter Your Full Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
{/* 
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            required
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email."
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextField
          required
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          placeholder="Create a new password here."
          fullWidth
          margin="normal"
          inputProps={{
            minLength: 8,
          }}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment>
          //       <IconButton
          //         size="small"
          //         aria-label="toggle password visibility"
          //         onClick={handleClickShowPassword}
          //         onMouseDown={handleMouseDownPassword}
          //       >
          //         {values.showPassword ? (
          //           <VisibilityOff fontSize="small" />
          //         ) : (
          //           <Visibility fontSize="small" />
          //         )}
          //       </IconButton>
          //     </InputAdornment>
          //   )
          // }}
          {...field}
          />
        )}
      /> */}

      <Controller
        control={control}
        name="mobile"
        rules={{ validate: value => /^[0-9]{10}$/.test(value) || 'Invalid mobile number' }}

        render={({ field }) => (
          <TextField
            required
            type="number"
            id="mobile"
            label="Mobile Number"
            variant="outlined"
            placeholder="Enter your mobile number here."
            fullWidth
            margin="normal"
            // inputProps={{
            //   maxLength: 10,
            //   // max:9999999999,
            //   // min: 999999999

            // }}
            inputProps={{
              name: 'inputProps',
              type: 'number',
              placeholder: 'placeholder',
              value,
              onChange: handleChange,
            }}

            value={field.value}
            {...field}
            onChange={field.onChange}
            onBlur={field.onBlur}

          />
        )}

      />
    </>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PersonalForm = () => {
  const names = ["Technology", "Household", "IT", "Programming", "Cosmetology", "Electrician", "Accountant", "Carpenting", "Mechanic"];

  const [gender, setGender] = useState({ gender: "" });
  const [education, setEducation] = useState({ education: "" });
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleEducation = (event) => {
    setEducation(event.target.value);
  };

  const [personName, setPersonName] = React.useState([""]);

  const multihandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="gender"
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
              {...field}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="state"
        render={({ field }) => (
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter Your State Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="dob"
        render={({ field }) => (
          <Input
            label="date of birth"
            type="date"
            name="dob"
            id="dob"
            placeholder="Enter your date of birth."
            validation={{
              required: { value: true, message: "Date of Birth is required" },
            }}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="disable"
        render={({ field }) => (
          // <Checkbox
          //   label="Do you have any disability?"
          //   type="checkbox"
          //   name="disable"
          //   id="disable"

          //   {...field}
          // />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Do you have any disability?"
            />
          </FormGroup>
        )}
      />
      <Controller
        control={control}
        name="aadhaar"
        render={({ field }) => (
          <TextField
            type="number"
            id="aadhaar"
            label="Aadhaar Number"
            variant="outlined"
            placeholder="Enter Your Aadhaar Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="skills"
        render={({ field }) => (
          <FormControl className="w-full mt-4">
            <InputLabel id="demo-multiple-name-label">Skills</InputLabel>
            <Select
              className="w-full"
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={personName}
              onChange={multihandleChange}
              input={<OutlinedInput label="Skills" />}
              MenuProps={MenuProps}
              {...field}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
     
      <Controller
        control={control}
        name="education"
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Education</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={education}
              label="Education"
              onChange={handleEducation}
              {...field}
            >
              <MenuItem value={"M. Tech"}>M. Tech</MenuItem>
              <MenuItem value={"B. Tech"}>B. Tech</MenuItem>
              <MenuItem value={"B. C. A"}>B. C. A</MenuItem>
              <MenuItem value={"M. C. A"}>M. C. A</MenuItem>
              <MenuItem value={"B. Sc."}>B. Sc.</MenuItem>
              <MenuItem value={"M. Sc."}>M. Sc.</MenuItem>
              <MenuItem value={"Not Applicable"}>Not Applicable</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="pj_location"
        render={({ field }) => (
          <TextField
            id="pj_location"
            label="Preferred Job Location"
            variant="outlined"
            placeholder="Enter Your Preferred Job Locatioon"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <PersonalForm />;

    default:
      return "unknown step";
  }
}

export default function Register() {
  const [id, setId] = useState("")

  // const [showOtp, setShowOtp] = useState(false);
  // const [otp, setOtp] = useState("");
  // OTP VERIFICATION FIREBASE
  //   function onCaptcha() {
  //     if (!window.recaptchaVerifier) {
  //       window.recaptchaVerifier = new RecaptchaVerifier(
  //         auth,
  //         "recaptcha-container",
  //         {
  //           size: "invisible",
  //           callback: (response) => {
  //             onSignup();
  //             // ...
  //           },
  //           "expired-callback": () => {
  //             // Response expired. Ask user to solve reCAPTCHA again.
  //             // ...
  //             onCaptcha()
  //           },
  //         },
  //         auth
  //       );
  //     }
  //   }

  //     function onSignup(){

  //         onCaptcha();
  //         const appVerifier = window.recaptchaVerifier;
  //         const format = '+91'+mobile;
  //         signInWithPhoneNumber(auth, format, appVerifier)
  //           .then((confirmationResult) => {
  //             window.confirmationResult = confirmationResult;
  //             setShowOtp(true);
  //             toast.success("OTP sent successfully");

  //             // ...
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //             toast.error(error)            // ...
  //           });
  //     }

  //     function OTPVerify() {
  //         window.confirmationResult.confirm(otp).then(async (result) => {
  //             // User signed in successfully.
  //             const user = result.user;
  //             console.log(user, "Otp verified");
  //             setShowOtp(false);
  //             // ...
  //           })
  //           .catch((error) => {
  //             toast.error("Invalid OTP")
  //             console.log(error)
  //           });
  //       }
  //

  // const classes = useStyles();

  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      address: "",
      gender: "",
      state: "",
      mobile: "",
      dob: "",
      disable: false,
      aadhaar: "",
      skills: [""],
      education: "",
      pj_location: "",
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)

  const handleNext = async(data) => {

    




    if (activeStep == steps.length - 1) {
      setLoading(true)
      //  SUPABASE LOGIC 
      const email = data.email;
      const password = data.password;
      const name = data.fullName;
      const mobile = data.mobile;
      const state = data.state;
      const address = data.address;
      const aadhaar = data.aadhaar;
      const dob = data.dob;
      const skills = data.skills;
      const pj_location = data.pj_location;
      const gender = data.gender
      const disable = data.disable
      const education = data.education

      try{
        // await supabase.auth.signUp({email,
        //   password,
        //   options: {
        //     emailRedirectTo: `${location.origin}/auth/callback`,
        //     data:{
        //       name: name,
        //       mobile: mobile,
        //       state: state,
        //       address: address,
        //       aadhaar: aadhaar,
        //       dob: dob,
        //       skills: skills,
              
        //     }
        //   }
          
        // })

      
        const data = supabase.auth.getUser().then((data) => {setId(data.data.user.id)}) 


       console.log(data)
        const {error} = await supabase.from('sih').insert([{"user_id": id, "name": name , "email" : "" , "mobile" : "" , "aadhaar" : aadhaar , "address" : address , "disable" : disable , "dob" : dob , "education" : education , "pj_location" : pj_location , "skills" : skills , "state" : state , "gender" : gender}]).select()

        if(error){
          throw error
          console.log(error)
        }
        router.refresh()
        }catch(e){
          console.log(e)
        }finally{
          setLoading(false)
          
        }


  








    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  // const onSubmit = methods.handleSubmit(async (data) => {
    // try{
    //     await axios.post("http://127.0.0.1:5000/add_user", JSON.stringify(data), {
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       }).then(function (response) {
    //         console.log(response);
    //         toast.success("User added successfully")
    //         router.push("/otpauthentication")

    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //         toast.error(error.response.data.error)
    //       });

    // }catch(err){
    //     console.log(err)
    //     toast.error(err.response.data.error)
    // }

    // const handleSignUp = async () => {

    // const email = data.email;
    // const password = data.password;
    // try{

    //   await supabase.auth.signUp({email,
    //     password,
    //     options: {
    //       emailRedirectTo: `${location.origin}/auth/callback`,
    //     },
    //   })
    //   router.refresh()
    //   toast.success("User added successfully");
    //   }catch(e){
    //     console.log(e)
    //   }
    //   console.log(data.email, data.password)
    // // }
  // });


  
  return (
    <>
      <div className="w-full grid place-items-center p-4">
        <div className="w-full md:w-[50%] md:min-w-[500px] border rounded-xl shadow-xl  p-6 md:p-12 mt-8">
          <h1 className="font-semibold  text-3xl">
           Sign Up
          </h1>
          <p className="mt-6 text-gray-400">Already have an account.    <Link className='text-blue-700 underline underline-offset-5' href="/login">Log In</Link> </p>
{/*  */}
          <div className="mt-6">
            <Stepper alternativeLabel activeStep={activeStep} >
              {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography
                    
                      variant="caption"
                      align="center"
                      style={{ display: "block" }}
                    >
                      optional
                    </Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step {...stepProps}  key={index}>
                    <StepLabel  {...labelProps}>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {activeStep === steps.length ? (
              <Typography variant="h3" align="center">
                Thank You
              </Typography>
            ) : (
              <>
                <FormProvider {...methods}>
                  <form
                    className=""
                    onSubmit={methods.handleSubmit(handleNext)}
                  >
                    {getStepContent(activeStep)}

                    <Button
                      className="mt-4 font-sans px-4"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      back
                    </Button>
                  
                    <Button
                      className="bg-[#294dff] px-4  font-sans hover:text-white mt-4"
                      variant="contained"
                      color="primary"
                      // onClick={handleNext}
                      type="submit"
                      disabled={loading}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </form>
                </FormProvider>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#294dff",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputRoot = styled("div")(
  ({ theme }) => `
  font-family: ' Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };
  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const InputElement = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`
);

const IconButton = styled(Button)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[700]};
  `
);

const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
