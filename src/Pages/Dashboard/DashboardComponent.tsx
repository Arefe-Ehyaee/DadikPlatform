import React, { useEffect, useState } from "react";
import UserInfoCard, { UserInfoCardProps } from "../../components/UserInfoCard";
import DaysCard from "../../components/DaysCard";
import NewsCard from "../../components/NewsCard";
import ConsultCard from "../../components/ConsultantCard";
import PlansCard from "../../components/PlansCard";
import CurrencyCard from "../../components/CurrencyCard";
import CourseCard from "../../components/CourseCard";
import ChatAIButton from "../../components/Chat/ChatAIButton";
import defaultAvatar from "../../assets/icons/newIcons/defaultAvatr.png";
import { ReactComponent as Grid } from "../../assets/icons/newIcons/grid-01.svg";
import OnlineChatModaltemplate from "../../components/OnlineSupport/OnlineChatModalTemplate";
import OnlineChatModal from "../../components/OnlineSupport/OnlineChatModal";
import AIChatModal from "../../components/Chat/AIChatModal";
import AIChatModaltemplate from "../../components/Chat/AIChatModalTemplate";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../Stores/authStore";
import {
  calculatePassedDays,
  calculateRemainingDays,
} from "../../utils/daysCardCalculation";
import { WebSocketProvider } from "../../components/OnlineSupport/WebSocketContext";

export default function DashboardComponent() {
  const [showChatModal, setShowChatModal] = useState(false);
  const [showOnlineChatModal, setShowOnlineChatModal] = useState(false);

  // const user = useAuthStore((state) => state.user);
  const firstName = useAuthStore((state) => state.user?.firstName || "");
  const lastName = useAuthStore((state) => state.user?.lastName || "");
  const avatar = useAuthStore((state) => state.user?.avatar || defaultAvatar);
  const plan = useAuthStore(
    (state) => state.user?.subscription.plan || "noPlan"
  );
  const searchCount = useAuthStore((state) => state.user?.searchCount || 0);
  const billsNumber = useAuthStore((state) => state.user?.billsNumber || 0);
  const planStartDate = useAuthStore(
    (state) => state.user?.subscription.start_date || ""
  );
  const planEndDate = useAuthStore(
    (state) => state.user?.subscription.end_date || ""
  );

  const passedDays = calculatePassedDays(planStartDate);
  const remainingDays = calculateRemainingDays(planEndDate);

  return (
    <div>
      <AIChatModaltemplate
        showModal={showChatModal}
        onClose={() => setShowChatModal(false)}
      >
        <AIChatModal onClick={() => setShowChatModal(false)}></AIChatModal>
      </AIChatModaltemplate>

      <OnlineChatModaltemplate
        showModal={showOnlineChatModal}
        onClose={() => setShowOnlineChatModal(false)}
      >
        <WebSocketProvider>
          <OnlineChatModal
            onClick={() => setShowOnlineChatModal(false)}
          ></OnlineChatModal>
        </WebSocketProvider>
      </OnlineChatModaltemplate>

      <div className="flex-1">
        <div className="flex flex-row bg-white w-[248px] h-12 rounded-lg p-1 mt-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm w-[120px] h-10 rounded bg-secondary-50 text-secondary-500 ${
                isActive
                  ? "border-primary-500 text-primary-500 bg-secondary-50"
                  : "hover:bg-secondary-50 hover:text-primary-500 "
              }`
            }
          >
            <Grid />
            <span>پیشخوان</span>
          </NavLink>

          <NavLink
            to="/worktable"
            className={({ isActive }) =>
              `flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm w-[120px] h-10 rounded bg-white text-text-500 ${
                isActive
                  ? "border-primary-500 text-primary-500 bg-secondary-50"
                  : "hover:bg-secondary-50 hover:text-secondary-500 "
              }`
            }
          >
            <Grid />
            <span>میزکار</span>
          </NavLink>
        </div>

        <div className="flex flex-row justify-between gap-4 pt-4 pb-8 lg-xl:pb-2">
          <div className="w-4/12 flex flex-col gap-4">
            <UserInfoCard
              name={`${firstName} و ${lastName}`}
              avatar={avatar}
              plan={plan}
              planStartDate={planStartDate}
              billsNumber={billsNumber}
              numberOfSearch={searchCount}
            ></UserInfoCard>
            <DaysCard
              passedDays={passedDays}
              remainingDays={remainingDays}
            ></DaysCard>
            <NewsCard
              lastNewsDate={""}
              description={
                "سازمان امور مالیاتی اعلام کرد: مهلت ارائه اظهارنامه مالیاتی ..."
              }
            ></NewsCard>
            <ConsultCard
              onClick={() => setShowOnlineChatModal(true)}
            ></ConsultCard>
          </div>

          <div className="w-8/12 flex flex-col gap-4">
            <PlansCard></PlansCard>
            <div className="flex flex-row gap-4">
              <CurrencyCard></CurrencyCard>
              <div className="flex flex-col">
                <CourseCard></CourseCard>

                <div className="flex flex-row justify-end">
                  <ChatAIButton
                    onClick={() => setShowChatModal(true)}
                  ></ChatAIButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
