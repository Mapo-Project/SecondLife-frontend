import styled from "styled-components";
import { useState } from "react";

const TopWrapper = styled.div`
  width: 420px;
  height: 518px;
  margin: 0px auto;
  padding: 20px 24px 0px;
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
`;

const Description = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 350;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colors.gray500};
`;

const FirstWrapper = styled.div`
  h6 {
    margin-bottom: 4px;
  }
  p {
    margin-bottom: 19px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: aliceblue; */
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
  .changed {
    background-color: ${({ theme }) => theme.colors.green300};
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
  .number {
    ${({ theme }) => theme.korean.body1};
    border: 0 solid black;
    width: 24px;
    text-align: center;
  }
`;

const minusStyle = { marginRight: "16.75px" };
const plusStyle = { marginLeft: "19.75px" };

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const PickUpOptions = () => {
  const [clothesNum, setClothesNum] = useState(0);
  const handleRangeChange = (e) => {
    setClothesNum(e.target.value);
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
              src={`${imgUrl}icons/minus.png`}
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
              type="text"
              value={clothesNum}
              onChange={handleRangeChange}
            />
            개
          </div>
        </InputWrapper>
      </FirstWrapper>
      <h6>그린백을 선택해주세요.</h6>
      <Description>
        1회 픽업시, 그린백 최대 신청 가능 수량은 3개입니다.
        <br />
        도난, 분실 방지를 위해 백 수령 후 반드시 그린백에 물품을 준비해주세요.
      </Description>
    </TopWrapper>
  );
};

export default PickUpOptions;
