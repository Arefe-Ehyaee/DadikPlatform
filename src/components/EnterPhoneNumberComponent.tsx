import Input from "./Input";
import Label from "./Label";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { phoneNumberSchema } from "../Schemas/PhoneNumberSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { postMobilePhoneAPI } from "../api/postMobilePhoneAPI";
import { toast } from "react-toastify";


const EnterPhoneNumberComponent = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/loginWithPassword");
  };
  interface PhoneNumber {
    phone: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneNumber>({
    resolver: zodResolver(phoneNumberSchema),
  });

  const {mutate , isPending} = useMutation({
    mutationFn: postMobilePhoneAPI,
    onSuccess: (data) => {
      if(data.exists) { //check backend response
        navigate("/verificationCode");
      } else {
        toast.error("این شماره تلفن همراه در سیستم وجود ندارد.")
      }

    },
    onError: (error) => {
      toast.error("خطایی رخ داده است.")
    },
  })

  const onSubmit = async (data: PhoneNumber) => {
    mutate(data.phone);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-14">
          <Label name={"شماره تلفن همراه"} necessary={false}></Label>
          <Input
            name={"phone"}
            type={"text"}
            placeholder={"شماره تلفن همراه خود را وارد کنید."}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.phone?.message}
          ></Input>
        </div>

        <CustomButton
          text={ isPending ?  "در حال بررسی ..." : "ادامه" }
          className={
            "bg-primary-500 w-[480px] h-[40px] text-white font-myYekanDemibold"
          }
          type="submit"
          disabled={isPending}
        ></CustomButton>

        <div className="flex justify-center mt-[242px] mb-[31px]">
          <button
            className="text-primary-500 font-myYekanMedium text-sm "
            onClick={handleBackToLogin}
          >
            بازگشت به صفحه ورود
          </button>
        </div>
      </form>
    </div>
  );
};



export default EnterPhoneNumberComponent;

