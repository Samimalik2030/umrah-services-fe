import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetProperties = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["properties", id],
    queryFn: () => http.hosts.hostControllerGetProperties(id),
  });

  const properties = data?.data;
  return { properties, isLoading };
};

const useGetPropertyById = (id: string) => {
  const { data, isPending } = useQuery({
    queryKey: ["property", id],
    queryFn: () => http.properties.propertyControllerFind(id),
  });

  const property = data?.data;
  return { property, isPending };
};

export { useGetProperties, useGetPropertyById };
