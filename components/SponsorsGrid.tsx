import { Flex, SimpleGrid } from "@chakra-ui/react";
import * as Sponsors from "./Sponsors";

const SponsorsGrid = () => (
  <Flex direction="column" alignItems="center" justifyContent="center" gap={4}>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={{ base: "4", md: "12", lg: "16" }}
      marginY={8}
      alignItems="flex-start"
      justifyItems="center"
    >
      <Sponsors.MCV />
      <Sponsors.Collabland />
      <Sponsors.Coordinape />
      <Sponsors.CabinDAO />
    </SimpleGrid>
    <SimpleGrid
      columns={{ base: 1, md: 4 }}
      spacing={{ base: "4", md: "12", lg: "12" }}
      marginBottom={12}
      alignItems="flex-start"
      justifyItems="center"
    >
      <Sponsors.MetaFactory />
      <Sponsors.FireEyes />
      <Sponsors.Lens />
      <Sponsors.Snapshot />
    </SimpleGrid>
  </Flex>
);
export default SponsorsGrid;
