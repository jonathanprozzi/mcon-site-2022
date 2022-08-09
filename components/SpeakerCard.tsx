import {
  Box,
  AspectRatio,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
  HStack
} from "@chakra-ui/react";
import Image from "next/image";
import SpeakerBox from "./SpeakerBox";

export interface Speaker {
  title: string;
  sessionTime: string;
  nameOne: string;
  orgOne: string;
  imageOne: string;
  nameTwo?: string;
  orgTwo?: string;
  imageTwo?: string;
}

const SpeakerCard = ({
  title,
  sessionTime,
  nameOne,
  orgOne,
  imageOne,
  nameTwo,
  orgTwo,
  imageTwo
}: Speaker) => (
  <Flex
    padding={6}
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    minWidth={{ base: "60vw", md: "30vw" }}
    width={{ base: "60vw", md: "100%" }}
    minHeight={{ base: "0", md: "0" }}
  >
    <SpeakerBox title={sessionTime} showIcon={false}>
      <Flex>
        <Flex
          paddingY={4}
          paddingLeft={4}
          flexBasis="30%"
          justifyContent="center"
          alignItems="center"
        >
          <VStack position="relative">
            <Box
              position="relative"
              borderRadius="999px"
              // backgroundColor="primaryNeon"
              left="25%"
              marginBottom="-40px"
            >
              <Image
                alt={`Photo of ${nameOne} - a speaker at MCON Denver 2022`}
                width={100}
                height={100}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={imageOne}
                src={imageOne}
                className="img__border-rounded"
              />
            </Box>
            {nameTwo && (
              <Box
                position="relative"
                // backgroundColor="primaryNeon"
                borderRadius="999px"
              >
                <Image
                  alt={`Photo of ${nameTwo} - a speaker at MCON Denver 2022`}
                  width={100}
                  height={100}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={imageTwo}
                  src={imageTwo}
                  className="img__border-rounded__2"
                />
              </Box>
            )}
          </VStack>
        </Flex>
        <Flex
          paddingY={4}
          paddingLeft={8}
          flexBasis="70%"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <VStack fontSize="md" fontFamily="Dagheest" alignItems="flex-start">
            <Text color="primaryNeon" paddingBottom={4}>
              {title}
            </Text>
            <HStack gap={1} lineHeight="1">
              <Text color="white">{nameOne}</Text>{" "}
              <Text color="primaryNeon">({orgOne})</Text>
            </HStack>
            {nameTwo && (
              <HStack>
                <Text color="primaryNeon">&</Text>
                <Text color="white">{nameTwo}</Text>{" "}
                <Text color="primaryNeon">({orgTwo})</Text>
              </HStack>
            )}
          </VStack>
        </Flex>
      </Flex>
    </SpeakerBox>
  </Flex>
);

export default SpeakerCard;
