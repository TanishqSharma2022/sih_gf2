import { useFormContext } from "react-hook-form"
import { findInputError } from "../utils/findInputError"
import { isFormValid } from "../utils/isFormValid"
import { motion, AnimatePresence } from "framer-motion"
import { MdError } from "react-icons/md"

export const Input = ({ label, type, id, placeholder, validation, name, onChange }) => {
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
          <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
        </div>
        <input
          id={id}
          type={type}
          className="border p-4 rounded-xl hover:border-[#294dff] cursor-pointer"
          placeholder={placeholder}
          onChange={onChange}
          {...register(name, validation)}
        />
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