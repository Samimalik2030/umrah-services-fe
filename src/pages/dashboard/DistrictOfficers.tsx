import {
  Avatar,
  Button,
  Card,
  Container,
  Group,
  Stack,
  Text,
  useMantineTheme,
  Title,
  Modal,
  Divider,
  ThemeIcon,
  Center,
  ActionIcon,
  Menu,
  Grid,
  Skeleton,
  SimpleGrid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DistrictOfficerForm } from "../components/DistrictOfficerForm";
import IconMail from "../../assets/icons/IconMail";
import IconPhone from "../../assets/icons/IconPhone";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconBook from "../../assets/icons/IconBook";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import { useState } from "react";
import { DistrictOfficer } from "../../http/Api";
import IconBadge from "../../assets/icons/IconBadge";
import IconBriefCase from "../../assets/icons/IconBriefCase";
import IconLocation from "../../assets/icons/IconLocation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { showNotification } from "@mantine/notifications";

export default function DistrictOfficers() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const [
    openedDetailsModal,
    { open: openDetailsModal, close: closeDetailModal },
  ] = useDisclosure();
  const queryClient = useQueryClient();

  const { isLoading, officers } = useGetDistrictOfficers();
  const [officer, setSelecedOfficer] = useState<DistrictOfficer | undefined>(
    undefined
  );

  const handleOpenModal = (officer: DistrictOfficer) => {
    setSelecedOfficer(officer);
    openDetailsModal();
  };
  const handleOpenEditModal = (officer?: DistrictOfficer) => {
    open();
    setSelecedOfficer(officer);
  };
  const handleCloseEditModal = () => {
    close();
    setSelecedOfficer(undefined);
  };
  const handleCloseModal = () => {
    setSelecedOfficer(undefined);
    closeDetailModal();
  };

    const { mutate: deleteOfficer, isPending: loadingDelete } = useMutation({
    mutationFn: http.districtOfficers.districtOfficerControllerRemove,
  });
  const handleDeleteOfficer = (id: string) => {
    deleteOfficer(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["officers"] });

        showNotification({
          message: "'Product Deleted'",
        });
      },
    });
  };
  if (isLoading) {
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
            <Title order={2}>District Officers</Title>
            <Button color={theme.colors.dark[9]} onClick={open}>
              Add Officer
            </Button>
          </Group>

          <Grid>
            {officers?.map((officer, ind) => (
              <Grid.Col
                span={{
                  base: 12,
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 4,
                  xl: 3,
                }}
              >
                <Card shadow="xl" pos="relative" key={ind}>
                  <Group pos={"absolute"} right={20} top={10}>
                    <Menu shadow="md" width={160}>
                      <Menu.Target>
                        <ActionIcon variant="light" color="gray" size="lg">
                          <IconDots size={18} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={<IconUserFilled size={16} />}
                          onClick={() => handleOpenModal(officer)}
                        >
                          Details
                        </Menu.Item>
                        <Menu.Item
                          leftSection={<IconPencilOutlined size={16} />}
                          onClick={() => handleOpenEditModal(officer)}
                        >
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          color="red"
                          leftSection={<IconTrashOutlined size={16} />}
                          onClick={()=>handleDeleteOfficer(officer._id)}
                        >
                          Delete
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                  <Stack gap={2}>
                    <Center>
                      <Stack align="center">
                        <Avatar
                          src={officer?.user?.profileImage?.url}
                          radius="xl"
                          size="lg"
                        />
                        <Text fw={700} size="lg">
                          {officer?.user?.fullName}
                        </Text>
                      </Stack>
                    </Center>

                    <Divider
                      label="Contact Info"
                      labelPosition="center"
                      my="sm"
                    />
                    <Group>
                      <ThemeIcon color="blue" variant="light" size={28}>
                        <IconMail size={18} />
                      </ThemeIcon>
                      <Text>{officer?.user?.email}</Text>
                    </Group>
                    <Group>
                      <ThemeIcon color="teal" variant="light" size={28}>
                        <IconPhone size={18} />
                      </ThemeIcon>
                      <Text>{officer?.phone}</Text>
                    </Group>
                    <Divider
                      label="Professional Info"
                      labelPosition="center"
                      my="sm"
                    />
                    <Group>
                      <ThemeIcon color="grape" variant="light" size={28}>
                        <IconMapPin size={18} />
                      </ThemeIcon>
                      <Text>{officer?.district}</Text>
                    </Group>
                    <Group>
                      <ThemeIcon color="pink" variant="light" size={28}>
                        <IconBook size={18} />
                      </ThemeIcon>
                      <Text>{officer?.qualification}</Text>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Modal opened={opened} onClose={()=>handleCloseEditModal()} title="Add District Officer">
        <DistrictOfficerForm onClose={close} officer={officer} />
      </Modal>

      <Modal
        opened={openedDetailsModal}
        onClose={handleCloseModal}
        title="District Officer Details"
        size={"xl"}
        centered
      >
        <Card shadow="xl" padding="lg" radius="md" pos={"relative"}>
          <Stack gap="md">
            <Group justify="center">
              <Avatar size={"xl"} />
            </Group>
            <Text size="xl" fw={700} ta="center">
              {officer?.user?.fullName}
            </Text>

            <Divider label="Contact Info" labelPosition="center" my="sm" />

            <SimpleGrid cols={2} spacing="md">
              <Group>
                <ThemeIcon color="blue" variant="light" size={28}>
                  <IconMail size={18} />
                </ThemeIcon>
                <Text>{officer?.user?.email}</Text>
              </Group>

              <Group>
                <ThemeIcon color="teal" variant="light" size={28}>
                  <IconPhone size={18} />
                </ThemeIcon>
                <Text>{officer?.phone}</Text>
              </Group>

              <Group>
                <ThemeIcon color="violet" variant="light" size={28}>
                  <IconBadge size={18} />
                </ThemeIcon>
                <Text>{officer?.cnic}</Text>
              </Group>
            </SimpleGrid>

            <Divider label="Professional Info" labelPosition="center" my="sm" />

            <SimpleGrid cols={2} spacing="md">
              <Group>
                <ThemeIcon color="orange" variant="light" size={28}>
                  <IconUserFilled size={18} />
                </ThemeIcon>
                <Text>{officer?.gender}</Text>
              </Group>

              <Group>
                <ThemeIcon color="grape" variant="light" size={28}>
                  <IconMapPin size={18} />
                </ThemeIcon>
                <Text>{officer?.district}</Text>
              </Group>

              <Group>
                <ThemeIcon color="pink" variant="light" size={28}>
                  <IconBook size={18} />
                </ThemeIcon>
                <Text>{officer?.qualification}</Text>
              </Group>

              <Group style={{ gridColumn: "span 2" }}>
                <ThemeIcon color="red" variant="light" size={28}>
                  <IconBriefCase size={18} />
                </ThemeIcon>
                <Text style={{ whiteSpace: "pre-wrap" }}>
                  {officer?.experience || "No experience provided"}
                </Text>
              </Group>
            </SimpleGrid>

            <Divider label="Address" labelPosition="center" my="sm" />

            <Text style={{ whiteSpace: "pre-wrap" }}></Text>
            <Group style={{ gridColumn: "span 2" }}>
              <ThemeIcon color="red" variant="light" size={28}>
                <IconLocation size={18} />
              </ThemeIcon>
              <Text style={{ whiteSpace: "pre-wrap" }}>{officer?.address}</Text>
            </Group>
          </Stack>
        </Card>
      </Modal>
    </>
  );
}
