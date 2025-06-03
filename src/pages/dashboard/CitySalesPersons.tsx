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
  Card,
  Text,
  Avatar,
  ActionIcon,
  Menu,
  Divider,
  ThemeIcon,
} from "@mantine/core";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Salesman } from "../../http/Api";
import useGetSalesmans from "../../hooks/useGetSalesmans";
import { useDisclosure } from "@mantine/hooks";
import http from "../../http";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import IconMapPin from "../../assets/icons/IconMapPin";
import IconPhone from "../../assets/icons/IconPhone";
import RecruiterForm from "../components/RecruiterForm";
import useGetCityOfficer from "../../hooks/useGeCityOfficer";

export default function CitySalesPerson() {
  const { user } = useAuth();

  if (!user || !user._id) {
    return (
      <>
        <Stack>
          <Skeleton height={50} circle animate />
          <Skeleton height={50} animate />
          <Skeleton height={50} animate />
        </Stack>
      </>
    );
  }
  const { isLoading, cityOfficer } = useGetCityOfficer(user?._id);

  const [salesman, setSelectedSalesMan] = useState<Salesman | undefined>(
    undefined
  );

  const { isLoading: isSalesManLoading, salesmans } = useGetSalesmans();

  const [opened, { open, close }] = useDisclosure();

  const queryClient = useQueryClient();

  const handleCloseModal = () => {
    setSelectedSalesMan(undefined);
    close();
  };

  const handleRecruiterModal = (salesman?: Salesman) => {
    if (salesman) {
      setSelectedSalesMan(salesman);
    }
    open();
  };

  const { mutate: deleteOfficer, isPending: loadingDelete } = useMutation({
    mutationFn: http.salesman.salesmanControllerDelete,
  });
  const handleDeleteOfficer = (id: string) => {
    deleteOfficer(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["salesmans"] });

        showNotification({
          message: "Salesman Deleted",
        });
      },
    });
  };

  if (isSalesManLoading || isLoading) {
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
            <Title order={2}>Sales Persons</Title>
            <Button onClick={() => handleRecruiterModal()}>Add Salesman</Button>
          </Group>

          <Grid>
            {salesmans?.map((salesman, ind) => (
              <Grid.Col
                key={salesman._id}
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
                          onClick={() => handleRecruiterModal(salesman)}
                        >
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          color="red"
                          leftSection={<IconTrashOutlined size={16} />}
                          onClick={() => handleDeleteOfficer(salesman._id)}
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
                      src={salesman?.user?.profileImage?.url || undefined}
                    />
                  </Group>

                  <Stack align="center" gap="xs">
                    <Title order={3}>{salesman?.user?.fullName}</Title>
                    <Text size="sm" c="dimmed">
                      {salesman.user.email}
                    </Text>
                    <Badge
                      variant="gradient"
                      gradient={{ from: "blue", to: "cyan", deg: 45 }}
                      radius="md"
                    >
                      {salesman.gender.toUpperCase()}
                    </Badge>
                  </Stack>

                  <Divider my="lg" />

                  <Stack gap="sm">
                    <Group gap="xs">
                      <ThemeIcon variant="light" color="green">
                        <IconPhone size={18} />
                      </ThemeIcon>

                      <Text size="sm">
                        <strong>Phone:</strong> {salesman.phone}
                      </Text>
                    </Group>

                    {salesman.city && (
                      <Group gap="xs">
                        <ThemeIcon variant="light" color="red">
                          <IconMapPin size={18} />
                        </ThemeIcon>
                        <Text size="sm">
                          <strong>City:</strong> {salesman.city}
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
        onClose={handleCloseModal}
        title="Create a Salesman"
        size="lg"
      >
        <RecruiterForm
          onClose={close}
          recruiter={salesman}
          district={cityOfficer?.city}
        />
      </Modal>
    </>
  );
}
