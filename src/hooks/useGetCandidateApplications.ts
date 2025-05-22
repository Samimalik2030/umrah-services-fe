import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetCandidateApplications = (candidateId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["applications", candidateId],
    queryFn: () =>
      http.applications.applicationControllerFindApplicationsByCandidate(candidateId)
  });
  const candidateApplications = data?.data;

  return {candidateApplications, isLoading };
};

export default useGetCandidateApplications;
