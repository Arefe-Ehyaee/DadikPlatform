import CustomButton from "./CustomButton";
import goldBadge from "../assets/icons/badge-star-g.svg";
import silverBadge from "../assets/icons/badge-star-n.svg";
import bronzeBadge from "../assets/icons/badge-star-b.svg";
import { useState } from "react";
import GoldModal from "../Pages/DadikPlans/GoldModal";
import SilverModal from "../Pages/DadikPlans/SilverModal";
import BronzeModal from "../Pages/DadikPlans/BronzeModal";
import ShoppingModal from "../Pages/DadikPlans/ShoppingModal";
import ShoppingModaltemplate from "../Pages/DadikPlans/ShoppingModalTemplate";
import goldImage from "../assets/images/gold.png";
import silvermage from "../assets/images/silver.png";
import bronzeImage from "../assets/images/bronze.png";
import { ReactComponent as Down } from "../assets/icons/down.svg";

type PlanType = "gold" | "silver" | "bronze";

interface PlansProps {
  planType: PlanType;
}

const planDetails = {
  gold: {
    title: "طرح طلایی",
    badgeIcon: goldBadge,
    image: goldImage,
    firstCondition: "دسترسی به سرچ تخصصی جامع",
    secondCondition: "دسترسی به بخش لایحه دفاعیه جامع",
    thirdCondition: "گفتگو با هوش مصنوعی",
  },
  silver: {
    title: "طرح نقره ای",
    badgeIcon: silverBadge,
    image: silvermage,
    firstCondition: "دسترسی به سرچ تخصصی جامع",
    secondCondition:
      "دسترسی به بخش لایحه دفاعیه چند  سازمانی (مالیات،اداره کار،تامین اجتماعی)",
    thirdCondition: "گفتگو با هوش مصنوعی",
  },
  bronze: {
    title: "طرح برنزی",
    badgeIcon: bronzeBadge,
    image: bronzeImage,
    firstCondition: "دسترسی به سرچ تخصصی جامع",
    secondCondition: "دسترسی به بخش لایحه دفاعیه تک سازمانی ",
    thirdCondition: "گفتگو با هوش مصنوعی",
  },
};

export default function Plans({ planType }: PlansProps) {
  const {
    title,
    badgeIcon,
    image,
    firstCondition,
    secondCondition,
    thirdCondition,
  } = planDetails[planType];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderModal = () => {
    switch (planType) {
      case "gold":
        return (
          <ShoppingModaltemplate showModal={true}>
            <ShoppingModal
              children={<GoldModal></GoldModal>}
              planType={"gold"}
              onClose={closeModal}
            ></ShoppingModal>
          </ShoppingModaltemplate>
        );
      case "silver":
        return (
          <ShoppingModaltemplate showModal={true}>
            <ShoppingModal
              children={<SilverModal></SilverModal>}
              planType={"silver"}
              onClose={closeModal}
            ></ShoppingModal>
          </ShoppingModaltemplate>
        );
      case "bronze":
        return (
          <ShoppingModaltemplate showModal={true}>
            <ShoppingModal
              children={<BronzeModal></BronzeModal>}
              planType={"bronze"}
              onClose={closeModal}
            ></ShoppingModal>
          </ShoppingModaltemplate>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-w-[230px] h-[259px] rounded-lg bg-background-550 flex flex-1">
      {/* <div className="">
        <img src={image} alt="plan" className="w-full h-full object-cover" />
      </div> */}

      <div className="flex flex-col justify-between p-2 text-white w-full">
        <div className="flex flex-row items-center gap-1 border-b border-neutral-100 pb-3">
          <img src={badgeIcon} alt="badge" className="w-6 h-6" />
          <h3 className="text-xs font-myYekanRegular text-black">{title}</h3>
        </div>

        <ul className="list-disc pr-3 text-text-300 font-myYekanRegular text-xs leading-5 mt-3">
          <li className="mb-2">{firstCondition}</li>
          <li className="mb-2">{secondCondition}</li>
          <li>{thirdCondition}</li>
        </ul>

        <div className="h-[86px] mt-[13px]">
          <button className="flex flex-row gap-1 items-center w-[112px] h-[26px] mr-2 mb-[14px]">
            <div className="font-myYekanRegular text-sm text-primary-500">
              مشاهده بیشتر
            </div>
            <Down className="text-primary-500 3-2 h-1"></Down>
          </button>

          <div className="h-[54px] border-t border-neutral-100 pt-[14px]">
            <div className="flex justify-right mb-2 w-full">
              <CustomButton
                text={"خرید طرح"}
                className={
                  "bg-primary-500 w-[110px] h-[32px] font-myYekanRegular text-sm"
                }
                handleOnClick={handleButtonClick}
              ></CustomButton>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && renderModal()}
    </div>
  );
}
