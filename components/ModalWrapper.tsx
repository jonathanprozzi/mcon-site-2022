import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  BoxProps
} from "@chakra-ui/react";

export interface ModalWrapperProps extends BoxProps {
  name: string; // name of the modal for use throughout app
  title: string;
  content: React.ReactNode;
  titleColor?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  bgColor?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  name,
  title,
  content,
  size,
  isOpen,
  onClose,
  ...props
}: ModalWrapperProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size || "2xl"}>
      <ModalOverlay />
      <ModalContent
        background={props.bgColor ? props.bgColor : "white"}
        minWidth="20vw"
        paddingY={8}
      >
        <ModalHeader color={props.color ? props.color : "gray.800"}>
          {title}
        </ModalHeader>
        <ModalCloseButton color="gray.800" />
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
