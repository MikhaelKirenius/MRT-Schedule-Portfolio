import useStationsModel from '@/app/models/stationModel';

const useStationController = () => {
    const stations = useStationsModel();

    return stations;
}