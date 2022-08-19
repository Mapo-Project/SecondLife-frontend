import styled, { keyframes } from "styled-components";
import { useState } from "react";

const TopWrapper = styled.div`
  width: 420px;
  height: 518px;
  margin: 0px auto 10px;
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  h6 {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: ${({ theme }) => theme.colors.gray900};
  }
  .number {
    ${({ theme }) => theme.korean.body1};
    border: 1px solid #8a8a8a;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    text-align: center;
    &:hover {
      border: 3px solid black;
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  /* 파이어폭스에서의 초기화 방법 */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Description = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 350;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colors.gray500};
  &.greenbag-des {
    margin-bottom: 19px;
  }
`;

const FirstWrapper = styled.div`
  h6 {
    margin-bottom: 4px;
  }
  p {
    margin-bottom: 19px;
  }
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: aliceblue; */
  color: ${({ theme }) => theme.colors.black};
  .range {
    display: flex;
    align-items: center;
  }
  .slider {
    -webkit-appearance: none;
    width: 274px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray300};
    outline: none;
    opacity: 0.8;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  .slider:hover {
    opacity: 1;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.gray500};
    cursor: pointer;
  }
  .slider.changed::-webkit-slider-thumb {
    background-color: ${({ theme }) => theme.colors.green300};
  }
  .slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.gray500};
    cursor: pointer;
  }
  .slider.changed::-moz-range-thumb {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const SecondTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .disable {
    background-color: #616161;
    color: #fff;
  }
`;

const Directly = styled.button`
  width: 96.33px;
  height: 31px;
  background-color: #eff0f2;
  border-radius: 20px;
  color: #adadad;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #616161;
    color: #fff;
  }
`;

const GreenBags = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const GreenBag = styled.div`
  width: 112px;
  height: 112px;
`;

const BagCounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: aliceblue; */
  width: 342px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};
`;

const BagCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
  }
  .minus {
    margin-right: 6px;
  }
  .plus {
    margin-left: 6px;
  }
  .disable {
    pointer-events: none;
  }
  .zero {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const HowTo = styled.div`
  display: flex;
  justify-content: space-between;
  .active {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const HowToBtn = styled.button`
  width: 116px;
  height: 36px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.korean.subtitle2};
  color: ${({ theme }) => theme.colors.gray700};
  border-radius: 20px;
  cursor: pointer;
`;

const ThirdContents = styled.div`
  margin-top: 35px;
  h6 {
    margin-bottom: 23px;
  }
`;

const minusStyle = { marginRight: "16.75px" };
const plusStyle = { marginLeft: "19.75px" };

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const greenBagS = { backgroundImage: `url(${imgUrl}pickUpImg/greenbag_s.png)` };
const sActive = {
  backgroundImage: `url(${imgUrl}pickUpImg/s_active.png)`,
};
const greenBagM = { backgroundImage: `url(${imgUrl}pickUpImg/greenbag_m.png)` };
const mActive = {
  backgroundImage: `url(${imgUrl}pickUpImg/m_active.png)`,
};
const greenBagL = { backgroundImage: `url(${imgUrl}pickUpImg/greenbag_l.png)` };
const lActive = {
  backgroundImage: `url(${imgUrl}pickUpImg/l_active.png)`,
};

function GreenBagCounter({
  size,
  sizeNum,
  greenBagNum,
  setGreenBagNum,
  availableNum,
  setAvailableNum,
  disabled,
}) {
  const handleMinusClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    minusBagNumChange(size, sizeNum);
  };
  const handlePlusClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    plusBagNumChange(size, sizeNum);
  };
  const minusBagNumChange = (size, num) => {
    if (num === 0) {
      return;
    } else {
      setGreenBagNum({ ...greenBagNum, [size]: num - 1 });
      setAvailableNum(availableNum + 1);
    }
  };

  const plusBagNumChange = (size, num) => {
    if (availableNum === 0) {
      return;
    } else {
      setGreenBagNum({ ...greenBagNum, [size]: num + 1 });
      setAvailableNum(availableNum - 1);
    }
  };

  return (
    <BagCounter>
      <img
        src={
          sizeNum > 0
            ? `${imgUrl}icons/bag_minus_active.png`
            : `${imgUrl}icons/bag_minus.png`
        }
        alt="minus"
        className="minus"
        onClick={handleMinusClick}
      />
      <p className={sizeNum === 0 && "zero"}>{sizeNum} 개</p>
      <img
        src={`${imgUrl}icons/bag_plus.png`}
        alt="plus"
        className="plus"
        onClick={handlePlusClick}
      />
    </BagCounter>
  );
}

const PickUpOptions = ({
  clothesNum,
  setClothesNum,
  greenBagNum,
  setGreenBagNum,
  howto,
  setHowto,
  disabled,
  setDisabled,
  setIsClicked,
}) => {
  // const [clothesNum, setClothesNum] = useState(0);
  const handleRangeChange = (e) => {
    let value = Math.floor(e.target.value);
    if (value < 0) {
      setClothesNum(0);
    } else if (value > 60) {
      setClothesNum(60);
    } else {
      setClothesNum(value);
    }
  };

  // const [greenBagNum, setGreenBagNum] = useState({
  //   small: 0,
  //   medium: 0,
  //   large: 0,
  // });

  const { small, medium, large } = greenBagNum;
  const [availableNum, setAvailableNum] = useState(3);

  // const [howto, setHowto] = useState("");
  const handleHowtoClick = (value) => {
    setHowto(value);
    setTimeout(() => {
      setIsClicked("where");
    }, 1000);
  };

  const handleDisableClick = () => {
    setDisabled(!disabled);
    if (!disabled) {
      setGreenBagNum({ ...greenBagNum, small: 0, medium: 0, large: 0 });
    } else {
      setAvailableNum(3);
    }
  };

  return (
    <TopWrapper>
      <FirstWrapper>
        <h6>몇 개의 옷을 정리하시나요?</h6>
        <Description>
          신발과 같은 한 쌍의 의류는 1개로 입력하세요 / 1회당 최대 60개
        </Description>
        <InputWrapper>
          <div className="range">
            <img
              style={minusStyle}
              src={
                clothesNum > 0
                  ? `${imgUrl}icons/minus_active.png`
                  : `${imgUrl}icons/minus.png`
              }
              alt="minus"
            />
            <input
              className={clothesNum > 0 ? "slider changed" : "slider"}
              type="range"
              min="0"
              max="60"
              step="1"
              value={clothesNum}
              onChange={handleRangeChange}
            />
            <img style={plusStyle} src={`${imgUrl}icons/plus.png`} alt="plus" />
          </div>
          <div>
            <input
              className="number"
              type="number"
              min="0"
              max="60"
              value={clothesNum}
              onChange={handleRangeChange}
            />
            개
          </div>
        </InputWrapper>
      </FirstWrapper>
      <SecondTitle>
        <h6>그린백을 선택해주세요.</h6>
        <Directly
          className={disabled && "disable"}
          onClick={handleDisableClick}
        >
          직접 준비할게요
        </Directly>
      </SecondTitle>
      <Description className="greenbag-des">
        1회 픽업시, 그린백 최대 신청 가능 수량은 3개입니다.
        <br />
        도난, 분실 방지를 위해 백 수령 후 반드시 그린백에 물품을 준비해주세요.
      </Description>
      <GreenBags>
        <GreenBag style={small ? sActive : greenBagS} />
        <GreenBag style={medium ? mActive : greenBagM} />
        <GreenBag style={large ? lActive : greenBagL} />
      </GreenBags>
      <BagCounterWrapper>
        <GreenBagCounter
          size={"small"}
          sizeNum={small}
          greenBagNum={greenBagNum}
          setGreenBagNum={setGreenBagNum}
          availableNum={availableNum}
          setAvailableNum={setAvailableNum}
          disabled={disabled}
        />
        <GreenBagCounter
          size={"medium"}
          sizeNum={medium}
          greenBagNum={greenBagNum}
          setGreenBagNum={setGreenBagNum}
          availableNum={availableNum}
          setAvailableNum={setAvailableNum}
          disabled={disabled}
        />
        <GreenBagCounter
          size={"large"}
          sizeNum={large}
          greenBagNum={greenBagNum}
          setGreenBagNum={setGreenBagNum}
          availableNum={availableNum}
          setAvailableNum={setAvailableNum}
          disabled={disabled}
        />
      </BagCounterWrapper>
      <ThirdContents>
        <h6>어떻게 정리해 드릴까요?</h6>
        <HowTo>
          <HowToBtn
            className={howto === "01" && "active"}
            onClick={() => handleHowtoClick("01")}
          >
            그린포인트
          </HowToBtn>
          <HowToBtn
            className={howto === "02" && "active"}
            onClick={() => handleHowtoClick("02")}
          >
            판매등록
          </HowToBtn>
          <HowToBtn
            className={howto === "03" && "active"}
            onClick={() => handleHowtoClick("03")}
          >
            포인트+판매
          </HowToBtn>
        </HowTo>
      </ThirdContents>
    </TopWrapper>
  );
};

export default PickUpOptions;
