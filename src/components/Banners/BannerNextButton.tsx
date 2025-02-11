import { FC } from 'react';
import next from "../../assets/icons/previousBlack.svg"

interface BannerNextButtonProps {
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    current: number;
    totalSlides: number;
}

const BannerNextButton: FC<BannerNextButtonProps> = ({ setCurrent, current, totalSlides }) => {
    const handleClick = () => {
        setCurrent((prev) => (prev + 1) % totalSlides); 
    };

    return (


        <div className="bg-white h-8 w-8 rounded-full flex flex-row justify-center cursor-pointer" onClick={handleClick}>
            <img src={next} alt="logo" className="h-3 w-[6px] mx-auto my-auto" />
        </div>
    );
};

export default BannerNextButton;
