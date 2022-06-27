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
      backgroundColor={{ base: "black", lg: "transparent" }}
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
        <Link href="/" passHref>
          <ChakraLink textDecoration="none">
            <Logo />
            {/* <Heading
              as="h1"
              fontFamily="Basteleur"
              fontSize="2xl"
              fontWeight="bold"
              color="primaryNeon"
              textDecoration="none"
            >
              MCON 2
            </Heading> */}
          </ChakraLink>
          {/* </VisuallyHidden> */}
        </Link>
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
          <Stack spacing={5}>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              fontFamily="Basteleur"
            >
              <StyledLink href="/#about" text="About" />
              <StyledLink href="/details" text="Details" />
              <StyledLink href="/#speakers" text="Speakers" />
              <StyledLink href="/#sponsors" text="Sponsors" />
            </Box>
          </Stack>
        </MobileNav>
        <Flex
          alignItems="center"
          justifyContent="center"
          display={{ base: "none", md: "flex" }}
          paddingY={4}
          paddingRight={16}
          fontFamily="DisposableDroidBB"
        >
          <StyledLink href="/#about" text="About" />
          <StyledLink href="/details" text="Details" />
          <StyledLink href="/#speakers" text="Speakers" />
          <StyledLink href="/#sponsors" text="Sponsors" />
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
