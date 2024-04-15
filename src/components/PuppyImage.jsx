import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

const PuppyImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error("Error fetching puppy image:", error);
      }
    };

    fetchImage();
  }, []);

  return <Image src={imageUrl} alt="Random Puppy" boxSize="100px" objectFit="cover" borderRadius="md" />;
};

export default PuppyImage;
