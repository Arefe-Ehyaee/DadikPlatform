import React from "react";
import CustomButton from "../../components/CustomButton";
import check from "../../assets/icons/check.svg";
import goldCube from "../../assets/icons/cube-g.svg";
import bronzeCube from "../../assets/icons/cube-b.svg";
import silverCube from "../../assets/icons/cube-n.svg";
import { ReactComponent as Check } from "../../assets/icons/check.svg";

type PlanType = "gold" | "silver" | "bronze";

const planDetails = {
  gold: {
    specification: "ویژه سازمان ها",
    cubeIcon: goldCube,
    mainTitle: "شامل کلیه آیتم ها",
  },
  silver: {
    specification: "ویژه شرکت ها",
    cubeIcon: silverCube,
    mainTitle: "مالیاتی، حقوقی، کار و تامین اجتماعی",
  },
  bronze: {
    specification: "ویژه شما",
    cubeIcon: bronzeCube,
    mainTitle: "هر سازمان به تنهایی",
  },
};

interface BoldShoppingCardProps {
  planType: PlanType;
  sale: boolean;
  salePercentage?: string;
  price: string;
  duration: string;
}

const BoldShoppingCard: React.FC<BoldShoppingCardProps> = ({
  planType,
  sale,
  salePercentage,
  price,
  duration,
}) => {
  const { specification, cubeIcon, mainTitle } = planDetails[planType];

  const formatPrice = (value: number | string): string => {
    // Convert price to a number if it's a string
    const numericPrice =
      typeof value === "string" ? parseInt(value, 10) : value;

    // Handle NaN cases
    if (isNaN(numericPrice)) {
      return "نامعتبر"; // "Invalid" in Persian
    }

    // Format the number using Intl.NumberFormat with 'fa-IR' locale
    return new Intl.NumberFormat("fa-IR").format(numericPrice);
  };

  const formattedPrice = formatPrice(price);

  return (
    <div className="relative flex flex-col w-[325px] h-[581px] border border-primary-300 rounded-2xl bg-[rgba(236,238,248,0.24)]">
      <div className="h-10 bg-primary-500 rounded-t-2xl shrink-0"></div>

      <div className="px-6 py-8">
        <div className="absolute top-[164px] left-0 z-10 flex items-center justify-center rounded-bl-2xl h-12 w-[124px] bg-primary-100 text-primary-800 font-myYekanDemibold text-sm transform -rotate-90 origin-top-left">
          {specification}
        </div>

        <div className="flex flex-row gap-[26px] justify-center mt-2 mb-4">
          {sale && (
            <div className="flex flex-row justify-center items-center w-[88px] h-10 rounded-lg text-base border bg-primary-50 text-black font-myYekanFaNumMedium py-[9.5]">
              {`${salePercentage} تخفیف`}
            </div>
          )}
          <img src={cubeIcon} alt="plan" />
        </div>
        <div className="flex justify-center font-myYekanDemibold text-text-500 text-2xl">
          {duration}
        </div>
        <div className="flex flex-row gap-1 justify-center text-text-500 text-2xl my-6 font-myYekanFaNumMedium">
          {formattedPrice}
          <p className="font-myYekanFaNumRegular texet-[20px]">ریال</p>
        </div>

        <div className="flex justify-center font-myYekanRegular text-text-200 text-base mb-10">
          {mainTitle}
        </div>

        <CustomButton
          text={"خرید طرح"}
          className={
            "bg-primary-500 rounded-lg w-[272px] h-10 text-white font-myYekanRegular mb-8"
          }
          size="large"
        ></CustomButton>

        <hr className="bg-neutral-100 w-[272px]" />

        <div className="flex flex-col gap-4">
          <p className="text-sm text-text-500 font-myYekanRegular mt-8">
            هزینه لایحه ها جداگانه و به شرح زیر می باشد
          </p>

          <p className="flex flex-row items-center gap-1 text-text-200 font-myYekanFaNumRegular text-sm">
            <Check className="text-success-500"></Check>
            لایحه اعتراض عمومی هر لایحه 4,000,00
          </p>

          <p className="flex flex-row items-center gap-1 text-text-200 font-myYekanFaNumRegular text-sm">
            <Check className="text-success-500"></Check>
            لایحه تخصصی بعد از بررسی کارشناسان{" "}
          </p>

          <p className="flex flex-row items-center gap-1 text-text-200 font-myYekanFaNumRegular text-sm">
            <Check className="text-success-500"></Check>
            مابقی لایحه ها، هر لایحه500,000 ریال{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoldShoppingCard;
