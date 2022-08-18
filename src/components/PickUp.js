import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PickUpOptions from "./PickUpOptions";
import PickUpLocation from "./PickUpLocation";
import { useDispatch, useSelector } from "react-redux";
import PickUpDate from "./PickUpDate";

const TopWrapper = styled.div`
  width: 480px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.green300};
  border: 5px solid ${({ theme }) => theme.colors.black};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: fixed;
  right: 129px;
  bottom: 0px;
  z-index: 19;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .close-btn {
    margin: 8px 9.5px 0 0;
  }
  /* background-color: aliceblue; */
`;

const CenterContents = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  /* background-color: lightblue; */
  .right-contents {
    margin-right: 58px;
    margin-bottom: 13px;
    color: ${({ theme }) => theme.colors.white};
    /* background-color: antiquewhite; */
    .firstP {
      font-family: "Noto Sans KR";
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.1px;
    }
    .isLogin {
      margin-bottom: 16px;
    }
    .isNotLogin {
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

const SaveResult = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  p {
    ${({ theme }) => theme.colors.black};
  }
  span {
    display: block;
  }
  .num {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  .unit {
    ${({ theme }) => theme.korean.subtitle1};
  }
`;

const ProfileImg = styled.div`
  position: relative;
  /* background-color: aliceblue; */
  width: 120px;
  height: 120px;
  margin-left: 20px;
  .profile-img {
    width: 120px;
    height: 120px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 100%;
    background-size: contain;
    background-position: center;
  }
  .alert-circle {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Box = styled.div`
  margin: 0px auto 10px;
  width: 440px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  &.clicked {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
  &:nth-last-child(1) {
    margin-bottom: 0px;
  }
`;

const BoxTitle = styled.div`
  padding: 20px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  p:nth-child(1) {
    ${({ theme }) => theme.korean.subtitle1};
    ${({ theme }) => theme.korean.gray900};
  }
  p:nth-child(2) {
    font-family: "Noto Sans KR";
    font-weight: 350;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const PickUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = "김뫄뫄";
  const number = 7;
  const [isClicked, setIsClicked] = useState("");

  // 픽업 방법 데이터
  const [clothesNum, setClothesNum] = useState(0);
  const [greenBagNum, setGreenBagNum] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });
  const { small, medium, large } = greenBagNum;
  const [howto, setHowto] = useState("");

  // console.log("clothesNum", clothesNum);
  // console.log("greenBagNum", greenBagNum);
  // console.log("howto", howto);
  // console.log("tre", greenBagNum ? "true" : "false");

  const showGreenBagSize = () => {};

  showGreenBagSize();

  const showGreenBagNum = () => {
    let greenBags = [small, medium, large];
    let resultArr = greenBags.filter((bag) => bag !== 0);
    let containOne = resultArr.filter((bag) => bag === 1);
    if (containOne.length > 1) {
      return "각 1개";
    }
    let resultToString = resultArr.toString().replace(",", "+");
    return `${resultToString}개`;
  };

  showGreenBagNum();
  const showHowto = () => {
    if (howto === "01") {
      return " | 포인트";
    } else if (howto === "02") {
      return " | 판매";
    } else if (howto === "03") {
      return " | 판매+포인트";
    } else {
      return;
    }
  };

  const handleBoxTitleClick = (value) => {
    setIsClicked(`${value}`);
  };

  const [fullAdd, setFullAdd] = useState("");

  const tomorrow = new Date(Date.now() + 3600 * 1000 * 24);
  const [pickupDate, setPickupDate] = useState(tomorrow);
  const [pickupTime, setPickupTime] = useState("");

  const showPickupTime = () => {
    if (pickupTime === "01") {
      return " | 06AM - 11AM";
    } else if (pickupTime === "02") {
      return " | 10AM - 14AM";
    } else if (pickupTime === "03") {
      return " | 14AM - 19AM";
    } else if (pickupTime === "04") {
      return " | 18AM - 20AM";
    } else {
      return;
    }
  };

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
        <ProfileImg>
          {isLogin ? (
            <div
              className="profile-img"
              style={{
                backgroundImage: `url(${imgUrl}followingListImg/follow2.jpg)`,
              }}
            />
          ) : (
            <div
              className="profile-img"
              style={{
                backgroundImage: `url(${imgUrl}icons/profile_img.jpg)`,
              }}
            />
          )}
          <img
            className="alert-circle"
            src={`${imgUrl}icons/alert-circle.png`}
            alt="alert"
          />
        </ProfileImg>
        <div className="right-contents">
          {isLogin ? (
            <p className="firstP isLogin">
              {name}님의, {number}번째 옷장 정리로
              <br /> 0000/0000를 절감하셨어요!
            </p>
          ) : (
            <p className="firstP isNotLogin">
              지구를 생각하는 세컨드 라이프의
              <br /> 픽업서비스, 오늘 처음이신가요?
            </p>
          )}
          {isLogin ? (
            <SaveResult>
              <p>
                <span className="num">30,500</span>
                <span className="unit"> G.point</span>
              </p>
              <p>
                <span className="num">859</span>
                <span className="unit"> Carbon</span>
              </p>
              <p>
                <span className="num">20ML</span>
                <span className="unit">Water</span>
              </p>
            </SaveResult>
          ) : (
            <Link to="/">
              <button>
                <span>픽업과정 보러가기</span>
                <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
              </button>
            </Link>
          )}
        </div>
      </CenterContents>
      <Box className={isClicked === "how" && "clicked"}>
        <BoxTitle onClick={() => handleBoxTitleClick("how")}>
          <p>어떻게 픽업할까요?</p>
          {clothesNum > 0 && `${clothesNum}개`}
          {showGreenBagNum()}
          {showHowto()}
          {/* <p>Choose your Pick-up Options</p> */}
        </BoxTitle>
        {isLogin && isClicked === "how" && (
          <PickUpOptions
            clothesNum={clothesNum}
            setClothesNum={setClothesNum}
            greenBagNum={greenBagNum}
            setGreenBagNum={setGreenBagNum}
            howto={howto}
            setHowto={setHowto}
          />
        )}
      </Box>
      <Box className={(isClicked === "where" || fullAdd) && "clicked"}>
        <BoxTitle onClick={() => handleBoxTitleClick("where")}>
          {fullAdd && isClicked !== "where" ? (
            <p>어디서</p>
          ) : (
            <p>어디서 픽업할까요?</p>
          )}
          {fullAdd && isClicked !== "where" && <p>{fullAdd}</p>}
          {(!fullAdd || isClicked === "where") && <p>Add your Location</p>}
        </BoxTitle>
        {isLogin && isClicked === "where" && (
          <PickUpLocation
            fullAdd={fullAdd}
            setFullAdd={setFullAdd}
            setIsClicked={setIsClicked}
          />
        )}
      </Box>
      <Box className={(isClicked === "when" || pickupTime) && "clicked"}>
        <BoxTitle onClick={() => handleBoxTitleClick("when")}>
          {pickupTime && isClicked !== "when" ? (
            <p>언제</p>
          ) : (
            <p>언제 픽업할까요?</p>
          )}
          {pickupTime && isClicked !== "when" && (
            <>
              {`${pickupDate.getMonth() + 1}월 ${pickupDate.getDate()}일`}
              {showPickupTime()}
            </>
          )}
          {(!pickupTime || isClicked === "when") && <p>Select your Date</p>}
        </BoxTitle>
        {isClicked === "when" && (
          <PickUpDate
            pickupDate={pickupDate}
            setPickupDate={setPickupDate}
            tomorrow={tomorrow}
            pickupTime={pickupTime}
            setPickupTime={setPickupTime}
            setIsClicked={setIsClicked}
          />
        )}
      </Box>
    </TopWrapper>
  );
};

export default PickUp;
