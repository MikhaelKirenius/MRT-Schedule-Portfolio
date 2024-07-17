import React from 'react';
import { Schedule } from '@/app/models/schedulesModel';

interface ScheduleCardProps {
  schedule: Schedule;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{schedule.stasiun_name}</h2>
        <p>Arah: {schedule.arah}</p>
        <p>Jadwal: {schedule.jadwal}</p>
      </div>
    </div>
  );
};

export default ScheduleCard;
