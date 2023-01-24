import { Container, Box, chakra, Button, Link, Stack } from "@chakra-ui/react";
import ParticlesBg from "particles-bg";

export const Header = () => {
  // return (
  //   <Box pos='relative' w='100%' h='90vh'>
  //     <ParticlesBg type="circle" bg={true} num={10}  />
  //     <div style={{width:'100%', height: '100%', display:'flex', justifyContent:'center', alignItems: 'center'}}>
  //       <Box textAlign='center'>
  //         <chakra.h1
  //           pt={{sm: '1rem'}}
  //           fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }}
  //           letterSpacing="tight"
  //           lineHeight="short"
  //           fontWeight="extrabold"
  //           color="gray.900"
  //           _dark={{ color: "white" }}
  //         >
  //           {props.data ? props.data.title : 'Loading'}
  //         </chakra.h1>
  //         <p>{props.data ? props.data.paragraph : 'Loading'}</p>
  //         <Button size='md' variant='outline'>
  //           <Link _hover={{ textDecoration: 'none' }} href='#features'>
  //             Learn More
  //           </Link>
  //         </Button>
  //       </Box>
  //     </div>
  //   </Box>
  //   // <header id='header' style={{height: '100vh'}}>
  //   //   <div className='intro'>
  //   //     {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0,}} /> */}
  //   //     <ParticlesBg type="circle" bg={true} />
  //   //     <div className='overlay'>
  //   //       <div className='row'>
  //   //         {/* <div className='col-md-8 col-md-offset-2 intro-text'>
  //   //           <h1>
  //   //             {props.data ? props.data.title : 'Loading'}
  //   //             <span></span>
  //   //           </h1>
  //   //           <p>{props.data ? props.data.paragraph : 'Loading'}</p>
  //   //           <a
  //   //             href='#features'
  //   //             className='btn btn-custom btn-lg page-scroll'
  //   //           >
  //   //             Learn More
  //   //           </a>{' '}
  //   //         </div> */}
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </header>
  // )


  return (
    <Box pos="relative" overflow="hidden"  
      // bg='RGBA(255, 255, 255, 0.48)'
      >
      <Box maxW="7xl" mx="auto" h='100vh' display='flex'  alignItems='center'>
        <ParticlesBg type="circle" bg={true} num={10}  />
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "8xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="white"
                _dark={{ color: "white" }}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  We are a <br/>
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color="brand.600"
                  _dark={{ color: "brand.400" }}
                >
                  Landing Page
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color='whiteAlpha.700'
                lineHeight="base"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 2 }}
                justifyContent="center"
              >
                <Box rounded="full" shadow="md">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="white"
                    bg="brand.600"
                    _hover={{ bg: "brand.700" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                    href="#features"
                  >
                    Learn More
                  </chakra.a>
                </Box>
                {/* <Box mt={[3, 0]} ml={[null, 3]}>
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="brand.700"
                    bg="brand.100"
                    _hover={{ bg: "brand.200" }}
                    cursor="pointer"
                  >
                    Live demo
                  </chakra.a>
                </Box> */}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}