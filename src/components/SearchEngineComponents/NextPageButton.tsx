import next from "../../assets/icons/next.svg"

interface NextPageButtonProps {
    text: string;
    handleOnClick?: () => void;
    disabled?: boolean;
}

const NextPageButton = ({
    text,
    handleOnClick,

}: NextPageButtonProps) => {

    return (
        <button onClick={handleOnClick} className={"bg-primary-500 text-white text-sm font-myYekanRegular w-[120px] h-[40px] py-[10px] rounded-lg"} dir="rtl">
            <div className="flex flex-row items-center gap-3 justify-center">
                {text && <span className="text-center">{text}</span>}
                <img src={next} alt="logo" className="h-3 w-[6px]" />
            </div>

        </button>
    );
};

export default NextPageButton;
