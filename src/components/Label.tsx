import React from "react";


interface LabelProps {
  name: string;
  necessary: boolean;
}

const Label: React.FC<LabelProps> = ({ name, necessary }) => {
  return (
    <div className="flex items-center space-x-2">
      {necessary && <div className="text-error-500 ml-[4px]">*</div>}
      <div className="text-text-500 font-myYekanRegular text-sm mb-[8px]">{name}</div>
    </div>
  );
};

export default Label;
