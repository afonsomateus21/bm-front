import { Ref, forwardRef } from "react";
import { InputProps } from "../types/input-props";

function Input({ 
  icon = null, setShowPassword, showPassword, errors, ...rest 
}: InputProps, ref: Ref<HTMLInputElement>) {
  return (
    <div>
      <div className="w-full max-w-sm mx-auto relative rounded-4xl md:w-64 bg-white h-14 flex items-center px-3 border-2 border-secondary">
        <input 
          {...rest}
          className="outline-none border-none w-full p-4" 
          ref={ref}
        />
        <div 
          className="absolute right-2"
          onClick={ () => setShowPassword && setShowPassword(!showPassword) }
        >
          {
            icon !== null
            ? icon
            : null
          }
        </div>
      </div>

      <p className="text-red-500"> {errors} </p>
    </div>
  );
}

export const CustomInput = forwardRef(Input);