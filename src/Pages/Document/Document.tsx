import printIcon from "../../assets/icons/printer.svg";
import DepartmentBadge from "../../components/SearchEngineComponents/DepartmentBadge";
import CustomButton from "../../components/CustomButton";
import star from "../../assets/icons/star-01.svg";
import word from "../../assets/icons/word-svgrepo-com 2.svg";
import pdf from "../../assets/icons/pdf-file-svgrepo-com 2.svg"
import soroosh from "../../assets/icons/soroosh.svg";
import eeta from "../../assets/icons/eeta.svg";
import bale from "../../assets/icons/bale.svg";
import rubika from "../../assets/icons/rubika.svg";
import { useState } from "react";

export default function Document() {

  const [rating, setRating] = useState<number>(4);

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 0:
        return "بد";
      case 1:
        return "متوسط";
      case 2:
        return "خوب";
      case 3:
        return "بسیار خوب";
      case 4:
        return "عالی";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col bg-white min-w-[1104px] mb-4 h-[724px] rounded-2xl mt-0 p-6">
      <div className="overflow-y-auto scrollbar-webkit px-[10px]">
      <div className="flex flex-row justify-between">
        <div className="font-myYekanFaNumMedium text-sm text-text-500">
          شماره سند : ۱۲۳۴۵۶ باب چهارم فصل دوم{" "}
        </div>
        <div className="flex flex-row gap-[15px]">
          <button>
            <img src={pdf} alt="" />
          </button>

          <button>
            <img src={word} alt="" />
          </button>

          <button>
            <img src={printIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
        <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
        <DepartmentBadge department={"سازمان مجلس شورای اسلامی"}></DepartmentBadge>
        <DepartmentBadge department={"دیوان عدالت اداری"}></DepartmentBadge>
        {/* <DocumnetBadge type={"تفسیر"}></DocumnetBadge>
        <DocumnetBadge type={"نامه اصلاحی"}></DocumnetBadge>
        <DocumnetBadge type={"منسوخه"}></DocumnetBadge> */}
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <img src={soroosh} alt="linkedin" className="w-6 h-6" />
        <img src={rubika} alt="tel" className="w-6 h-6" />
        <img src={bale} alt="whatsapp" className="w-6 h-6" />
        <img src={eeta} alt="instagram" className="w-6 h-6" />
      </div>

      <p className="font-myYekanFaNumRegular text-sm mt-4 mb-2 text-text-300">
        تاریخ سند ۱۴۰۳/۱/۱۶
      </p>

      <div className="font-myYekanFaNumRegular text-text-300 text-sm mb-4 leading-8">
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
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
            {getRatingText(rating)}
            </p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img src={star} alt="" className="mt-4" />
            <input
              type="range"
              className="w-full mt-4 accent-primary-500"
              min="0"
              max="4"
              step="1"
              onChange={(e) => setRating(Number(e.target.value))}
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

    </div>
  );
}
