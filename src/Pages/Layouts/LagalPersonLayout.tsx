import EntranceFooter from "../../components/EntranceFooter";
import image from "../../assets/images/Frame.png";
import daddik from "../../assets/images/daddik.png";
import arrow from "../../assets/icons/arrow-left.png";
import { useNavigate } from "react-router-dom";
interface LagalPersonLayoutProps {
  back?: boolean;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const LagalPersonLayout = ({
  back,
  title,
  description,
  children,
}: LagalPersonLayoutProps) => {

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <div className="flex flex-col justify-between min-w-[560px] h-[896px] mx-[80px] my-[24px] px-10 py-6 bg-background-500 rounded-lg">
          <div className="flex flex-col items-center justify-end">
            {back ? (<div className="flex items-center justify-center relative">
            <button onClick={() => navigate("/loginWithPassword")}><img src={arrow} alt="back" className="right-[256px] top-[4px] h-6 w-6 absolute" /></button>
            <img src={daddik} className="h-20 w-20"></img>
            </div>) : (<img src={daddik} className="h-20 w-20"></img>)}
            <p className="mt-[24px] mb-[16px] text-text-500 text-xl font-myYekanDemibold">
              {title}
            </p>
            <p className="font-myYekanRegular mb-[24px] text-base text-text-300">
              {description}
            </p>
            {children}
            <EntranceFooter />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={image} className="w-full h-[960px] object-cover"></img>
      </div>
    </div>
  );
};

export default LagalPersonLayout;
