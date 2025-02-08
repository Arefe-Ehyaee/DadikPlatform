import {ReactComponent as Grid} from "../assets/icons/newIcons/grid-01.svg";
import {ReactComponent as Search} from "../assets/icons/newIcons/search-sm.svg";
import {ReactComponent as Book} from "../assets/icons/newIcons/file-04.svg";
import {ReactComponent as Line} from "../assets/icons/newIcons/line-chart-up-03.svg";
import {ReactComponent as Tree} from "../assets/icons/newIcons/dataflow-04.svg";
import {ReactComponent as History} from "../assets/icons/newIcons/calendar-check-01.svg";
import {ReactComponent as Book2} from "../assets/icons/newIcons/book-open-01.svg";
import {ReactComponent as Check} from "../assets/icons/newIcons/tv-02.svg";
import {ReactComponent as Question} from "../assets/icons/newIcons/help-circle.svg";
import { NavLink } from "react-router-dom";


export default function RouteSelect() {
  return (
    <div className="flex flex-col justify-between font-myYekanRegular text-sm pr-1 pl-7 bg-white">
      <div>
        <ul className="space-y-2 text-text-200">
        <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] transition-colors duration-200 ${
                  isActive
                    ? "border-primary-500 border-l-4 text-primary-500 bg-primary-50"
                    : "hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50"
                }`
              }
            >
              <Grid />
              <span>پیشخوان</span>
            </NavLink>
          </li>


          <li>
          <NavLink
              to="/searchEngine"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] transition-colors duration-200 ${
                  isActive
                    ? "border-primary-500 border-l-4 text-primary-500 bg-primary-50"
                    : "hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50"
                }`
              }
            >
              <Search />
              <span>جستجوی قوانین و مقررات</span>
            </NavLink>
          </li>

          <li>
          <button className="flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50">
          <Book></Book>
              <span className="">دفاعیه هوشمند</span>
            </button>
          </li>

          <li>
          <button className="flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50">
          <Line></Line>
              <span className="">محاسبه گرها</span>
            </button>
          </li>

          <li>
          <button className="flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50">
          <Tree></Tree>
              <span className="">درختواره قوانین و مقررات</span>
            </button>
          </li>

          <li>
          <button className="flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50">
          <History></History>
              <span className="">تاریخچه عملکرد</span>
            </button>
          </li>

          <li>
          <NavLink
              to="/trainingCourses"
              className={({ isActive }) =>
                `flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] transition-colors duration-200 ${
                  isActive
                    ? "border-primary-500 border-l-4 text-primary-500 bg-primary-50"
                    : "hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50"
                }`
              }
            >
              <Book2 />
              <span>دوره های آموزشی و همایش</span>
            </NavLink>
          </li>

          <li>
          <button className="flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50">
          <Check></Check>
              <span className="">آخرین اخبار</span>
            </button>
          </li>

          <li>
          <button className="flex flex-row items-center gap-2 py-[9px] pr-6 w-[268px] h-10 rounded-[4px] hover:border-primary-500 hover:border-l-4 hover:text-primary-500 hover:bg-primary-50">
          <Question></Question>
              <span className="">راهنما</span>
            </button>
          </li>
        </ul>
      </div>

    </div>
  );
}
