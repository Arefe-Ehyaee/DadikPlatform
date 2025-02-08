import course from "../../assets/images/Course.png";
import presenterImage from "../../assets/images/presenter.png";
import clock from "../../assets/icons/clock.svg";
import file from "../../assets/icons/file-05.svg";
import star from "../../assets/icons/start.svg";

interface CourseCardProp {
  courseName: string;
  presenter: string;
}

export default function TrainingCourseCard({
  courseName,
  presenter,
}: CourseCardProp) {
  return (

    <button className="w-full h-[170px] rounded-xl p-3 bg-background-550 flex flex-row gap-3 items-center mb-4">
      <img src={course} alt={courseName} className="w-[304px] h-[146px]" />

      <div className="flex flex-col gap-4 flex-1">
        <div className="font-myYekanDemibold text-text-500 text-sm text-right">
          {courseName}
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-2">
            <img src={presenterImage} alt="" />
            <p className="text-text-500 font-myYekanRegular text-xs">{`مدرس : ${presenter}`}</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <p className="bg-secondary-50 font-myYekanRegular text-xs border text-secondary-700 rounded-[4px] h-6 min-w-14 py-[2px] px-[5.5px] mr-6">
              پر طرفدار
            </p>
            <p className="text-xs text-text-500 font-myYekanRegular mr-4">
              دوره رایگان
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-1">
            <img src={star} alt="" />
            <p className="text-text-500 font-myYekanFaNumRegular text-xs">
              4.4 (324)
            </p>
          </div>

          <div className="flex flex-row items-center gap-1">
            <img src={file} alt="" />
            <p className="text-text-500 font-myYekanFaNumRegular text-xs">
              7 جلسه
            </p>
          </div>

          <div className="flex flex-row items-center gap-1">
            <img src={clock} alt="" />
            <p className="text-text-500 font-myYekanFaNumRegular text-xs">
              7 ساعت
            </p>
          </div>
        </div>

        {/* price */}
        <div  className="bg-secondary-50 rounded-[4px] h-8 flex flex-row items-center justify-end gap-4 py-[6px] px-3 min-w-[716px]">

          <div className="bg-secondary-500 font-myYekanFaNumRegular rounded-[4px] text-sm text-white flex flex-row items-center py-1 px-[9.5px] w-10 h-6">
          %20
          </div>

          <div className="line-through text-text-200 font-myYekanFaNumRegular text-xs">
            272000
          </div>


          <div className="font-myYekanFaNumRegular text-text-200 text-xs flex flex-row gap-2">
            <p className="font-myYekanFaNumDemiBold text-text-500">3400000</p>
            تومان
          </div>


        </div>
      </div>
    </button>
  );
}
