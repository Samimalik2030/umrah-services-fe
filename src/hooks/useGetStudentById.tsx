import { useParams } from "react-router-dom";
import http from "../http";
import { useQuery } from "@tanstack/react-query";

const useGetStudentById = () => {
  const params = useParams();
  const studentId = params.studentId;

  const { data, isPending: gettingStudent } = useQuery({
    queryKey: ["student", studentId],
    queryFn: () => http.students.studentControllerGetStudent(studentId || ""),
    enabled: !!studentId
  });

  const student = data?.data;
  return { student, gettingStudent };
};

export default useGetStudentById;
