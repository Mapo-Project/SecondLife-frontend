/* eslint-disable */
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import TodayClose from "./TodayClose";

import PickUp from "./PickUp";

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
    right: 75px;
    bottom: 145px;
    z-index: 19;
    text-align: center;
    ${({ theme }) => theme.korean.headline6};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const PickUpPopup = () => {
  const navigate = useNavigate();

  // store에 저장된 Access Token 정보를 받아 온다
  const { accessToken } = useSelector((state) => state.token);

  const [floatingClose, setFloatingClose] = useState(false);

  return (
    <>
      {floatingClose ? null : (
        <Floating
          onClick={() => {
            navigate("/pickup");
          }}
        >
          <img src={`${imgUrl}Pickup.png`} alt="옷 정리" />
          <h6>
            안 입는 옷
            <br />
            픽업 신청하기
          </h6>
        </Floating>
      )}
      <TodayClose
        floatingClose={floatingClose}
        setFloatingClose={setFloatingClose}
      />
      <Routes>
        <Route path="pickup" element={<PickUp />} />
      </Routes>
    </>
  );
};

export default PickUpPopup;
