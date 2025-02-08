import SideNavbar from "../../components/SideNavbar";
import TopBar from "../../components/Topbar/TopBar";
import Banner from "../../components/Banner";
import Header from "../../components/Header";

interface MainLayoutProps {
  mainComponents?: JSX.Element;
}

export default function MainLayout({ mainComponents}: MainLayoutProps) {
  
  return (
    
    <div className="min-h-screen flex flex-col overflow-hidden">
      <TopBar></TopBar>
      <div className="flex flex-1">
        <SideNavbar></SideNavbar>
        <div className="flex flex-1 flex-col mr-[272px] bg-background-550 px-8 calc(100vh - 4rem) ">
          {/* top Section */}
          <div className="flex-1">
            <Header></Header>
            <Banner></Banner>
          </div>

          {mainComponents}

        </div>
      </div>
    </div>
  );
}
