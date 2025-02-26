import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import useAuthStore from "../../Stores/authStore";
import defaultAvatar from "../../assets/icons/newIcons/defaultAvatr.png";
import CustomButton from "../../components/CustomButton";
import { LegalProfileSchema } from "../../Schemas/LegalProfileSchema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ReactComponent as Legal } from "../../assets/icons/building-04.svg";
import { ReactComponent as Person } from "../../assets/icons/user-02.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { postLegalProfile } from "../../api/postLegalProfile";
import processGroup from "../../assets/icons/Group 339.svg";
import logo from "../../assets/images/Group 343.svg";

interface CompleteProfileProps {
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
  referenceLetter: string;
  officialGazette: string;
}

export default function CompleteProfile() {
  const user = useAuthStore((state) => state.user);

  const [selectedImage, setSelectedImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatar = useAuthStore((state) => state.user?.avatar || defaultAvatar);
  type LegalPersonType = "legal" | "person";

  const refferal_code = user?.referral_code || "";

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteProfileProps>({
    resolver: zodResolver(LegalProfileSchema),
  });

  const watchReferenceName = watch("referenceName");

  const { mutate, isPending } = useMutation({
    mutationFn: postLegalProfile,
    onSuccess: (data) => {
      toast.success("تغییرات با موفقیت ثبت شد");
    },
    onError: (error) => {
      toast.error("خطایی رخ داده است.");
    },
  });

  const navigate = useNavigate();
  const [legalPerson, setLegalPerson] = useState<LegalPersonType>();

  const handleSignUpNavigate = () => {
    console.log("legalPerson", legalPerson);

    if (legalPerson === undefined) {
      toast.warning("شخص حقیقی هستید یا حقوقی؟", {
        className: "toast",
        progressClassName: "fancy-progress-bar",
      });
    } else if (legalPerson === "person") {
      navigate("/personProfile", { state: { lable: "real" } });
    } else if (legalPerson === "legal") {
      navigate("/legalProfile", { state: { lable: "legal" } });
    }
  };

  return (
    <div className="flex flex-row bg-white rounded-2xl mb-8">
      <div className="flex-1 py-6 px-6">
        <div className="justify-center min-w-[504px] h-[676px] bg-background-550 rounded-lg px-8">
          <div className="flex flex-col items-center justify-center">
            <p className="font-myYekanRegular mb-[24px] text-base text-text-500 mt-8">
              آیا شما یک فرد حقیقی هستید یا نماینده یک کسب و کار ؟
            </p>
            <div className="flex justify-center gap-4 mb-[96px] mt-6">
              <button
                onClick={() => setLegalPerson("person")}
                className={`flex flex-row items-center gap-2 h-[40px] px-[14px] py-4 text-center 
                  justify-center rounded-md bg-neutral-100 text-text-500 hover:text-primary-500
                   hover:bg-primary-50 font-myYekanRegular w-[135px] text-sm
                  ${legalPerson === "person" 
                   ? " text-[#3F51B5] bg-primary-50"
                    : "text-text-500"}`}
                >
                <Person></Person>
                <p>{"شخص حقیقی"}</p>
              </button>
              <button
                onClick={() => setLegalPerson("legal")}
                className={`flex flex-row items-center gap-2 h-[40px] px-[14px] py-4 text-center 
                justify-center rounded-md bg-neutral-100 text-text-500 hover:text-primary-500
                 hover:bg-primary-50 font-myYekanRegular w-[135px] text-sm
                ${legalPerson === "legal" 
                 ? "text-[#3F51B5] bg-primary-50"
                  : "text-text-500"}`}
              >
                <Legal></Legal>
                <p>{"شخص حقوقی"}</p>
              </button>
            </div>
            <button
              className={
                "bg-primary-500 text-white font-myYekanDemibold w-full text-center rounded-lg h-10 text-base"
              }
              onClick={() => handleSignUpNavigate()}
            >
              ادامه
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="relative bg-gradient-to-br from-[#17216E] to-[#3F51B5] min-w-[552px] h-[724px] rounded-tl-2xl rounded-bl-2xl">
          <div className="text-white text-xl font-myYekanDemibold pt-8 pr-8">
            مراحل ثبت نام در دادیک
          </div>
          <div className="relative flex flex-row items-center gap-2 ">
            <img
              src={processGroup}
              alt="processGroup"
              className="pr-10 pt-10"
            />
            <ul className="mt-[40px] font-myYekanRegular text-white text-xl w-full">
              <li>انتخاب دسته مورد نظر</li>
              <li className="my-[120px] w-full">کامل کردن اطلاعات</li>
              <li>ورود به سامانه دادیک</li>
            </ul>
          </div>

          <div className="absolute top-[236px] right-8 h-16 bg-white/10 opacity-32 py-4 min-w-[400px] rounded-lg"></div>

          <div className="px-8 absolute bottom-0 w-full py-8">
            <img src={logo} alt="logo" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
