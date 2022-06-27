import { CloseButton, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const MobileNav = ({ isOpen, onClose, children }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            width="100%"
            background="black"
            height="100vh"
            overflow="auto"
            position="absolute"
            top={0}
            left={0}
            zIndex={20}
            paddingX={4}
            paddingY={4}
            marginBottom={{ base: "10vh", lg: 0 }}
          >
            {children}
            <CloseButton
              pos="absolute"
              top={8}
              right={10}
              onClick={onClose}
              size="md"
              color="primaryRed"
            />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
