import React from "react";
import CardStation from "../components/UI/CardStation";
import useStationsModel from "@/app/models/stationModel";
import MainContainer from "../components/containers/MainContainer";
import Modal from "../components/Modal";

interface Station {
  id: number;
  stasiun_name: string;
}
const HomePage = () => {
  const { data, isError, isLoading, isFetching } = useStationsModel();

  return (
    <MainContainer>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4">
          {data?.data?.map((station: Station) => (
            <CardStation key={station.id} station={station} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default HomePage;
