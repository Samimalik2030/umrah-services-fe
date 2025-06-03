import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetCityManagers = (name?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["managers", name],
    queryFn: () => http.cityOfficers.cityOfficerControllerFindAll(),
  });
  const managers = data?.data;

  return { managers, isLoading };
};

export default useGetCityManagers;
