import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { postCodeAPI } from "../api/postCodeAPI";

interface VerificationCodeData {
  code: string;
}

const VerificationCodeSchema = z.object({
  code: z
    .string({
      required_error: "کد را وارد کنید", 
    })
    .regex(/^\d{5}$/, {
      message: "کد تأیید باید فقط شامل 5 رقم باشد", // Updated regex error message
    }),
});


const VerificationCodeMain = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [codeInputs, setCodeInputs] = useState<string[]>(Array(5).fill(""));

  const handleResendClick = () => {
    setTimer(120); // Reset the timer
    setIsResendDisabled(true); // Disable the resend button
  };

  useEffect(() => {
    let countdown: ReturnType<typeof setInterval>; // Explicit type for countdown
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false); // Enable the resend button
    }
  
    return () => clearInterval(countdown); // Cleanup on unmount
  }, [timer]);
  

  const formatTime = (time: number) => {
    if (time <= 0) return "00:00"; // وقتی تایمر تمام شده
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleInputChange = (value: string, index: number) => {
    if (value.length > 1) return; 
    const updatedInputs = [...codeInputs];
    updatedInputs[index] = value;
    setCodeInputs(updatedInputs);


    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index - 1}`);
      if (nextInput) nextInput.focus();
    }

    // Update the combined value in react-hook-form
    setValue("code", updatedInputs.join(""));
  };

  const handleEditPhoneNumber = () => {
    navigate("/loginWithCode");
  }

  const handleBackToLogin = () => {
    navigate("/loginWithPassword");
  }

    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<VerificationCodeData>({
      resolver: zodResolver(VerificationCodeSchema),
    });

    const loginWithCodeMutation = useMutation({
      mutationFn: postCodeAPI,
      onSuccess: (data) => {
        console.log("Login with code successful", data);
        // Handle success (e.g., save token and redirect)
        navigate("/dashboard");
      },
      onError: (error: any) => {
        console.error("Login with code failed", error.response?.data || error.message);
        toast.error("ورود با کد ناموفق!")
      },
    });
  
    const onSubmit = (data: VerificationCodeData) => {
      // loginWithCodeMutation.mutate(data);
    }
  


  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 relative justify-center mb-6">
      {codeInputs.map((value, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              className="font-myYekanFaNumRegular text-base leading-7 text-text-500 bg-white border-neutral-200 rounded-md border-[1px] w-10 h-10 flex text-center"
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              autoFocus={index === 4}
            />
            
          ))}
      </div>

      <div className="flex flex-row justify-between items-center font-myYekanMedium text-sm mt-6 mb-8">
        <button
          className={`${
            isResendDisabled
              ? "text-neutral-200"
              : "text-primary-500"
          } font-myYekanMedium text-sm`}
          disabled={isResendDisabled}
          onClick={handleResendClick}
        >
          ارسال مجدد کد
        </button>

        <span className="text-text-200 font-myYekanFaNumMeduim text-sm">
          {formatTime(timer)}
        </span>
      </div>

      <CustomButton
        text={"تایید"}
        className={
          "bg-primary-500 w-[480px] h-[40px] text-white font-myYekanDemibold"
        }
        type="submit"
      ></CustomButton>

      <div className="flex justify-center mt-[32px]">
        <button className="text-primary-500 font-myYekanMedium text-sm " onClick={handleEditPhoneNumber}>
          ویرایش شماره تلفن همراه
        </button>
      </div>

      <div className="flex justify-center mt-[179px] mb-[24px]">
        <button className="text-primary-500 font-myYekanMedium text-sm " onClick={handleBackToLogin}>
          بازگشت به صفحه ورود
        </button>
      </div>
      </form>
    </div>
  );
};

export default VerificationCodeMain;
