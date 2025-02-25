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
import defaultAvatarMain from "../../assets/icons/newIcons/defaultAvatarMain.svg";
import CustomButton from "../../components/CustomButton";
import FileInput from "../../components/FileInput";
import { LegalProfileSchema } from "../../Schemas/LegalProfileSchema";
import EmailInput from "../../components/EmailInput";
import { useMutation } from "@tanstack/react-query";
import { postLegalProfile } from "../../api/postLegalProfile";
import { toast } from "react-toastify";
import RefferalCodeModalTemplate from "../../components/RefferalCodeModalTemplate";
import RefferalCodeModal from "../../components/RefferalCodeModal";
import prize from "../../assets/icons/gift-01.svg"
import { useLocation } from "react-router-dom";

interface LegalProfile {
  companyName: string;
  companyNationalId: string;
  workNumber: string;
  workAddress: string;
  profilePicture: string;
  companyEmail: string;
  connectorPhoneNumber: string;
  connectorName: string;
  connectorNationalCode: string;
  companyWebsite: string;
  introductionLetter:string;
  officialNewspaper:string;
}

export default function LegalProfile() {
  const user = useAuthStore((state) => state.user);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatar = useAuthStore((state) => state.user?.avatar || defaultAvatarMain);
  const [refferalModalOpen, setRefferalModalOpen] = useState<boolean>(false);
  const refferal_code = user?.referral_code || "";
  const location = useLocation();
  const lable = location.state?.label || "real";


  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LegalProfile>({
    resolver: zodResolver(LegalProfileSchema),
  });

  const watchReferenceName = watch("connectorName");

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
    if (isPending) return;

    const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   if (key !== "profilePicture") {
    //     formData.append(key, value);
    //   }
    // });
    // if (selectedFile) {
    //   formData.append("profilePicture", selectedFile, selectedFile.name);
    // }

    formData.append("lable", lable);
    mutate(formData);
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
              <div className="flex flex-row justify-between">
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
                  {...register("profilePicture", {
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
              
              <button className="relative bg-primary-500 w-[113px] h-10 rounded-lg flex flex-row gap-2 items-center justify-center" type="button" onClick={() => setRefferalModalOpen((prev) => !(prev))}>
                    <img src={prize} alt="invitationCode" />
                    <p className="text-base text-white font-myYekanRegular">کد دعوت</p>
                </button>

                {refferalModalOpen && (
                <div className="absolute">
                  <RefferalCodeModalTemplate showModal={refferalModalOpen}  onClose={() => setRefferalModalOpen(false)}>
                    <RefferalCodeModal onClick={() => setRefferalModalOpen((prev) => !(prev))} refferal_code={refferal_code}></RefferalCodeModal>
                  </RefferalCodeModalTemplate>
                </div>
              )}

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
                  name={"companyNationalId"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.companyNationalId?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"شماره تماس محل کار"} necessary={false}></Label>
                <Input
                  name={"workNumber"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.workNumber?.message}
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
                  name={"companyEmail"}
                  type={"text"}
                  placeholder={""}
                  register={register}
                  error={errors.companyEmail?.message}
                ></EmailInput>
              </div>

              <div className="mb-[30px]">
                <Label name={"آدرس وب سایت"} necessary={false}></Label>
                <Input
                  name={"companyWebsite"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.companyWebsite?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label
                  name={"نام و نام خانوادگی معرف"}
                  necessary={false}
                ></Label>
                <Input
                  name={"connectorName"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.connectorName?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"کد ملی معرف"} necessary={false}></Label>
                <Input
                  name={"connectorNationalCode"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.connectorNationalCode?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"تلفن همراه معرف"} necessary={false}></Label>
                <Input
                  name={"connectorPhoneNumber"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.connectorPhoneNumber?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"آپلود روزنامه رسمی"} necessary={true}></Label>
                <FileInput
                  name={"officialNewspaper"}
                  className={"border-neutral-100 w-[536px] h-[202px]"}
                  register={register}
                  error={errors.officialNewspaper?.message}
                ></FileInput>
              </div>

              {watchReferenceName && watchReferenceName.trim().length > 0 && (
                <div className="mb-[30px]">
                  <Label name={"آپلود معرفی نامه"} necessary={false}></Label>
                  <FileInput
                    name={"introductionLetter"}
                    className={"border-neutral-100 w-[536px] h-[202px]"}
                    register={register}
                    error={errors.introductionLetter?.message}
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
                  disabled={isPending}
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
