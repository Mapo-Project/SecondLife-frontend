import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";

const anim = keyframes`
0%{
transform: scaleY(0);
opacity: 0.9;
}
100%{
transform: scaleY(1);
opacity: 1;
}
`;

const TopWrapper = styled.div`
  margin: 0 auto 10px;
  padding: 20px 24px;
  width: 420px;
  /* height: 518px; */
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${anim} 0.5s ease-in-out;
  transform-origin: top;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const Description = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 350;
  font-size: 11px;
  line-height: 17px;
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colors.gray500};
  margin-top: 4px;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
  .react-datepicker {
    border: none;
  }
  .react-datepicker__header {
    background-color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    ${({ theme }) => theme.colors.gray900}
  }
  .react-datepicker__day-names {
    display: none;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    ${({ theme }) => theme.english.body1}
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    margin: 6px 8px;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    /* border-radius: 0px; */
    color: ${({ theme }) => theme.colors.gray900};
    background-color: ${({ theme }) => theme.colors.green300};
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    color: ${({ theme }) => theme.colors.gray900};
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const ButtonsWrapper = styled.div`
  width: 371px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 11px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px 30px;
  ${({ theme }) => theme.english.body2}
  color: ${({ theme }) => theme.colors.gray900};
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
  cursor: pointer;
  &.disable {
    border: none;
    background-color: #f0f0f0;
    color: ${({ theme }) => theme.colors.gray300};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const PickUpDate = ({
  pickupDate,
  setPickupDate,
  tomorrow,
  pickupTime,
  setPickupTime,
  setIsClicked,
}) => {
  const [isDisable, setIsDisable] = useState(true);
  const handleDateChange = (date) => {
    setPickupDate(date);
    let tomorrowDate = tomorrow.getTime();
    let importDate = date.getTime();
    setIsDisable(true);
    if (importDate > tomorrowDate) {
      setIsDisable(false);
    }
  };
  const handlePickupTimeClick = (time) => {
    setPickupTime(time);
    setTimeout(() => {
      setIsClicked("");
    }, 500);
  };

  return (
    <TopWrapper>
      <div>
        <Title>픽업 날짜를 선택하세요</Title>
        <Description>
          기사님이 준비된 옷을 픽업 할 날짜를 체크해주세요.
        </Description>
        <DatePickerWrapper>
          <DatePicker
            selected={pickupDate}
            onChange={handleDateChange}
            locale={ko} // 한글로 변경
            dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
            showPopperArrow={false} // 화살표 변경
            minDate={tomorrow} // 오늘 날짜 전은 선택 못하게
            // customInput={
            //   // 날짜 뜨는 인풋 커스텀
            //   <Form.Control as="textarea" rows={1} style={{ width: "250px" }} />
            // }
            inline
          />
        </DatePickerWrapper>
      </div>
      <div>
        <Title>픽업 시간을 선택하세요</Title>
        <Description>
          기사님이 픽업 가능한 시간을 모두 체크해주세요.
        </Description>
        <ButtonsWrapper>
          <Buttons>
            <Button
              onClick={() => handlePickupTimeClick("01")}
              disabled={isDisable}
              className={
                (isDisable && "disable") || (pickupTime === "01" && "active")
              }
            >
              06:00 AM - 11:00 AM
            </Button>
            <Button
              onClick={() => handlePickupTimeClick("02")}
              disabled={isDisable}
              className={
                (isDisable && "disable") || (pickupTime === "02" && "active")
              }
            >
              10:00 AM - 14:00 PM
            </Button>
          </Buttons>
          <Buttons>
            <Button
              className={pickupTime === "03" && "active"}
              onClick={() => handlePickupTimeClick("03")}
            >
              14:00 PM - 19:00 PM
            </Button>
            <Button
              className={pickupTime === "04" && "active"}
              onClick={() => handlePickupTimeClick("04")}
            >
              18:00 PM - 22:00 PM
            </Button>
          </Buttons>
        </ButtonsWrapper>
      </div>
    </TopWrapper>
  );
};

export default PickUpDate;
