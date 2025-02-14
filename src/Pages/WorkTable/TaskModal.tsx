import React from "react";
import jalaliMoment, { Moment } from "jalali-moment";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  modalDate: Moment | null;
  modalHour: number | undefined;
  modalTitle: string;
  setModalHour: (hour: number | undefined) => void;
  setModalTitle: (title: string) => void;
  hours: number[];
}

export default function TaskModal({
  isOpen,
  onClose,
  onSave,
  modalDate,
  modalHour,
  modalTitle,
  setModalHour,
  setModalTitle,
  hours,
}: TaskModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-lg p-4 w-full max-w-sm font-myYekanRegular"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-myYekanDemibold mb-4 text-center">
          افزودن کار جدید
        </h3>

        {/* Date display */}
        <div className="mb-4">
          <label className="block mb-1 font-myYekanMedium text-sm">تاریخ:</label>
          <div className="font-myYekanFaNumMedium">
            {modalDate?.format("jYYYY/jMM/jDD")}
          </div>
        </div>

        {/* Hour display or dropdown */}
        {modalHour !== undefined ? (
          <div className="mb-4">
            <label className="block mb-1 font-myYekanMedium text-sm">ساعت:</label>
            <div className="font-myYekanFaNumMedium">{modalHour}:00</div>
          </div>
        ) : (
          <div className="mb-4">
            <label className="block mb-1 font-myYekanMedium text-sm">ساعت کار:</label>
            <select
              className="w-full border p-2 rounded font-myYekanFaNumMedium"
              value={modalHour ?? ""}
              onChange={(e) => {
                const val = e.target.value;
                setModalHour(val === "" ? undefined : Number(val));
              }}
            >
              <option value="" disabled>
                -- انتخاب ساعت --
              </option>
              {hours.map((h) => (
                <option key={h} value={h}>
                  {h}:00
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Task title input */}
        <div className="mb-4">
          <label className="block mb-1 font-myYekanMedium text-sm">عنوان تسک:</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            value={modalTitle}
            onChange={(e) => setModalTitle(e.target.value)}
          />
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            انصراف
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-400"
          >
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
}