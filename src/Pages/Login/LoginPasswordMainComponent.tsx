import Input from "../../components/Input";
import Label from "../../components/Label";
import CustomButton from "../../components/CustomButton";
import line from "../../assets/images/Line 38.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../Schemas/LoginSchema";
import { usePassLogin } from "../../api/useAuth";
// import { usePassLogin } from "../../api/useAuth";

interface LoginData {
  username: string;
  password: string;
}

const LoginPasswordMainComponent = () => {
  const navigate = useNavigate();

  const handleLoginWithCode = () => {
    navigate("/loginWithCode");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });


  const { login, isPending } = usePassLogin(); 

  const onSubmit = (data: LoginData) => {
    login(data);
  };


  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label name={"نام کاربری"} necessary={false}></Label>
          <Input
            name={"username"}
            type={"text"}
            placeholder={"نام کاربری"}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.username?.message}
          ></Input>
        </div>

        <div className="mt-8">
          <Label name={"رمز عبور"} necessary={false}></Label>
          <Input
            name={"password"}
            type={"password"}
            placeholder={"رمز عبور را وارد کنید"}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.password?.message}
          ></Input>
        </div>

        <div className="flex flex-row justify-between font-myYekanRegular text-sm mt-8 mb-6">
          <button className="text-text-500">
            رمز عبور خود را فراموش کردید؟
          </button>
          <div className="flex flex-row gap-2 items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-neutral-200 rounded dark:ring-offset-neutral-200 focus:ring-2 dark:bg-gray-700 dark:border-neutral-200"
            ></input>
            <div className="text-text-100">مرا بخاطر بسپار</div>
          </div>
        </div>
        <CustomButton
          text={"ورود"}
          className={
            "bg-primary-500 w-[480px] h-[40px] text-white font-myYekanDemibold"
          }
          type="submit"
          disabled={isPending}
        ></CustomButton>

        <div className="flex justify-center items-center my-6">
          <div className="">
            <img src={line}></img>
          </div>
          <span className="font-myYekanMedium text-sm text-text-100 px-[5px]">
            یا
          </span>
          <div>
            <img src={line}></img>
          </div>
        </div>

        <CustomButton
          text={"ورود از طریق کد یکبار مصرف"}
          className={
            "bg-white border-neutral-100 border w-[480px] h-[40px] text-text-500 font-myYekanDemibold"
          }
          handleOnClick={handleLoginWithCode}
        ></CustomButton>

        <div className="flex justify-center mt-[31px] mb-[25px]">
          <button onClick={()=>navigate("/signUp")} className="text-primary-500 font-myYekanMedium text-sm ">
            ایجاد حساب کاربری
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPasswordMainComponent;
