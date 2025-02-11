import { FC } from 'react';
import previous from "../../assets/icons/nextBlack.svg"

interface BannerPreviousButtonProps {
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  current: number;
  totalSlides: number;
}

const BannerPreviousButton: FC<BannerPreviousButtonProps> = ({ setCurrent, current, totalSlides }) => {
  const handleClick = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides); 
  };

  return (
<div className="bg-white h-8 w-8 rounded-full flex flex-row justify-center cursor-pointer" onClick={handleClick}>
<img src={previous} alt="logo" className="h-3 w-[6px] mx-auto my-auto" />
</div>
  );
};

export default BannerPreviousButton;
