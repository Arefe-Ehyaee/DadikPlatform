import { useEffect } from "react";

interface ProfileModalProps {
    showModal: boolean;
    onClose?: () => void;
    className?: string;
    mainComponent?: JSX.Element;
    children?:React.ReactNode;
  }
  
  const NotifModalTemplate = ({
    showModal,
    onClose,
    className,
    mainComponent,
    children
  }: ProfileModalProps) => {
    
  // useEffect(() => {
  //   if (showModal) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [showModal]);
  
    return (
      <div   
        className={`fixed top-[30px] left-[120px] z-50 flex flex-col items-center justify-center${className} ${showModal ? "visible bg-black-100/40" : "invisible"}`}
        onClick={onClose}
        
      >
        <div
          className="flex flex-col items-center justify-center rounded-3xl border-grey-400 bg-grey-100 px-[35px] py-16"
          onClick={(e) => e.stopPropagation()}
        >
          {mainComponent}{children}
        </div>
      </div>
    );
  };
  
  export default NotifModalTemplate;
  