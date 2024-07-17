// src/models/Schedule.ts
export interface Schedule {
  id: number;
  station_id: number;
  stasiun_name: string;
  arah: string;
  jadwal: string;
}

export interface ScheduleResponse {
  data: Schedule[];
}
