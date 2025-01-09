import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import http from "../http";

const useGetInterviews = () => {
  const { accessToken } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["interviews"],
    queryFn: () =>
      http.interviews.interviewControllerIndex({
        page: 1,
        limit: 10
      }),
    enabled: !!accessToken
  });
  const interviews = data?.data.data;
  return { interviews, isLoading };
};

export default useGetInterviews;
