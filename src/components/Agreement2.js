import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AgreeBtn from "./AgreeBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const TopWrapper = styled.div`
  width: 509px;
  margin: 29px auto 38px auto;
`;

const CloseBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 509px;
  margin-bottom: 22px;
`;

const ProgressBarWrapper = styled.div`
  width: 509px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
`;

const ProgressBar = styled.div`
  width: 170px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.green300};
  border-right: 1px solid ${({ theme }) => theme.colors.gray900};
  border-radius: 50px;
`;

const Step = styled.div`
  ${({ theme }) => theme.korean.overline};
  width: 509px;
  display: flex;
  justify-content: space-around;
  p {
    margin-top: 4px;
  }
  margin-bottom: 75px;
`;

const Logo = styled.div`
  img {
    width: 215px;
    height: 112px;
  }
  margin-bottom: 7px;
`;

const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.gray700};
  margin-bottom: 166px;
`;

const AgreementWrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 12px 14px 0px;
  .left-wrapper {
    ${({ theme }) => theme.korean.subtitle1};
    display: flex;
    align-items: center;
    img {
      width: 24px;
      margin-right: 13px;
      cursor: pointer;
    }
    margin-left: 12px;
  }
  .agree-all {
    font-family: "Noto Sans KR";
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.18px;
    img {
      width: 32px;
      margin-right: 13px;
    }
    margin-left: 0px;
  }
  .right-wrapper {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const HorizonLine = styled.div`
  width: 450px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray300};
`;

const lastHorizonLineStyle = { marginBottom: "100px" };

const Agreement = () => {
  const [agreements, setAgreements] = useState([
    {
      id: 0,
      className: "agree-all left-wrapper",
      text: "약관 모두 동의하기",
      active: false,
    },
    {
      id: 1,
      className: "left-wrapper",
      text: "이용 약관 동의(필수)",
      active: false,
    },
    {
      id: 2,
      className: "left-wrapper",
      text: "개인정보 수집 및 이용동의(필수)",
      active: false,
    },
    {
      id: 3,
      className: "left-wrapper",
      text: "위치기반 서비스 이용 약관 동의(선택)",
      active: false,
    },
    {
      id: 4,
      className: "left-wrapper",
      text: "E-mail 및 SMS 광고성 정보 수신동의(선택)",
      active: false,
    },
  ]);

  const clickCheckHandler = (id) => {
    if (id === 0) {
      setAgreements(
        agreements.map((agreement) => {
          return { ...agreement, active: !agreements[0].active };
        })
      );
    } else {
      setAgreements(
        agreements.map((agreement) => {
          return agreement.id === id
            ? {
                ...agreement,
                active: !agreement.active,
              }
            : agreement;
        })
      );
    }
  };

  return (
    <TopWrapper>
      <CloseBtnWrapper>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/x.png`}
            alt="close button"
          />
        </Link>
      </CloseBtnWrapper>
      <ProgressBarWrapper>
        <ProgressBar />
      </ProgressBarWrapper>
      <Step>
        <p>약관동의</p>
        <p>회원정보</p>
        <p>가입완료</p>
      </Step>
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/logo.svg`}
          alt="logo"
        />
      </Logo>
      <Description>
        지속가능한
        <br />
        의류소비의
        <br />첫 발걸음!
      </Description>
      {/* <AgreementWrapper>
        <div className="agree-all left-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/check.png`}
            alt="check button"
          />
          <p>약관 모두 동의하기</p>
        </div>
      </AgreementWrapper>
      <HorizonLine /> */}
      {agreements.map((agreement) => {
        return (
          <>
            <AgreementWrapper>
              <div className={agreement.className}>
                {agreement.active ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icons/checked.png`}
                    alt="checked button"
                    onClick={() => clickCheckHandler(agreement.id)}
                  />
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/icons/check.png`}
                    alt="check button"
                    onClick={() => clickCheckHandler(agreement.id)}
                  />
                )}

                <p>{agreement.text}</p>
              </div>
              <div className="right-wrapper">
                <Link to="/">
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </AgreementWrapper>
            <HorizonLine />
          </>
        );
      })}
      {/* <HorizonLine style={lastHorizonLineStyle} /> */}
      <Link to="/">
        <AgreeBtn />
      </Link>
    </TopWrapper>
  );
};

export default Agreement;
