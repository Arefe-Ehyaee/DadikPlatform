import file from "../../assets/icons/fileUpload-04.svg";
import img from "../../assets/icons/image-03.svg";

interface UploadFileImgProps {
    onUploadFile: () => void;
    onUploadImage: () => void;
  }

export default function UploadFileImg({onUploadFile, onUploadImage}:UploadFileImgProps) {
  return (
    <div className='w-[136px] h-[76px] rounded-[4px] bg-white flex flex-col p-3 gap-1' style={{
        boxShadow: "0px 0px 2px 0px #0000001F, 0px 2px 4px 0px #00000024",
      }}>
      <button className='hover:bg-neutral-50 rounded-[4px] flex flex-row items-center gap-1 w-[112px] h-6' onClick={()=>onUploadImage()}> 
        <img src={img} alt="img" />
        <p className="text-xs text-text-300">عکس</p>
      </button>
      <button className='hover:bg-neutral-50 rounded-[4px] flex flex-row items-center gap-1 w-[112px] h-6' onClick={()=>onUploadFile()}>
        <img src={file} alt="file" />
        <p className="text-xs text-text-300">فایل</p> 
      </button>
    </div>
  )
}
