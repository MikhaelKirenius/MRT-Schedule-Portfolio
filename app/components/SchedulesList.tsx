import React from 'react';
import { Schedule } from '../models/schedulesModel';
import ScheduleCard from './UI/Card';

interface ScheduleListProps {
  schedules: Schedule[];
}

const SchedulesList = ({ schedules }: ScheduleListProps) => {
  return (
    <div className='grid grid-cols-3 gap-3 items-center'>
      {schedules.map((schedule) => (
       <ScheduleCard key={schedule.id} schedule={schedule} />
      ))}
    </div>
  );
};

export default SchedulesList;