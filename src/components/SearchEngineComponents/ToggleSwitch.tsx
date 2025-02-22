import React from "react";
import { UseFormRegister } from "react-hook-form";

interface ToggleButtonProps {
  label: string;
  onChange: (checked: boolean) => void;
  defaultChecked: boolean
}

const ToggleSwitch: React.FC<ToggleButtonProps> = ({ label, onChange, defaultChecked }) => {
  return (
    <label className="flex cursor-pointer items-center space-x-1">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={(e) => onChange(e.target.checked)}
        defaultChecked = {defaultChecked}
      />
      <div className="dark:bg-grey-400-700 border after:border-grey-400-300 dark:border-grey-400-600 peer relative h-[22px] w-[40px] rounded-full bg-white after:absolute after:right-[0px]  after:h-[20px] after:w-[20px] after:rounded-full after:border after:bg-white after:transition-all after:content-[''] focus:ring-white peer-checked:bg-primary-300 peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-0 rtl:peer-checked:after:-translate-x-full dark:peer-focus:ring-grey-400"></div>
      <span className="text-sm text-text-500 ">
        {label}
      </span>   
    </label>
  );
};

export default ToggleSwitch;
