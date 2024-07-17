import React from 'react';
import { NavLink } from 'react-router-dom';

interface CardStationProps {
  station: any;
}

const CardStation: React.FC<CardStationProps> = ({ station }) => {
  return (
    <div className="card bg-base-200  shadow-xl">
      <div className="card-body w-100 flex flex-row justify-between">
        <h2 className="card-title">{station.stasiun_name}</h2>
        <NavLink to={`/schedules/${station.id}`} className="btn btn-primary">See Schedule</NavLink>
      </div>
    </div>
  );
};

export default CardStation;