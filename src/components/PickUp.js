import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PickUpOptions from "./PickUpOptions";
import PickUpLocation from "./PickUpLocation";
import { useSelector } from "react-redux";
import PickUpDate from "./PickUpDate";
import { requestPickup } from "../api/PickUpApi";
import { useEffect } from "react";
import AfterPickupSubmit from "./AfterPickupSubmit";

const TopWrapper = styled.div`
  width: 480px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.green300};
  border: 5px solid ${({ theme }) => theme.colors.black};
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: fixed;
  right: 40px;
  bottom: 10px;
  z-index: 19;
  transform: scale(0.95);
  height: auto;
  transform-origin: bottom;
  transition: 0.5s;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .close-btn {
    margin: 8px 8px 0 0;
  }
`;

const CenterContents = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  .right-contents {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
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
  margin-right: 30px;
  width: 120px;
  height: 120px;
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

const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  transition: 0.5s;
`;

const Box = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: 3px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  height: auto;
  transition: 0.5s;
  &.clicked {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
  &:nth-last-child(1) {
    margin-bottom: 0px;
  }
`;

const BoxTitle = styled.span`
  padding: 18px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.isLogin {
    cursor: pointer;
  }
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

const SubmitBtn = styled.div`
  margin: 97px auto 0px;
  width: 439px;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.green200};
  border: 3px solid #000000;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 27px 0px 23px;
  cursor: pointer;

  p:nth-child(1) {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
  p:nth-child(2) {
    font-family: "Noto Sans KR";
    font-weight: 350;
    font-size: 11px;
    line-height: 17px;
    letter-spacing: 0.1px;
  }
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;
const number = 7;
const tomorrow = new Date(Date.now() + 3600 * 1000 * 24);

const PickUp = () => {
  // 회원정보
  const { data } = useSelector((state) => state.user);
  // 로그인 여부
  const [isLogin, setIsLogin] = useState(false);
  // 픽업 옵션 선택
  const [isClicked, setIsClicked] = useState("");

  // 픽업 방법 데이터
  const [clothesNum, setClothesNum] = useState("");
  const [greenBagNum, setGreenBagNum] = useState({
    small: 0,
    medium: 0,
    large: 0,
  });
  const { small, medium, large } = greenBagNum;

  // 선택한 그린백 표시
  const showGreenBagSize = () => {
    let sizeArr = [];
    for (let size in greenBagNum) {
      if (greenBagNum[size] > 0) {
        sizeArr.push(size);
      }
    }
    let resultSize = sizeArr
      .toString()
      .replaceAll("small", "S")
      .replaceAll("medium", "M")
      .replaceAll("large", "L")
      .replaceAll(",", "+");
    return ` | 그린백 ${resultSize} : `;
  };
  const showGreenBagNum = () => {
    let greenBags = [small, medium, large];
    let resultArr = greenBags.filter((bag) => bag !== 0);
    let containOne = resultArr.filter((bag) => bag === 1);
    if (containOne.length > 1) {
      return "각 1개";
    }
    let resultToString = resultArr.toString().replaceAll(",", "+");
    return `${resultToString}개`;
  };

  // 정리 방법 설정
  const [howto, setHowto] = useState("");
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

  // 그린백 선택 여부
  const [disabled, setDisabled] = useState(false);
  const greenBagYN = () => {
    if (disabled) {
      return "N";
    } else {
      return "Y";
    }
  };

  const [randomData, setRandomData] = useState(
    Math.floor(Math.random() * 1000)
  );

  const handleBoxTitleClick = (value) => {
    setIsClicked(`${value}`);
    setRandomData(Math.floor(Math.random() * 1000));
  };

  // 픽업 장소 데이터
  const [fullAdd, setFullAdd] = useState("");

  // 픽업 시간 데이터
  const [pickupDate, setPickupDate] = useState(tomorrow);
  const [pickupTime, setPickupTime] = useState("");

  // 픽업 시간 표시
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

  // 엑세스 토큰
  const { accessToken } = useSelector((state) => state.token);

  // 픽업 신청 기능
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmitBtnClick = () => {
    let ynResult = greenBagYN();
    let dateResult = `${pickupDate.getUTCFullYear()}-${
      pickupDate.getUTCMonth() + 1
    }-${pickupDate.getUTCDate()}`;
    let pickUpData = {
      pick_up_num: clothesNum,
      address: fullAdd,
      green_bag_s: small,
      green_bag_m: medium,
      green_bag_l: large,
      method_org: howto,
      pick_up_dt: pickupDate,
      pick_up_tm: pickupTime,
      green_bag_yn: ynResult,
    };
    requestPickup(accessToken, pickUpData);
    setTimeout(() => {
      setIsSubmit(true);
    }, 1000);
  };

  // 로그인 여부 체크
  useEffect(() => {
    if (data) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <TopWrapper key={randomData}>
      <CloseBtnWrapper>
        <Link to="/">
          <img
            className="close-btn"
            src={`${process.env.PUBLIC_URL}/assets/images/icons/x.png`}
            alt="close button"
          />
        </Link>
      </CloseBtnWrapper>
      <CenterContents>
        <ProfileImg>
          {isLogin ? (
            <div
              className="profile-img"
              style={{
                backgroundImage: `url(${data.profile_img}`,
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
              {data.name}님의, {number}번째 옷장 정리로
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
            <button onClick={() => navigate(`/login`)}>
              <span>픽업과정 보러가기</span>
              <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
            </button>
          )}
        </div>
      </CenterContents>
      {!isSubmit ? (
        <BoxWrapper>
          <Box
            className={
              ((clothesNum > 0 &&
                (small >= 0 || medium >= 0 || large >= 0) &&
                howto) ||
                isClicked === "how") &&
              "clicked"
            }
          >
            <BoxTitle
              onClick={() => isLogin && handleBoxTitleClick("how")}
              className={isLogin && "isLogin"}
            >
              {clothesNum > 0 &&
              (small >= 0 || medium >= 0 || large >= 0) &&
              howto &&
              isClicked !== "how" ? (
                <p>어떻게</p>
              ) : (
                <p>어떻게 픽업할까요?</p>
              )}
              {clothesNum > 0 &&
                (small >= 0 || medium >= 0 || large >= 0) &&
                howto &&
                isClicked !== "how" &&
                `${clothesNum}개`}
              {clothesNum > 0 &&
                (small > 0 || medium > 0 || large > 0) &&
                howto &&
                isClicked !== "how" &&
                showGreenBagSize()}
              {clothesNum > 0 &&
                (small > 0 || medium > 0 || large > 0) &&
                howto &&
                isClicked !== "how" &&
                showGreenBagNum()}
              {clothesNum > 0 &&
                (small >= 0 || medium >= 0 || large >= 0) &&
                howto &&
                isClicked !== "how" &&
                showHowto()}
              {(clothesNum === 0 || !howto || isClicked === "how") && (
                <p>Choose your Pick-up Options</p>
              )}
            </BoxTitle>
            {isLogin && isClicked === "how" && (
              <PickUpOptions
                clothesNum={clothesNum}
                setClothesNum={setClothesNum}
                greenBagNum={greenBagNum}
                setGreenBagNum={setGreenBagNum}
                howto={howto}
                setHowto={setHowto}
                disabled={disabled}
                setDisabled={setDisabled}
                setIsClicked={setIsClicked}
              />
            )}
          </Box>
          <Box className={(isClicked === "where" || fullAdd) && "clicked"}>
            <BoxTitle
              onClick={() => isLogin && handleBoxTitleClick("where")}
              className={isLogin && "isLogin"}
            >
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
            <BoxTitle
              onClick={() => isLogin && handleBoxTitleClick("when")}
              className={isLogin && "isLogin"}
            >
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
            {isLogin && isClicked === "when" && (
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
          {clothesNum > 0 &&
            (small >= 0 || medium >= 0 || large >= 0) &&
            howto &&
            fullAdd &&
            pickupDate &&
            pickupTime && (
              <SubmitBtn onClick={handleSubmitBtnClick}>
                <p>신청하기</p>
                <p>신청내역 수정은 마이페이지에서 가능합니다.</p>
              </SubmitBtn>
            )}
        </BoxWrapper>
      ) : (
        <AfterPickupSubmit />
      )}
    </TopWrapper>
  );
};

export default PickUp;
