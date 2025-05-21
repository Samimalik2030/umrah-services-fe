import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetJobs = (title?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs", title],
    queryFn: () => http.jobs.jobsControllerFindAll({ title: title }),
  });
  const jobs = data?.data;

  return { jobs, isLoading };
};

export default useGetJobs;
