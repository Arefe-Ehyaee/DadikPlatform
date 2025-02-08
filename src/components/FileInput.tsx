import React, { useRef, useState } from "react";
import cloud from "../assets/icons/upload-cloud-01.svg";
import { toast } from "react-toastify";

interface FileInputProps {
  name: string;
  className: string;
  error?: string;
  register: any;
}

const FileInput: React.FC<FileInputProps> = ({
  name,
  register,
  className,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploadMessage, setUploadMessage] = useState("");

  // Prevent default behavior for drag events
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Handle drop event
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      toast.success("فایل با موفقیت انتخاب شد!", {
        className: "toast",
        progressClassName: "fancy-progress-bar",
      }); // If you want to store the dropped files directly,
      // you can do so here using onChange or a custom handler.
      const droppedFiles = event.dataTransfer.files;

      // Option 1: If you are using react-hook-form register,
      // you might programmatically set the files:
      // e.g., setValue(name, droppedFiles);

      // OR

      // Option 2: Trigger the native onChange on inputRef if needed:
      if (inputRef.current) {
        // This is a hacky approach because you can't directly set "files" property.
        // Usually you handle the dropped files yourself. For demonstration:
        // handleFiles(droppedFiles);
      }
    }
  };

  const handleChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      toast.success("فایل با موفقیت انتخاب شد!", {
        className: "toast",
        progressClassName: "fancy-progress-bar",
      });
    }
  };

  return (
    <div className="relative" dir="rtl">
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        dir="rtl"
        {...register(name)}
        ref={(el) => {
          register(name).ref(el);
          inputRef.current = el;
        }}
        // Call *both* your custom function and RHF's onChange.
        onChange={(e) => {
          register(name).onChange(e); // Tell RHF about the change
          handleFileChange(e); // Your own toast / logic
        }}
      />

      <div
        className={`flex flex-col items-center justify-center w-[536px] h-[202px] 
                   border border-grey-400 px-[12px] py-[5px] rounded-[8px] text-xs 
                   font-normal placeholder-grey-400 font-isf cursor-pointer 
                   ${error ? "border-red-500" : ""}
                   ${className}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src={cloud} alt="upload" className="mt-6" />
        <p className="font-myYekanRegular text-sm text-text-500 mt-2">
          برای آپلود فایل کلیک کنید یا فایل را به این قسمت بکشید
        </p>
        <p className="font-myYekanRegular text-xs text-text-200 mt-4">
          فایل را به صورتPNG,PDF,JPEG ارسال نمایید حداکثر حجم مجاز۵۰ مگابایت می
          باشد.
        </p>
        <button
          type="button"
          className="w-[99px] h-8 border border-neutral-100 rounded-[6px] mt-4"
          onClick={handleChooseFile}
        >
          انتخاب فایل
        </button>

        {/* Display success message if any */}
        {uploadMessage && (
          <p className="text-green-600 mt-2 text-sm font-myYekanRegular">
            {uploadMessage}
          </p>
        )}
      </div>

      {error && (
        <div className="absolute top-full right-0 mt-1 text-right w-full">
          <span className="text-text-200 text-sm flex items-center font-myYekanRegular">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default FileInput;
