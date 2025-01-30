import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetPropertyApplications = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["applications", page],
    queryFn: () =>
      http.applications.applicationControllerGetPropertyApplications({
        page,
        limit: 10
      })
  });

  const applications = data?.data;
  return { applications, isLoading };
};

export default useGetPropertyApplications;
