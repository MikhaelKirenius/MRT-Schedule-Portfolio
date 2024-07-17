// src/controllers/useSchedules.ts
import { useQuery } from 'react-query';
import { getAllSchedules, getSchedulesById } from '@/app/services/schedules';
import { ScheduleResponse } from '@/app/models/schedulesModel';

export const useSchedules = () => {
  const schedules = useQuery({
    queryKey: ['schedules'],
    queryFn: () => getAllSchedules(),
  });

  return schedules;
};

export const useScheduleById = (id: number) => {
  const scheduleById = useQuery({
    queryKey: ['schedule', id],
    queryFn: () => getSchedulesById(id),
  });

  return scheduleById;
};