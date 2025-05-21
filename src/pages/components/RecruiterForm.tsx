import {
  Stack,
  TextInput,
  Select,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Recruiter } from "../../http/Api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";

function RecruiterForm({
  onClose,
  recruiter,
  district,
}: {
  onClose: () => void;
  recruiter?: Recruiter;
  district?: string;
}) {
  const form = useForm({
    initialValues: {
      name: recruiter?.user?.fullName || "",
      email: recruiter?.user?.email || "",
      district: district || recruiter?.district,
      phone: recruiter?.phone || "",
      cnic: recruiter?.cnic || "",
      gender: recruiter?.gender || "",
      address: recruiter?.address || "",
      qualification: recruiter?.qualification || "",
    },
  });
console.log(district)
  const queryClient = useQueryClient();

  const { mutate: createRecruiter, isPending: loading } = useMutation({
    mutationFn: http.recruiters.recruiterControllerCreate,
  });
  const { mutate: updateofficer, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ recruiterId, data }: { recruiterId: string; data: any }) =>
      http.recruiters.recruiterControllerUpdate(recruiterId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recruiters"] });
      onClose();
    },
  });

  async function handleRecruiterSubmit(values: any) {
    if (recruiter) {
      updateofficer({ recruiterId: recruiter._id, data: values });
    } else {
      createRecruiter(values, {
        onSuccess: async (data) => {
          if (data.data) {
            onClose();
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["recruiters"] });
          }
        },
      });
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleRecruiterSubmit)}>
      <Stack gap="md">
        <TextInput
          label="Full Name"
          placeholder="Ahmed Khan"
          withAsterisk
          required
            disabled={recruiter?true:false}

          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="ahmed.khan@punjabpolice.gov.pk"
          withAsterisk
          required
            disabled={recruiter?true:false}

          {...form.getInputProps("email")}
        />
        <TextInput
          label="District"
          placeholder="Select district"
          withAsterisk
          value={district}
          disabled
          {...form.getInputProps("district")}
        />
        <TextInput
          label="Phone Number"
          placeholder="03021234567"
          withAsterisk
          required
          {...form.getInputProps("phone")}
        />
        <TextInput
          label="CNIC"
          required
          placeholder="3520112345678"
          withAsterisk
          {...form.getInputProps("cnic")}
        />
        <Select
          label="Gender"
          data={["male", "female"]}
          withAsterisk
          placeholder="Add Gender"
          required
          {...form.getInputProps("gender")}
        />
        <Textarea
          label="Address"
          placeholder="Police Lines, Faisalabad"
          autosize
          minRows={2}
          withAsterisk
          required
          {...form.getInputProps("address")}
        />

        <Select
          data={[
            "Primary",
            "Middle",
            "Matric",
            "Intermediate",
            "DAE (Diploma of Associate Engineering)",
            "Bachelor's",
            "Master's",
            "MPhil",
            "PhD",
          ]}
          label="Qualification"
          required
          placeholder="Bachelor's in Public Administration"
          {...form.getInputProps("qualification")}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">{recruiter ? 'Update Recruiter':"Add Recruiter"}</Button>
        </Group>
      </Stack>
    </form>
  );
}
export default RecruiterForm;
