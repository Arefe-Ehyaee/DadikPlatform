import idePardazan from "../assets/images/idea.png";
import SocialLinks from "./SocialLinks";

const EntranceFooter = () => {
  return (
    <div className="bg-green-400h">
      <img src={idePardazan} alt="idePardazan" className="h-[50px] w-[128px] mb-2" />
      <div className="mb-2 text-justify font-myYekanRegular text-text-300 text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کا
      </div>
      <div className="mb-2 text-center text-text-500 font-myYekanMedium- text-base">
        www.idepardazan.com
      </div>
      <SocialLinks></SocialLinks>
    </div>
  );
};

export default EntranceFooter;
