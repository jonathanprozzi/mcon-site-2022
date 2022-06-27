import { Flex } from "@chakra-ui/react";
import Navbar from "components/Navbar";
// import SocialSection from "components/SocialSection";
import Footer from "components/Footer";

interface SiteLayoutProps {
  children: React.ReactChild;
  minHeight?: string;
}

const SiteLayout = ({ children, minHeight = "100vh" }: SiteLayoutProps) => {
  return (
    <Flex
      direction="column"
      overflowX="hidden"
      margin="0 auto"
      // paddingY={{ base: 10, lg: 0 }}
      minHeight={minHeight || "100vh"}
      minWidth="100vw"
      position="relative"
      background="primaryRed"
    >
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify={["flex-start", "flex-start", "center", "center"]}
        flex="1"
        minHeight={["100vh", "100vh", "0", "0"]}
        marginTop={{ base: "0", lg: 0 }}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default SiteLayout;
