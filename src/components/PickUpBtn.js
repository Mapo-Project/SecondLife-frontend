import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PickUp from "./PickUp";

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
`;

const PickUpBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div
          className="circle"
          onClick={() => {
            navigate("/pickup");
          }}
        >
          <h6>
            옷정리
            <br />
            시작하기
          </h6>
          <img src={`${imgUrl}Star6.png`} alt="옷 정리" />
        </div>
      </Container>
      <Routes>
        <Route path="pickup" element={<PickUp />} />
      </Routes>
    </>
  );
};

export default PickUpBtn;
