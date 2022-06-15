import { Flex, Alert, Spinner, Text, Box } from "@chakra-ui/react";
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

export default function Events() {
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
    <Flex
      as="section"
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={{ base: "xl", md: "7xl" }}
      marginX="auto"
    >
      <Box paddingTop={{ base: 0, md: 4 }}>
        <Flex direction="column" justifyContent="center" alignItems="center">
          {data.map((event: any) => (
            <Text color="black">{event.fields["Event Title"]}</Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
