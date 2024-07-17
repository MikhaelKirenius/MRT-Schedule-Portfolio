import { getAllStations } from '@/app/services/station';
import { useQuery } from 'react-query';

const useStationsModel = () => {
    const stations = useQuery({
        queryKey: ['stations'],
        queryFn: () => getAllStations (),
    });

    
    return stations;
};

export default useStationsModel;

