import previous from "../../assets/icons/previous.svg"

interface PreviousButtonProps {
    handleOnClick?: () => void;
}

const PreviousButton = ({
    handleOnClick,
}: PreviousButtonProps) => {

    return (
        <button onClick={handleOnClick} className={"border border-primary-500 bg-white text-primary-500 text-sm font-myYekanRegular w-10 h-10 py-[10px] rounded-lg"} dir="rtl">
            <img src={previous} alt="logo" className="h-4 w-4 mx-auto" />
        </button>
    );
};

export default PreviousButton;
