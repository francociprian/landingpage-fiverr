import React from "react";
import { chakra, Box, SimpleGrid, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillGearFill , BsBellFill  } from "react-icons/bs";

const Data = [
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quasi accusantium cum vero blanditiis, voluptatum sed inventore eveniet maiores saepe, iste sapiente cumque nulla at. Reiciendis qui modi tenetur sed.",
    icon: BsFillCartPlusFill
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quasi accusantium cum vero blanditiis, voluptatum sed inventore eveniet maiores saepe, iste sapiente cumque nulla at. Reiciendis qui modi tenetur sed.",
    icon: BsFillGearFill
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quasi accusantium cum vero blanditiis, voluptatum sed inventore eveniet maiores saepe, iste sapiente cumque nulla at. Reiciendis qui modi tenetur sed.",
    icon: BsBellFill 
  },
];

export default function Features(){

  const bgColor = useColorModeValue('#edf3f8', '#3e3e3e');
  return (
    <Flex
      id="features"
      bg={bgColor}
      p={20}
      w="auto"
      flexDir='column'
      justifyContent="center"
      alignItems="center"
    >
      <Flex 
        flexDir='column'
        alignItems='center'
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="xl"
        py={10}
      >
        <chakra.h1
        pt={{sm: '1rem'}}
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        letterSpacing="tight"
        lineHeight="short"
        fontWeight="extrabold"
        color="gray.900"
        _dark={{ color: "white" }}
      >
        Features
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
      >
        {Data
          ? Data.map((data , i) => (
            <Box key={i}>
              <Icon boxSize={12} _light={{ color: "brand.700" }} mb={4} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                <data.icon/>
              </Icon>
              <chakra.h3 mb={3} fontSize="lg" lineHeight="shorter" fontWeight="bold" _light={{ color: "gray.900" }}>
                {data.title}
              </chakra.h3>
              <chakra.p
                lineHeight="tall"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                {data.text}
              </chakra.p>
            </Box>
            ))
          : 'loading'}
      </SimpleGrid>
      </Flex>
    </Flex>
  );
};