import SideNavbar from "../../components/SideNavbar";
import TopBar from "../../components/Topbar/TopBar";
import Header from "../../components/Header";
import SecondaryHeader from "../../components/SecondaryHeader ";

interface SecondaryLayoutProps {
  mainComponents?: JSX.Element;
  title: string;
}

export default function SecondaryLayout({
  mainComponents,
  title,
}: SecondaryLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <TopBar></TopBar>
      <div className="flex flex-1">
        <SideNavbar></SideNavbar>
        <div className="flex flex-1 flex-col mr-[272px] px-8 bg-background-550 calc(100vh - 4rem) ">
          {/* top Section */}
          <div className="flex-1">
            <SecondaryHeader></SecondaryHeader>
          </div>

          <p className="font-myYekanMedium text-base mb-4">{title}</p>

          <div>{mainComponents}</div>
        </div>
      </div>
    </div>
  );
}
