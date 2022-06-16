import {
  Box,
  Heading,
  Stack,
  Link as ChakraLink,
  Text
} from "@chakra-ui/react";

const SocialSection = () => (
  <Box id="social" as="section" background="brand.darkblue">
    <Box
      maxW={{ base: "xl", md: "7xl" }}
      marginX={{ base: "10vw", md: "auto" }}
      paddingX={{ base: "6", md: "10" }}
      paddingTop={10}
      paddingBottom={5}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading
          as="h2"
          textAlign="center"
          color="white"
          fontFamily="DisposableDroidBB"
          fontWeight="bold"
          marginX="auto"
        >
          Join the MCON Communities
        </Heading>
        <Stack direction="row" justifyContent="center" spacing={8}>
          <ChakraLink
            href="https://t.me/joinchat/VyKuTs306i5kZGI5"
            _hover={{
              color: "white"
            }}
            marginRight={4}
          >
            <Text
              as="span"
              fontFamily="Invasion2000"
              fontWeight="light"
              fontSize="lg"
              lineHeight={[6, 6, 9, 9]}
              letterSpacing="widest"
              color="brand.pink"
              transition="all ease-in-out .25s"
              paddingBottom={{ base: "2", md: "none" }}
              _hover={{
                color: "white"
              }}
            >
              Telegram
            </Text>
          </ChakraLink>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default SocialSection;
