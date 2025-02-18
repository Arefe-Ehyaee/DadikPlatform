import { useState, useEffect } from "react";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";
import BannerFour from "./BannerFour";
import BannerFive from "./BannerFive";
import BannerNextButton from "./BannerNextButton";
import BannerPreviousButton from "./BannerPreviousButton";

const banners = [BannerOne, BannerTwo, BannerThree, BannerFour, BannerFive];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = banners.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentBanner = banners[current];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative">
        <CurrentBanner />
      </div>

      <div className="absolute z-30 flex lg-xl:-translate-x-1/4 -translate-x-1/2 bottom-2 left-1/3 gap-1 bg-primary-200 px-2 py-[2px] rounded-full w-[52px]">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-1 rounded-full ${
              index === current ? "bg-primary-800 w-1 h-1" : "bg-white w-1 h-1"
            }`}
          />
        ))}
      </div>

      <div className="absolute font-myYekanMedium text-sm text-white left-5 bottom-2 flex flex-row gap-4">
        <BannerPreviousButton setCurrent={setCurrent} current={current} totalSlides={totalSlides} />
        <BannerNextButton setCurrent={setCurrent} current={current} totalSlides={totalSlides} />
      </div>
    </div>
  );
};

export default BannerCarousel;
