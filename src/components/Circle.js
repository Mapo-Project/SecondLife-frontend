/* eslint-disable */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "./../theme";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const Container = styled.div`
  .circle {
    img {
      position: fixed;
      right: 30px;
      bottom: 15px;
      z-index: 18;
    }
    h6 {
      position: fixed;
      right: 95px;
      bottom: 80px;
      z-index: 19;
      text-align: center;
      ${({ theme }) => theme.korean.headline6};
      color: ${({ theme }) => theme.colors.black};
    }
  }
  /* @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  } */
`;
const Circle = () => {
  return (
    <Container>
      <div
        className="circle"
        onClick={() => {
          alert("옷정리시작");
        }}
      >
        <h6>
          옷정리
          <br />
          시작하기
        </h6>
        <img src={`${imgUrl}Star6.png`} alt=""></img>
      </div>
    </Container>
  );
};

export default Circle;
