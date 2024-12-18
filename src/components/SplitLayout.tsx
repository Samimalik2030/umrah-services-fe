import { Box, SimpleGrid } from "@mantine/core";

type SplitLayoutProps = {
  children: { left: any; right: any };
  visibleLeft?: "sm" | "md" | "lg" | "xl" | "none";
  VisibleRight?: "sm" | "md" | "lg" | "xl" | "none";
};

function SplitLayout({
  visibleLeft: hideLeft,
  VisibleRight: hideRight,
  children,
}: SplitLayoutProps) {
  const { left, right } = children;

  return (
    <SimpleGrid cols={{ sm: 1, xs: 1, md: 2, lg: 2, xl: 2 }}>
      <Box w={"100%"} h={"100%"} visibleFrom={hideLeft}>
        {left}
      </Box>
      <Box w={"100%"} h={"100%"} visibleFrom={hideRight}>
        {right}
      </Box>
    </SimpleGrid>
  );
}

export default SplitLayout;
