import closeIcon from "../../assets/icons/Dark-x-circle.svg";
import taavon from "../../assets/icons/taavon.svg"
import DepartmentItem from "./Departmentitem";
import maliat from "../../assets/icons/maliat.svg"
import refah from "../../assets/icons/refah.svg"
import ghoveGhazaee from "../../assets/icons/ghoveGhazaee.svg"
import education from "../../assets/icons/education.svg"
import test from "../../assets/icons/departmentLogoDefault.svg"
import { ReactComponent as SearchIcon } from '../../assets/icons/searchEngine.svg';
import { useState } from "react";

interface SearchSelectDepartmentProps {
    onClick?: () => void;
    onSelect?: (department: string) => void;
}

export default function SearchSelectDepartmentModal({ onClick, onSelect }: SearchSelectDepartmentProps) {

    // const [selectedDepartment, setSelectedDepartment] = useState("");

    const handleDepartmentSelect = (department: string) => {
        // console.log("department", department);
        // alert(department);
        // setSelectedDepartment(department);
      };

      
    return (
        <div className=" flex flex-col bg-white w-[320px] rounded-lg h-[372px]">
            <div className="flex flex-row items-center border-b justify-between px-4">
                <p className="text-text-200 text-sm font-myYekanMedium py-[14px]">
                    انتخاب سازمان
                </p>
                <button onClick={onClick}>
                    <img
                        src={closeIcon}
                        alt="close"
                        className="w-5 h-5 mr-2 ml-[10px]"
                    />
                </button>
            </div>

            <div className="relative">
                <input
                    className="min-w-[288px] h-[40px] border rounded-lg mx-4 mt-2 px-2"
                    placeholder="جستجو"
                />

                <button
                    type="button"
                    className="absolute h-[40px] mt-2 left-6"
                >
                    <SearchIcon className="my-auto mx-auto text-text-100"></SearchIcon>
                </button>
            </div>

            <div className="flex flex-col gap-1 mt-2 pb-2 h-[256px] px-1">
                <div className="overflow-y-auto overflow-x-hidden scrollbar-webkit">
                    <DepartmentItem title={"وزارت تعاون"} logo={taavon} onSelect={handleDepartmentSelect}></DepartmentItem>
                    <DepartmentItem title={"سازمان امور مالیاتی"} logo={maliat} onSelect={handleDepartmentSelect}></DepartmentItem>
                    <DepartmentItem title={"سازمان تعاون و رفاه اجتماعی"} logo={refah} onSelect={handleDepartmentSelect}></DepartmentItem>
                    <DepartmentItem title={"قوه قضايیه"} logo={ghoveGhazaee} onSelect={handleDepartmentSelect}></DepartmentItem>
                    <DepartmentItem title={"وزارت آموزش و پروش"} logo={education} onSelect={handleDepartmentSelect}></DepartmentItem>
                    <DepartmentItem title={"دبیر خانه شورای عالی مناطق آزاد تجاری - صنعتی و ویژه اقتصادی"} logo={test} onSelect={handleDepartmentSelect}></DepartmentItem>
                </div>
            </div>

        </div>
    )
}