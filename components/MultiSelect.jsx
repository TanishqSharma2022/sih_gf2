"use client";
import { Controller, useFormContext } from "react-hook-form";
import { findInputError } from "../utils/findInputError";
import { isFormValid } from "../utils/isFormValid";
import { motion, AnimatePresence } from "framer-motion";
import { MdError } from "react-icons/md";
import Select from "react-select";
import { useId, useState } from "react";

export const MultiSelectInput = ({ name, label, id }) => {
  const options = [
    { value: "IT", label: "IT" },
    { value: "Cosmetology", label: "Cosmetology" },
    { value: "Electrician", label: "Electrician" },
    { value: "Household", label: "Household" },
    { value: "Driver", label: "Driver" },
    { value: "Programming", label: "Programming" },
    { value: "Chef", label: "Chef" },
    { value: "Hardware", label: "Hardware" },
    { value: "Carpenting", label: "Carpenting" },
    { value: "Accountant", label: "Accountant" },
    { value: "Mechanic", label:"Mechanic"},
    { value: "China", label: "China" },
  ];
  // const [selectedOption, setSelectedOption] = useState([])

  // const handleChange = (selectedOption) => {
  //     setSelectedOption(selectedOption)
  //     console.log(`Option selected:`, selectedOption)
  // }

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, label);
  const isInvalid = isFormValid(inputError);

  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="py-4 text-md font-semibold capitalize ">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <Controller
        name="keywords"
        control={control}
        key={id}
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              options={options}
              isMulti
              id={id}
              key={id}
              value={options.find((c) => c.value === value)}
              onChange={(val) => onChange(val.map((c) => c.value))}
            ></Select>
          );
        }}
      />
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center text-sm gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
