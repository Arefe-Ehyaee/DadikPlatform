import React, { useState } from "react";
import jalaliMoment, { Moment } from "jalali-moment";
import Header from "./HeaderCalendar";
import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import TaskModal from "./TaskModal";
import TaskItem from "./TaskItem";
import {
  isToday,
  generateISODateTime,
  convertJalaliToGregorian,
} from "../../utils/dateUtils";
import { chunkArray as chunk } from "../../utils/arrayUtils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTasks } from "../../api/fetchTasks";
import { submitTask } from "../../api/postTask";
import { Task } from "./CalendarTypes";

type View = "day" | "week" | "month";

jalaliMoment.locale("fa"); // Set locale

const TaskCalendar: React.FC = () => {
  const {
    data: tasks,
    isError,
    error,
    isLoading,
    refetch: refetchTasks,
  } = useQuery({
    queryKey: ["tasks"], // Unique query key for caching
    queryFn: fetchTasks, // The function to fetch data
    enabled: true, // If set to false, the query will not run automatically
  });

  // const [tasks, setTasks] = useState<Task[]>([]);
  const [view, setView] = useState<View>("month");
  const [currentDate, setCurrentDate] = useState<Moment>(jalaliMoment());

  // ---- MODAL STATE ----
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState<Moment | null>(null);
  const [modalHour, setModalHour] = useState<number | undefined>(undefined);
  const [modalTitle, setModalTitle] = useState("");

  // 24 hours (0..23)
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: (task: Task) => submitTask(task),
    onSuccess: () => {
      console.log("Task submitted successfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Refresh tasks after submission
      setIsModalOpen(false); // Close the modal
    },
    onError: (error) => {
      console.error("Failed to submit task:", error);
      alert("Error submitting task. Please try again.");
    },
  });

  // --- WEEK calculations ---
  const startOfWeek = currentDate.clone().startOf("week");
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.clone().add(i, "day")
  );

  // --- MONTH calculations ---
  const startOfMonth = currentDate.clone().startOf("jMonth"); // 1st of Jalali month
  const endOfMonth = currentDate.clone().endOf("jMonth"); // last day of Jalali month
  const daysInMonthCount = endOfMonth.diff(startOfMonth, "day") + 1;

  const dayOfWeekNumber = startOfMonth.day();
  const offset = (dayOfWeekNumber + 1) % 7;

  const leadingCells: Array<Moment | null> = Array(offset).fill(null);
  const monthDays: Moment[] = Array.from({ length: daysInMonthCount }, (_, i) =>
    startOfMonth.clone().add(i, "day")
  );
  const monthCells: Array<Moment | null> = [...leadingCells, ...monthDays];
  const weeks = chunk(monthCells, 7);

  const tasksForDate = (date: Moment) => {
    const formattedDate = date.format("jYYYY/jMM/jDD"); 
    // console.log('Formatted Date:', formattedDate);
    const filteredTasks = (tasks || []).filter((task) => task.date === formattedDate);
    // console.log('Filtered Tasks:', filteredTasks);
    return filteredTasks;
  };
  
  const renderTasks = (date: Moment, hour?: number) =>
    tasksForDate(date)
      .filter((task) => (hour !== undefined ? task.startHour === hour : true))
      .map((task) => <TaskItem key={task.id} task={task} />);
  

  const goToPrev = () => {
    if (view === "month") {
      setCurrentDate((prev) => prev.clone().subtract(1, "jMonth"));
    } else if (view === "week") {
      setCurrentDate((prev) => prev.clone().subtract(7, "day"));
    } else {
      setCurrentDate((prev) => prev.clone().subtract(1, "day"));
    }
  };

  const goToNext = () => {
    if (view === "month") {
      setCurrentDate((prev) => prev.clone().add(1, "jMonth"));
    } else if (view === "week") {
      setCurrentDate((prev) => prev.clone().add(7, "day"));
    } else {
      setCurrentDate((prev) => prev.clone().add(1, "day"));
    }
  };

  const handleToday = () => {
    // Jump to “today”
    setCurrentDate(jalaliMoment());
  };

  let headerElement: React.ReactNode;
  if (view === "day") {
    const dayNumber = currentDate.format("jD");
    const monthYear = currentDate.format(" jMMMM jYYYY");
    const isCurrentDayToday = isToday(currentDate);

    headerElement = (
      <h2 className="font-myYekanFaNumRegular text-base text-text-500">
        {isCurrentDayToday ? (
          <>
            <span className=" rounded px-1">{dayNumber}</span>
            {monthYear}
          </>
        ) : (
          <>
            {dayNumber}
            {monthYear}
          </>
        )}
      </h2>
    );
  } else {
    headerElement = (
      <h2 className="font-myYekanFaNumRegular text-base text-text-500">
        {currentDate.format("jMMMM jYYYY")}
      </h2>
    );
  }

  // --- MODAL LOGIC ---
  const handleOpenModal = (date: Moment, hour?: number) => {
    setModalDate(date);
    setModalHour(hour ?? undefined);
    setModalTitle("");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalDate(null);
    setModalHour(undefined);
    setModalTitle("");
  };

  const handleCreateTask = () => {
    if (!modalDate) return;
    if (!modalTitle.trim()) return;

    if (modalHour === undefined) {
      alert("لطفا ابتدا ساعت کار را مشخص کنید");
      return;
    }

    const jalaliDate = modalDate.format("jYYYY-jMM-jDD");
    const gregorianDate = convertJalaliToGregorian(jalaliDate);


    if (gregorianDate === "Invalid Date") {
      alert("تاریخ جلالی نامعتبر است. لطفا تاریخ را به درستی وارد کنید.");
      return;
    }

    const isoDateTime = generateISODateTime(modalDate, modalHour);

    const newTask: Task = {
      id: 0,
      title: modalTitle,
      date: jalaliDate,
      gregorianDate: gregorianDate,
      startHour: modalHour,
      isoDateTime: isoDateTime,
      deadline: isoDateTime
    };

    // setTasks((prev) => [...prev, newTask]);
    handleCloseModal();
    // console.log("newTask", newTask);
    mutation.mutate(newTask);
    console.log(tasks)
  };

  return (
    <div>
      {/* Header with Navigation */}
      <Header
        view={view}
        setView={setView}
        headerElement={headerElement}
        goToPrev={goToPrev}
        goToNext={goToNext}
        handleToday={handleToday}
      />

      {/* Calendar Container */}
      <div
        className="
          p-3 
          mx-auto 
          rounded-xl 
          h-[450px] 
          min-w-[1104px] 
          bg-white
          mb-8 
          shadow-lg 
          font-myYekanRegular
        "
      >
        <div className="h-full overflow-y-auto scrollbar-webkit">
          {/* Render the appropriate view */}
          {view === "day" && (
            <DayView
              hours={hours}
              currentDate={currentDate}
              tasks={tasks || []}
              renderTasks={renderTasks}
              handleOpenModal={handleOpenModal}
            />
          )}

          {view === "week" && (
            <WeekView
              hours={hours}
              daysOfWeek={daysOfWeek}
              tasks={tasks || []}
              renderTasks={renderTasks}
              handleOpenModal={handleOpenModal}
            />
          )}

          {view === "month" && (
            <MonthView
              weeks={weeks}
              renderTasks={renderTasks}
              handleOpenModal={handleOpenModal}
            />
          )}
        </div>
      </div>

      {/* ------------------- MODAL ------------------- */}
      {/* Conditionally Render the Modal */}
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleCreateTask}
          modalDate={modalDate}
          modalHour={modalHour}
          modalTitle={modalTitle}
          setModalHour={setModalHour}
          setModalTitle={setModalTitle}
          hours={hours}
        />
      )}
    </div>
  );
};

export default TaskCalendar;
