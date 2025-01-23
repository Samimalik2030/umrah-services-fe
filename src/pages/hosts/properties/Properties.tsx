import {
  ActionIcon,
  Image,
  Badge,
  Button,
  Card,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  Skeleton,
  Spoiler,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { notifications } from "@mantine/notifications";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../http";
import IconSearch from "../../../assets/icons/IconSearch";
import { useGetProperties } from "../../../hooks/useGetProperties";
import IconDots from "../../../assets/icons/IconDots";
import IconArrowNarrowLeft from "../../../assets/icons/IconArrowNarrowLeft";
import { useDisclosure } from "@mantine/hooks";

function Properties() {
  const { id } = useParams();

  const [propertyId, setPropertyId] = useState<string>("");

  const [opened, { open, close }] = useDisclosure(false);
  const { properties, isLoading } = useGetProperties(id ?? "");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: changePropertyStatus, isPending } = useMutation({
    mutationKey: ["changeStatusProperty"],
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      http.properties.propertyControllerPatchStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      notifications.show({
        title: "Success",
        message: "Property status updated successfully",
        color: "green",
      });
    },
  });

  const handleStatusChange = (id: string, data: any) => {
    changePropertyStatus({ id, data });
  };

  return (
    <Stack>
      <Group justify="space-between">
        <Group gap={"xs"} align="center">
          <ActionIcon variant="transparent" onClick={() => navigate(-1)}>
            <IconArrowNarrowLeft />
          </ActionIcon>
          <Title order={3}>Properties</Title>
        </Group>
        <Group>
          <TextInput
            w={370}
            leftSection={<IconSearch withOutline fill="none" />}
            placeholder="Search by names, email, status"
          />
          <Button>Search</Button>
        </Group>
      </Group>
      <Card>
        {isLoading || isPending ? (
          <Stack>
            <Skeleton height={50} circle animate />
            <Skeleton height={50} animate />
            <Skeleton height={50} animate />
          </Stack>
        ) : (
          <Table.ScrollContainer minWidth={500}>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>#</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Availability</Table.Th>
                  <Table.Th>City</Table.Th>
                  <Table.Th>Condition</Table.Th>
                  <Table.Th>Type</Table.Th>
                  <Table.Th>Property Size</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {properties?.data
                  ?.filter((property: any) => property?.status !== "Draft")
                  ?.map((property: any, index: number) => (
                    <Table.Tr
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPropertyId(property?.id);
                        open();
                        console.log(property?.id, propertyId);
                      }}
                    >
                      <Table.Td>{index + 1}</Table.Td>
                      <Table.Td>{property?.name ?? "N/A"}</Table.Td>
                      <Table.Td>{property?.availability ?? "N/A"}</Table.Td>
                      <Table.Td>{property?.city ?? "N/A"}</Table.Td>
                      <Table.Td>{property?.condition ?? "N/A"}</Table.Td>
                      <Table.Td tt={"capitalize"}>
                        {property?.type ?? "N/A"}
                      </Table.Td>
                      <Table.Td>{property?.propertySize ?? "N/A"}</Table.Td>
                      <Table.Td>
                        <Badge
                          variant="outline"
                          color={
                            property?.status === "Approved"
                              ? "green"
                              : property?.status === "Rejected"
                                ? "red"
                                : "orange"
                          }
                        >
                          {property?.status ?? "N/A"}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Menu
                          withArrow
                          width={300}
                          position="bottom"
                          transitionProps={{ transition: "pop" }}
                          withinPortal
                        >
                          <Menu.Target>
                            <ActionIcon
                              variant="subtle"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <IconDots size={18} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(property?.id, {
                                  status: "Approved",
                                });
                              }}
                            >
                              Approve
                            </Menu.Item>
                            <Menu.Item
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(property?.id, {
                                  status: "Rejected",
                                });
                              }}
                            >
                              Reject
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        )}
      </Card>

      <Drawer opened={opened} onClose={close} position="right" size="xl">
        {(() => {
          const matchingProperty = properties?.data?.find(
            (property: any) => property?.id === propertyId
          );

          if (matchingProperty) {
            return (
              <Stack>
                <Group justify="space-between" align="center">
                  <Group gap={4} align="center">
                    <Text fw={600} size="xl">
                      Name:
                    </Text>
                    <Text size="xl">{matchingProperty?.name}</Text>
                  </Group>

                  <Badge
                    size="xl"
                    variant="outline"
                    color={
                      matchingProperty?.status === "Approved"
                        ? "green"
                        : matchingProperty?.status === "Rejected"
                          ? "red"
                          : "orange"
                    }
                  >
                    {matchingProperty?.status ?? "N/A"}
                  </Badge>
                </Group>
                <Stack gap={4}>
                  <Text size="xl" fw={600}>
                    Description:
                  </Text>
                  <Spoiler mih={60} showLabel="Show more" hideLabel="Show less">
                    <Text size="lg"> {matchingProperty?.description}</Text>
                  </Spoiler>
                </Stack>
                <Stack gap={4}>
                  <Text size="xl" fw={600}>
                    Location:
                  </Text>

                  <Text size="lg"> {matchingProperty?.location}</Text>
                </Stack>

                <Text fw={600} size="lg">
                  Photos:
                </Text>
                <ScrollArea h={400} scrollbars="y">
                  <Card shadow="xs" withBorder w={"100%"} p={"xl"}>
                    <Stack align="center">
                      {matchingProperty?.photos?.map(
                        (photo: any, index: number) => (
                          <Image
                            fit="cover"
                            w={"60%"}
                            key={index}
                            src={photo?.url}
                          />
                        )
                      )}
                    </Stack>
                  </Card>
                </ScrollArea>
                <Group grow>
                  <Button
                    onClick={() => {
                      close();
                      handleStatusChange(propertyId, {
                        status: "Approved",
                      });
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    color="red"
                    onClick={() => {
                      close();
                      handleStatusChange(propertyId, {
                        status: "Rejected",
                      });
                    }}
                  >
                    Reject
                  </Button>
                </Group>
              </Stack>
            );
          } else {
            return <Text>No matching property found</Text>;
          }
        })()}
      </Drawer>
    </Stack>
  );
}

export default Properties;
