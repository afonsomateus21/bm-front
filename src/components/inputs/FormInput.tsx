import { Ref, forwardRef } from "react";
import { useShowPassword } from "../../hooks";
import { InputProps } from "../../types";

function Input({ 
  title, icon = null, errors, required = false, ...rest 
}: InputProps, ref: Ref<HTMLInputElement>) {
  const { handleShowPassword } = useShowPassword();

  function handleChangePasswordVisibility() {
    handleShowPassword()
  }

  return (
    <div className="w-full max-w-sm flex flex-col">
      <label 
        htmlFor={title.split(' ')[0].toLowerCase()} 
        className="text-tertiary font-bold flex items-center gap-1"
      >
        {title} {required && <span className="text-red-500 text-2xl leading-none">*</span>}
      </label>
      <div className="w-full max-w-sm mx-auto relative rounded-4xl md:w-64 bg-white h-14 flex items-center px-3 border-2 border-secondary">
        <input 
          id={ title.split(' ')[0].toLowerCase() }
          {...rest}
          className="outline-none border-none w-full p-4 text-xl placeholder:font-bold placeholder:opacity-40" 
          ref={ref}
        />
        <div 
          className="absolute right-4"
          onClick={ () => handleChangePasswordVisibility() }
        >
          {
            icon
            ? icon
            : null
          }
        </div>
      </div>

      <p className="text-red-500"> {errors} </p>
    </div>
  );
}

export const FormInput = forwardRef(Input);