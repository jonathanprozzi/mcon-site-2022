import { Flex, Heading, Alert, Spinner, Text, Box } from "@chakra-ui/react";
import EventDetails from "components/EventDetails";
import StyledBox from "components/StyledBox";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    mode: "no-cors",
    credentials: "same-origin"
  });
  if (!res.ok) {
    throw Error("There is problem with reading the Events.");
  }
  const data = await res.json();

  return data;
};

export default function Details() {
  const { data, error } = useSWR(`/api/get-events`, fetcher, {});
  if (error) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Alert status="error">Problem reading the Events:{error.message}</Alert>
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Flex direction="column" align="center" justify="center">
          <Spinner
            size="xl"
            thickness="2px"
            emptyColor="primaryNeon"
            color="primaryRed"
            margin={4}
          />
        </Flex>
      </Flex>
    );
  }

  if (data.length === 0) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        minHeight="100vh"
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginX={{ base: "8" }}
        >
          <Text fontSize="lg">There are no events!</Text>
        </Flex>
      </Flex>
    );
  }

  console.log("data", data);

  return (
    <Box as="section" minWidth="100vw" minHeight="100vh">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        marginX={{ base: "auto", md: "auto" }}
        paddingX={{ base: "4", md: "10" }}
        paddingTop={20}
        paddingBottom={20}
      >
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          marginTop={20}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Heading
            as="h2"
            textAlign="center"
            color="black"
            fontFamily="Basteleur"
            fontWeight="bold"
            marginX="auto"
          >
            Event Details
          </Heading>
          <EventDetails events={data} />
        </Box>
      </Box>
    </Box>
  );
}
