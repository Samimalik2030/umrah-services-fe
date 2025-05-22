import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetRecruiter = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["recruiter", userId],
    queryFn: () =>
      http.recruiters.recruiterControllerGetRecruiterByUser(userId)
  });
  const recruiter = data?.data;

  return { recruiter, isLoading };
};

export default useGetRecruiter;
