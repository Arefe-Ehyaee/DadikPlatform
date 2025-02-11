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

import NotifModal from "./components/Topbar/NotifModal";
import ProtectedRoute from "./components/ProtectedRoute";
import PersonProfile from "./Pages/CompleteProfile/PersonProfile";
import LegalProfile from "./Pages/CompleteProfile/LegalProfile";
import SearchEngine from "./Pages/SearchEngine/SearchEngine";
import SecondaryLayout from "./Pages/Layouts/SecondaryLayout";
import Document from "./Pages/Document/Document";
import SearchGuide from "./components/SearchEngineComponents/SearchGuide";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App font-myYekanRegular" dir="rtl">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginWithPassword></LoginWithPassword>}></Route>
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
            <Route
              path="/dashboard"
              element={<MainLayout mainComponents={<DashboardComponent />} />}
            />
            <Route
              path="/worktable"
              element={<MainLayout mainComponents={<WorkTableComponent />} />}
            />
            <Route
              path="/trainingCourses"
              element={<CoursesPageComponent />}
            ></Route>

            <Route path="/test" element={<NotifModal></NotifModal>}></Route>
            <Route path="/personProfile" element={<PersonProfile />}></Route>
            <Route path="/legalProfile" element={<LegalProfile />}></Route>
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
              path="/document"
              element={
                <SecondaryLayout
                  mainComponents={<Document />}
                  title={"جستجوی قوانین و مقررات"}
                />
              }
            ></Route>

            <Route
              path="/searchGuide"
              element={
                <SecondaryLayout
                  mainComponents={<SearchGuide />}
                  title={"جستجوی قوانین و مقررات"}
                />
              }
            ></Route>

            {/* <Route element={<ProtectedRoute />}>
              <Route
                path="/dashboard"
                element={<MainLayout mainComponents={<DashboardComponent />} />}
              />
              <Route
                path="/worktable"
                element={<MainLayout mainComponents={<WorkTableComponent />} />}
              />
            </Route> */}
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
