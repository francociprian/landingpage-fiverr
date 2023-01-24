// import React from "react";
// import { chakra, Box, useColorModeValue, Icon, Image } from "@chakra-ui/react";

// export default function Home(){
//   const bg = useColorModeValue("white", "gray.800");
//   return (
//     <Box 
//       // pos="relative" 
//       overflow="hidden" bg={bg} my='13rem'
//       >
//       <Box maxW="7xl" mx="auto">
//         <Box
//           pos="relative"
//           pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
//           maxW={{ lg: "2xl" }}
//           w={{ lg: "full" }}
//           zIndex={1}
//           bg={bg}
//           border="solid 1px transparent"
//         >
//           <Icon
//             display={{ base: "none", lg: "block" }}
//             position="absolute"
//             right={0}
//             top={0}
//             bottom={0}
//             h="full"
//             w={48}
//             color={bg}
//             transform="translateX(50%)"
//             fill="currentColor"
//             viewBox="0 0 100 100"
//             preserveAspectRatio="none"
//             aria-hidden="true"
//           >
//             <polygon points="50,0 100,0 50,100 0,100" />
//           </Icon>
//           <Box
//             mx="auto"
//             minH='300px'
//             maxW={{ base: "7xl" }}
//             px={{ base: 4, sm: 6, lg: 8 }}
//             mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
//           >
//             <Box
//               w="full"
//               textAlign={{ sm: "center", lg: "left" }}
//               justifyContent="center"
//               alignItems="center"
//             >
//               <chakra.h1
//                 fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
//                 letterSpacing="tight"
//                 lineHeight="short"
//                 fontWeight="extrabold"
//                 color="gray.900"
//                 _dark={{ color: "white" }}
//               >
//                 {/* <chakra.span display={{ base: "block", xl: "inline" }}>
//                   Data to enrich your{" "}
//                 </chakra.span> */}
//                 <chakra.span
//                   display={{ base: "block", xl: "inline" }}
//                   color="brand.600"
//                   _dark={{ color: "brand.400" }}
//                 >
//                   About Us
//                 </chakra.span>
//               </chakra.h1>
//               <chakra.p
//                 mt={{ base: 3, sm: 5, md: 5 }}
//                 fontSize={{ sm: "lg", md: "xl" }}
//                 maxW={{ sm: "xl" }}
//                 mx={{ sm: "auto", lg: 0 }}
//                 color="gray.500"
//               >
//                 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//                 lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//                 fugiat aliqua.
//               </chakra.p>
//               <Box
//                 mt={{ base: 5, sm: 8 }}
//                 display={{ sm: "flex" }}
//                 justifyContent={{ sm: "center", lg: "start" }}
//                 fontWeight="extrabold"
//                 fontFamily="fantasy"
//               >
//                 <Box rounded="full" shadow="md">
//                   <chakra.a
//                     w="full"
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     border="solid 1px transparent"
//                     fontSize={{ base: "md", md: "lg" }}
//                     rounded="md"
//                     color="white"
//                     bg="brand.600"
//                     _hover={{ bg: "brand.700" }}
//                     px={{ base: 8, md: 10 }}
//                     py={{ base: 3, md: 4 }}
//                     cursor="pointer"
//                   >
//                     Get started
//                   </chakra.a>
//                 </Box>
//                 <Box mt={[3, 0]} ml={[null, 3]}>
//                   <chakra.a
//                     w="full"
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     px={{ base: 8, md: 10 }}
//                     py={{ base: 3, md: 4 }}
//                     border="solid 1px transparent"
//                     fontSize={{ base: "md", md: "lg" }}
//                     rounded="md"
//                     color="brand.700"
//                     bg="brand.100"
//                     _hover={{ bg: "brand.200" }}
//                     cursor="pointer"
//                   >
//                     Live demo
//                   </chakra.a>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         position={{ lg: "absolute" }}
//         top={{ lg: 0 }}
//         bottom={{ lg: 0 }}
//         right={{ lg: 0 }}
//         w={{ lg: "50%" }}
//         border="solid 1px transparent"
//       >
//         <Image
//           h={[56, 72, 96, "full"]}
//           w="full"
//           fit="cover"
//           src='../../public/img/about.jpg'
//           alt=""
//           loading="lazy"
//         />
//       </Box>
//     </Box>
//   );
// };

import React from "react";
import {
  chakra,
  Box,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  VStack,
  Image,
  Icon
} from "@chakra-ui/react";

const List = (props) => {
  return (
    <Flex>
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        color="brand.500"
        _dark={{ color: "brand.300" }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      <chakra.p
        fontSize="sm"
        color="gray.700"
        _dark={{ color: "gray.400" }}
        {...props}
      />
    </Flex>
  );
};


export default function AboutUs(){
  return (
    <SimpleGrid
    columns={{ base: 1, md: 2 }}
    spacing={0}
    _after={{bg: "brand.500",opacity: 0.25,pos: "absolute",top: 0,left: 0,bottom: 0,right: 0,zIndex: -1,content: '" "'}}
    id="about"

    >
      <Flex direction="column" alignItems="start" justifyContent="center"  px={{ base: 4, lg: 20 }}  py={24} >
        <chakra.h1
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          mb={6}
          letterSpacing="tight"
          lineHeight="short"
          fontWeight="extrabold"
          color="gray.900"
          _dark={{ color: "white" }}
          p={10}
        >
          About Us
        </chakra.h1>
        <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacing={5}
          >
            <List>Email APIs, SMTP Relay, and Webhooks</List>
            <List>Suppression Management</List>
            <List>Email Tracking and Analytics</List>
            <List>99.99% Guaranteed Uptime SLA</List>
            <List>5 Days of Log Retention</List>
            <List>Limited 24/7 Ticket Support</List>
            <List>1 Dedicated IP (Foundation 100k and up)</List>
            <List>1,000 Email Address Validations</List>
            <List>Host events together or get your event sponsored</List>
            <List>Reach 90,000 customers via our integration page</List>
          </SimpleGrid>
      </Flex>
      <Box>
        <Image
          src='../../public/img/about.jpg'
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
};



