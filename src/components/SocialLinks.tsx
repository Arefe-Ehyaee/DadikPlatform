import tel from "../assets/icons/Telegram.svg";
import whatsapp from "../assets/icons/WhatsApp.svg";
import linkedIn from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram-1-svgrepo-com 1.svg";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-[24px]">
    <img src={linkedIn} alt="linkedIn" className="h-8 w-8" />
    <img src={instagram} alt="instagram" className="h-8 w-8" />
    <img src={whatsapp} alt="whatsapp" className="h-8 w-8" />
    <img src={tel} alt="tel" className="h-8 w-8" />
  </div>
  )
}
