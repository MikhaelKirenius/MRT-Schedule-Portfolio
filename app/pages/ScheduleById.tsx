import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useScheduleById } from "@/app/controllers/schedulesController";
import ScheduleCard from "../components/UI/Card";

const SchedulePageById: React.FC = () => {
  const [selectedArah, setSelectedArah] = useState("");
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, isFetching } = useScheduleById(parseInt(id ?? ""));
  if (isLoading) return <div>Loading...</div>;
  const schedule = data?.data ?? [];
  if (!schedule.length) return <div>No schedule available.</div>;
  
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  const handleArahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArah(event.target.value);
  };

  const filteredSchedule = schedule
  .filter((schedule) => !selectedArah || schedule.arah == selectedArah)
  .filter((schedule) => {
    // Assuming schedule.time is in "HH:MM" format
    return schedule.jadwal >= currentTime;
  });

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="">
        <label htmlFor="arah">Filter by Arah:</label>
        <select
          id="arah"
          name="arah"
          value={selectedArah}
          onChange={handleArahChange}
          className="ml-2"
        >
          <option value="">All</option>
          <option value="Arah Lebak Bulus">Lebak Bulus</option>
          <option value="Arah Bundaran HI">Bundaran HI</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        
        {filteredSchedule.map((schedule) => (
          <ScheduleCard key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default SchedulePageById;
