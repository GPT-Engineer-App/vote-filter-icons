import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, IconButton, HStack } from "@chakra-ui/react";
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const FilterModal = ({ isOpen, onClose, filter, setFilter }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter Votes</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack justify="center">
            <IconButton icon={<FaHeart />} aria-label="Filter by Love" onClick={() => setFilter(filter.includes("love") ? filter.filter((f) => f !== "love") : [...filter, "love"])} variant={filter.includes("love") ? "solid" : "outline"} colorScheme="red" />
            <IconButton icon={<FaThumbsUp />} aria-label="Filter by Like" onClick={() => setFilter(filter.includes("like") ? filter.filter((f) => f !== "like") : [...filter, "like"])} variant={filter.includes("like") ? "solid" : "outline"} colorScheme="blue" />
            <IconButton icon={<FaThumbsDown />} aria-label="Filter by Dislike" onClick={() => setFilter(filter.includes("dislike") ? filter.filter((f) => f !== "dislike") : [...filter, "dislike"])} variant={filter.includes("dislike") ? "solid" : "outline"} colorScheme="blue" />
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;