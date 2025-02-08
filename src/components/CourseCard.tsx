import { useNavigate } from "react-router-dom";
import course from "../assets/icons/newIcons/course.svg";
import courseDefault from "../assets/icons/newIcons/courseDefault.png";
import ShowMoreButton from "./ShowMoreButton";


export default function CourseCard() {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col bg-white text-sm rounded-lg p-2 min-h-[157px] min-w-[320px]">
      <div className="flex flex-row gap-2 items-center">
        <img src={course} alt="" className="h-6 w-6 rounded-full" />
        <span className="text-text-500 font-myYekanMedium">
          دوره های آموزشی
        </span>
      </div>
      <div className="flex flex-row gap-2 mt-2 mb-4">
        <img src={courseDefault} alt="" className="w-[67px] h-[67px]" />
        <div className="flex flex-col text-text-200 font-myYekanFaNumRegular text-sm">
          <p className="text-justify">با شرکت در دوره‌های آموزشی حقوقی ما، مهارت‌های کلیدی موردنیاز خود را به دست آورید و به یک حرفه‌ای در تنظیم </p>
        </div>
      </div>
      <ShowMoreButton onClick={() => navigate('/trainingCourses')}></ShowMoreButton>

    </div>
  );
}
