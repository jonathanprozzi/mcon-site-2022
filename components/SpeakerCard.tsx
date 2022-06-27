import { Box, AspectRatio, Flex, Heading, Img, Text } from "@chakra-ui/react";
import Image from "next/image";

export interface Speaker {
  name: string;
  image: string;
  organization?: string;
}

const SpeakerCard = ({ name, image, organization }: Speaker) => (
  <Flex
    padding={6}
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    background="black"
    minWidth={{ base: "60vw", md: "0" }}
    minHeight={{ base: "0", md: "300px" }}
  >
    <Box position="relative">
      <Image
        alt={`Photo of ${name} - a speaker at MCON Denver 2022`}
        width={200}
        height={200}
        objectFit="cover"
        placeholder="blur"
        blurDataURL={image}
        src={image}
      />
    </Box>

    <Flex
      direction="column"
      justifyContent="center"
      marginTop="2"
      maxW="20ch"
      minHeight={{ base: "0", md: "100px" }}
    >
      <Heading
        as="h3"
        fontFamily="Dagheest"
        color="primaryRed"
        overflowWrap="anywhere"
        lineHeight="32px"
      >
        {name}
      </Heading>
      <Text
        as="span"
        fontFamily="Dagheest-Gothic"
        color="primaryNeon"
        fontSize="lg"
        overflowWrap="anywhere"
        marginTop={2}
      >
        {organization}
      </Text>
    </Flex>
  </Flex>
);

export default SpeakerCard;
