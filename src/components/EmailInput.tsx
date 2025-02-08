import React from "react";

interface EmailInputProps {
  name: string;
  type: string;
  placeholder: string;
  error?: string;
  register: any;
}

const EmailInput: React.FC<EmailInputProps> = ({
  name,
  placeholder,
  type,
  register,
  error,
}) => {
  return (
    <div className="relative max-w-[536px]" dir="rtl">
      <div className={`h-full bg-neutral-50 absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center text-text-500 px-2 text-sm rounded-l-[8px] border-y border-l border-y-neutral-100 ${
          error ? "border-l-red-500 border-y-red-500" : ""
        }`} dir="ltr">http://</div>

      <input
        type={type}
        id={name}
        name={name}
        className={`flex flex-col items-center w-[536px] h-12 border border-grey-400 px-[12px] py-[5px] rounded-[8px] text-xs font-normal placeholder-grey-400 font-isf placeholder-start ${
          error ? "border-red-500" : ""
        }`}
        dir="rtl"
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <div className="absolute top-full right-0 mt-1 text-right w-full">
          <span className="text-text-200 text-sm flex items-center font-myYekanRegular">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default EmailInput;
