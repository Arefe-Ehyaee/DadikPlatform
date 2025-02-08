import download from "../../assets/icons/download.svg";
import printIcon from "../../assets/icons/printer.svg";
import DepartmentBadge from "../../components/SearchEngineComponents/DepartmentBadge";
import DocumnetBadge from "../../components/SearchEngineComponents/DocumnetBadge";
import ShowMoreButton from "../../components/ShowMoreButton";
import tel from "../../assets/icons/telEngine.svg";
import whatsapp from "../../assets/icons/whatsappEngine.svg";
import linkedin from "../../assets/icons/linkedin-engine.svg";
import instagram from "../../assets/icons/instagramEngine.svg";
import CustomButton from "../../components/CustomButton";
import emoji from "../../assets/icons/fase.svg";

export default function Document() {
  return (
    <div className="flex flex-col bg-white min-w-[1104px] mb-4 h-[724px] rounded-2xl mt-0 p-6">
      <div className="flex flex-row justify-between">
        <div className="font-myYekanFaNumMedium text-sm text-text-500">
          شماره سند : ۱۲۳۴۵۶ باب چهارم فصل دوم{" "}
        </div>
        <div className="flex flex-row gap-[15px]">
          <button>
            <img src={download} alt="" />
          </button>

          <button>
            <img src={printIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
        <DocumnetBadge type={"تفسیر"}></DocumnetBadge>
        <DocumnetBadge type={"نامه اصلاحی"}></DocumnetBadge>
        <DocumnetBadge type={"منسوخه"}></DocumnetBadge>
      </div>

      <p className="font-myYekanFaNumRegular text-sm mt-4 mb-2 text-text-300">
        تاریخ سند ۱۴۰۳/۱/۱۶
      </p>

      <div className="font-myYekanFaNumRegular text-text-300 text-sm mb-4">
        سازمان امور مالیاتی کشور در راستای اجرای آیین نامه اجرایی ماده ۲۴ قانون
        بهبود مستمر محیط کسب و کار، پیش نویس دستورالعمل درخصوص اصلاح بند ۱۰
        دستورالعمل دادرسی مالیاتی موضوع بخشنامه ۱۱۷۳۰۰ را با هدف ملاحظه و اعلام
        نظر عموم مردم و فعالان اقتصادی در پایگاه ملی اطلاع رسانی قوانین و مقررات
        کشور منتشر نمود.
      </div>

      <ShowMoreButton></ShowMoreButton>

      <div className="flex flex-row gap-4 mt-4">
        <img src={linkedin} alt="linkedin" className="w-6 h-6" />
        <img src={tel} alt="tel" className="w-6 h-6" />
        <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
        <img src={instagram} alt="instagram" className="w-6 h-6" />
      </div>

      <div className="min-w-[1056px] border-t mt-6 pt-6 text-sm">
        <p className="font-myYekanMedium mb-4">نظرات و پیشنهادات</p>

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          نوشتن نظر
        </label>
        <textarea
          id="message"
          className="block w-[480px] h-[112px] p-2.5 text-sm text-text-100 rounded-lg border border-neutral-100"
          placeholder="نظر خود را بنویسید"
        ></textarea>

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
          امتیازدهی
        </label>

        <div className="w-[480px] h-[112px] border border-neutral-100 rounded-lg p-4">
          <div className="flex flex-row justify-between">
            <label className="block text-sm font-medium text-text-500 dark:text-white">
              امتیاز شما
            </label>
            <p className="font-myYekanRegular text-text-200 text-sm">
              بسیار خوب
            </p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img src={emoji} alt="" className="mt-4" />
            <input
              type="range"
              className="w-full mt-4 accent-primary-500"
              min="0"
              max="4"
              step="1"
            />
          </div>
        </div>

        <CustomButton
          text={"ارسال نظر"}
          className={
            "bg-primary-500 w-[152px] h-[40px] text-white font-myYekanMedium text-base mt-4"
          }
        ></CustomButton>
      </div>
    </div>
  );
}
