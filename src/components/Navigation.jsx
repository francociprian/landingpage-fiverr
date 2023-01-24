import { GrMenu, GrClose, GrSun, GrMoon } from 'react-icons/gr'
// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Icon,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

const Links = ['features', 'about', 'services', 'gallery', 'testimonials'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    textTransform='capitalize'
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`#${children}`}>
    {children}
  </Link>
);

export default function Navigation() {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} backgroundColor={bgColor} pos='fixed' w='100%' zIndex={99}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'xl'}
            icon={isOpen ? <GrClose /> : <GrMenu/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color='red.500'
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading as='h1' size='xl' noOfLines={1}>Landing Page</Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} >{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <Icon
              onClick={toggleColorMode}
              as={colorMode ? GrSun : GrMoon }
              color="red.300"
              //   _dark={{ color: "white" }}
            />  
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>
                  <IconButton
                      ml={1}
                      onClick={toggleColorMode}
                      variant="ghost"
                      aria-label="Toggle theme"
                      icon={themeIcon}
                  />  
                </MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}





// import { Button, Container } from '@chakra-ui/react'

//  const HolaAmigos = (props) => {
//     return (
//       <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
//         <Container className='container'>
//           <div className='navbar-header'>
//             <Button
//               type='button'
//               className='navbar-toggle collapsed'
//               data-toggle='collapse'
//               data-target='#bs-example-navbar-collapse-1'
//             >
//               {' '}
//               <span className='sr-only'>Toggle navigation</span>{' '}
//               <span className='icon-bar'></span>{' '}
//               <span className='icon-bar'></span>{' '}
//               <span className='icon-bar'></span>{' '}
//             </Button>
//             <a className='navbar-brand page-scroll' href='#page-top'>
//               Landing Page
//             </a>{' '}
//           </div>
  
//           <div
//             className='collapse navbar-collapse'
//             id='bs-example-navbar-collapse-1'
//           >
//             <ul className='nav navbar-nav navbar-right'>
//               <li>
//                 <a href='#features' className='page-scroll'>
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href='#about' className='page-scroll'>
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href='#services' className='page-scroll'>
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href='#portfolio' className='page-scroll'>
//                   Gallery
//                 </a>
//               </li>
//               <li>
//                 <a href='#testimonials' className='page-scroll'>
//                   Testimonials
//                 </a>
//               </li>
              
//             </ul>
//           </div>
//         </Container>
//       </nav>
//     )
// }