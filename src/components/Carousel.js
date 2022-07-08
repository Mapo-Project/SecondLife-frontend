import { useEffect, useState } from "react";
import styled from "styled-components";
import { carouselData } from "../utils/carouselData";

const SlideWrapper = styled.div`
  /* background-color: aquamarine; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .active {
    opacity: 1;
  }
`;

const BtnWrapper = styled.div`
  /* background-color: black; */
  width: 132px;
  display: flex;
  justify-content: space-between;
  .slide-btn {
    width: 20px;
    height: 8px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.gray300};
    cursor: pointer;
  }
  .slide-btn:hover {
    background-color: ${({ theme }) => theme.colors.gray900};
  }
`;

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < carouselData.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => nextSlide(), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [slideIndex]);

  const selectSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="carousel">
      <SlideWrapper>
        {carouselData.map((datum, index) => (
          <div
            style={{ backgroundImage: `url(${datum.imgUrl})` }}
            className={slideIndex === index ? "slide active" : "slide"}
            key={datum.id}
          />
        ))}
      </SlideWrapper>
      <BtnWrapper>
        {carouselData.map((datum, index) => {
          return (
            <div
              className="slide-btn"
              onClick={() => selectSlide(index)}
              key={datum.id}
            />
          );
        })}
      </BtnWrapper>
    </div>
  );
};

export default Carousel;
