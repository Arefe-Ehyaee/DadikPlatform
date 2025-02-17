import { useState } from "react";
import DepartmentBadge from "../../components/SearchEngineComponents/DepartmentBadge";
import printIcon from "../../assets/icons/printer.svg";
import CustomButton from "../../components/CustomButton";
import star from "../../assets/icons/star-01.svg";
import word from "../../assets/icons/word-svgrepo-com 2.svg";
import pdf from "../../assets/icons/pdf-file-svgrepo-com 2.svg"
import share from "../../assets/icons/share.svg"
import RelatedDocuments from "./RelatedDocuments";
import link from "../../assets/icons/link.svg";
import { useLocation } from "react-router-dom";
import DocumentStateBadge from "../../components/SearchEngineComponents/DocumentStateBadge";

interface DocumentDetailsProps {
    owner: string;
    ownerPost: string;
}

export default function DocumentDetails({ owner, ownerPost}: DocumentDetailsProps) {
    const [rating, setRating] = useState<number>(4);
    const location = useLocation();
    const { documentDate, startDate, endDate, documnetNumber, title } = location.state || {};

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
        <div className="bg-white min-w-[1104px] mb-4 h-[724px] rounded-2xl mt-0 p-6">
            <div className="overflow-y-auto scrollbar-webkit px-[10px]">

                <div className="flex flex-row items-center justify-between bg-white mb-6">
                    <div className="font-myYekanFaNumMedium text-sm text-text-500 min-w-[682px] bg-white">
                        {title}
                    </div>
                    <div className="flex flex-row gap-[15px] min-w-[350px] justify-end">
                        <button>
                            <img src={pdf} alt="" />
                        </button>

                        <button>
                            <img src={word} alt="" />
                        </button>

                        {/* <button>
                            <img src={link} alt="" />
                        </button> */}

                        <button>
                            <img src={printIcon} alt="" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-row gap-6">
                    <div className="flex flex-col bg-white min-w-[682px] h-[640px]">
                        {/* <div className="flex flex-row gap-4 mb-6 min-w">
                            <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                            <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                            <DepartmentBadge department={"سازمان مجلس شورای اسلامی"}></DepartmentBadge>
                            <DepartmentBadge department={"دیوان عدالت اداری"}></DepartmentBadge>
                        </div> */}

                        <div className="flex flex-row justify-between font-myYekanFaNumRegular text-sm text-text-300">
                            <div className="flex flex-row gap-6">
                            <p>شماره سند: {documnetNumber}</p>
                            <p>تاریخ سند: {documentDate}</p>
                            </div>

                            <div className="flex flex-row gap-6">
                            <p>تاریخ شروع اجرا: {startDate}</p>
                            <p>تاریخ پایان اجرا: {endDate}</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4 mt-6 mb-4">
                            <CustomButton
                                text={"تصویر سند"}
                                className={
                                    "border border-primary-500 text-primary-500 text-sm font-myYekanRegular w-[95px] h-[32px] px-[15px] py-[6px] leading-5"
                                }
                            ></CustomButton>

                            <CustomButton
                                iconsrc={share}
                                text={"اشتراک گذاری"}
                                className={
                                    "border border-primary-500 text-primary-500 text-sm font-myYekanRegular w-[137px] h-[32px] px-[15px] py-[6px] leading-5"
                                }
                            ></CustomButton>
                        </div>

                        <div className="font-myYekanFaNumRegular text-text-300 text-sm mb-4 leading-8 text-justify">
                            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.

                            <div className="flex flex-col gap-2 font-myYekanFaNumRegular text-left text-sm my-6">
                                <p>{owner}</p>
                                <p>{ownerPost}</p>
                            </div>

                            <div className="flex flex-row flex-wrap items-center gap-2 py-[26px] border-t-[1px] border-neutral-100 font-myYekanRegular text-sm text-text-500">
                                مرجع وضع : 
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"سازمان امور مالیاتی"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>
                                <DepartmentBadge department={"قوه قضاییه"}></DepartmentBadge>

                            </div>

                            <div className="flex flex-row flex-wrap items-center gap-2 py-[26px] border-t-[1px] border-neutral-100 font-myYekanRegular text-sm text-text-500">
                                وضعیت سند : 
                                <DocumentStateBadge state={"معتبر"}></DocumentStateBadge>
                                <DocumentStateBadge state={"منسوخ شده"}></DocumentStateBadge>
                                <DocumentStateBadge state={"حذف شده"}></DocumentStateBadge>

                            </div>

                            <div className="py-[26px] border-y-[1px] border-neutral-100 font-myYekanRegular text-sm text-text-500">
                                مواردی که روی سند اثر گذاشته
                            </div>
                        </div>


                        <div>
                            <p className="font-myYekanMedium mb-4">نظرات و پیشنهادات</p>

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                نوشتن نظر
                            </label>
                            <textarea
                                id="message"
                                className="block w-full h-[112px] p-2.5 text-sm text-text-100 rounded-lg border border-neutral-100"
                                placeholder="نظر خود را بنویسید"
                            ></textarea>

                            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                امتیازدهی
                            </label>

                            <div className="min-w-[682px] h-[112px] border border-neutral-100 rounded-lg p-4">
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

                    <div className="bg-white min-w-[350px] h-[640px]">
                        <RelatedDocuments></RelatedDocuments>
                    </div>
                </div>

            </div>
        </div>
    )
}