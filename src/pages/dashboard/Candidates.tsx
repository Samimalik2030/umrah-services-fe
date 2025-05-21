import { useState } from 'react';
import {
  Table,
  Avatar,
  Text,
  Group,
  Badge,
  ScrollArea,
  Box,
} from '@mantine/core';

const initialCandidates = [
  {
    id: 'cand_001',
    photo: '/images/photo1.jpg',
    full_name: 'Ali Khan',
    father_name: 'Rashid Khan',
    cnic: '35202-1234567-1',
    gender: 'Male',
    province: 'Punjab',
    district: 'Lahore',
    phone: '03001234567',
    education: 'Matric (85.6%)',
    height_cm: 175,
    applied_post: 'Constable',
    status: 'Written Passed',
  },
  {
    id: 'cand_002',
    photo: '/images/photo2.jpg',
    full_name: 'Sara Bibi',
    father_name: 'Iqbal Bibi',
    cnic: '35201-9876543-0',
    gender: 'Female',
    province: 'Punjab',
    district: 'Multan',
    phone: '03111234567',
    education: 'Matric (90%)',
    height_cm: 162,
    applied_post: 'Constable',
    status: 'Under Review',
  },
  {
    id: 'cand_003',
    photo: '/images/photo3.jpg',
    full_name: 'Usman Javed',
    father_name: 'Javaid Akhtar',
    cnic: '35201-7777777-2',
    gender: 'Male',
    province: 'Punjab',
    district: 'Faisalabad',
    phone: '03087654321',
    education: 'Intermediate (72%)',
    height_cm: 180,
    applied_post: 'Sub-Inspector',
    status: 'Physical Passed',
  },
];

export default function Candidates() {
  const [search, setSearch] = useState('');
  const [candidates] = useState(initialCandidates);

  const filteredCandidates = candidates.filter((c) =>
    [
      c.full_name,
      c.cnic,
      c.district,
      c.province,
      c.applied_post,
      c.gender,
    ].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  const getBadgeColor = (status:any) => {
    switch (status) {
      case 'Written Passed':
        return 'green';
      case 'Under Review':
        return 'gray';
      case 'Physical Passed':
        return 'blue';
      default:
        return 'dark';
    }
  };

  const rows = filteredCandidates.map((c) => (
    <Table.Tr key={c.id}>
      <Table.Td>
        <Group>
          <Avatar src={c.photo} radius="xl" size="md" />
          <div>
            <Text fw={500}>{c.full_name}</Text>
            <Text size="xs" c="dimmed">
              {c.cnic}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td><Text>{c.father_name}</Text></Table.Td>
      <Table.Td><Text>{c.gender}</Text></Table.Td>
      <Table.Td><Text>{`${c.province} / ${c.district}`}</Text></Table.Td>
      <Table.Td><Text>{c.phone}</Text></Table.Td>
      <Table.Td><Text>{c.education}</Text></Table.Td>
      <Table.Td><Text>{c.height_cm} cm</Text></Table.Td>
      <Table.Td><Text>{c.applied_post}</Text></Table.Td>
      <Table.Td>
        <Badge color={getBadgeColor(c.status)} variant="light">
          {c.status}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box>
     

      <ScrollArea>
        <Table striped highlightOnHover  >
          <Table.Thead
            styles={{
              thead: {
                backgroundColor: '#40c057ff',
                color: 'white',
                height: 50,
              },
            }}
          >
            <Table.Tr>
              <Table.Th>Candidate</Table.Th>
              <Table.Th>Father's Name</Table.Th>
              <Table.Th>Gender</Table.Th>
              <Table.Th>Province / District</Table.Th>
              <Table.Th>Phone</Table.Th>
              <Table.Th>Education</Table.Th>
              <Table.Th>Height</Table.Th>
              <Table.Th>Applied Post</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={9}>
                  <Text c="dimmed" ta="center">
                    No candidates found.
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Box>
  );
}
