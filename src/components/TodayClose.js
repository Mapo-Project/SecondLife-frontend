import { useEffect, useState } from "react";
import styled from "styled-components";
const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Today = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  right: 40px;
  bottom: 30px;
  z-index: 19;
  p {
    ${({ theme }) => theme.korean.body2};
    color: ${({ theme }) => theme.colors.gray900};
    margin-right: 15px;
  }
  img {
    cursor: pointer;
    margin-right: 4px;
  }
`;

const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.korean.subtitle2};
  }
`;

const TodayClose = (props) => {
  const floatingClose = props.floatingClose;
  const setFloatingClose = props.setFloatingClose;

  const [todayCheck, setTodayCheck] = useState(false);
  const [todayBtn, setTodayBtn] = useState(false);
  const [todayStatus, setTodayStatus] = useState(false);

  const todayBtnEvent = () => {
    setTodayCheck(!todayCheck);
  };

  const close = () => {
    if (todayCheck) {
      localStorage.setItem("todayClose", true);
    }
    setFloatingClose(!floatingClose);
    setTodayBtn(!todayBtn);
  };

  useEffect(() => {
    //방문날짜
    const visitDay = Math.floor(new Date().getDate());
    localStorage.setItem("visitDay", visitDay);
    const localDate = localStorage.getItem("visitDay");

    //현재날짜
    const today = new Date();
    const saveToday = today.getDate();

    const todayClose = localStorage.getItem("todayClose");

    if (localDate == saveToday) {
      if (todayClose) {
        setTodayStatus(true);
        setFloatingClose(!floatingClose);
      }
    } else {
      localStorage.setItem("todayClose", false);
    }
  }, []);

  return (
    <div>
      {todayBtn ? null : todayStatus ? null : (
        <Today>
          {!todayCheck ? (
            <img src={`${imgUrl}check.png`} alt="" onClick={todayBtnEvent} />
          ) : (
            <img
              src={`${imgUrl}check_true.png`}
              alt=""
              onClick={todayBtnEvent}
            />
          )}
          <p>오늘 하루 그만보기</p>
          <CloseBtn onClick={close}>
            <span>닫기</span>
          </CloseBtn>
        </Today>
      )}
    </div>
  );
};

export default TodayClose;
