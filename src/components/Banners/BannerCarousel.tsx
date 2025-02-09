import { useState, useEffect } from "react";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";


const banners = [BannerOne, BannerTwo]; 

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

      <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-primary-800 w-2 h-2" : "bg-gray-400 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
