import { Avatar, Group, Stack, Text, Title } from "@mantine/core";
import { Student } from "../../../http/Api";

type StudentDocumentsProps = {
  student?: Student;
};
const StudentDocuments = ({ student }: StudentDocumentsProps) => {
  return (
    <Stack p={"xl"}>
      <Title order={2} c="#228ae6">
        Documents
      </Title>
      <Stack>
        <Title order={3}>Educational Documents</Title>
        <Group justify="space-between">
          {student?.educations.map((edu, index) => (
            <Group
              key={index + "document"}
              wrap="nowrap"
              onClick={() => window.open(edu?.document?.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <Avatar src={edu?.document.url} size={94} radius="md" />
              <Stack gap={0}>
                <Text fz="lg" fw={500}>
                  {edu.degree}
                </Text>

                <Group wrap="nowrap" gap={10} mt={5}>
                  <Text fz="xs" c="dimmed">
                    Uploaded on {new Date(edu.createdAt).toDateString()}
                  </Text>
                </Group>
              </Stack>
            </Group>
          ))}
        </Group>
      </Stack>
      <Stack mt={"xl"}>
        <Title order={3}>Additional Documents</Title>
        <Group justify="space-between">
          {student?.additionalDocuments.map((doc, index) => (
            <Group
              key={index + "document"}
              wrap="nowrap"
              onClick={() => window.open(doc.file.url, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <Avatar src={doc?.file?.url} size={94} radius="md" />
              <Stack gap={0}>
                <Text fz="lg" fw={500}>
                  {doc.name}
                </Text>

                <Group wrap="nowrap" gap={10} mt={5}>
                  <Text fz="xs" c="dimmed">
                    Uploaded on {new Date(doc.createdAt).toDateString()}
                  </Text>
                </Group>
              </Stack>
            </Group>
          ))}
        </Group>
      </Stack>
    </Stack>
  );
};

export default StudentDocuments;
