import Input from "../../components/Input";
import Label from "../../components/Label";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InitialSignUpSchema } from "../../Schemas/InitialSignUpSchema";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../api/Auth";
import { saveTokenToCookie } from "../../utils/cookies";
import useAuthStore from "../../Stores/authStore";

interface SignUpData {
  username: string;
  password: string;
}

const InitialSignUpMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(InitialSignUpSchema),
  });

  const [error, setError] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpData) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
  
    try {
      const response = await fetch("https://api.legaldadik.ir/api/user/register/", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to register");
      }
  
      const result = await response.json(); 
      const token = result.tokens.access; 
      console.log("register token", result.tokens.access)
      const userData = await fetchUserProfile(token);
      
      setUser(userData);
      setToken(token);
      saveTokenToCookie(token);
  
      navigate("/dashboard");
  
    } catch (err: any) {
      setError(err.message);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label name={"نام کاربری"} necessary={false} />
          <Input
            name={"username"}
            type={"text"}
            placeholder={"شماره تلفن همراه"}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.username?.message}
          />
        </div>

        <div className="mt-8">
          <Label name={"رمز عبور"} necessary={false} />
          <Input
            name={"password"}
            type={"password"}
            placeholder={"رمز عبور را وارد کنید"}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.password?.message}
          />
        </div>

        <div className="mt-[76px] mb-[180px]">
          <CustomButton
            text={"ایجاد حساب کاربری"}
            className={"bg-primary-500 w-[480px] h-[40px] text-white font-myYekanDemibold"}
            type="submit"
          />
        </div>
      </form>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InitialSignUpMain;
