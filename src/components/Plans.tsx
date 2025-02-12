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
import {ReactComponent as Check} from "../assets/icons/check.svg";

type PlanType = "gold" | "silver" | "bronze";

interface PlansProps {
  planType: PlanType;
}

const planDetails = {
  gold: {
    title: "طرح طلایی",
    badgeIcon: goldBadge,
    image: goldImage,
  },
  silver: {
    title: "طرح نقره ای",
    badgeIcon: silverBadge,
    image: silvermage,
  },
  bronze: {
    title: "طرح برنزی",
    badgeIcon: bronzeBadge,
    image: bronzeImage,
  },
};

export default function Plans({ planType }: PlansProps) {
  const { title, badgeIcon, image } = planDetails[planType];
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
    <div className="min-w-[230px] h-[201px] rounded-lg bg-background-550 flex flex-1">
      <div className="">
        <img src={image} alt="plan" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 p-2 text-white">
        <div className="flex flex-row items-center gap-1 border-b border-neutral-100 pb-3">
          <img src={badgeIcon} alt="badge" className="w-6 h-6" />
          <h3 className="text-xs font-myYekanRegular text-black">{title}</h3>
        </div>

        <div className="flex flex-col gap-0 mt-2">
        
          <p className="flex flex-row items-center gap-1 text-xs text-text-300 my-[12px] max-h-[78px] text-wrap">
            <Check></Check>
            ایجاد لایحه برای تمام سازمان ها
          </p>

          <p className="flex flex-row items-center gap-1 text-xs text-text-300 my-[12px] max-h-[78px] text-wrap">
            <Check></Check>
            ایجاد لایحه برای تمام سازمان ها
          </p>
        </div>

        <div className="flex justify-center mb-2 mt-[0px] lg-xl:mt-[33px]">
          <CustomButton
            text={"خرید طرح"}
            className={"bg-primary-500 w-[110px] h-[32px] font-myYekanRegular text-sm"}
            handleOnClick={handleButtonClick}
          ></CustomButton>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && renderModal()}
    </div>
  );
}
