import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function ProductModal({ children, modalTitle, modalBtnTitle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        color="white"
        bg="green.900"
        fontSize="md"
        _hover={{ bg: "green.800" }}
        onClick={onOpen}
      >
        {modalBtnTitle}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={8}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
