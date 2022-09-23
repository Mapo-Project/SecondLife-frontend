import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/carouselImg/`;

const Slide = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const carouselData = [
  {
    id: 1,
    imgUrl: `${imgUrl}topbanner01.png`,
    title: `THE MONSTER \r\n IN OUR CLOSET`,
    content: `무심코 입고 버리는 옷들의 탄생과정부터 폐기되기 까지의
    숨겨진 과정들을 모두 알고 있나요?
    세컨드라이프와 함께 지속가능한 의류 소비 습관을 만들어보세요.`,
    button: `지금 참여하기 `,
  },
  {
    id: 2,
    imgUrl: `${imgUrl}topbanner02.gif`,
    title: `THE MONSTER \r\n IN OUR CLOSET2`,
    content: `무심코 입고 버리는 옷들의 탄생과정부터 폐기되기 까지의
    숨겨진 과정들을 모두 알고 있나요?
    세컨드라이프와 함께 지속가능한 의류 소비 습관을 만들어보세요.2`,
    button: `지금 참여하기2 `,
  },
  {
    id: 3,
    imgUrl: `${imgUrl}topbanner03.png`,
    title: `THE MONSTER \r\n IN OUR CLOSET3`,
    content: `무심코 입고 버리는 옷들의 탄생과정부터 폐기되기 까지의
    숨겨진 과정들을 모두 알고 있나요?
    세컨드라이프와 함께 지속가능한 의류 소비 습관을 만들어보세요.3`,
    button: `지금 참여하기3 `,
  },
  {
    id: 4,
    imgUrl: `${imgUrl}topbanner04.png`,
    title: `THE MONSTER \r\n IN OUR CLOSET4`,
    content: `무심코 입고 버리는 옷들의 탄생과정부터 폐기되기 까지의
    숨겨진 과정들을 모두 알고 있나요?
    세컨드라이프와 함께 지속가능한 의류 소비 습관을 만들어보세요.4`,
    button: `지금 참여하기4 `,
  },
  {
    id: 5,
    imgUrl: `${imgUrl}topbanner05.png`,
    title: `THE MONSTER \r\n IN OUR CLOSET5`,
    content: `무심코 입고 버리는 옷들의 탄생과정부터 폐기되기 까지의
    숨겨진 과정들을 모두 알고 있나요?
    세컨드라이프와 함께 지속가능한 의류 소비 습관을 만들어보세요.5`,
    button: `지금 참여하기5 `,
  },
];

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .slide-img {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
    cursor: pointer;
    top: 0;
    left: 0;
    animation: ${Slide} 1s linear;
  }
  .slide-contents {
    position: absolute;
    bottom: 148px;
    z-index: 10;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .slide-title {
    margin-bottom: 31px;
    ${({ theme }) => theme.english.headline3};
    color: ${({ theme }) => theme.colors.green300};
    line-height: 70px;
    text-shadow: -4px 0 #000, 0 4px #000, 4px 0 #000, 0 -4px #000;
  }
  .slide-content {
    margin-bottom: 86px;
    ${({ theme }) => theme.korean.caption};
  }
  .slide-link {
    padding: 7px 16px 7px 20px;
    ${({ theme }) => theme.korean.subtitle2};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid #000;
  }
  .slide-link:hover {
    background-color: ${({ theme }) => theme.colors.green300};
    color: ${({ theme }) => theme.colors.black};
  }
  .active {
    display: flex;
  }
  .angle-right {
    margin-left: 8px;
  }
`;

const BtnWrapper = styled.div`
  /* background-color: black; */
  margin-bottom: 57px;
  width: 132px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
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
      {/* {carouselData.map((datum, index) => (
        <Link to="/" key={datum.id}>
          <SlideWrapper>
            <div
              style={{ backgroundImage: `url(${datum.imgUrl})` }}
              className={
                slideIndex === index ? "slide-img active" : "slide-img"
              }
            />
            <div
              className={
                slideIndex === index
                  ? "slide-contents active"
                  : "slide-contents"
              }
            >
              <pre className="slide-title"> {datum.title} </pre>
              <pre className="slide-content"> {datum.content} </pre>
              <Link to="/" className="slide-link">
                {datum.button}
                <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
              </Link>
            </div>
          </SlideWrapper>
        </Link>
      ))} */}
      <Link to="/">
        <SlideWrapper>
          <div
            style={{ backgroundImage: `url(${imgUrl}topbanner01.png)` }}
            className={slideIndex === 0 ? "slide-img active" : "slide-img"}
          />
        </SlideWrapper>
      </Link>
      <Link to="/">
        <SlideWrapper>
          <div className={slideIndex === 1 ? "slide-img active" : "slide-img"}>
            <video autoPlay muted loop>
              <source src={`${imgUrl}topbanner2.mp4`} type="video/mp4" />
            </video>
          </div>
        </SlideWrapper>
      </Link>
      <Link to="/">
        <SlideWrapper>
          <div
            style={{ backgroundImage: `url(${imgUrl}topbanner03.png)` }}
            className={slideIndex === 2 ? "slide-img active" : "slide-img"}
          />
        </SlideWrapper>
      </Link>
      <Link to="/">
        <SlideWrapper>
          <div
            style={{ backgroundImage: `url(${imgUrl}topbanner04.png)` }}
            className={slideIndex === 3 ? "slide-img active" : "slide-img"}
          />
        </SlideWrapper>
      </Link>
      <Link to="/">
        <SlideWrapper>
          <div
            style={{ backgroundImage: `url(${imgUrl}topbanner05.png)` }}
            className={slideIndex === 4 ? "slide-img active" : "slide-img"}
          />
        </SlideWrapper>
      </Link>
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
