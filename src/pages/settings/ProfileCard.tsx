"use client";
import {
  Stack,
  Avatar,
  FileButton,
  Center,
  Box,
  ActionIcon,
} from "@mantine/core";

import { useAuth } from "../../contexts/AuthContext";
// import IconCamera from "../../assets/icons/IconCamera";
// import axios from "axios";
export function AvatarCard() {

  const { user,accessToken } = useAuth();
console.log(accessToken,'access token')

  // const uploadProfileImage = async (file: File) => {
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   const response = await axios.post(
  //     "http://localhost:3000/auth/upload-profile",
  //     formData,
  //     {
  //       headers: {
  //         Authorization: `${accessToken}`, 
  //       },
  //     }
  //   );

  //   return response.data;
  // };
  return (
    <Stack>
      <Center>
        <FileButton onChange={(file)=>console.log(file)} accept="image/png,image/jpeg">
          {(props) => (
            <Box
              pos="relative"
              {...props}
              style={{
                cursor: "pointer",
              }}
            >
              <Avatar
                src={
                  user?.profileImage?.url ? user?.profileImage?.url : undefined
                }
                size={120}
                radius={120}
                style={{
                  "&:hover": {
                    opacity: 0.5,
                  },
                  border: `1px solid gray`,
                }}
              />
              <ActionIcon
                // loading={changingAvatar}
                variant="filled"
                radius="xl"
                size="md"
                pos="absolute"
                bottom={0}
                right={0}
              >
                {/* <IconCamera  /> */}
              </ActionIcon>
            </Box>
          )}
        </FileButton>
      </Center>
    </Stack>
  );
}
