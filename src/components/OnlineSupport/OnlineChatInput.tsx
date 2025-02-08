// OnlineChatInput.tsx

import React, { useRef, useState, useEffect } from "react";
import clips from "../../assets/icons/paperclip.svg";
import emoji from "../../assets/icons/face-smile.svg";
import micLight from "../../assets/icons/mic-light.svg";
import micBlue from "../../assets/icons/mic-blue.svg";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import send from "../../assets/icons/Send_blue.svg";
import UploadFileImg from "./UploadFileImg";

interface OnlineChatInputProps {
  onSendMessage: (
    message: string,
    file?: File | Blob,
    fileType?: "audio" | "image" | "document"
  ) => void;
}

export default function OnlineChatInput({ onSendMessage }: OnlineChatInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [uploadMenu, setUploadMenu] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isImage: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      let fileType: "audio" | "image" | "document" | undefined;

      if (file.type.startsWith("audio/")) {
        fileType = "audio";
      } else if (file.type.startsWith("image/")) {
        fileType = "image";
      } else {
        fileType = "document";
      }

      onSendMessage("", file, fileType);

      setInputValue(""); // Clear the input value
      e.target.value = ""; // Reset the file input
      setUploadMenu(false); // Close the upload menu
    }
  };

  const handleUploadFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUploadImage = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleClipClick = () => {
    setUploadMenu(!uploadMenu);
  };

  const addEmoji = (emoji: any) => {
    setInputValue(inputValue + emoji.native);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.start();

      const chunks: BlobPart[] = [];
      recorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        setRecordedBlob(blob);
        onSendMessage("", blob, "audio"); // Include fileType here
      };

      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    });
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stop();
    }
    setIsRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mx-auto mb-6 mt-[72px]">
      <div className="relative">
        <input
          type="text"
          id="AiChat"
          className="flex items-center w-[328px] h-12 border border-neutral-100 rounded-[8px] font-normal placeholder-text-200 text-xs px-10 placeholder-start placeholder:font-myYekanFaNumRegular"
          dir="rtl"
          placeholder={isRecording ? formatTime(recordingTime) : "پیام خود را بنویسید"}
          value={isRecording ? "" : inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isRecording} // Disable input during recording
        />

        {/* Emoji button */}
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowPicker(!showPicker)}
        >
          <img src={emoji} alt="emoji" className="h-6 w-6" />
        </button>

        {/* Paperclip button */}
        <button
          type="button"
          className="absolute left-12 top-1/2 transform -translate-y-1/2"
          onClick={handleClipClick}
        >
          <img src={clips} alt="icon" className="h-6 w-6" />
        </button>

        {/* Hidden File Inputs */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, false)}
          accept="application/pdf"
        />
        <input
          type="file"
          ref={imageInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, true)}
          accept="image/*"
        />

        {/* Microphone/Send button */}
        <button
          type="button"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary-500 w-8 h-8 rounded-lg"
          onClick={
            isRecording
              ? stopRecording
              : inputValue.trim() === ""
              ? startRecording
              : undefined
          }
        >
          {isRecording ? (
            <img src={micBlue} alt="Recording" className="mx-auto" />
          ) : inputValue.trim() === "" ? (
            <img src={micLight} alt="Mic" className="mx-auto" />
          ) : (
            <img src={send} alt="Send" className="mx-auto" />
          )}
        </button>

        {/* Emoji Picker */}
        {showPicker && (
          <div className="absolute bottom-10 right-2 z-10">
            <Picker
              data={data}
              onEmojiSelect={addEmoji}
              theme="light"
              previewPosition="none"
              skinTonePosition="none"
            />
          </div>
        )}

        {/* Upload Menu */}
        {uploadMenu && (
          <div className="absolute bottom-10 left-12 z-10">
            <UploadFileImg onUploadFile={handleUploadFile} onUploadImage={handleUploadImage} />
          </div>
        )}
      </div>
    </form>
  );
}
