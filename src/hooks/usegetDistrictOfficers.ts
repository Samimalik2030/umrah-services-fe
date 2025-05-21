import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetDistrictOfficers = (
  name?: string,
  cnic?: string,
  district?: string
) => {
  const { data, isLoading } = useQuery({
    queryKey: ["officers", name],
    queryFn: () =>
      http.districtOfficers.districtOfficerControllerFindAll({
        cnic: cnic,
        district: district,
        name: name,
      }),
  });
  const officers = data?.data;

  return { officers, isLoading };
};

export default useGetDistrictOfficers;
