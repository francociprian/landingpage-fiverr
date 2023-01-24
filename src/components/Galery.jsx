import React, { useState, useCallback } from "react";
import { SimpleGrid, Box, Container } from '@chakra-ui/react'
// import ImageViewer from "react-simple-image-viewer";

import Card from "./Card";

export const Gallery = props => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum" },
    { thumb: "img/portfolio/01-small.jpg", title: "Lorem Ipsum" },
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

//   const closeImageViewer = () => {
//     setCurrentImage(0);
//     setIsViewerOpen(false);
//   };

  return (
    <Box id="gallery">
      <Box minHeight="100vh" display="flex" flexDir="column" >
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <Container  maxW={'5xl'} my="30px" flex={1}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
            {data.map(({ title, thumb }, index) => (
              <Card key={index} title={title} src={thumb} />
            ))}
          </SimpleGrid>
        </Container>

          {/* {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )} */}
      </Box>
    </Box>
  );
};
