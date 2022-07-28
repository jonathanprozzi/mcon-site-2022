import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  IconButton,
  VisuallyHidden,
  Stack,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import StyledLink from "./StyledLink";

const Navbar: React.FC = () => {
  const mobileNav = useDisclosure();

  return (
    <Flex
      as="nav"
      direction="row"
      justifyContent="center"
      alignItems="center"
      minWidth="100vw"
      position="fixed"
      backgroundColor={{ base: "black" }}
      top="0"
      left="0"
      zIndex="1000"
      height="10vh"
      paddingTop={{ base: 1 }}
      paddingX={{ base: 2, lg: 8 }}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        align="center"
        width={["100vw", "100vw", "100vw", "100vw"]}
        paddingX={[7, 4, 6, 8]}
      >
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Link href="/" passHref>
            <ChakraLink style={{ textDecoration: "none" }}>
              <Flex gap={2} alignItems="center">
                <Logo />
                <Heading
                  as="h2"
                  fontFamily="Basteleur"
                  fontSize={{ base: "24px", lg: "36px" }}
                  fontWeight="bold"
                  color="primaryRed"
                  paddingY={0}
                >
                  MCON 2
                </Heading>
              </Flex>
            </ChakraLink>
          </Link>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          size="md"
          aria-label="Open menu"
          fontSize="24px"
          variant="ghost"
          color="primaryRed"
          onClick={mobileNav.onOpen}
          icon={<HiMenuAlt3 />}
        />
        <MobileNav isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
          <Stack spacing={5} alignItems="center" justifyContent="center">
            <Box
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              fontFamily="Dagheest"
            >
              <StyledLink href="/#about" text="About" />
              <StyledLink href="/details" text="Details" />
              <StyledLink href="/#speakers" text="Speakers" />
              <StyledLink href="/#sponsors" text="Sponsors" />
              <StyledLink
                href="https://metacartel.typeform.com/to/yiLK5My5"
                text="Apply"
                isExternal
              />
            </Box>
            {/* <Button
              borderRadius="none"
              transition="all ease-in-out .25s"
              color="primaryRed"
              bgColor="primaryNeon"
              fontFamily="Dagheest"
              border="2px solid"
              _hover={{
                bgColor: "black",
                color: "primaryNeon",
                border: "2px solid",
                borderColor: "primaryNeon"
              }}
            >
              Buy Ticket
            </Button> */}
            <Link href="/" passHref>
              <ChakraLink style={{ textDecoration: "none" }}>
                <Logo />
              </ChakraLink>
            </Link>
          </Stack>
        </MobileNav>
        <Flex
          alignItems="center"
          justifyContent="center"
          display={{ base: "none", md: "flex" }}
          paddingY={4}
          paddingRight={16}
          fontFamily="Basteleur"
        >
          <StyledLink href="/#about" text="About" />
          <StyledLink href="/details" text="Details" />
          <StyledLink href="/#speakers" text="Speakers" />
          <StyledLink href="/#sponsors" text="Sponsors" />
          <Flex gap={4}>
            <ChakraLink
              _hover={{
                textDecoration: "none"
              }}
              isExternal
              href="https://metacartel.typeform.com/to/yiLK5My5"
            >
              <Button
                borderRadius="none"
                paddingY={2}
                paddingX={2}
                transition="all ease-in-out .25s"
                color="primaryRed"
                bgColor="primaryNeon"
                fontFamily="Dagheest"
                border="2px solid"
                _hover={{
                  bgColor: "black",
                  color: "primaryNeon",
                  border: "2px solid",
                  borderColor: "primaryNeon"
                }}
              >
                Apply to Attend
              </Button>
            </ChakraLink>
            {/* <Button
              borderRadius="none"
              paddingY={2}
              paddingX={2}
              transition="all ease-in-out .25s"
              color="primaryRed"
              bgColor="primaryNeon"
              fontFamily="Dagheest"
              border="2px solid"
              _hover={{
                bgColor: "black",
                color: "primaryNeon",
                border: "2px solid",
                borderColor: "primaryNeon"
              }}
            >
              Buy Ticket
            </Button> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
