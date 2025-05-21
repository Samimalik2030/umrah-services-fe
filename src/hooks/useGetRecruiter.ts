import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetRecruiters = (district?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["recruiters", district],
    queryFn: () =>
      http.recruiters.recruiterControllerGetAll({
        district: district,
      }),
  });
  const recruiters = data?.data;

  return { recruiters, isLoading };
};

export default useGetRecruiters;
