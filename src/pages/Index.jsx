import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, IconButton, Divider } from "@chakra-ui/react";
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const votes = [
  { id: 1, name: "Vote 1", type: "love" },
  { id: 2, name: "Vote 2", type: "like" },
  { id: 3, name: "Vote 3", type: "dislike" },
  { id: 4, name: "Vote 4", type: "love" },
  { id: 5, name: "Vote 5", type: "like" },
  { id: 6, name: "Vote 6", type: "dislike" },
];

const Index = () => {
  const [filter, setFilter] = useState([]);

  const filteredVotes = filter.length > 0 ? votes.filter((vote) => filter.includes(vote.type)) : votes;

  return (
    <Box maxWidth="400px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Vote List
      </Heading>

      <HStack justify="center" mb={8}>
        <IconButton icon={<FaHeart />} aria-label="Filter by Love" onClick={() => setFilter(filter.includes("love") ? filter.filter((f) => f !== "love") : [...filter, "love"])} variant={filter.includes("love") ? "solid" : "outline"} colorScheme="red" />
        <IconButton icon={<FaThumbsUp />} aria-label="Filter by Like" onClick={() => setFilter(filter.includes("like") ? filter.filter((f) => f !== "like") : [...filter, "like"])} variant={filter.includes("like") ? "solid" : "outline"} colorScheme="blue" />
        <IconButton icon={<FaThumbsDown />} aria-label="Filter by Dislike" onClick={() => setFilter(filter.includes("dislike") ? filter.filter((f) => f !== "dislike") : [...filter, "dislike"])} variant={filter.includes("dislike") ? "solid" : "outline"} colorScheme="blue" />
      </HStack>

      <VStack spacing={4} align="stretch">
        {filteredVotes.map((vote) => (
          <Box key={vote.id} p={4} borderWidth={1} borderRadius="md">
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
