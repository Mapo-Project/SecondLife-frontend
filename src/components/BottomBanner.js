/* eslint-disable */
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/BottomBanners/`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
`;

const Container = styled.div`
  display: grid;
  max-width: 1410px;
  width: 100%;
  width: 1410px;
  height: 911px;
  grid-template: 40% 25.38% 34.61% / 22.34% 22.34% 19.21% 36.09%;
  cursor: pointer;
  margin-top:100px;
  margin-bottom: 100px;
  .item {
    height: 100%;
  }
  .item:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
    background-image: url(${imgUrl}kickthe.jpg);
    background-size: cover;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-top: 2px solid ${({ theme }) => theme.colors.black};
    border-left: 2px solid ${({ theme }) => theme.colors.black};
  }
  .item:nth-child(2) {
    grid-column: 3/5;
    grid-row: 1/2;
    background-image: url(${imgUrl}upcycle.jpg);
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-top: 2px solid ${({ theme }) => theme.colors.black};
    border-right: 2px solid ${({ theme }) => theme.colors.black};
    background-size: cover;
  }
  .item:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: url(${imgUrl}→.png);
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #000000;
  }
  .item:nth-child(4) {
    background-image: url(${imgUrl}Frame5669.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-right: 2px solid ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      ${({ theme }) => theme.korean.body2};
      color: ${({ theme }) => theme.colors.white};
      text-shadow: -1px 0 black, 0px 1px black, 1px 0px black, 0px -1px black;
      /* -webkit-text-stroke: 1px black */
    }
  }
  .item:nth-child(5) {
    background-image: url(${imgUrl}findurstyle.jpg);
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    background-size: cover;
  }
  .item:nth-child(6) {
    background-image: url(${imgUrl}3R.jpg);
    border: 1px solid black;
    border-bottom: 2px solid black;
    background-size: cover;
  }
  .item:nth-child(7) {
    grid-column: 3/5;
    grid-row: 3/4;
    background-image: url(${imgUrl}ourhouse.jpg);
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    span {
      ${({ theme }) => theme.korean.body2};
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 195px;
      margin-right: 110px;
    }
  }
`;
const BottomBanners = () => {
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <div
          className="item"
            onClick={() => {
              navigate("/");
            }}
        ></div>

        <div className="item"></div>
        <div className="item"></div>
        <div className="item">
          <span>
            힘들게 한 옷정리
            <br />
            판매는
            <br /> 빠르고 쉽게
          </span>
        </div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item">
          <span>
            세컨드라이프의 그린포인트로
            <br />
            환경 운동가들의 탄소제로 캠패인을 <br />
            적극적 으로 응원하고 참여하세요!
          </span>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BottomBanners;
