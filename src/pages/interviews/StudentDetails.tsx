import {
  Avatar,
  Card,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title
} from "@mantine/core";
import IconMail from "../../assets/icons/IconMail";
import IconPhone from "../../assets/icons/IconPhone";
import IconWorld from "../../assets/icons/IconWorld";
import IconPin from "../../assets/icons/IconPin";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import StudentDocuments from "./components/StudentDocuments";
import { Student } from "../../http/Api";

type StudentDetailsProps = {
  student?: Student;
};

function StudentDetails({ student }: StudentDetailsProps) {
  const calculateAge = (dob: Date) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  return (
    <Stack>
      <Title order={3} c={"blue"}>
        Student Details
      </Title>
      <Grid>
        <Grid.Col span={7}>
          <Stack>
            <Card withBorder p="md" radius="md">
              <Stack>
                <Group align="center" justify="space-between">
                  <Group align="center">
                    <Avatar
                      src={
                        student?.user?.avatar?.url ||
                        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                      }
                      size={94}
                      radius={100}
                      style={{ border: "2px solid #228ae6" }}
                    />
                    <Stack gap={0}>
                      <Text fz="lg" fw={700}>
                        {student?.user?.fullName}
                      </Text>
                    </Stack>
                  </Group>
                </Group>
                <Stack gap={0}>
                  <Group gap={3}>
                    {student?.internshipPreferences?.desiredInternshipRoles?.map(
                      (role) => (
                        <Text fz="xs" tt="uppercase" fw={600} c="dimmed">
                          {role}
                          {", "}
                        </Text>
                      )
                    )}
                  </Group>
                </Stack>
              </Stack>
              <Divider size={"sm"} mt="md" />
            </Card>
            <Card withBorder p="md" radius="md">
              <Stack gap={"md"}>
                <Title order={3} c={"blue"}>
                  Requirements
                </Title>
                <Text>
                  {student?.internshipPreferences?.specificRequirements ||
                    "Not specified"}
                </Text>
              </Stack>
            </Card>
            <Card withBorder p="md" radius="md">
              <Stack gap={"md"}>
                <Title order={3} c={"blue"}>
                  Preferred Industries
                </Title>
                {student?.internshipPreferences?.industryPreferences?.map(
                  (industry) => (
                    <Group justify="start" align="center" gap="md">
                      <Text fz={"lg"} fw={600}>
                        {"-"}
                      </Text>
                      <Paper p="sm" radius="md" shadow="xs">
                        {industry}
                      </Paper>
                    </Group>
                  )
                )}
              </Stack>
            </Card>
            <Card withBorder p="md" radius="md">
              <StudentDocuments student={student} />
            </Card>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5}>
          <Stack>
            <Card withBorder p="md" radius="md">
              <Stack gap={"md"}>
                <Title order={3} c={"blue"}>
                  Personal Information
                </Title>
                <Group>
                  <IconPhone size={24} color="#228ae6" />
                  <Text>{student?.personalInfo?.contact}</Text>
                </Group>
                <Group>
                  <IconMail size={24} color="#228ae6" />
                  <Text>{student?.user?.email}</Text>
                </Group>
                <Group>
                  <IconWorld size={24} color="#228ae6" />
                  <Text>{student?.personalInfo?.addressLine1}</Text>
                </Group>
                <Group>
                  <IconPin size={24} color="#228ae6" />
                  <Text>
                    {student?.personalInfo?.city}
                    {", "}
                    {student?.personalInfo?.country}
                  </Text>
                </Group>
                <Group>
                  <IconUserFilled size={24} color="#228ae6" />
                  <Text>
                    {calculateAge(new Date(student?.personalInfo?.dob || ""))}
                    {" Years Old"}
                  </Text>
                </Group>
              </Stack>
            </Card>
            <Card withBorder p="md" radius="md">
              <Stack>
                <Title order={3} c={"blue"}>
                  Education
                </Title>
                {student?.educations?.map((edu) => (
                  <>
                    <Group
                      wrap="nowrap"
                      justify="space-between"
                      align="flex-end"
                    >
                      <Stack gap={0}>
                        <Text fz="sm" tt="uppercase" fw={700}>
                          {edu.degree}
                        </Text>
                        <Group wrap="nowrap" gap={10} mt={3}>
                          <Text fz="sm" c="dimmed">
                            {edu.schoolName}
                          </Text>
                        </Group>
                      </Stack>
                    </Group>
                    <Divider size={"sm"} />
                  </>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default StudentDetails;
