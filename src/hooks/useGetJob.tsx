import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetDistrictOfficer = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["officers", userId],
    queryFn: () =>
      http.districtOfficers.districtOfficerControllerByUser(userId)
  });
  const officer = data?.data;

  return { officer, isLoading };
};

export { useGetDistrictOfficer };
