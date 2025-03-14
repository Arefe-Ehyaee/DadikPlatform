interface OnlineChatModalProps {
  showModal: boolean;
  onClose?: () => void;
  className?: string;
  mainComponent?: JSX.Element;
  children?:React.ReactNode
}

const OnlineChatModaltemplate = ({
  showModal,
  onClose,
  className,
  mainComponent,
  children
}: OnlineChatModalProps) => {

  
  return (
    <div   
      className={`fixed -bottom-5 right-64 z-50 flex flex-col items-center justify-center${className} ${showModal ? "visible bg-black-100/40" : "invisible"}`}
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

export default OnlineChatModaltemplate;
