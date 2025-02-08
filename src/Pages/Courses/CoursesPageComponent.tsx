import TopBar from "../../components/Topbar/TopBar";
import SideNavbar from "../../components/SideNavbar";
import TrainingCourseCard from "./TrainingCourseCard";

import HeaderSecondary from "../../components/HeaderSecondary";

export default function CoursesPageComponent() {
    
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <TopBar></TopBar>
      <div className="flex flex-1">
        <SideNavbar></SideNavbar>
        <div className="flex flex-1 flex-col mr-[272px] px-8 bg-background-550 calc(100vh - 4rem) ">
          {/* top Section */}
          <div className="flex-1">
            <HeaderSecondary></HeaderSecondary>
          </div>

          <div className="">
            <p className="font-myYekanMedium text-base text-text-500">
              دوره های آموزشی دادیک
            </p>

            <div className="flex flex-row gap-4 mt-6">
              <button className="bg-secondary-50 text-secondary-500 font-myYekanMedium text-sm w-[136px] h-12 rounded-lg">
                همه
              </button>
              <button className="bg-white text-text-500 font-myYekanMedium text-sm w-[136px] h-12 rounded-lg">
                دوره های من
              </button>
              <button className="bg-white font-myYekanMedium text-sm w-[136px] h-12 rounded-lg">
                دوره های رایگان
              </button>
              <button className="bg-white font-myYekanMedium text-sm w-[136px] h-12 rounded-lg">
                برترین دوره ها
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-white min-w-[1104px] mb-8 h-[651px] rounded-2xl mt-4 p-6">
            <div className="overflow-y-auto scrollbar-webkit">
              <TrainingCourseCard
                courseName={"دوره جامع مالی و حسابداری"}
                presenter={"احسان مقدم"}
              ></TrainingCourseCard>
              <TrainingCourseCard
                courseName={"دوره جامع مالی و حسابداری"}
                presenter={"احسان مقدم"}
              ></TrainingCourseCard>
              <TrainingCourseCard
                courseName={"دوره جامع مالی و حسابداری"}
                presenter={"احسان مقدم"}
              ></TrainingCourseCard>
              <TrainingCourseCard
                courseName={"دوره جامع مالی و حسابداری"}
                presenter={"احسان مقدم"}
              ></TrainingCourseCard>
              <TrainingCourseCard
                courseName={"دوره جامع مالی و حسابداری"}
                presenter={"احسان مقدم"}
              ></TrainingCourseCard>
              <TrainingCourseCard
                courseName={"دوره جامع مالی و حسابداری"}
                presenter={"احسان مقدم"}
              ></TrainingCourseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
