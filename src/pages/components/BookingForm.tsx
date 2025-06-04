import {
  Box,
  FileButton,
  Group,
  Textarea,
  ActionIcon,
  Stack,
  Select,
  TextInput,
  Button,
} from "@mantine/core";

import { useState } from "react";
import AudioRecorder from "./audioRecording";
import { useForm } from "@mantine/form";
import IconImage from "../../assets/icons/IconImage";

export default function BookingForm() {
  const [value, setValue] = useState("");
  const [image, setImage] = useState<File | null>(null);
  console.log(image)

  const form = useForm({
    initialValues: {
      service: "",
      description: "",
      date: "",
      location: "",
      contact: "",
    },
  });


  return (
    <Box p="xs" style={{ border: "1px solid #ccc", borderRadius: 8 }}>
      <Stack>
        <Select
          label="Service"
          placeholder="Choose a service"
          data={["Electrician", "Plumber", "Mechanic", "Technician"]}
          {...form.getInputProps("service")}
        />

        <TextInput
          label="Preferred Date & Time"
          placeholder="e.g. 30 May, 3 PM"
          {...form.getInputProps("date")}
        />

        <TextInput
          label="Your Location"
          placeholder="e.g. Gulberg, Lahore"
          {...form.getInputProps("location")}
        />

        <TextInput
          label="Contact Number"
          placeholder="e.g. 03001234567"
          type="tel"
          {...form.getInputProps("contact")}
        />
        <Stack gap={0} p={0} style={{ border: "1px solid #ccc", borderRadius: 8 }}>
          <Textarea
            placeholder="Briefly explain the issue"
            minRows={2}
            autosize
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            styles={{
              input: {
                border: "0px",
              },
            }}
            p={0}
          />
          <Group justify="flex-end">
            <Group gap={4}>
              <FileButton onChange={setImage} accept="image/*">
                {(props) => (
                  <ActionIcon variant="subtle" {...props}>
                    <IconImage />
                  </ActionIcon>
                )}
              </FileButton>
              <AudioRecorder />
            </Group>
          </Group>
        </Stack>
        <Button>Submit</Button>
      </Stack>
    </Box>
  );
}
