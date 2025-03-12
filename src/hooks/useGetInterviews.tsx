import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetInterviews = (page: number,name?:string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["interviews", page,name],
    queryFn: () =>
      http.interviews.interviewControllerIndex({
        page: page,
        limit: 10,
        name:name
        
      })
  });
  const interviews = data?.data;
  return { interviews, isLoading };
};

export default useGetInterviews;
