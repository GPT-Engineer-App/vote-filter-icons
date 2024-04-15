import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import FilterModal from "../components/FilterModal.jsx";
import PuppyImage from "../components/PuppyImage.jsx";

const votes = [
  { id: 1, name: "Vote 1", type: "love" },
  { id: 2, name: "Vote 2", type: "like" },
  { id: 3, name: "Vote 3", type: "dislike" },
  { id: 4, name: "Vote 4", type: "love" },
  { id: 5, name: "Vote 5", type: "like" },
  { id: 6, name: "Vote 6", type: "dislike" },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);

  const filteredVotes = filter.length > 0 ? votes.filter((vote) => filter.includes(vote.type)) : votes;

  return (
    <Box maxWidth="400px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Vote App
      </Heading>

      <Button onClick={() => setIsOpen(true)} mb={8}>
        Filter
      </Button>
      <FilterModal isOpen={isOpen} onClose={() => setIsOpen(false)} filter={filter} setFilter={setFilter} />

      <VStack spacing={4} align="stretch">
        {filteredVotes.map((vote) => (
          <Box key={vote.id} p={4} borderWidth={1} borderRadius="md" display="flex" alignItems="center">
            <PuppyImage />
            <Text fontSize="lg">{vote.name}</Text>
            <Text fontSize="sm" color="gray.500">
              {vote.type}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
