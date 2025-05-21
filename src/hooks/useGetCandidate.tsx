import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetCandidate= (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["candidate", userId],
    queryFn: () =>
      http.candidates.candidateControllerByUser(userId)
  });
  const candidate = data?.data;

  return { candidate, isLoading };
};

export { useGetCandidate };
