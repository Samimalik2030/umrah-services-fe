import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetNotifications = (page: number) => {
  const { data, isPending: gettingNotifications } = useQuery({
    queryKey: ["notifications", page],
    queryFn: () =>
      http.notifications.notificationControllerIndex({
        page,
        limit: 50
      })
  });

  const notifications = data?.data;
  return { notifications, gettingNotifications };
};

export default useGetNotifications;
