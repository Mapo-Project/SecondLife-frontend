/* eslint-disable */
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodayClose from "./TodayClose";
import { useState } from "react";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Floating = styled.div`
  cursor: pointer;
  img {
    position: fixed;
    right: 30px;
    bottom: 70px;
    z-index: 18;
  }
  h6 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 95px;
    bottom: 135px;
    z-index: 19;
    text-align: center;
    ${({ theme }) => theme.korean.headline6};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Circle = () => {
  // store에 저장된 Access Token 정보를 받아 온다
  const { accessToken } = useSelector((state) => state.token);

  const [floatingClose, setFloatingClose] = useState(false);

  return (
    <>
      {floatingClose ? null : (
        <Floating
          onClick={() => {
            alert("옷정리시작");
          }}
        >
          <img src={`${imgUrl}Star6.png`} alt="" />
          <h6>
            옷정리
            <br />
            시작하기
          </h6>
        </Floating>
      )}

      {accessToken ? null : (
        <TodayClose
          floatingClose={floatingClose}
          setFloatingClose={setFloatingClose}
        />
      )}
    </>
  );
};

export default Circle;
