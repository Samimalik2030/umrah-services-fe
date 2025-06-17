import { Card, Flex, Box, Anchor, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function Navbar() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  return (
    <>
      <Card
        h={80}
        px={80}
        shadow="none"
        style={{
          borderRadius: 0,
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        <Flex justify="space-between" align="center" h="100%">
        
            <Group justify={isSmallscreen ? "center" : "start"}>
            <Anchor fw={600} fz={32} c="black">
              Zaroorat
            </Anchor>
         </Group>

          <Box
           display={ isSmallscreen ? "none" : "block"}
          >
            <Flex gap={30}>
              <Anchor
                fw={400}
                fz={16}
                c="black"
                underline="always"
                style={{
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "1.4px",
                }}
              >
                Home
              </Anchor>

              <Anchor
                fw={400}
                fz={16}
                c={"black"}
                underline="hover"
                style={{
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "1.4px",
                }}
              >
                Umrah Services
              </Anchor>

              <Anchor
                fw={400}
                fz={16}
                c={"black"}
                underline="hover"
                style={{
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "1.4px",
                }}
              >
                World Packages
              </Anchor>

              <Anchor
                fw={400}
                fz={16}
                c={"black"}
                underline="hover"
                style={{
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "1.4px",
                }}
              >
                Custom Packages
              </Anchor>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </>
  );
}

export default Navbar;
