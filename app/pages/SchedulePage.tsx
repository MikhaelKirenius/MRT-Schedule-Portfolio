import React, { useEffect } from "react";
import { useSchedules } from "@/app/controllers/schedulesController";
import ScheduleCard from "../components/UI/Card";
import SchedulesList from "../components/SchedulesList";
import DataRender from "../components/DataRender";
const SchedulePage: React.FC = () => {
  const { data, isError, isLoading, isFetching } = useSchedules();

  const schedules = data?.data ?? [];

  if (!schedules.length) return <div>No schedules available.</div>;
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  const filteredSchedule = schedules.filter((schedule) => {
    // Assuming schedule.time is in "HH:MM" format
    return schedule.jadwal >= currentTime;
  });
  return (
    <>
      <DataRender error={isError} isLoading={isLoading} isFetching={isFetching}>
        <SchedulesList schedules={filteredSchedule} />
      </DataRender>
    </>
  );
};
export default SchedulePage;
