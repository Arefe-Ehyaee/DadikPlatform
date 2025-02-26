import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LegalPerson from "./Pages/Entrance/LegalPerson";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginWithPassword from "./Pages/Login/LoginWithPassword";
import LoginWithCode from "./Pages/Login/LoginWithCode";
import ForgetPassword from "./Pages/ForgetPass/ForgetPassword";
import SetNewPassword from "./Pages/SetNewPassword/SetNewPassword";
import { ToastContainer } from "react-toastify";
import LoginVerificationCode from "./Pages/Login/LoginVerificationCode";
import VerificationCode from "./Pages/SetNewPassword/VerificationCode";
import InitialSignUp from "./Pages/InitialSignUp/InitialSignUp";
import MainLayout from "./Pages/Layouts/MainLayout";
import DashboardComponent from "./Pages/Dashboard/DashboardComponent";
import WorkTableComponent from "./Pages/WorkTable/WorkTableComponent";
import CoursesPageComponent from "./Pages/Courses/CoursesPageComponent";
import PersonProfile from "./Pages/CompleteProfile/PersonProfile";
import LegalProfile from "./Pages/CompleteProfile/LegalProfile";
import SearchEngine from "./Pages/SearchEngine/SearchEngine";
import SecondaryLayout from "./Pages/Layouts/SecondaryLayout";
import SearchGuide from "./components/SearchEngineComponents/SearchGuide";
import MarketChart from "./components/chart";
import DocumentDetails from "./Pages/Document/DocumentDetail";
import SearchResult from "./components/SearchEngineComponents/SearchResult";
import ProtectedRoute from "./components/ProtectedRoute";
import CompleteProfile from "./Pages/CompleteProfile/CompleteProfile";
import useAuthStore from "./Stores/authStore";
import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient();
  const restoreSession = useAuthStore((state) => state.restoreSession);

  useEffect(() => {
    if (!useAuthStore.getState().user) {
      restoreSession();
    }
  }, []);
  
  
  return (
    <div className="App font-myYekanRegular" dir="rtl">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<LoginWithPassword></LoginWithPassword>}
            ></Route>
            <Route path="/signUp" element={<InitialSignUp />}></Route>
            <Route
              path="/loginWithPassword"
              element={<LoginWithPassword></LoginWithPassword>}
            ></Route>
            <Route
              path="/loginWithCode"
              element={<LoginWithCode></LoginWithCode>}
            ></Route>
            <Route
              path="/loginVerificationCode"
              element={
                <LoginVerificationCode
                  phoneNumber={"09123432324"}
                ></LoginVerificationCode>
              }
            ></Route>
            <Route
              path="/forgetPassword"
              element={<ForgetPassword></ForgetPassword>}
            ></Route>
            <Route
              path="/VerificationCode"
              element={
                <VerificationCode
                  phoneNumber={"09123432324"}
                ></VerificationCode>
              }
            ></Route>
            <Route
              path="/setNewPassword"
              element={<SetNewPassword></SetNewPassword>}
            ></Route>
            {/* <Route
              path="/dashboard"
              element={<MainLayout mainComponents={<DashboardComponent />} />}
            /> */}
            <Route
              path="/worktable"
              element={<MainLayout mainComponents={<WorkTableComponent />} />}
            />

            <Route
              path="/trainingCourses"
              element={<CoursesPageComponent />}
            ></Route>

            {/* <Route path="/test" element={<SearchResult text={"رأی شماره ۲۵۸۷۴۱۰هیأت عمومی دیوان عدالت اداری با موضوع: بطلان اطلاق بند ۷ بخشنامه شماره ۱۳۵۳۰ مورخ ۱۳۸۴/۷/۲۷ سازمان امور مالیاتی کشور راجع به فصل مالیات بر درآمد املاک قانون مالیات های مستقیم و بند ۲ رأی هیأت عمومی شورای عالی مالیاتی به شماره ۱۱۸۱۸/۴/۳۰ مورخ ۱۳۷۶/۱۱/۱۹ در مورد املاکی که به صورت زمین "} />}></Route> */}
            <Route
              path="/searchEngine"
              element={
                <SecondaryLayout
                  mainComponents={<SearchEngine />}
                  title={"جستجوی قوانین و مقررات"}
                />
              }
            ></Route>

            <Route
              path="/documentDetail/:documentType"
              element={
                <SecondaryLayout
                  mainComponents={
                    <DocumentDetails
                      owner={"امیر حسن ثابتی مقدم"}
                      ownerPost={"مدیر کل سازمان امور مالیاتی"}
                    />
                  }
                  title={""}
                />
              }
            />

            <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<MainLayout mainComponents={<DashboardComponent />} />}
              />
              <Route
                path="/CompleteProfile"
                element={
                  <SecondaryLayout
                    mainComponents={<CompleteProfile />}
                    title={"انتخاب نوع کاربر"}
                  />
                }
              />
              <Route path="/personProfile" element={<PersonProfile />}></Route>
              <Route path="/legalProfile" element={<LegalProfile />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
