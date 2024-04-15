import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

const PuppyImage = ({ imageUrl }) => {
  return <Image src={imageUrl} alt="Random Puppy" boxSize="100px" objectFit="cover" borderRadius="md" />;
};

export default PuppyImage;
