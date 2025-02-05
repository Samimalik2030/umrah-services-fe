import { useQuery } from "@tanstack/react-query";
import http from "../http";
import { City, State } from "../constants/COMMON_INTERFACES";

const useGetStates = (countryId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["statesInfo", countryId],
    queryFn: () => http.states.stateControllerIndex(countryId),
    enabled: !!countryId
  });

  const states: State[] = data?.data || [];
  return { states, isLoading };
};
const useGetCities = (stateId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["citiesInfo", stateId],
    queryFn: () => http.cities.cityControllerIndex(stateId),
    enabled: !!stateId
  });

  const cities: City[] = data?.data || [];
  return { cities, isLoading };
};

export { useGetStates, useGetCities };
