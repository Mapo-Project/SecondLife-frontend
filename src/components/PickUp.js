import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const TopWrapper = styled.div`
  width: 480px;
  height: 422px;
  background-color: ${({ theme }) => theme.colors.green300};
  border: 5px solid ${({ theme }) => theme.colors.black};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .close-btn {
    margin: 16px 19px 0 0;
  }
`;

const CenterContents = styled.div`
  display: flex;
  overflow: hidden;
  .profile-img {
    width: 120px;
    height: 120px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 100%;
    margin: 0 20px;
    background-size: contain;
    background-position: center;
  }
  .right-contents {
    p {
      font-family: "Noto Sans KR";
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.1px;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 24px;
    }
    button {
      padding: 7px 16px 7px 20px;
      ${({ theme }) => theme.korean.subtitle2};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray900};
      cursor: pointer;
      border-radius: 20px;
      span {
        margin-right: 8px;
      }
    }
    button:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.green300};
    }
  }
`;

const Box = styled.div`
  margin: 13px;
  width: 440px;
  height: 64px;
  padding: 0px 26px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:nth-child(1) {
    ${({ theme }) => theme.korean.subtitle1};
  }
  p:nth-child(2) {
    font-family: "Noto Sans KR";
    font-weight: 350;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
`;

const PickUp = () => {
  return (
    <TopWrapper>
      <CloseBtnWrapper>
        <img
          className="close-btn"
          src={`${process.env.PUBLIC_URL}/assets/images/icons/x.png`}
          alt="close button"
        />
      </CloseBtnWrapper>
      <CenterContents>
        <div
          className="profile-img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/followingListImg/follow2.jpg)`,
          }}
        />
        <div className="right-contents">
          <p>
            지구를 생각하는 세컨드 라이프의
            <br /> 픽업서비스, 오늘 처음이신가요?
          </p>
          <Link to="/">
            <button>
              <span>픽업과정 보러가기</span>
              <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
            </button>
          </Link>
        </div>
      </CenterContents>
      <Box>
        <p>어떻게 픽업할까요?</p>
        <p>Choose your Pick-up Options</p>
      </Box>
    </TopWrapper>
  );
};

export default PickUp;
