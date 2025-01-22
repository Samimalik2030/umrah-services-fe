import { useQuery } from "@tanstack/react-query";
import http from "../http";
import { RequestParams } from "../http/Api";

const useGetCompanies = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["companies", page],
    queryFn: () =>
      http.businesses.businessControllerIndex({
        page: page,
        limit: 10,
      }),
  });
  const companies = data?.data;
  return { companies, isLoading };
};

const useGetCompany = (id: string, params?: RequestParams) => {
  const { data, isLoading } = useQuery({
    queryKey: ["company", id],
    queryFn: () => http.businesses.businessControllerShow(id, params),
  });
  const company = data?.data;

  return { company, isLoading };
};

const useGetCompanyJobs = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs", id],
    queryFn: () => http.businesses.businessControllerGetJobs(id),
  });
  const jobs = data?.data;  
  return { jobs, isLoading };
};


export { useGetCompanies, useGetCompany,useGetCompanyJobs };
