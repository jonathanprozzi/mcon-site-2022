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
      top="0"
      zIndex="1000"
      height="10vh"
      paddingY={4}
      paddingX={[2, 2, 8, 8]}
    >
      <Flex
        direction="row"
        justifyContent="space-between"
        align="center"
        width={["100vw", "100vw", "100vw", "100vw"]}
        paddingX={[7, 4, 6, 8]}
      >
        <Link href="/" passHref>
          <a>
            {/* <VisuallyHidden> */}
            <Heading
              as="h1"
              fontFamily="Basteleur"
              fontSize="2xl"
              fontWeight="bold"
              color="primaryNeon"
            >
              MCON 2
            </Heading>
            {/* </VisuallyHidden> */}
            {/* <Logo /> */}
          </a>
        </Link>
        <IconButton
          display={{ base: "flex", md: "none" }}
          size="sm"
          aria-label="Open menu"
          fontSize="24px"
          variant="ghost"
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
              <Link href="/#about" passHref>
                <StyledLink text="About" />
              </Link>
              <Link href="/details" passHref>
                <ChakraLink marginRight={4}>
                  <Text
                    fontSize="2xl"
                    color="brand.white"
                    transition="all ease-in-out .25s"
                    textDecoration="none"
                    _hover={{
                      color: "brand.pink"
                    }}
                  >
                    Details
                  </Text>
                </ChakraLink>
              </Link>
              <Link href="/#sponsors" passHref>
                <ChakraLink marginRight={4}>
                  <Text
                    fontSize="2xl"
                    color="brand.white"
                    transition="all ease-in-out .25s"
                    textDecoration="none"
                    _hover={{
                      color: "brand.pink"
                    }}
                  >
                    Sponsors
                  </Text>
                </ChakraLink>
              </Link>
              <Link href="/#speakers" passHref>
                <ChakraLink
                  // display={["none", "none", "inline-flex", "inline-flex"]}
                  marginRight={4}
                >
                  <Text
                    fontSize="2xl"
                    color="brand.white"
                    transition="all ease-in-out .25s"
                    textDecoration="none"
                    _hover={{
                      color: "brand.pink"
                    }}
                  >
                    Speakers
                  </Text>
                </ChakraLink>
              </Link>

              <ChakraLink
                isExternal
                href="https://form.typeform.com/to/b7yXTDNP"
              >
                <Box
                  fontSize="2xl"
                  marginTop={4}
                  paddingY={4}
                  paddingX={4}
                  // variant='solid'
                  width="100%"
                  transition="all ease-in-out .25s"
                  bgGradient="linear(to-r,#FF74F2, #74EEFF)"
                  _hover={{
                    bgGradient: "linear(to-r, #74EEFF, #FF74F2)"
                  }}
                  color="black"
                >
                  Tickets
                </Box>
              </ChakraLink>
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
          <Link href="/#about" passHref>
            <StyledLink text="About" />
          </Link>
          <Link href="/#about" passHref>
            <StyledLink text="Details" />
          </Link>
          <Link href="/#speakers" passHref>
            <StyledLink text="Speakers" />
          </Link>
          <Link href="/#sponsors" passHref>
            <StyledLink text="Sponsors" />
          </Link>
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
