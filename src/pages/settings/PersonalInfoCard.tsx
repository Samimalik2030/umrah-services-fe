import { Title, Group, TextInput, Button, Stack } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { notifications } from "@mantine/notifications";
import { useAuth } from "../../contexts/AuthContext";
import http from "../../http";
import { UpdateProfileDto } from "../../http/Api";
import { useMutation } from "@tanstack/react-query";
import IconLocation from "../../assets/icons/IconLocation";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import IconAt from "../../assets/icons/IconsAt";
import IconMail from "../../assets/icons/IconMail";

export default function PersonalInfoCard() {
  const { auth } = useAuth();
  const { mutate: updateProfile, isPending: updatingProfile } = useMutation({
    mutationFn: (data: UpdateProfileDto) =>
      http.users.userControllerUpdateProfile(data),
  });

  // Define validation schema
  const schema = yup.object<UpdateProfileDto>({
    firstName: yup
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .matches(/^[a-zA-Z\s]*$/, "First name can only contain letters")
      .required("First name is required"),
    lastName: yup
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .matches(/^[a-zA-Z\s]*$/, "Last name can only contain letters")
      .required("Last name is required"),
  });

  // Initialize form with validation
  const form = useForm<UpdateProfileDto>({
    initialValues: {
      firstName: auth?.firstName || "",
      lastName: auth?.lastName || "",
    },
    validate: yupResolver(schema),
  });

  const handleProfileSubmit = async (values: UpdateProfileDto) => {
    updateProfile(values, {
      onSuccess: () => {
        notifications.show({
          title: "Success",
          message: "Profile updated successfully",
          color: "green",
        });
      },
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleProfileSubmit)}>
      <Stack>
        <Group justify="apart">
          <Title order={4}>Personal Information</Title>
   
        </Group>

        <TextInput
          label="First Name"
          placeholder={auth?.firstName}
          {...form.getInputProps("firstName")}
          disabled={updatingProfile}
          leftSection={<IconUserFilled />}
          required
        />

        <TextInput
          label="Last Name"
          placeholder={auth?.lastName}
          {...form.getInputProps("lastName")}
          disabled={updatingProfile}
          leftSection={<IconUserFilled />}
          required
        />

        <TextInput
          label="Email"
          value={auth?.email}
          disabled
          leftSection={<IconMail/>}
        />

        <Button
          type="submit"
          loading={updatingProfile}
          variant="light"
          fullWidth
        >
          Update Profile
        </Button>
      </Stack>
    </form>
  );
}
