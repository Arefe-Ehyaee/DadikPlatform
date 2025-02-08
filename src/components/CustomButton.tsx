
interface ButtonProps {
    text: string;
    iconsrc?: string | null;
    className: string;
    children?: React.ReactNode;
    handleOnClick?: () => void;
    size?: "small" | "medium" | "large"; 
    type?: "button" | "submit";
    disabled?: boolean;
  }
  
  const CustomButton = ({
    text,
    iconsrc,
    className = "",
    handleOnClick,
    children,
    size = "small", 
    type = "button",
    disabled = false,
  }:ButtonProps) => {
    const baseStyle =
      " flex align-middle text-center items-center justify-center gap-2 rounded-[6px] text-sm text-center font-isf";
    
    const sizeStyle = {
      small: "h-[32px] px-4 py-2",
      medium: "h-9 px-4 py-2",
      large: "h-[40px] px-[15px] py-4",
    };
  
  
    return (
      <button disabled={disabled}  type={type} onClick={handleOnClick} className={`${baseStyle} ${sizeStyle[size]} ${className}`} dir="rtl">
        {children}
        {iconsrc && <img src={iconsrc} alt="logo" className="h-4 w-4" />}
        {text && <span className="text-center">{text}</span>}
      </button>
    );
  };
  
  export default CustomButton;
  