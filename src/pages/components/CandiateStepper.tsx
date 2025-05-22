import {
  Stepper,
  TextInput,
  NumberInput,
  Select,
  FileInput,
  Container,
  Grid,
  Group,
  Button,
  Card,
  Title,
  Text,
  SimpleGrid,
  Stack,
  Box,
  Skeleton,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useState } from "react";
import MyNavbar from "../auth/Navbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { Candidate } from "../../http/Api";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { districts } from "./DistrictOfficerForm";
import { useGetCandidate } from "../../hooks/useGetCandidate";
import { useNavigate } from "react-router-dom";

function CandidateStepperForm() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const [candidateData, setCandidate] = useState<Candidate | undefined>();
  const prevStep = () => setActive((prev) => Math.max(prev - 1, 0));

  const { user } = useAuth();

  const { candidate, isLoading } = useGetCandidate(user?._id);

  const SignUpForm = useForm({
    initialValues: {
      // personal
      full_name: candidate?.user?.fullName || "",
      father_name: candidate?.father_name || "",
      cnic: candidate?.cnic || "",
      dob: new Date() || null,
      gender: candidate?.gender || "",
      marital_status: candidate?.marital_status || "",
      religion: candidate?.religion || "",
      district: candidate?.contact?.district || "",
    },

    validate: {
      cnic: (value) =>
        /^\d{5}-\d{7}-\d{1}$/.test(value)
          ? null
          : "Invalid CNIC format. Use #####-#######-#",
    },
  });

  const AdressForm = useForm({
    initialValues: {
      permanent_address: candidate?.address?.permanent || "",
      present_address: candidate?.address?.present || "",
      phone: candidate?.contact?.phone || 0,
      name: candidate?.contact?.emergency_contact?.name || "",
      relation: candidate?.contact?.emergency_contact?.relation || "",
      contact: candidate?.contact || 0,
    },
  });

  const educationForm = useForm({
    initialValues: {
      // education
      matric_board: candidate?.education?.matric?.board || "",
      matric_year: candidate?.education?.matric?.passing_year || 0,
      matric_percentage: candidate?.education?.matric?.marks_percentage || 0,
      inter_board: candidate?.education?.intermediate?.board || "",
      inter_year: candidate?.education?.intermediate?.passing_year || 0,
      inter_percentage:
        candidate?.education?.intermediate?.marks_percentage || 0,
    },
  });

  const phsicalForm = useForm({
    initialValues: {
      // physical
      height_cm: candidate?.physical_info?.height_cm || 0,
      weight_kg: candidate?.physical_info?.weight_kg || 0,
      chest_unexpanded: candidate?.physical_info?.chest_cm || 0,
      chest_expanded: candidate?.physical_info?.chest_cm || 0,
      vision: candidate?.physical_info?.vision || "",
      blood_group: candidate?.physical_info?.blood_group || "",
    },
  });

  // documents

  const queryClient = useQueryClient();

  const { mutate: createCandidate, isPending: loading } = useMutation({
    mutationFn: http.candidates.candidateControllerCreate,
  });

  const handleCreate = () => {
    if (!candidate) {
      createCandidate(SignUpForm.values, {
        onSuccess: (data) => {
          setCandidate(data.data);
          setActive((prev) => prev + 1);
          queryClient.invalidateQueries({ queryKey: ["candidate"] });
        },
      });
    } else {
      updateCandidate({
        candidateId: candidate._id,
        data: { ...SignUpForm.values },
      });
    }
  };

  const { mutate: updateCandidate, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ candidateId, data }: { candidateId: string; data: any }) =>
      http.candidates.candidateControllerUpdate(candidateId, data),
    onSuccess: (data) => {
      setCandidate(data.data);

      if (active === 4) {
        navigate("/jobs");
      } else {
        setActive((prev) => prev + 1);
      }
    },
  });

  const handleUpdateContactInfo = () => {
    console.log(candidate?._id, "candidate id");
    updateCandidate({
      candidateId: candidate?._id,
      data: {
        address: {
          permanent_address: AdressForm.values.permanent_address,
          present_address: AdressForm.values.present_address,
        },
        contact: {
          district: AdressForm.values.district,
          phone: AdressForm.values.phone,
          emergency_contact: {
            name: AdressForm.values.name,
            relation: AdressForm.values.relation,
            contact: AdressForm.values.contact,
          },
        },
      },
    });
  };

  const handleUpdateEducationInfo = () => {
    console.log(candidate?._id, "candidate id");
    updateCandidate({
      candidateId: candidate?._id,
      data: {
        education: {
          matric: {
            board: educationForm.values.matric_board,
            passing_year: educationForm.values.matric_year,
            matric_percentage: educationForm.values.matric_percentage,
          },
          intermediate: {
            board: educationForm.values.inter_board,
            passing_year: educationForm.values.inter_year,
            marks_percentage: educationForm.values.inter_percentage,
          },
        },
      },
    });
  };

  const handleUpdatePhysicalInfo = () => {
    console.log(candidate?._id, "candidate id");
    updateCandidate({
      candidateId: candidate?._id,
      data: {
        physical_info: {
          ...phsicalForm.values,
        },
      },
    });
  };

  // http/auth/userControllerUploadImage.ts

  const userControllerUploadImage = async ({ file }: { file: File }) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://localhost:3000/auth/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!response.data) {
      throw new Error("File upload failed");
    }

    return response.data;
  };
  const { mutate: uploadImage, isPending } = useMutation({
    mutationFn: userControllerUploadImage,
  });
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, any>>({});

  const handleUpload = async (file: File, key: string) => {
    try {
      const result = await uploadImageAsync({ file });
      setUploadedFiles((prev) => ({
        ...prev,
        [key]: result,
      }));
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const uploadImageAsync = userControllerUploadImage;

  //   const handleSubmit = () => {
  //   const studentData = {
  //     ...formValues,
  //     documents: uploadedFiles,
  //   };

  //   submitStudent(studentData);
  // };

  const handleUplodDocuments = () => {
    updateCandidate({
      candidateId: candidate?._id,
      data: {
        documents: {
          ...uploadedFiles,
        },
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
      <MyNavbar />
      <Container size="xl" py="xl">
        <Grid>
          {/* Stepper column */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title order={3}>Candidate Registration</Title>
            <Text size="sm" c="dimmed" w={270}>
              Follow the steps to complete your profile for the recruitment
              process.
            </Text>
            <Stepper
              active={active}
              onStepClick={setActive}
              orientation="vertical"
              size="sm"
              styles={{
                step: {
                  alignItems: "center",
                  width: 200,
                  gap: 12,
                },
              }}
            >
              <Stepper.Step label="Personal Info" />
              <Stepper.Step label="Contact & Address" />
              <Stepper.Step label="Education" />
              <Stepper.Step label="Physical Info" />
              <Stepper.Step label="Documents" />
            </Stepper>
          </Grid.Col>

          {/* Form section column */}
          <Grid.Col span={{ base: 12, md: 9 }}>
            {active === 0 && (
              <>
                <Card pb={24}>
                  <Stack>
                    <Box>
                      <Title order={3}>Personal Information</Title>
                      <Text c="dimmed">
                        Please carefully fill your personal Information
                      </Text>
                    </Box>

                    <SimpleGrid cols={2} mt={12}>
                      <TextInput
                        label="Father's Name"
                        placeholder="e.g. Muhammad Ali"
                        {...SignUpForm.getInputProps("father_name")}
                        required
                      />

                      <TextInput
                        label="CNIC"
                        placeholder="e.g. 35202-1234567-8"
                        {...SignUpForm.getInputProps("cnic")}
                        required
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      <Select
                        label="district"
                        data={districts}
                        placeholder="e.g. Lahore"
                        {...SignUpForm.getInputProps("district")}
                        required
                      />
                      <DateInput
                        label="Date of Birth"
                        placeholder="Select date"
                        size="md"
                        {...SignUpForm.getInputProps("dob")}
                        required
                      />
                      <Select
                        label="Gender"
                        placeholder="Select gender"
                        data={["Male", "Female"]}
                        {...SignUpForm.getInputProps("gender")}
                        required
                      />
                      <Select
                        label="Marital Status"
                        data={["Married", "UnMarried"]}
                        placeholder="e.g. Single, Married"
                        {...SignUpForm.getInputProps("marital_status")}
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      <TextInput
                        label="Religion"
                        placeholder="e.g. Islam, Christianity"
                        {...SignUpForm.getInputProps("religion")}
                      />
                    </SimpleGrid>
                  </Stack>
                </Card>

                <Group justify="space-between" mt="xl">
                  <Button
                    variant="default"
                    onClick={prevStep}
                    disabled={active === 0}
                  >
                    Back
                  </Button>

                  <Button onClick={() => handleCreate()}>Next</Button>
                </Group>
              </>
            )}

            {active === 1 && (
              <>
                <Card>
                  <Stack>
                    <Box>
                      <Title order={3}>Contact Information</Title>
                      <Text c="dimmed">
                        Please carefully fill your Contact Information
                      </Text>
                    </Box>
                    <SimpleGrid cols={2}>
                      <TextInput
                        label="Permanent Address"
                        placeholder="e.g. 123 Main Street, Lahore"
                        {...AdressForm.getInputProps("permanent_address")}
                        required
                      />
                      <TextInput
                        label="Present Address"
                        placeholder="e.g. Hostel No. 5, University Road"
                        {...AdressForm.getInputProps("present_address")}
                        required
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      <NumberInput
                        label="Phone"
                        placeholder="e.g. 03001234567"
                        {...AdressForm.getInputProps("phone")}
                        required
                        max={11}
                        min={11}
                      />
                    </SimpleGrid>

                    <Title order={4} mt="md">
                      Emergency Contact
                    </Title>

                    <SimpleGrid cols={2}>
                      <TextInput
                        label="Name"
                        placeholder="e.g. Ali Khan"
                        {...AdressForm.getInputProps("name")}
                        required
                      />
                      <TextInput
                        label="Relation"
                        placeholder="e.g. Father, Brother, Friend"
                        {...AdressForm.getInputProps("relation")}
                        required
                      />
                    </SimpleGrid>

                    <NumberInput
                      label="Phone"
                      placeholder="e.g. 03009876543"
                      {...AdressForm.getInputProps("contact")}
                      required
                      max={11}
                      min={11}
                    />
                  </Stack>
                </Card>

                <Group justify="space-between" mt="xl">
                  <Button variant="default" onClick={prevStep}>
                    Back
                  </Button>

                  <Button onClick={() => handleUpdateContactInfo()}>
                    Next
                  </Button>
                </Group>
              </>
            )}

            {active === 2 && (
              <>
                <Card withBorder shadow="sm" radius="md" p="lg">
                  <Stack>
                    <Box>
                      <Title order={4}>Academic Information</Title>
                      <Text c="dimmed" size="sm">
                        Enter your matric and inter educational details
                      </Text>
                    </Box>

                    <SimpleGrid cols={2}>
                      <TextInput
                        label="Matric Board"
                        placeholder="e.g. BISE Lahore"
                        {...educationForm.getInputProps("matric_board")}
                        required
                      />
                      <NumberInput
                        label="Matric Year"
                        placeholder="e.g. 2018"
                        {...educationForm.getInputProps("matric_year")}
                        required
                      />
                    </SimpleGrid>

                    <NumberInput
                      label="Matric %"
                      placeholder="e.g. 85.5"
                      {...educationForm.getInputProps("matric_percentage")}
                      required
                    />

                    <SimpleGrid cols={2} mt="sm">
                      <TextInput
                        label="Inter Board"
                        placeholder="e.g. BISE Lahore"
                        {...educationForm.getInputProps("inter_board")}
                        required
                      />
                      <NumberInput
                        label="Inter Year"
                        placeholder="e.g. 2020"
                        {...educationForm.getInputProps("inter_year")}
                        required
                      />
                    </SimpleGrid>

                    <NumberInput
                      label="Inter %"
                      placeholder="e.g. 78.2"
                      {...educationForm.getInputProps("inter_percentage")}
                      required
                    />
                  </Stack>
                </Card>
                <Group justify="space-between" mt="xl">
                  <Button variant="default" onClick={prevStep}>
                    Back
                  </Button>

                  <Button onClick={() => handleUpdateEducationInfo()}>
                    Next
                  </Button>
                </Group>
              </>
            )}

            {active === 3 && (
              <>
                <Card withBorder shadow="sm" radius="md" p="lg">
                  <Stack>
                    <Box>
                      <Title order={4}>Medical & Physical Details</Title>
                      <Text c="dimmed" size="sm">
                        Provide your physical and medical measurements (if
                        applicable)
                      </Text>
                    </Box>

                    <SimpleGrid cols={2}>
                      <NumberInput
                        label="Height (cm)"
                        placeholder="e.g. 175"
                        {...phsicalForm.getInputProps("height_cm")}
                        required
                      />
                      <NumberInput
                        label="Weight (kg)"
                        placeholder="e.g. 70"
                        {...phsicalForm.getInputProps("weight_kg")}
                        required
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      <NumberInput
                        label="Chest Unexpanded (cm)"
                        placeholder="e.g. 85"
                        {...phsicalForm.getInputProps("chest_unexpanded")}
                      />
                      <NumberInput
                        label="Chest Expanded (cm)"
                        placeholder="e.g. 92"
                        {...phsicalForm.getInputProps("chest_expanded")}
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      <TextInput
                        label="Vision"
                        placeholder="e.g. 6/6 or Normal"
                        {...phsicalForm.getInputProps("vision")}
                      />
                      <TextInput
                        label="Blood Group"
                        placeholder="e.g. B+"
                        {...phsicalForm.getInputProps("blood_group")}
                      />
                    </SimpleGrid>
                  </Stack>
                </Card>

                <Group justify="space-between" mt="xl">
                  <Button variant="default" onClick={prevStep}>
                    Back
                  </Button>

                  <Button onClick={() => handleUpdatePhysicalInfo()}>
                    Next
                  </Button>
                </Group>
              </>
            )}

            {active === 4 && (
              <>
                <Card withBorder shadow="sm" radius="md" p="lg">
                  <Stack>
                    <Box>
                      <Title order={3}>Document Uploads</Title>
                      <Text c="dimmed" size="sm">
                        Please upload all required documents clearly. Make sure
                        all files are authentic and legible.
                      </Text>
                    </Box>
                    <SimpleGrid cols={2}>
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File: {candidate?.documents?.cnic.name}
                        </Text>
                      )}
                      <FileInput
                        label="CNIC"
                        placeholder="Front Side"
                        onChange={(file) =>
                          file && handleUpload(file, "cnic_front")
                        }
                      />
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File: {candidate?.documents?.cnic.name}
                        </Text>
                      )}
                      <FileInput
                        label="CNIC"
                        placeholder="Back Side"
                        onChange={(file) =>
                          file && handleUpload(file, "cnic_back")
                        }
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File:{" "}
                          {candidate?.documents?.matric_certificate?.name}
                        </Text>
                      )}
                      <FileInput
                        label="Matric Certificate"
                        placeholder="Upload your Matric certificate"
                        onChange={(file) =>
                          file && handleUpload(file, "matric")
                        }
                      />
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File:{" "}
                          {candidate?.documents?.inter_certificate?.url}
                        </Text>
                      )}
                      <FileInput
                        label="Inter Certificate"
                        placeholder="Upload your Inter certificate"
                        onChange={(file) => file && handleUpload(file, "inter")}
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File: {candidate?.documents?.domicile?.name}
                        </Text>
                      )}
                      <FileInput
                        label="Domicile"
                        placeholder="Upload your Domicile"
                        onChange={(file) =>
                          file && handleUpload(file, "domicile")
                        }
                      />
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File:{" "}
                          {candidate?.documents?.character_certificate?.name}
                        </Text>
                      )}
                      <FileInput
                        label="Character Certificate"
                        placeholder="Upload your Character certificate"
                        onChange={(file) =>
                          file && handleUpload(file, "character")
                        }
                      />
                    </SimpleGrid>

                    <SimpleGrid cols={2}>
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File:{" "}
                          {candidate?.documents?.medical_certificate?.name}
                        </Text>
                      )}
                      <FileInput
                        label="Medical Certificate"
                        placeholder="Upload your Medical certificate"
                        onChange={(file) =>
                          file && handleUpload(file, "medical")
                        }
                      />
                      {candidate?.documents?.cnic && (
                        <Text size="sm" mb={4}>
                          Current File: {candidate?.documents?.photo.name}
                        </Text>
                      )}
                      <FileInput
                        label="Photo"
                        placeholder="Upload your Passport size photo"
                        onChange={(file) => file && handleUpload(file, "photo")}
                      />
                    </SimpleGrid>
                  </Stack>
                </Card>

                <Group justify="space-between" mt="xl">
                  <Button variant="default" onClick={prevStep}>
                    Back
                  </Button>

                  <Button onClick={() => handleUplodDocuments()}>Next</Button>
                </Group>
              </>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default CandidateStepperForm;
