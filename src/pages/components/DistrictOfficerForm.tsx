import { useForm } from "@mantine/form";
import {
  TextInput,
  Select,
  Textarea,
  Button,
  Box,
  Group,
  Stack,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import http from "../../http";
import { DistrictOfficer } from "../../http/Api";

export const districts = [
  "Attock",
  "Bahawalnagar",
  "Bahawalpur",
  "Bhakkar",
  "Chakwal",
  "Chiniot",
  "Dera Ghazi Khan",
  "Faisalabad",
  "Gujranwala",
  "Gujrat",
  "Hafizabad",
  "Jampur",
  "Jhang",
  "Jhelum",
  "Kasur",
  "Khanewal",
  "Khushab",
  "Kot Addu",
  "Lahore",
  "Layyah",
  "Lodhran",
  "Mandi Bahauddin",
  "Mianwali",
  "Multan",
  "Muzaffargarh",
  "Nankana Sahib",
  "Narowal",
  "Okara",
  "Pakpattan",
  "Rahim Yar Khan",
  "Rajanpur",
  "Rawalpindi",
  "Sahiwal",
  "Sargodha",
  "Sheikhupura",
  "Sialkot",
  "Talagang",
  "Taunsa",
  "Toba Tek Singh",
  "Vehari",
  "Murree",
  "Wazirabad",
  "Kahror Pacca",
  "Jaranwala",
  "Kot Momin",
  "Chishtian",
  "Sammundri",
  "Ahmedpur East",
];

export function DistrictOfficerForm({
  onClose,
  officer,
}: {
  onClose: () => void;
  officer?: DistrictOfficer;
}) {
  const form = useForm({
    initialValues: {
      name: officer?.user.fullName || "",
      email:officer?.user.email || "",
      phone:officer?.phone || "",
      cnic:officer?.cnic ||"",
      gender:officer?.gender || "",
      address:officer?.address || "",
      district:officer?.district || "",
      qualification:officer?.qualification || "",
      experience: officer?.experience || "",
    },

    validate: {
      name: (v) => (v.length < 3 ? "Name is too short" : null),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : "Invalid email"),
      phone: (v) => (/^03\d{9}$/.test(v) ? null : "Invalid phone number"),
      cnic: (value) =>
        /^\d{5}-\d{7}-\d{1}$/.test(value)
          ? null
          : "CNIC must be in the format 12345-1234567-1",

      gender: (v) => (v ? null : "Gender is required"),
      district: (v) => (v ? null : "District is required"),
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createOfficer, isPending: loading } = useMutation({
    mutationFn: http.districtOfficers.districtOfficerControllerCreate,
  });
  const { mutate: updateofficer, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ officerId, data }: { officerId: string; data: any }) =>
      http.districtOfficers.districtOfficerControllerUpdate(officerId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["officers"] });
      onClose();
    },
  });

  async function handleJobSubmit(values: any) {
    if (officer) {
      updateofficer({ officerId: officer._id, data: values });
    } else {
      createOfficer(values, {
        onSuccess: async (data) => {
          if (data.data) {
            onClose();
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["officers"] });
          }
        },
      });
    }
  }

  return (
    <Box maw={600} mx="auto">
      <form onSubmit={form.onSubmit(handleJobSubmit)}>
        <Stack gap="md">
          <TextInput
            label="Full Name"
            placeholder="Enter full name"
            withAsterisk
            {...form.getInputProps("name")}
            disabled={officer?true:false}
          />
          <TextInput
            label="Email"
            placeholder="example@domain.com"
            withAsterisk
            {...form.getInputProps("email")}
            disabled={officer?true:false}

          />
          <TextInput
            label="Phone Number"
            placeholder="e.g. 03001234567"
            withAsterisk
            {...form.getInputProps("phone")}
          />
          <TextInput
            label="CNIC"
            placeholder="e.g. 3520212345671"
            withAsterisk
            {...form.getInputProps("cnic")}
          />

          <Select
            label="Gender"
            placeholder="Select gender"
            data={["male", "female"]}
            withAsterisk
            {...form.getInputProps("gender")}
          />
          <Textarea
            label="Address"
            placeholder="Enter full postal address"
            withAsterisk
            autosize
            minRows={2}
            {...form.getInputProps("address")}
          />
          <Select
            label="District"
            placeholder="Select district"
            withAsterisk
            searchable
            data={districts}
            {...form.getInputProps("district")}
          />

          <Select
            label="Qualification"
            placeholder="e.g. Bachelor's in Criminology"
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
            {...form.getInputProps("qualification")}
          />
          <Textarea
            label="Experience"
            placeholder="Briefly describe previous experience"
            autosize
            minRows={2}
            {...form.getInputProps("experience")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={loading || loadingUpdate}>
              {officer ? "Update" : "Create Officer"}
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
