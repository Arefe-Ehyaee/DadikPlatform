import lawyer from "../../assets/images/Frame 1318092.png";
import daddik from "../../assets/images/daddik.png";
import CustomButton from "../../components/CustomButton";
import natural from "../../assets/icons/user-02.png";
import legal from "../../assets/icons/building-04.svg";
import idePardazan from "../../assets/images/idea.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import arrow from "../../assets/icons/arrow-left.png";
import SocialLinks from "../../components/SocialLinks";

type LegalPersonType = "legal" | "person";

const LegalPerson = () => {
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
      navigate("/signUpPerson", { state: { legalPerson } });
    } else if (legalPerson === "legal") {
      navigate("/signUpLegal", { state: { legalPerson } });
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <div className="justify-center w-[560px] h-[912px] mx-[80px] my-[24px] p-10 bg-background-500 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center relative">
              <button onClick={() => navigate("/loginWithPassword")}>
                <img
                  src={arrow}
                  alt="back"
                  className="right-[256px] top-[4px] h-6 w-6 absolute"
                />
              </button>
              <img src={daddik} className="h-20 w-20"></img>
            </div>

            <p className="my-[32px] text-text-500 text-2xl font-myYekanMedium">
              به دادیک خوش آمدید
            </p>
            <p className="font-myYekanRegular mb-[24px] text-base text-text-300">
              آیا شما یک فرد حقیقی هستید یا نماینده یک کسب و کار ؟
            </p>
            <div className="flex justify-center gap-4 mb-[72px]">
              <CustomButton
                iconsrc={natural}
                size={"large"}
                text={"شخص حقیقی"}
                className={
                  "bg-primary-50 text-primary-500 font-myYekanRegular w-[135px] text-sm"
                }
                handleOnClick={() => setLegalPerson("person")}
              ></CustomButton>
              <CustomButton
                iconsrc={legal}
                size={"large"}
                text={"شخص حقوقی"}
                className={
                  "bg-neutral-50 text-text-500 font-myYekanRegular w-[135px] text-sm"
                }
                handleOnClick={() => setLegalPerson("legal")}
              ></CustomButton>
            </div>
            <CustomButton
              size={"large"}
              text={"ورود"}
              className={
                "bg-primary-500 text-white font-myYekanDemibold w-[480px] text-center rounded-lg text-base"
              }
              handleOnClick={() => handleSignUpNavigate()}
            ></CustomButton>
          </div>
          <div className="mt-[255px]">
            <img src={idePardazan} alt="idePardazan" className=" mb-2" />
            <div className="mb-2 text-justify font-myYekanRegular text-text-300 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کا
            </div>
            <div className="mb-2 text-center font-myYekanMedium text-base">
              www.idepardazan.com
            </div>
          <SocialLinks></SocialLinks>

          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={lawyer} className="w-full h-[960px] object-cover"></img>
      </div>
    </div>
  );
};

export default LegalPerson;
