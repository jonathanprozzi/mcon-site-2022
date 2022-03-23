import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      minWidth="100vw"
      paddingX={8}
    >
      <Hero />
    </Flex>
  );
}
