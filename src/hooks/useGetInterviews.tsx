import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetInterviews = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["interviews", page],
    queryFn: () =>
      http.interviews.interviewControllerIndex({
        page: page,
        limit: 10
      })
  });
  const interviews = data?.data;
  return { interviews, isLoading };
};

export default useGetInterviews;
