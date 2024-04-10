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
  const [filter, setFilter] = useState(null);

  const filteredVotes = filter ? votes.filter((vote) => vote.type === filter) : votes;

  return (
    <Box maxWidth="400px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Vote List
      </Heading>

      <HStack justify="center" mb={8}>
        <IconButton icon={<FaHeart />} aria-label="Filter by Love" onClick={() => setFilter(filter === "love" ? null : "love")} variant={filter === "love" ? "solid" : "outline"} colorScheme="red" />
        <IconButton icon={<FaThumbsUp />} aria-label="Filter by Like" onClick={() => setFilter(filter === "like" ? null : "like")} variant={filter === "like" ? "solid" : "outline"} colorScheme="green" />
        <IconButton icon={<FaThumbsDown />} aria-label="Filter by Dislike" onClick={() => setFilter(filter === "dislike" ? null : "dislike")} variant={filter === "dislike" ? "solid" : "outline"} colorScheme="blue" />
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
