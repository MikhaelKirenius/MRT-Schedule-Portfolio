import React from "react";
import useStationsModel from "@/app/models/stationModel";

interface Station {
  id: number;
  stasiun_name: string;
}

const StationPage: React.FC = () => {
  const { data, isError, isLoading, isFetching } = useStationsModel();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error:</div>;

  return (
   <></>
  );
};

export default StationPage;
