// import {
//   Card,
//   Text,
//   Title,
//   Grid,
//   Group,
//   Divider,
//   Stack,
//   Anchor,
//   Box,
//   Avatar,
// } from "@mantine/core";
// import { Candidate } from "../../http/Api";

// const CandidateProfileCard = ({ candidate }: { candidate: Candidate }) => {
//   const {
//     user,
//     father_name,
//     cnic,
//     dob,
//     gender,
//     marital_status,
//     religion,
//     district,
//     address,
//     contact,
//     education,
//     physical_info,
//     documents,
//   } = candidate;

//   return (
//     <Card shadow="md" padding="xl" radius="md" withBorder w="100%">
//       <Group>
//         <Avatar size={"xl"} radius={"xl"} src={user?.profileImage?.url} />
//         <Box>
//           <Title order={2}>{user?.fullName ?? "John Doe"}</Title>
//           <Text size="sm" c="dimmed" mb="md">
//             {user?.email ?? "msamiullah2030@gmail.com"}
//           </Text>
//         </Box>
//       </Group>

//       <Divider my="sm" />

//       <Grid>
//         <Grid.Col span={6}>
//           <Text>
//             <b>Father's Name:</b> {father_name}
//           </Text>
//           <Text>
//             <b>CNIC:</b> {cnic}
//           </Text>
//           <Text>
//             <b>Date of Birth:</b> {new Date(dob).toLocaleDateString()}
//           </Text>
//           <Text>
//             <b>Gender:</b> {gender}
//           </Text>
//           <Text>
//             <b>Marital Status:</b> {marital_status}
//           </Text>
//           <Text>
//             <b>Religion:</b> {religion}
//           </Text>
//           <Text>
//             <b>District:</b> {district}
//           </Text>
//         </Grid.Col>

//         <Grid.Col span={6}>
//           <Text>
//             <b>Permanent Address:</b> {address?.permanent}
//           </Text>
//           <Text>
//             <b>Present Address:</b> {address?.present}
//           </Text>
//           <Text>
//             <b>Contact District:</b> {contact?.district}
//           </Text>
//           <Text>
//             <b>Phone:</b> {contact?.phone}
//           </Text>
//           <Text>
//             <b>Emergency Contact:</b> {contact?.emergency_contact?.name} (
//             {contact?.emergency_contact?.relation}) -{" "}
//             {contact?.emergency_contact?.contact}
//           </Text>
//         </Grid.Col>
//       </Grid>

//       <Divider my="sm" label="Education" labelPosition="center" />

//       <Grid>
//         <Grid.Col span={6}>
//           <Text>
//             <b>Matric Board:</b> {education?.matric?.board}
//           </Text>
//           <Text>
//             <b>Passing Year:</b> {education?.matric?.passing_year}
//           </Text>
//           <Text>
//             <b>Percentage:</b> {education?.matric?.marks_percentage}
//           </Text>
//         </Grid.Col>
//         <Grid.Col span={6}>
//           <Text>
//             <b>Inter Board:</b> {education?.intermediate?.board}
//           </Text>
//           <Text>
//             <b>Passing Year:</b> {education?.intermediate?.passing_year}
//           </Text>
//           <Text>
//             <b>Percentage:</b> {education?.intermediate?.marks_percentage}
//           </Text>
//         </Grid.Col>
//       </Grid>

//       <Divider my="sm" label="Physical Info" labelPosition="center" />

//       <Grid>
//         <Grid.Col span={4}>
//           <Text>
//             <b>Height:</b> {physical_info?.height_cm} cm
//           </Text>
//         </Grid.Col>
//         <Grid.Col span={4}>
//           <Text>
//             <b>Weight:</b> {physical_info?.weight_kg} kg
//           </Text>
//         </Grid.Col>
//         <Grid.Col span={4}>
//           <Text>
//             <b>Vision:</b> {physical_info?.vision}
//           </Text>
//         </Grid.Col>
//         <Grid.Col span={6}>
//           <Text>
//             <b>Chest (Unexpanded):</b> {physical_info?.chest_unexpanded}
//           </Text>
//         </Grid.Col>
//         <Grid.Col span={6}>
//           <Text>
//             <b>Chest (Expanded):</b> {physical_info?.chest_expanded}
//           </Text>
//         </Grid.Col>
//         <Grid.Col span={6}>
//           <Text>
//             <b>Blood Group:</b> {physical_info?.blood_group}
//           </Text>
//         </Grid.Col>
//       </Grid>

//       <Divider my="sm" label="Documents" labelPosition="center" />

//       <Stack>
//         {documents &&
//           Object.entries(documents).map(([key, doc]: any) => (
//             <Anchor
//               key={key}
//               href={doc?.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               underline="always"
//               size="sm"
//             >
//               {key.toUpperCase()}
//             </Anchor>
//           ))}
//       </Stack>
//     </Card>
//   );
// };

// export default CandidateProfileCard;
