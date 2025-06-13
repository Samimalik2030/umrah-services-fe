import { useQuery } from "@tanstack/react-query";
import http from "../http";

const useGetBookings = (city?: string, status?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["bookings", city],
    queryFn: () =>
      http.bookings.bookingControllerGetAllBooking({
        city: city,
        status: status,
      }),
  });
  const bookings = data?.data;

  return { bookings, isLoading };
};

export default useGetBookings;
