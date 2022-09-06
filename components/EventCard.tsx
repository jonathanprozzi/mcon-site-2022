import { Flex, Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";

interface IEvent {
  title: string;
  description: string;
  startTime: string;
  endTime?: string;
}

const EventCard = ({ title, description, startTime, endTime }: IEvent) => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} bgColor="primaryNeon">
      <Flex
        paddingY={4}
        paddingLeft={4}
        flexBasis="40%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        <Text
          color="primaryRed"
          fontFamily="Dagheest"
          fontWeight="bold"
          fontSize="xl"
        >
          {title}
        </Text>
        <Text
          color="primaryRed"
          fontFamily="Dagheest"
          fontWeight="bold"
          fontSize="md"
        >
          {format(new Date(startTime), "HH:mm")} -{" "}
          {format(new Date(endTime), "HH:mm")}
        </Text>
      </Flex>
      <Flex
        flexBasis="60%"
        paddingY={1}
        paddingRight={1}
        width="100%"
        wordBreak="break-word"
      >
        <Text
          fontFamily="Dagheest"
          bgColor="primaryRed"
          color="primaryNeon"
          border="2px solid"
          borderColor="primaryNeon"
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default EventCard;
