import closeIcon from "../../assets/icons/Dark-x-circle.svg";
import taavon from "../../assets/icons/taavon.svg"
import DepartmentItem from "./Departmentitem";
import maliat from "../../assets/icons/maliat.svg"
import refah from "../../assets/icons/refah.svg"
import ghoveGhazaee from "../../assets/icons/ghoveGhazaee.svg"
import education from "../../assets/icons/education.svg"
import test from "../../assets/icons/logoTemplate.png"

interface SearchSelectDepartmentProps {
    onClick?: () => void;
}


export default function SearchSelectDepartmentModal({ onClick }: SearchSelectDepartmentProps) {
    return (
        <div className="flex flex-col bg-white w-[320px] rounded-lg h-[372px]">
            <div className="flex flex-row items-center border-b justify-between px-4">
                <p className="text-text-200 text-sm font-myYekanMedium py-[14px]">
                    انتخاب سازمان
                </p>
                <button onClick={onClick}>
                    <img
                        src={closeIcon}
                        alt="close"
                        className="w-5 h-5  mr-2 ml-[10px]"
                    />
                </button>
            </div>
            <DepartmentItem title={"وزارت تعاون"} logo={taavon}></DepartmentItem>
            <DepartmentItem title={"سازمان امور مالیاتی"} logo={maliat}></DepartmentItem>
            <DepartmentItem title={"سازمان تعاون و رفاه اجتماعی"} logo={refah}></DepartmentItem>
            <DepartmentItem title={"قوه قضايیه"} logo={ghoveGhazaee}></DepartmentItem>
            <DepartmentItem title={"وازرت آموزش و پروش"} logo={education}></DepartmentItem>
            <DepartmentItem title={"دبیر خانه شورای عالی مناطق آزاد تجاری - صنعتی و ویژه اقتصادی"} logo={test}></DepartmentItem>
        </div>
    )
}