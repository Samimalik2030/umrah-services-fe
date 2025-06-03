import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetSalesmans = (city?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["salesmans", city],
    queryFn: () =>
      http.salesman.salesmanControllerGetAll({
       city:city
      }),
  });
  const salesmans = data?.data;

  return { salesmans, isLoading };
};

export default useGetSalesmans;
