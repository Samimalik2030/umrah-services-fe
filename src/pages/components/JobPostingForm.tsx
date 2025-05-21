import {
  Button,
  TextInput,
  NumberInput,
  Group,
  Stack,
  Select,
  Textarea,
  Box,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { CreateJobDto, Job } from "../../http/Api";
import { Gender } from "../../constants/Gender";

export default function JobPostForm({
  onClose,
  job,
}: {
  onClose: () => void;
  job?: Job;
}) {
  const form = useForm<any>({
    initialValues: {
      title: job?.title || "",
      description: job?.description || "",
      vacancies: job?.vacancies || 1,
      bps: job?.bps || 7,
      gender: (job?.gender as Gender) || ("" as Gender),
      age_min: job?.age_min || 18,
      age_max: job?.age_max || 25,
      height_male: job?.height_male || 170,
      height_female: job?.height_female || 158,
      chest_male: job?.chest_male || "33x34.5",
      chest_female: job?.chest_female || "",
      education: job?.education || "",
      application_deadline: new Date() || "",
      posting_date: new Date() || "",
      application_fee: job?.application_fee || 0,
      terms_and_conditions: job?.terms_and_conditions || "",
    },

    validate: {
      title: (value) => (!value ? "Job title is required" : null),
      vacancies: (value) => (value < 1 ? "Must be at least 1 vacancy" : null),
      education: (value) => (!value ? "Education is required" : null),
      application_deadline: (value) => (!value ? "Deadline is required" : null),
    },
  });

  const queryClient = useQueryClient();

  const { mutate: postJob, isPending: loading } = useMutation({
    mutationFn: http.jobs.jobsControllerCreate,
  });
  const { mutate: updateJob, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ jobId, data }: { jobId: string; data: CreateJobDto }) =>
      http.jobs.jobsControllerUpdate(jobId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      onClose();
    },
  });

  async function handleJobSubmit(values: CreateJobDto) {
    if (job) {
      updateJob({ jobId: job._id, data: values });
    } else {
      postJob(values, {
        onSuccess: async (data) => {
          if (data.data) {
            onClose();
            form.reset();
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
          }
        },
      });
    }
  }

  return (
    <>
      <Box>
        <form onSubmit={form.onSubmit(handleJobSubmit)}>
          <Stack>
            <Select
              label="Job Title"
              placeholder="Police Constable"
              searchable
              radius={"sm"}
              size="sm"
              data={[
                "Constable (PC)",
                "Head Constable (HC)",
                "Assistant Sub-Inspector (ASI)",
                "Sub-Inspector (SI)",
                "Inspector (IP)",
                "Assistant Superintendent of Police (ASP)",
                "Deputy Superintendent of Police (DSP)",
                "Superintendent of Police (SP)",
                "Senior Superintendent of Police (SSP)",
                "Assistant Inspector General of Police (AIG)",
                "Deputy Inspector General of Police (DIG)",
                "Additional Inspector General of Police (Addl. IG)",
                "Inspector General of Police (IGP)",
                "Station House Officer (SHO)",
                "Senior Station Assistant (SSA)",
                "Police Station Assistant (PSA)",
                "Office Superintendent",
                "Stenographer",
                "Senior Clerk",
                "Junior Clerk",
                "Naib Qasid / Class-IV Staff",
                "Sub-Divisional Police Officer (SDPO)",
                "District Police Officer (DPO)",
                "City Police Officer (CPO)",
                "Regional Police Officer (RPO)",
                "Capital City Police Officer (CCPO)",
                "Provincial Police Officer (PPO)",
              ]}
              {...form.getInputProps("title")}
            />

            <Textarea
              label="Job Description"
              placeholder="Write a short job description"
              autosize
              minRows={2}
              radius={"sm"}
              size="sm"
              {...form.getInputProps("description")}
            />

            <Group grow>
              <NumberInput
                label="Vacancies"
                min={1}
                hideControls
                radius={"sm"}
                size="sm"
                {...form.getInputProps("vacancies")}
              />
              <NumberInput
                label="BPS"
                min={1}
                {...form.getInputProps("bps")}
                hideControls
                radius={"sm"}
                size="sm"
              />
              <NumberInput
                label="Application Fee (Rs)"
                hideControls
                radius={"sm"}
                size="sm"
                min={0}
                {...form.getInputProps("application_fee")}
              />
            </Group>

            <Select
              label="Gender"
              radius={"sm"}
              size="sm"
              placeholder="Select gender(s)"
              data={["male", "female"]}
              multiple
              {...form.getInputProps("gender")}
            />

            <Group grow>
              <NumberInput
                label="Min Age"
                hideControls
                radius={"sm"}
                size="sm"
                min={0}
                {...form.getInputProps("age_min")}
              />
              <NumberInput
                label="Max Age"
                hideControls
                radius={"sm"}
                size="sm"
                min={0}
                {...form.getInputProps("age_max")}
              />
            </Group>

            <Divider label="Physical Requirements" labelPosition="center" />

            <Group grow>
              <NumberInput
                hideControls
                radius={"sm"}
                size="sm"
                label="Male Height (cm)"
                min={100}
                {...form.getInputProps("height_male")}
              />
              <NumberInput
                hideControls
                radius={"sm"}
                size="sm"
                label="Female Height (cm)"
                min={100}
                {...form.getInputProps("height_female")}
              />
            </Group>

            <Group grow>
              <TextInput
                radius={"sm"}
                size="sm"
                label="Male Chest (inch)"
                placeholder="e.g. 33x34.5"
                {...form.getInputProps("chest_male")}
              />
              <TextInput
                radius={"sm"}
                size="sm"
                label="Female Chest (inch)"
                placeholder="Optional"
                {...form.getInputProps("chest_female")}
              />
            </Group>

            <Select
              radius={"sm"}
              size="sm"
              label="Education Requirement"
              placeholder="e.g. Matric or equivalent"
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
              {...form.getInputProps("education")}
            />

            <Group grow>
              <DateInput
                radius={"sm"}
                size="sm"
                label="Posting Date"
                {...form.getInputProps("posting_date")}
              />
              <DateInput
                radius={"sm"}
                size="sm"
                label="Application Deadline"
                {...form.getInputProps("application_deadline")}
              />
            </Group>

            <Textarea
              radius={"sm"}
              size="sm"
              label="Terms and Conditions"
              placeholder="Enter any special instructions or requirements"
              autosize
              minRows={2}
              {...form.getInputProps("terms_and_conditions")}
            />
            {/* <FileInput
              label="Job Notice (PDF)"
              placeholder="Upload PDF file"
              accept="application/pdf"
              value={form.values.job_notice_file}
              onChange={(file) => form.setFieldValue("job_notice_file", file)}
              error={form.errors.job_notice_file}
            /> */}
            <Group justify="flex-end" mt="sm">
              <Button type="submit" loading={loading || loadingUpdate}>
                {job ? "Update Job" : "  Submit Job"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </>
  );
}
