"use client"
import { useFormContext } from "react-hook-form"
import { findInputError } from "../utils/findInputError"
import { isFormValid } from "../utils/isFormValid"
import { motion, AnimatePresence } from "framer-motion"
import { MdError } from "react-icons/md"
import { useId } from "react"

export const SelectInput = ({ name, label, id, placeholder, options }) => {
    const {
        register,
        formState: { errors },
      } = useFormContext()
      const inputError = findInputError(errors, label)
      const isInvalid = isFormValid(inputError)

    return (
      <div className="flex flex-col w-full py-2">
        <div className="flex justify-between">
          <label htmlFor={id} className="py-4 text-md font-semibold capitalize ">
            {label}
          </label>
          {/* <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence> */}
        </div>
        <select
        //   id={id}

          className="border p-4 rounded-xl "
          placeholder={placeholder}
          {...register(label, {
            required: {
              value: true,
              message: 'required',
            },
          })}
        >
            {options.map((option) => 

                    <option key= { option.value} value={option.value}>{option.value}</option>

            )}


            </select>

      </div>
    )
  }


const InputError = ({ message }) => {
    return (
      <motion.p
        className="flex items-center text-sm gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
        {...framer_error}
      >
        <MdError />
        {message}
      </motion.p>
    )
  }
  
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }