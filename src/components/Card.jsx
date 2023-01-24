import { Box, Flex, Img, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';


// const MotionImg = motion.custom(Img);

export default function Card({ src, title }) {
    const cardColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Box backgroundColor={cardColor} borderRadius={['sm', null, 'md']} overflow="hidden">
            <Box
                // onClick={() => onImageClick(post)}
                cursor="pointer"
                h="240px"
                position="relative"
                overflow="hidden">
                <Img
                    transition={{ duration: 0.3 }}
                    // whileHover={{ scale: 1.1 }}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    src={src}
                />
            </Box>
            <Flex px="4" py="2" align="center" justify="space-between" w="100%">
                <Text fontSize={['xs', null, 'sm']}>
                    {title}
                </Text>
            </Flex>
        </Box>
    );
}
