import {
  Stack,
  Skeleton,
  Button,
  Container,
  Group,
  Title,
  Modal,
  Grid,
  Badge,
  Box,
  Card,
  Flex,
  Text,
  Avatar,
  ActionIcon,
  Menu,
  Center,
  Divider,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import useGetRecruiters from "../hooks/useGetSalesmans";
import { useAuth } from "../contexts/AuthContext";
import { useGetDistrictOfficer } from "../hooks/useGetJob";
import RecruiterForm from "../pages/components/RecruiterForm";
import { useDisclosure } from "@mantine/hooks";
import IconDots from "../assets/icons/IconDots";
import IconPencilOutlined from "../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../assets/icons/IconTrashOutlined";
import IconUserFilled from "../assets/icons/IconUserFilled";
import IconBook from "../assets/icons/IconBook";
import IconMail from "../assets/icons/IconMail";
import IconMapPin from "../assets/icons/IconMapPin";
import IconPhone from "../assets/icons/IconPhone";
import IconBadge from "../assets/icons/IconBadge";
import IconBriefCase from "../assets/icons/IconBriefCase";
import IconLocation from "../assets/icons/IconLocation";
import IconId from "../assets/icons/IconId";
import IconSchool from "../assets/icons/IconSchool";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../http";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { Recruiter } from "../http/Api";

export default function RecruiterListDistrict() {
  const { user } = useAuth();

  const [recruiter, setSelectedRecruiter] = useState<Recruiter | undefined>(
    undefined
  );

  const { officer, isLoading: isOfficerLoading } = useGetDistrictOfficer(
    user?._id
  );
  const { isLoading: isRecruiterLoading, recruiters } = useGetRecruiters(
    officer?.district
  );

  const [opened, { open, close }] = useDisclosure();

  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    setSelectedRecruiter(undefined);
    close();
  };

  const handleRecruiterModal = (recruiter?: Recruiter) => {
    if (recruiter) {
      setSelectedRecruiter(recruiter);
    }
    open();
  };

  const { mutate: deleteOfficer, isPending: loadingDelete } = useMutation({
    mutationFn: http.recruiters.recruiterControllerDelete,
  });
  const handleDeleteOfficer = (id: string) => {
    deleteOfficer(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["recruiters"] });

        showNotification({
          message: "Recruiter Deleted",
        });
      },
    });
  };

  if (isOfficerLoading || isRecruiterLoading) {
    return (
      <Stack>
        <Skeleton height={50} circle animate />
        <Skeleton height={50} animate />
        <Skeleton height={50} animate />
      </Stack>
    );
  }

  return (
    <>
      <Container fluid>
        <Stack>
          <Group justify="space-between" align="center">
            <Title order={2}>Recruiters</Title>
            <Button onClick={() => handleRecruiterModal()}>
              Add Recruiter
            </Button>
          </Group>

          <Grid>
            {recruiters?.map((recruiter, ind) => (
              <Grid.Col
                key={recruiter._id}
                span={{
                  base: 12,
                  xs: 12,
                  sm: 6,
                  md: 6,
                  lg: 4,
                  xl: 4,
                }}
              >
                <Card shadow="xl" radius="xl" padding="xl" pos={"relative"}>
                  <Group pos={"absolute"} right={30} top={20}>
                    <Menu shadow="md" width={160}>
                      <Menu.Target>
                        <ActionIcon variant="light" color="gray" size="lg">
                          <IconDots size={18} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={<IconPencilOutlined size={16} />}
                          onClick={() => handleRecruiterModal(recruiter)}
                        >
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          color="red"
                          leftSection={<IconTrashOutlined size={16} />}
                          onClick={() => handleDeleteOfficer(recruiter._id)}
                        >
                          Delete
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                  <Group justify="center" mb="lg">
                    <Avatar
                      size={90}
                      radius="xl"
                      src={recruiter?.user?.profileImage?.url || undefined}
                    />
                  </Group>

                  <Stack align="center" gap="xs">
                    <Title order={3}>{recruiter?.user?.fullName}</Title>
                    <Text size="sm" c="dimmed">
                      {recruiter.user.email}
                    </Text>
                    <Badge
                      variant="gradient"
                      gradient={{ from: "blue", to: "cyan", deg: 45 }}
                      radius="md"
                    >
                      {recruiter.gender.toUpperCase()}
                    </Badge>
                  </Stack>

                  <Divider my="lg" />

                  <Stack gap="sm">
                    <Group gap="xs">
                      <ThemeIcon variant="light" color="green">
                        <IconPhone size={18} />
                      </ThemeIcon>

                      <Text size="sm">
                        <strong>Phone:</strong> {recruiter.phone}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon  variant="light">
                        <IconId size={18} />
                      </ThemeIcon>
                      <Text size="sm">
                        <strong>CNIC:</strong> {recruiter.cnic}
                      </Text>
                    </Group>

                    {recruiter.qualification && (
                      <Group gap="xs">
                        <ThemeIcon color="orange" variant="light">
                          <IconSchool size={18} color="orange" />
                        </ThemeIcon>
                        <Text size="sm">
                          <strong>Qualification:</strong>{" "}
                          {recruiter.qualification}
                        </Text>
                      </Group>
                    )}

                    {recruiter.address && (
                      <Group gap="xs" wrap="nowrap" align="flex-start">
                        <ThemeIcon variant="light" color="red">
                          <IconMapPin size={18} />
                        </ThemeIcon>
                        <Text size="sm" span>
                          <strong>Address:</strong>{" "}
                          <Text
                            span
                            inherit
                            style={{
                              whiteSpace: "normal",
                              wordBreak: "break-word",
                            }}
                          >
                            {recruiter.address}
                          </Text>
                        </Text>
                      </Group>
                    )}

                    {recruiter.district && (
                      <Group gap="xs">
                        <ThemeIcon variant="light" color="red">
                          <IconMapPin size={18} />
                        </ThemeIcon>
                        <Text size="sm">
                          <strong>District:</strong> {recruiter.district}
                        </Text>
                      </Group>
                    )}
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Modal
        opened={opened}
        onClose={close}
        title="Create a Recruiter"
        size="lg"
      >
        <RecruiterForm
          onClose={close}
          recruiter={recruiter}
          district={officer?.district}
        />
      </Modal>
    </>
  );
}
