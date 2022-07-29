import { useEffect, useState } from 'react';

import styled from 'styled-components';

const CarouselContainer = styled.div`
  background-color: #555;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  height: 20rem;
  min-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const CarouselItemTitle = styled.h3``;

const Carousel = () => {
  const data = ['1', '2', '3', '4'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <CarouselContainer>
      {/* <CarouselItem>
        <CarouselItemTitle>Item 1</CarouselItemTitle>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemTitle>Item 2</CarouselItemTitle>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemTitle>Item 3</CarouselItemTitle>
      </CarouselItem>
      <CarouselItem>
        <CarouselItemTitle>Item 4</CarouselItemTitle>
      </CarouselItem> */}

      {data.map((item, index) => {
        return (
          <CarouselItem
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <CarouselItemTitle>{item}</CarouselItemTitle>
          </CarouselItem>
        );
      })}
    </CarouselContainer>
  );
};

export default Carousel;
