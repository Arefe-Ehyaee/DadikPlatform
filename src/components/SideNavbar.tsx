import RouteSelect from "./RouteSelect";
import copyRight from "../assets/icons/Copyright.png";
import daddik from "../assets/icons/Frame 427319961.png";
import SocialLinks from "./SocialLinks";

export default function SideNavbar() {
  return (
    <div className="bg-white w-[272px] min-h-screen fixed top-0 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 py-4 mb-2">
          <img src={daddik} alt="daddik" className="h-[30px] w-[30px] mr-4" />
          <span className="text-text-500 font-myYekanMedium text-base">
            سکوی حقوقی دادیک
          </span>
        </div>
        <RouteSelect></RouteSelect>
      </div>

      {/* <div className="flex flex-col gap-[236px] bg-green-600"> */}

      <div className="pb-12">
        <div className="flex flex-row mx-4">
          <img src={copyRight} alt="copyRight" className="h-6 w-6" />
          <div className="text-sm font-myYekanRegular text-text-300 text-center mb-[27px]">
            تمامی حقوق این سکو متعلق به شرکت ایده پردازان هوش مصنوعی عصر جدید
            است.
          </div>
        </div>

        <div className="mb-2 text-center text-text-300 font-myYekanMedium text-base">
          www.idepardazan.com
        </div>
      <SocialLinks></SocialLinks>
      </div>
      {/* </div> */}
    </div>
  );
}
