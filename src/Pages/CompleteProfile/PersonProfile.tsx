import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import { personProfileSchema } from "../../Schemas/PersonProfileSchema";
import defaultAvatarMain from "../../assets/icons/newIcons/defaultAvatarMain.svg";
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
import prize from "../../assets/icons/gift-01.svg"
import RefferalCodeModal from "../../components/RefferalCodeModal";
import RefferalCodeModalTemplate from "../../components/RefferalCodeModalTemplate";
import { useLocation } from "react-router-dom";

interface PersonProfile {
  name: string;
  lastName: string;
  national_code: string;
  job: string;
  phone: string;
  address: string;
  workNumber: string;
  profilePicture: File;
  role: string;
  education: string;
}

export default function PersonProfile() {
  const user = useAuthStore((state) => state.user);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [refferalModalOpen, setRefferalModalOpen] = useState<boolean>(false);
  const avatar = useAuthStore((state) => state.user?.avatar || defaultAvatarMain);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const refferal_code = user?.referral_code || "";
  const location = useLocation();
  const lable = location.state?.label || "real";

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
      toast.success("تغییرات با موفقیت ثبت شد");
    },
    onError: (error) => {
      toast.error("خطایی رخ داده است.");
    },
  });

  const onSubmit = async (data: PersonProfile) => {
    if (isPending) return;
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key !== "profilePicture") {
        formData.append(key, value);
      }
    });

    if (selectedFile) {
      formData.append("profilePicture", selectedFile, selectedFile.name);
    }

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
                    {...register("profilePicture")}
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setSelectedImage(URL.createObjectURL(file)); 
                        setSelectedFile(file);
                      }
                    }}
                  />

                  <button
                    className="flex flex-row gap-2 mr-4 items-center"
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                  >
                    <img src={cloud} alt="upload" />
                    <span className="font-myYekanRegular text-text-200 text-sm">
                      تغییر عکس
                    </span>
                  </button>

                  <button
                    className="flex flex-row gap-2 mr-4 items-center"
                    onClick={handleDeleteImage}
                    type="button"
                  >
                    <img src={trash} alt="trash" />
                    <span className="font-myYekanRegular text-error-500 text-sm">
                      حذف عکس
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
                <Label name={"نام"} necessary={false}></Label>
                <Input
                  name={"name"}
                  type={"text"}
                  placeholder={"نام"}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.name?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"نام خانوادگی"} necessary={false}></Label>
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
                <Label name={"تحصیلات"} necessary={false}></Label>
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
                <Label name={"شماره ملی"} necessary={false}></Label>
                <Input
                  name={"national_code"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.national_code?.message}
                ></Input>
              </div>

              <div className="mb-[30px]">
                <Label name={"سمت"} necessary={false}></Label>
                <Input
                  name={"role"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.role?.message}
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
                  name={"address"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.address?.message}
                ></Input>
              </div>

              <div className="mb-[62px]">
                <Label name={"شماره تلفن محل کار"} necessary={false}></Label>
                <Input
                  name={"workNumber"}
                  type={"text"}
                  placeholder={""}
                  className={"border-neutral-100 w-[536px] h-[48px]"}
                  register={register}
                  error={errors.workNumber?.message}
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
