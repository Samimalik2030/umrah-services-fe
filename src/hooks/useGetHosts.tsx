import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetHosts = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["hosts", page],
    queryFn: () =>
      http.hosts.hostControllerIndex({
        page: page,
        limit: 10,
      }),
  });
  const hosts = data?.data;

  return { hosts, isLoading };
};

export default useGetHosts;
