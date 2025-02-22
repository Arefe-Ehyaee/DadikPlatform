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
import LegalPerson from "../Entrance/LegalPerson";
import natural from "../../assets/icons/user-02.png";
import legal from "../../assets/icons/building-04.svg";
import { useNavigate } from "react-router-dom";

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

  const onSubmit = async (data: CompleteProfileProps) => {
    mutate(data);
  };

  const handleDeleteImage = () => {
    setSelectedImage("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
      navigate("/personProfile", { state: { legalPerson } });
    } else if (legalPerson === "legal") {
      navigate("/legalProfile", { state: { legalPerson } });
    }
  };

  return (
    <div className="flex flex-row bg-white rounded-2xl">
      <div className="flex-1 py-6 px-6">
        <div className="justify-center min-w-[504px] h-[676px] bg-background-550 rounded-lg px-8">
          <div className="flex flex-col items-center justify-center">
            <p className="font-myYekanRegular mb-[24px] text-base text-text-500 mt-8">
              آیا شما یک فرد حقیقی هستید یا نماینده یک کسب و کار ؟
            </p>
            <div className="flex justify-center gap-4 mb-[96px] mt-6">
              <CustomButton
                iconsrc={natural}
                size={"large"}
                text={"شخص حقیقی"}
                className={
                  "bg-neutral-100 text-primary-500 font-myYekanRegular w-[135px] text-sm"
                }
                handleOnClick={() => setLegalPerson("person")}
              ></CustomButton>
              <CustomButton
                iconsrc={legal}
                size={"large"}
                text={"شخص حقوقی"}
                className={
                  "bg-neutral-100 text-text-500 font-myYekanRegular w-[135px] text-sm"
                }
                handleOnClick={() => setLegalPerson("legal")}
              ></CustomButton>
            </div>
            <button
              className={
                "bg-primary-500 text-white font-myYekanDemibold w-full text-center rounded-lg h-10 text-base"
              }
              onClick={() => handleSignUpNavigate()}
            
            >
                ورود
            </button>

          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-primary-500 min-w-[552px] h-[724px] rounded-tl-2xl rounded-bl-2xl"></div>
      </div>
    </div>
  );
}
