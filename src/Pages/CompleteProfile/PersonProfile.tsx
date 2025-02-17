import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { personProfileSchema } from "../../Schemas/PersonProfileSchema";
import SideNavbar from "../../components/SideNavbar";
import TopBar from "../../components/Topbar/TopBar";
import UserInfoHeader from "../../components/Header";
import { useRef, useState } from "react";
import cloud from "../../assets/icons/cloud.svg";
import trash from "../../assets/icons/trash-02.svg";
import useAuthStore from "../../Stores/authStore";
import CustomButton from "../../components/CustomButton";
import { useMutation } from "@tanstack/react-query";
import { postPersonProfile } from "../../api/postPersonProfile";
import { toast } from "react-toastify";

interface PersonProfile {
  firstName: string;
  lastName: string;
  nationalCode: string;
  job: string;
  phone: string;
  workAddress: string;
  workPhone: string;
  profilePicture: string;
  post: string;
  education: string;
}

export default function PersonProfile() {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profilePicture = useAuthStore((state) => state.user?.avatar );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonProfile>({
    resolver: zodResolver(personProfileSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: postPersonProfile,
    onSuccess: (data) => {
      toast.success("تغییرات با موفقیت ثبت شد")
    },
    onError: (error) => {
      toast.error("خطایی رخ داده است.");
    },
  });

  const onSubmit = async (data: PersonProfile) => {
    mutate(data);
  };

  const handleDeleteImage = () => {
    setSelectedImage("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <TopBar></TopBar>
      <div className="flex flex-1">
        <SideNavbar></SideNavbar>
        <div className="flex flex-1 flex-col mr-[272px] px-8 bg-background-550 calc(100vh - 4rem) ">

          <div className="flex-1">
            <UserInfoHeader></UserInfoHeader>
          </div>

          <p className="font-myYekanMedium text-base mb-4 mt-8">
            مشاهده پروفایل
          </p>

          <div className="bg-white rounded-2xl p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex flex-row items-center">
                <img
                  src={selectedImage || profilePicture}
                  alt="profile image edit/upload"
                  className="h-[72px] w-[72px] rounded-full border-[1px] border-neutral-100"
                />

                <input
                  type="file"
                  id="avatar"
                  className="hidden"
                  {...register("profilePicture", {
                    onChange: (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setSelectedImage(URL.createObjectURL(file));
                      }
                    },
                  })}
                  ref={fileInputRef} 
                />

                <button
                  className="flex flex-row gap-2 mr-4 items-center"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <img src={cloud} alt="upload" />
                  <span className="font-myYekanRegular text-text-200 text-sm">
                    تغییر عکس
                  </span>
                </button>

                <button
                  className="flex flex-row gap-2 mr-4 items-center"
                  onClick={handleDeleteImage}
                >
                  <img src={trash} alt="trash" />
                  <span className="font-myYekanRegular text-error-500 text-sm">
                    حذف عکس
                  </span>
                </button>
              </div>

              <div className="mb-[30px]">
                <Label name={"نام"} necessary={true}></Label>
                <Input
                  name={"firstName"}
                  type={"text"}
                  placeholder={"نام"}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.firstName?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"نام خانوادگی"} necessary={true}></Label>
                <Input
                  name={"lastName"}
                  type={"text"}
                  placeholder={"نام خانوادگی"}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.lastName?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"تحصیلات"} necessary={true}></Label>
                <Input
                  name={"education"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.education?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"شماره ملی"} necessary={true}></Label>
                <Input
                  name={"nationalCode"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.nationalCode?.message}
                ></Input>
              </div>

              {/* <div className="mb-[30px]">
                <Label name={"نام کاربری"} necessary={false}></Label>
                <Input
                  name={"username"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.username?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"رمز عبور"} necessary={false}></Label>
                <Input
                  name={"password"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.password?.message}
                ></Input>
              </div> */}

              <div className="mb-[30px]">
                <Label name={"سمت"} necessary={false}></Label>
                <Input
                  name={"post"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.post?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"شغل"} necessary={false}></Label>
                <Input
                  name={"job"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.job?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"شماره تماس"} necessary={false}></Label>
                <Input
                  name={"phone"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.phone?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"آدرس محل کار"} necessary={false}></Label>
                <Input
                  name={"workAddress"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.workAddress?.message}
                ></Input>
              </div>

              <div className="mb-[62px]">
                <Label name={"شماره تلفن محل کار"} necessary={false}></Label>
                <Input
                  name={"workPhone"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.workPhone?.message}
                ></Input>
              </div>

              <div className="flex flex-row gap-4 justify-end">
                <CustomButton
                  size="large"
                  text={"انصراف"}
                  className={
                    "border border-primary-500 text-primary-500 text-base font-myYekanMedium w-[120px] h-10 py-[10px]"
                  }
                ></CustomButton>
                <CustomButton
                  type="submit"
                  size="large"
                  text={"ثبت تغییرات"}
                  className={
                    "bg-primary-500 text-white text-base font-myYekanMedium w-[120px] h-[40px] py-[10px]"
                  }
                ></CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
