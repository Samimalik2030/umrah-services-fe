import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetCityOfficer = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["cityOfficer", userId],
    queryFn: () =>
      http.cityOfficers.cityOfficerControllerByUser(userId)
  });
  const cityOfficer = data?.data;

  return { cityOfficer, isLoading };
};

export default useGetCityOfficer;
