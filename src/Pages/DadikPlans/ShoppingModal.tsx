import modalIcon from "../../assets/icons/card-svgrepo-com 1.svg";
import closeIcon from "../../assets/icons/x-circle.svg";
import goldBadge from "../../assets/icons/badge-star-g.svg";
import silverBadge from "../../assets/icons/badge-star-n.svg";
import bronzeBadge from "../../assets/icons/badge-star-b.svg";

interface ShoppingModal {
  children: React.ReactNode;
  planType: PlanType;
  onClose: () => void;
}

type PlanType = "gold" | "silver" | "bronze" ;

const planDetails = {
  gold: {
    planTitle: "طرح طلایی",
    badgeIcon: goldBadge,
  },
  silver: {
    planTitle: "طرح نقره ای",
    badgeIcon: silverBadge,
  },
  bronze: {
    planTitle: "طرح برنزی",
    badgeIcon: bronzeBadge,
  },
};

export default function ShoppingModal({
  children,
  planType,
  onClose
}: ShoppingModal) {
  const { planTitle, badgeIcon } = planDetails[planType];
  return (
    <div className="flex flex-col bg-white w-[1087px] h-[805px] rounded-2xl"
    style={{
        boxShadow:
          "-2px 4px 8px 2px rgba(168, 168, 168, 1), 2px 4px 8px 2px rgba(168, 168, 168, 1)",
      }}>
      <div className="flex flex-row justify-between items-center h-[88px] bg-primary-600 px-8 rounded-t-lg shrink-0">
        <div className="flex flex-row items-center gap-3">
        <div className="relative w-16 h-16 bg-[rgba(255,255,255,0.1)] rounded-full flex justify-center items-center">
        <img src={modalIcon} alt="icon" className="w-12 h-12" />
      </div>
          <p className="text-2xl font-myYekanDemibold text-white">
            خرید طرح های دادیک
          </p>
        </div>
        <button onClick={onClose}>
            <img src={closeIcon} alt="" className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 justify-center my-8">
        <img src={badgeIcon} alt="icon" />
        <div className="text-text-200 font-myYekanMedium text-2xl">{`نوع طرح: ${planTitle}`}</div>
      </div>
      {children}
    </div>
  );
}
