import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetStates = (countryId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["statesInfo", countryId],
    queryFn: () =>
      http.states.stateControllerIndex({ countryId: Number(countryId) }),
    enabled: !!countryId,
  });

  const states = data?.data || [];
  return { states, isLoading };
};
const useGetCities = (stateId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["citiesInfo", Number(stateId)],
    queryFn: () =>
      http.cities.cityControllerIndex({ stateId: Number(stateId) }),
    enabled: !!stateId,
  });

  const cities = data?.data || [];
  return { cities, isLoading };
};

export { useGetStates, useGetCities };
