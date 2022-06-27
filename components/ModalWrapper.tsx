import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  BoxProps
} from "@chakra-ui/react";
import StyledBox from "components/StyledBox";

export interface ModalWrapperProps extends BoxProps {
  title: string;
  content: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title,
  content,
  size,
  isOpen,
  onClose
}: ModalWrapperProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size || "3xl"}>
      <ModalOverlay />
      <ModalContent bgColor="primaryRed" minWidth="20vw" paddingY={8}>
        <ModalHeader color="primaryNeon" fontFamily="Basteleur">
          {title}
        </ModalHeader>
        <ModalCloseButton color="primaryNeon" />
        <ModalBody bgColor="transparent" marginX={4}>
          <StyledBox showIcon={false} title="Event Details">
            {content}
          </StyledBox>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
