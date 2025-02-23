import closeIcon from "../../assets/icons/Dark-x-circle.svg";
import taavon from "../../assets/icons/taavon.svg";
import DepartmentItem from "./Departmentitem";
import maliat from "../../assets/icons/maliat.svg";
import refah from "../../assets/icons/refah.svg";
import ghoveGhazaee from "../../assets/icons/ghoveGhazaee.svg";
import education from "../../assets/icons/education.svg";
import test from "../../assets/icons/departmentLogoDefault.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchEngine.svg";
import { useState } from "react";

interface SearchSelectDepartmentProps {
  onSelect?: (department: string) => void;
  modalWidth?: number | null;
}

export default function SearchSelectDepartmentModal({
  onSelect,
  modalWidth,
}: SearchSelectDepartmentProps) {
  const handleDepartmentSelect = (department: string) => {
    onSelect && onSelect(department);
  };

  return (
    <div
      className="absolute flex flex-col bg-white max-w-[384px] w-full rounded-lg h-[332px] border border-neutral-100 px-2 py-4 z-1000"
      style={{ minWidth: modalWidth ?? "384px" }}
    >
      <div className="overflow-y-auto overflow-x-hidden scrollbar-webkit px-1">
        <div className="relative">
          <input
            className="w-full h-[40px] border rounded-lg px-2"
            placeholder="جستجو"
          />

          <button type="button" className="absolute left-2 mt-3">
            <SearchIcon className="my-auto mx-auto text-text-100"></SearchIcon>
          </button>
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <DepartmentItem
            title={"سازمان امور مالیاتی"}
            logo={maliat}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"سازمان تامین اجتماعی"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"سازمان تعاون و رفاه اجتماعی"}
            logo={refah}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"وزارت تعاون"}
            logo={taavon}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"قوه قضايیه"}
            logo={ghoveGhazaee}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"وزارت آموزش و پروش"}
            logo={education}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"مجلس شورای اسلامی"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"شورای نگهبان"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"ستاد ملی جمعیت"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"وزارت اقتصاد و امور دارایی"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"گمرک جمهوری اسلامی ایران"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"سازمان بورس و اوراق بهادار"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"خزانه داری کل کشور"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"سازمان خصوصی سازی"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"شورای عالی بیمه"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"وزارت اطلاعات"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"شورای عالی مسکن"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"وزارت علوم تحقیقات و فناوری"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={"سازمان ثبت احوال کشور"}
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
          <DepartmentItem
            title={
              "دبیر خانه شورای عالی مناطق آزاد تجاری - صنعتی و ویژه اقتصادی"
            }
            logo={test}
            onSelect={handleDepartmentSelect}
          ></DepartmentItem>
        </div>
      </div>
    </div>
  );
}
