import { Title, Group, TextInput, Button, Stack } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { notifications, showNotification } from "@mantine/notifications";
import { useAuth } from "../../contexts/AuthContext";
import http from "../../http";
import { useMutation } from "@tanstack/react-query";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import IconMail from "../../assets/icons/IconMail";
import axios from "axios";
import { useState } from "react";

export default function PersonalInfoCard() {
  const { user, setUser } = useAuth();
  const { mutate: updateProfile, isPending: updatingProfile } = useMutation({
    mutationFn: http.auth.userControllerUpdateProfile,
  });


  const form = useForm({
    initialValues: {
      fullName: user?.fullName || "",
    },
  });

  const handleProfileSubmit = async (values: any) => {
    try {
      const respone = await axios.patch(
      `http://localhost:3000/auth/update-profile/${user?._id}`,
      {
        fullName: values.fullName,
      }
    );
    if (respone.data) {
      setUser(respone?.data?.user);
      showNotification({
        message:"Profile Updated"
      })
    }
    } catch (error) {
      
    }
    
  };

  

  return (
    <form onSubmit={form.onSubmit(handleProfileSubmit)}>
      <Stack>
        <Group justify="apart">
          <Title order={4}>Personal Information</Title>
        </Group>

        <TextInput
          label="Full Name"
          placeholder={user?.fullName}
          {...form.getInputProps("fullName")}
          disabled={updatingProfile}
          leftSection={<IconUserFilled />}
          required
        />

        <TextInput
          label="Email"
          value={user?.email}
          disabled
          leftSection={<IconMail />}
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
