import { Box, Stack, Image, Title, Anchor, Container } from "@mantine/core";
import notFound from "../assets/notFound.svg";
function PageNotFound() {
  return (
    <Container>
      <Stack justify={"center"} align={"center"} mt={100}>
        <Title ta={"center"}>
          Looks like you've gotten lost! The page you requested is unavailable
        </Title>
        <Anchor
          fw={700}
          variant="gradient"
          gradient={{ from: "pink", to: "yellow" }}
          href={"/"}
        >
          Head back to the homepage.
        </Anchor>
        <Box>
          <Image w={500} fit="contain" src={notFound} alt="Page not found" />
        </Box>
      </Stack>
    </Container>
  );
}

export default PageNotFound;
