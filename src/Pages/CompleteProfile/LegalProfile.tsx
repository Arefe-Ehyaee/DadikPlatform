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
import defaultAvatar from "../../assets/icons/newIcons/defaultAvatr.png";
import CustomButton from "../../components/CustomButton";
import FileInput from "../../components/FileInput";
import { LegalProfileSchema } from "../../Schemas/LegalProfileSchema";
import EmailInput from "../../components/EmailInput";
import { useMutation } from "@tanstack/react-query";
import { postLegalProfile } from "../../api/postLegalProfile";
import { toast } from "react-toastify";

interface LegalProfile {
  companyName: string;
  companyNationalCode: string;
  phone: string;
  workAddress: string;
  avatar: string;
  email: string;
  referenceNCode: string;
  referencePhone: string;
  referenceName: string;
  website: string;
  referenceLetter:string;
  officialGazette:string;
}

export default function LegalProfile() {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatar = useAuthStore((state) => state.user?.avatar || defaultAvatar);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LegalProfile>({
    resolver: zodResolver(LegalProfileSchema),
  });

  const watchReferenceName = watch("referenceName");

    const {mutate , isPending} = useMutation({
      mutationFn: postLegalProfile,
      onSuccess: (data) => {
        toast.success("تغییرات با موفقیت ثبت شد");
      },
      onError: (error) => {
        toast.error("خطایی رخ داده است.")
      },
    })

  const onSubmit = async (data: LegalProfile) => {
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
          {/* top Section */}
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
                  src={selectedImage || avatar}
                  alt="profile image edit/upload"
                  className="h-[72px] w-[72px] rounded-full border-[1px] border-neutral-100"
                />

                <input
                  type="file"
                  id="avatar"
                  className="hidden"
                  {...register("avatar", {
                    onChange: (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setSelectedImage(URL.createObjectURL(file));
                      }
                    },
                  })}
                  
                  ref={fileInputRef} // Attach the ref here
                />

                <button
                  className="flex flex-row gap-2 mr-4 items-center"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <img src={cloud} alt="upload" />
                  <span className="font-myYekanRegular text-text-200 text-sm">
                    تغییر لوگو
                  </span>
                </button>

                <button
                  className="flex flex-row gap-2 mr-4 items-center"
                  onClick={handleDeleteImage}
                >
                  <img src={trash} alt="trash" />
                  <span className="font-myYekanRegular text-error-500 text-sm">
                    حذف لوگو
                  </span>
                </button>
              </div>

              <div className="mb-[30px]">
                <Label name={"نام شرکت"} necessary={true}></Label>
                <Input
                  name={"companyName"}
                  type={"text"}
                  placeholder={"نام شرکت"}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.companyName?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"شماره ملی شرکت"} necessary={true}></Label>
                <Input
                  name={"companyNationalCode"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.companyNationalCode?.message}
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
                <Label
                  name={"آدرس محل کار (اختیاری)"}
                  necessary={false}
                ></Label>
                <Input
                  name={"workAddress"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.workAddress?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"ایمیل"} necessary={true}></Label>
                <EmailInput
                  name={"email"}
                  type={"text"}
                  placeholder={""}
                  register={register}
                  error={errors.email?.message}
                ></EmailInput>
              </div>

              <div className="mb-[30px]">
                <Label name={"آدرس وب سایت"} necessary={false}></Label>
                <Input
                  name={"website"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.website?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label
                  name={"نام و نام خانوادگی معرف"}
                  necessary={false}
                ></Label>
                <Input
                  name={"referenceName"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.referenceName?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"کد ملی معرف"} necessary={false}></Label>
                <Input
                  name={"referenceNCode"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.referenceNCode?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"تلفن همراه معرف"} necessary={false}></Label>
                <Input
                  name={"referencePhone"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.referencePhone?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"آپلود روزنامه رسمی"} necessary={true}></Label>
                <FileInput
                  name={"officialGazette"}
                  className={"border-neutral-100 w-[536px] h-[202px]"}
                  register={register}
                  error={errors.officialGazette?.message}
                ></FileInput>
              </div>

              {watchReferenceName && watchReferenceName.trim().length > 0 && (
                <div className="mb-[30px]">
                  <Label name={"آپلود معرفی نامه"} necessary={false}></Label>
                  <FileInput
                    name={"referenceLetter"}
                    className={"border-neutral-100 w-[536px] h-[202px]"}
                    register={register}
                    error={errors.referenceLetter?.message}
                  ></FileInput>
                </div>
              )}

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
                    "bg-primary-500 text-white text-base font-myYekanMedium w-[120px] h-10 py-[10px]"
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
