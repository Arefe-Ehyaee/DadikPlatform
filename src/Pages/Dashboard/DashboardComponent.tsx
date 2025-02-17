import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import UserInfoCard from "../../components/UserInfoCard";
import DaysCard from "../../components/DaysCard";
import NewsCard from "../../components/NewsCard";
import ConsultCard from "../../components/ConsultantCard";
import PlansCard from "../../components/PlansCard";
import CurrencyCard from "../../components/CurrencyCard";
import CourseCard from "../../components/CourseCard";
import ChatAIButton from "../../components/Chat/ChatAIButton";
import defaultAvatar from "../../assets/icons/newIcons/defaultAvatarMain.svg";
import { ReactComponent as Grid } from "../../assets/icons/newIcons/grid-01.svg";
import OnlineChatModaltemplate from "../../components/OnlineSupport/OnlineChatModalTemplate";
import OnlineChatModal from "../../components/OnlineSupport/OnlineChatModal";
import AIChatModal from "../../components/Chat/AIChatModal";
import AIChatModaltemplate from "../../components/Chat/AIChatModalTemplate";
import useAuthStore from "../../Stores/authStore";
import {
  calculatePassedDays,
  calculateRemainingDays,
} from "../../utils/daysCardCalculation";
import { WebSocketProvider } from "../../components/OnlineSupport/WebSocketContext";

export default function DashboardComponent() {
  const [showChatModal, setShowChatModal] = useState(false);
  const [showOnlineChatModal, setShowOnlineChatModal] = useState(false);

  const user = useAuthStore((state) => state.user);
  const firstName = user?.name || "نام";
  const lastName = user?.lastName || "نام خانوادگی";
  const avatar = user?.avatar?.trim() || defaultAvatar;
  const subscription = user?.subscription || null; 
  const searchCount = user?.searchCount || 0;
  const billsNumber = user?.billsNumber || 0;
  const planStartDate = user?.subscription?.start_date || "";
  const planEndDate = user?.subscription?.end_date || "";

  const passedDays = planStartDate ? calculatePassedDays(planStartDate) : 0;
  const remainingDays = planEndDate ? calculateRemainingDays(planEndDate) : 0;

  const closeChatModal = useCallback(() => setShowChatModal(false), []);
  const closeOnlineChatModal = useCallback(() => setShowOnlineChatModal(false), []);

  return (
    <div>
      <AIChatModaltemplate showModal={showChatModal} onClose={closeChatModal}>
        <AIChatModal onClick={closeChatModal} />
      </AIChatModaltemplate>

      <OnlineChatModaltemplate showModal={showOnlineChatModal} onClose={closeOnlineChatModal}>
        <WebSocketProvider>
          <OnlineChatModal onClick={closeOnlineChatModal} />
        </WebSocketProvider>
      </OnlineChatModaltemplate>

      <div className="flex-1">
        <div className="flex flex-row bg-white w-[248px] h-12 rounded-lg p-1 mt-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm w-[120px] h-10 rounded ${
                isActive
                  ? "border-primary-500 text-primary-500 bg-secondary-50"
                  : "hover:bg-secondary-50 hover:text-primary-500"
              }`
            }
          >
            <Grid />
            <span>پیشخوان</span>
          </NavLink>

          <NavLink
            to="/worktable"
            className={({ isActive }) =>
              `flex flex-row items-center justify-center gap-2 font-myYekanMedium text-sm w-[120px] h-10 rounded ${
                isActive
                  ? "border-primary-500 text-primary-500 bg-secondary-50"
                  : "hover:bg-secondary-50 hover:text-secondary-500"
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
              name={`${firstName}${firstName && lastName ? " " : ""}${lastName}`}
              avatar={avatar}
              subscription={subscription} 
              billsNumber={billsNumber}
              numberOfSearch={searchCount}
            />
            <DaysCard passedDays={passedDays} remainingDays={remainingDays} />
            <NewsCard lastNewsDate={""} description="سازمان امور مالیاتی اعلام کرد: مهلت ارائه اظهارنامه مالیاتی ..." />
            <ConsultCard onClick={() => setShowOnlineChatModal(true)} />
          </div>

          <div className="w-8/12 flex flex-col gap-4">
            <PlansCard />
            <div className="flex flex-row gap-4">
              <CurrencyCard />
              <div className="flex flex-col">
                <CourseCard />
                <div className="flex flex-row justify-end">
                  <ChatAIButton onClick={() => setShowChatModal(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
