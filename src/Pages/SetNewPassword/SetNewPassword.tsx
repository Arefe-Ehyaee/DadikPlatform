import CustomButton from "../../components/CustomButton";
import LagalPersonLayout from "../Layouts/LagalPersonLayout";
import Label from "../../components/Label";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetNewPasswordSchema } from "../../Schemas/SetNewPasswordSchema";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setNewPasswordAPI } from "../../api/setNewPasswordAPI";

interface SetNewPasswordData {
  password: string;
  repeatpassword: string;
}

const SetNewPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetNewPasswordData>({
    resolver: zodResolver(SetNewPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: setNewPasswordAPI,
    onSuccess: () => {
      console.log("Password set successfully");
      alert("Password updated successfully!"); //toast
      navigate("/loginWithPassword");
    },
    onError: (error: any) => {
      console.error(
        "Error setting password:",
        error.response?.data || error.message
      );
      alert("Failed to set password. Please try again."); //toast
    },
  });

  const onSubmit = (data: SetNewPasswordData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LagalPersonLayout
        title={"ثبت رمز عبور جدید"}
        description={"نام کاربری و رمز عبور خود را وارد کنید."}
      >
        <div>
          <Label name={"رمز عبور جدید"} necessary={false}></Label>
          <div className="relative">
            <Input
              name={"password"}
              type={"password"}
              placeholder={"رمز عبور خود را وارد کنید"}
              className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
              register={register}
              error={errors.password?.message}
            ></Input>
          </div>
        </div>

        <div className="mt-8 mb-14">
          <Label name={"تکرار رمز عبور جدید"} necessary={false}></Label>
          <Input
            name={"repeatpassword"}
            type={"password"}
            placeholder={"رمز عبور را وارد کنید"}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.repeatpassword?.message}
          ></Input>
        </div>

        <CustomButton
          text={"ثبت"}
          className={
            "bg-primary-500 w-[480px] h-[40px] text-white font-myYekanDemibold"
          }
          type="submit"
        ></CustomButton>

        <div className="flex justify-center mt-[31px] mb-[136px]">
          <button onClick={()=>navigate("/signUp")} className="text-primary-500 font-myYekanMedium text-sm ">
            ایجاد حساب کاربری
          </button>
        </div>
      </LagalPersonLayout>
    </form>
  );
};

export default SetNewPassword;
