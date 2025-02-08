import Input from "../../components/Input";
import Label from "../../components/Label";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InitialSignUpSchema } from "../../Schemas/InitialSignUpSchema";
import { useInitialSignup } from "../../api/useAuth";

interface SignUpData {
  usernamePhone: string;
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

  const { signUp, isPending, error } = useInitialSignup();

  const onSubmit = (data: SignUpData) => {
    signUp(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label name={"نام کاربری"} necessary={false}></Label>
          <Input
            name={"usernamePhone"}
            type={"text"}
            placeholder={"شماره تلفن همراه"}
            className={"border-neutral-100 w-[480px] h-[40px] leading-[18px]"}
            register={register}
            error={errors.usernamePhone?.message}
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

        <div className="mt-[76px] mb-[180px]">
          <CustomButton
            text={"ایجاد حساب کاربری"}
            className={
              "bg-primary-500 w-[480px] h-[40px] text-white font-myYekanDemibold"
            }
            type="submit"
          ></CustomButton>
        </div>
      </form>
    </div>
  );
};

export default InitialSignUpMain;
