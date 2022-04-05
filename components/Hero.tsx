import {
  Flex,
  Box,
  VisuallyHidden,
  Heading,
  Text,
  Button,
  Link as ChakraLink
} from "@chakra-ui/react";
import Image from "next/image";

interface HeroProps {
  heroHeight?: string;
}

const Hero = ({ heroHeight = "100vh" }: HeroProps) => (
  <Flex
    id="home"
    direction="column"
    justifyContent="center"
    alignItems="center"
    // minWidth="100vw"
    // height={{ base: "50vh", md: "70vh" }}
    paddingTop={{ base: "0", md: "5vh" }}
  >
    <VisuallyHidden>
      <Heading as="h1">MCON Denver 2022</Heading>
    </VisuallyHidden>
    <Flex
      direction="column"
      alignItems="center"
      paddingBottom={{ base: 0, md: 10 }}
    >
      <Box position="relative">
        <Image
          alt=""
          width={400}
          height={300}
          objectFit="contain"
          placeholder="blur"
          blurDataURL="/mcon-22.png"
          src="/mcon-22.png"
        />
      </Box>
      <Flex direction={{ base: "column" }} alignItems="center">
        <Text
          as="span"
          fontFamily="Invasion2000"
          fontSize="64px"
          lineHeight={[6, 6, 9, 9]}
          letterSpacing="tighter"
          fontWeight="normal"
          maxWidth="30ch"
          color="brand.cyan"
        >
          6, 7, 8, 9
        </Text>

        <Text
          as="span"
          fontFamily="DisposableDroidBB"
          fontSize="36px"
          lineHeight={{ base: 9 }}
          letterSpacing="tighter"
          fontWeight="bold"
          maxWidth="30ch"
          marginTop={{ base: "5", md: "5" }}
          paddingY={{ base: "5", md: "0" }}
          flexWrap="wrap"
        >
          Tuesday, Wednesday Thursday, Friday
        </Text>

        <Text
          as="span"
          fontFamily="Invasion2000"
          fontSize={["48px", "48px", "72px", "72px"]}
          lineHeight={[6, 6, 9, 9]}
          letterSpacing="wider"
          fontWeight="bold"
          color="brand.cyan"
          paddingTop={{ base: 2, md: 6 }}
        >
          September
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column" }}
        alignItems="center"
        paddingTop={{ base: 4, md: 10 }}
        marginTop={{ base: 8 }}
        gap={4}
      >
        <ChakraLink
          _hover={{
            textDecoration: "none"
          }}
          isExternal
          href="https://metacartel.typeform.com/to/yiLK5My5"
        >
          <Button
            borderRadius="md"
            paddingY={8}
            paddingX={8}
            fontSize="2xl"
            transition="all ease-in-out .25s"
            bgGradient="linear(to-r,#FF74F2, #74EEFF)"
            _hover={{
              bgGradient: "linear(to-r, #74EEFF, #FF74F2)",
              textDecoration: "none"
            }}
            color="black"
          >
            Apply to Attend
          </Button>
        </ChakraLink>
        <Heading
          as="span"
          textAlign="center"
          color="white"
          fontFamily="DisposableDroidBB"
          fontSize="36px"
          lineHeight={{ base: 9 }}
          letterSpacing="tighter"
          fontWeight="bold"
          maxWidth="30ch"
          marginX="auto"
          paddingBottom={4}
        >
          Follow the action on{" "}
          <ChakraLink
            bgGradient="linear(to-r,#FF74F2, #74EEFF)"
            bgClip="text"
            _hover={{
              bgGradient: "linear(to-r, #74EEFF, #FF74F2)",
              textDecoration: "none"
            }}
            isExternal
            href="https://twitter.com/mcon_world"
          >
            Twitter
          </ChakraLink>
        </Heading>
      </Flex>
    </Flex>
  </Flex>
);

export default Hero;
