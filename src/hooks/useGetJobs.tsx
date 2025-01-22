import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetJob = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: () => http.jobs.jobControllerShow(id),
  });
  const job = data?.data;

  return { job, isLoading };
};

export { useGetJob };
