import React from "react";


interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  className: string;
  error?: string;
  register: any;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  register,
  className,
  error,
}) => {
  return (
    <div className="relative" dir="rtl">
      <input
        type={type}
        id={name}
        name={name}
        className={`flex flex-col items-center w-80 h-8 border border-grey-400 px-[12px] py-[5px] rounded-[8px] text-xs font-normal placeholder-grey-400 font-isf ${className} placeholder-start ${
          error ? "border-red-500" : ""
        }`}
        dir="rtl"
        placeholder={placeholder}
        {...register(name)}
      />
            {error && 
        <div className="absolute top-full right-0 mt-1 text-right w-full">
          <span className="text-text-200 text-sm flex items-center font-myYekanRegular">
            {error}
          </span>
        </div>
      }
    </div>
  );
};

export default Input;
