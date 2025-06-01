import {createContext, useContext, useEffect, useState} from 'react';
import useQuery from '../hooks/useQuery';
import API_CONFIG from '@/config/api.config';
import { set } from 'date-fns';

const TravellersContext = createContext();

const TravellersContextProvider = ({children}) => {

  const [travellers, setTravellers] = useState([]);
  const { data, pending, error} = useQuery({
    url: API_CONFIG.TRAVELLER.GET_TRAVELLERS
  });

  useEffect(() => {
    if(data){
        setTravellers(data);
    }
  }, [data]);

  const contextValue = {
    travellers,
    setTravellers,
    loading: pending,
    error
  }

  return (
    <TravellersContext.Provider value={contextValue}>
      {children}
    </TravellersContext.Provider>
  );
}

function useTravellerContext() {
  const context = useContext(TravellersContext);
  if(!context) {
    throw new Error(
      'useTravelerContext cannot be used outside of TravelerContextProvider'
    );
  }
  return context;
}

export {useTravellerContext};
export default TravellersContextProvider;