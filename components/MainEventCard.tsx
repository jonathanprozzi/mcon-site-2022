import { Flex, Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";

interface IEvent {
  title: string;
  sessionTime: string;
  nameOne: string;
  orgOne: string;
  nameTwo?: string;
  orgTwo?: string;
}

const MainEventCard = ({
  title,
  sessionTime,
  nameOne,
  orgOne,
  nameTwo,
  orgTwo
}: IEvent) => {
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
        <Flex direction="column" justifyContent="center">
          <Text
            color="primaryRed"
            fontFamily="Dagheest"
            fontWeight="bold"
            fontSize="md"
          >
            {sessionTime}
          </Text>
          <Text
            color="primaryRed"
            fontFamily="Dagheest"
            fontWeight="bold"
            fontSize="xl"
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexBasis="60%"
        paddingY={1}
        paddingRight={1}
        width="100%"
        wordBreak="break-word"
      >
        {title !== "Break" && (
          <Text
            fontFamily="Dagheest"
            bgColor="primaryRed"
            color="primaryNeon"
            border="2px solid"
            borderColor="primaryNeon"
          >
            {nameOne} - {orgOne}
          </Text>
        )}
        {title !== "Break" && (
          <Text
            fontFamily="Dagheest"
            bgColor="primaryRed"
            color="primaryNeon"
            border="2px solid"
            borderColor="primaryNeon"
          >
            {nameTwo} - {orgTwo}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default MainEventCard;
