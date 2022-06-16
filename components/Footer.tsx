import { Box, Stack } from "@chakra-ui/react";
import Copyright from "components/Copyright";

const Footer = () => (
  <Box as="footer" role="contentinfo">
    <Stack paddingX={{ base: "4", md: "16" }} />
    <Copyright content="MCON. All rights reserved." />
  </Box>
);

export default Footer;
