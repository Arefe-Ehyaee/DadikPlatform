import down from "../../assets/icons/down.svg";
import up from "../../assets/icons/up.svg";
import defaultAvatarRound from "../../assets/icons/defaultAvatar-rounded.svg";
import notif from "../../assets/icons/newIcons/notif.svg";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import ProfileModalTemplate from "./ProfileModalTemplate";
import NotifModalTemplate from "./NotifModalTemplate";
import NotifModal from "./NotifModal";
import NotifMessage from "./NotifMessage";
import userNotif from "../../assets/icons/userNotif.svg";
import courseNotif from "../../assets/icons/courseEnabled.svg";
import tax from "../../assets/icons/reminderTax.svg";
import useAuthStore from "../../Stores/authStore";

export default function TopBar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const firstName = useAuthStore((state) => state.user?.name || 'نام');
  const lastName = useAuthStore((state) => state.user?.lastName || 'نام خانوادگی');
  const avatar = useAuthStore((state) => state.user?.avatar || defaultAvatarRound);

  const toggleNotif = () => {
    setIsNotifOpen((prev) => !prev);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <div className="h-16 min-w-screen right-0 relative flex flex-row items-center bg-background-500 border-neutral-100 border-b-[1px]">
      <div className="absolute left-0 flex flex-row items-center gap-6">
        <button onClick={toggleNotif} className="relative">
          <img src={notif} alt="notif" />
          <span className="absolute bottom-2 left-3 bg-primary-500 text-white font-myYekanFaNumDemiBold rounded-full px-1 min-w-3 h-3 text-[10px]">5</span>
        </button>

        <button onClick={toggleProfileMenu}>
          <div className="flex flex-row items-center bg-white border border-neutral-50 h-10 w-[203px] rounded-[4px] ml-4">
            <img
              src={avatar}
              alt="user"
              className="mx-1 my-1 h-8 w-8 bg-neutral-100 rounded-full"
            ></img>

            <span className="text-sm font-myYekanRegular text-text-500 leading-[18px]">
            {`${firstName} ${lastName}`}
            </span>

            {isProfileMenuOpen ? (
              <img src={up} alt="open" className="w-3 h-[6px] mr-2 ml-[10px]" />
            ) : (
              <img
                src={down}
                alt="close"
                className="w-3 h-[6px] mr-2 ml-[10px]"
              />
            )}
          </div>
        </button>
      </div>
      {isProfileMenuOpen && (
        <ProfileModalTemplate
          showModal={true}
          onClose={() => setIsProfileMenuOpen(false)}
        >
          <ProfileMenu />
        </ProfileModalTemplate>
      )}

      {isNotifOpen && (
        <NotifModalTemplate
          showModal={true}
          onClose={() => setIsNotifOpen(false)}
        >
          <NotifModal onClick={toggleNotif}>
            <NotifMessage
              title={"برای خرید طرح پروفایل خود را تکمیل کنید"}
              time={"2 ساعت پیش"}
              icon={userNotif}
            />
            <NotifMessage
              title={"۳ روز تا فرا رسیدن اظهار نامه مالیاتی"}
              time={"2 ساعت پیش"}
              icon={tax}
            />
            <NotifMessage
              title={"دوره آموزشی خریداری شده فعال شد"}
              time={"2 ساعت پیش"}
              icon={courseNotif}
            />
            <NotifMessage
              title={"دریافت پاسخ از کارشناس حقوقی"}
              time={"2 ساعت پیش"}
              icon={userNotif}
            />
            <NotifMessage
              title={"برای خرید طرح پروفایل خود را تکمیل کنید"}
              time={"2 ساعت پیش"}
              icon={userNotif}
            />
          </NotifModal>
        </NotifModalTemplate>
      )}
    </div>
  );
}
