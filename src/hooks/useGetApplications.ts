import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetApplications = (district?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["applications", name],
    queryFn: () =>
      http.applications.applicationControllerFindAll({
        district: district,
      }),
  });
  const applications = data?.data;

  return {applications, isLoading };
};

export default useGetApplications;
