import React, { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import FilterModal from "../components/FilterModal.jsx";
import PuppyImage from "../components/PuppyImage.jsx";

const votes = [
  { id: 1, name: "Vote 1", type: "love", imageUrl: "" },
  { id: 2, name: "Vote 2", type: "like", imageUrl: "" },
  { id: 3, name: "Vote 3", type: "dislike", imageUrl: "" },
  { id: 4, name: "Vote 4", type: "love", imageUrl: "" },
  { id: 5, name: "Vote 5", type: "like", imageUrl: "" },
  { id: 6, name: "Vote 6", type: "dislike", imageUrl: "" },
];

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState([]);
  const [puppyImages, setPuppyImages] = useState([]);

  useEffect(() => {
    const fetchPuppyImages = async () => {
      try {
        const updatedVotes = await Promise.all(
          votes.map(async (vote) => {
            if (!vote.imageUrl) {
              const response = await fetch("https://dog.ceo/api/breeds/image/random");
              const data = await response.json();
              vote.imageUrl = data.message;
            }
            return vote;
          }),
        );
        setPuppyImages(updatedVotes);
      } catch (error) {
        console.error("Error fetching puppy images:", error);
      }
    };

    fetchPuppyImages();
  }, []);

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
        {filteredVotes.map((vote, index) => (
          <Box key={vote.id} p={4} borderWidth={1} borderRadius="lg" boxShadow="md" display="flex" alignItems="center" bg="white">
            <PuppyImage imageUrl={vote.imageUrl} mr={4} />
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                {vote.name}
              </Text>
              <Text fontSize="sm" color="gray.500" textTransform="uppercase">
                {vote.type}
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
