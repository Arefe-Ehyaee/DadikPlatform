import JalaliCalendar from "./JalaliCal";
import { ReactComponent as Grid } from "../../assets/icons/newIcons/grid-01.svg";
import { NavLink } from "react-router-dom";

export default function WorkTableComponent() {

  return (
    <div className="flex-1">
      <div className="flex flex-row bg-white w-[248px] h-12 rounded-lg p-1 mt-4">
      <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm w-[120px] h-10 rounded bg-white text-secondary-500 ${
                  isActive
                    ? " text-primary-500 bg-primary-50"
                    : "hover:bg-secondary-50 hover:text-secondary-500 "
                }`
              }
            >
              <Grid />
              <span>پیشخوان</span>
            </NavLink>


        <NavLink
              to="/worktable"
              className={({ isActive }) =>
                `flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm w-[120px] h-10 rounded bg-secondary-50 text-secondary-500 ${
                  isActive
                    ? " text-primary-500 bg-primary-50"
                    : " hover:text-primary-500 hover:bg-primary-50"
                }`
              }
            >
              <Grid />
              <span>میزکار</span>
            </NavLink>
      </div>

      <JalaliCalendar></JalaliCalendar>
    </div>
  );
}
