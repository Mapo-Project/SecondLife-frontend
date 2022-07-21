import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AgreeBtn from "./AgreeBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const TopWrapper = styled.div`
  width: 509px;
  /* height: 951px; */
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

// 아이콘 이미지 경로
const iconImgURL = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Agreement = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [locationCheck, setLocationCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  // 약관 모두 동의
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setUseCheck(true);
      setPrivacyCheck(true);
      setLocationCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setPrivacyCheck(false);
      setLocationCheck(false);
      setMarketingCheck(false);
    }
  };

  // 이용 약관 동의
  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  // 개인정보 수집 및 이용동의
  const privacyBtnEvent = () => {
    if (privacyCheck === false) {
      setPrivacyCheck(true);
    } else {
      setPrivacyCheck(false);
    }
  };

  // 위치기반 서비스 이용 약관 동의
  const locationBtnEvent = () => {
    if (locationCheck === false) {
      setLocationCheck(true);
    } else {
      setLocationCheck(false);
    }
  };

  // 광고성 정보 수신 동의
  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  // 필수 이용 동의/비동의시 변화
  let active = useCheck && privacyCheck;

  useEffect(() => {
    if (
      useCheck === true &&
      privacyCheck === true &&
      locationCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useCheck, privacyCheck, locationCheck, marketingCheck]);
  return (
    <TopWrapper>
      <CloseBtnWrapper>
        <Link to="/">
          <img src={`${iconImgURL}x.png`} alt="close button" />
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
        <img src={`${iconImgURL}logo.svg`} alt="logo" />
      </Logo>
      <Description>
        지속가능한
        <br />
        의류소비의
        <br />첫 발걸음!
      </Description>
      <AgreementWrapper>
        <div className="agree-all left-wrapper">
          {allCheck ? (
            <img
              src={`${iconImgURL}checked.png`}
              alt="checked button"
              onClick={allBtnEvent}
            />
          ) : (
            <img
              src={`${iconImgURL}check.png`}
              alt="check button"
              onClick={allBtnEvent}
            />
          )}
          <p>약관 모두 동의하기</p>
        </div>
      </AgreementWrapper>
      <HorizonLine />
      <AgreementWrapper>
        <div className="left-wrapper">
          {useCheck ? (
            <img
              src={`${iconImgURL}checked.png`}
              alt="checked button"
              onClick={useBtnEvent}
            />
          ) : (
            <img
              src={`${iconImgURL}check.png`}
              alt="check button"
              onClick={useBtnEvent}
            />
          )}
          <p>이용 약관 동의(필수)</p>
        </div>
        <div className="right-wrapper">
          <Link to="/">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </AgreementWrapper>
      <HorizonLine />
      <AgreementWrapper>
        <div className="left-wrapper">
          {privacyCheck ? (
            <img
              src={`${iconImgURL}checked.png`}
              alt="checked button"
              onClick={privacyBtnEvent}
            />
          ) : (
            <img
              src={`${iconImgURL}check.png`}
              alt="check button"
              onClick={privacyBtnEvent}
            />
          )}
          <p>개인정보 수집 및 이용동의(필수)</p>
        </div>
        <div className="right-wrapper">
          <Link to="/">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </AgreementWrapper>
      <HorizonLine />
      <AgreementWrapper>
        <div className="left-wrapper">
          {locationCheck ? (
            <img
              src={`${iconImgURL}checked.png`}
              alt="checked button"
              onClick={locationBtnEvent}
            />
          ) : (
            <img
              src={`${iconImgURL}check.png`}
              alt="check button"
              onClick={locationBtnEvent}
            />
          )}
          <p>위치기반 서비스 이용 약관 동의(선택)</p>
        </div>
        <div className="right-wrapper">
          <Link to="/">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </AgreementWrapper>
      <HorizonLine />
      <AgreementWrapper>
        <div className="left-wrapper">
          {marketingCheck ? (
            <img
              src={`${iconImgURL}checked.png`}
              alt="checked button"
              onClick={marketingBtnEvent}
            />
          ) : (
            <img
              src={`${iconImgURL}check.png`}
              alt="check button"
              onClick={marketingBtnEvent}
            />
          )}
          <p>E-mail 및 SMS 광고성 정보 수신동의(선택)</p>
        </div>
        <div className="right-wrapper">
          <Link to="/">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </AgreementWrapper>
      <HorizonLine style={lastHorizonLineStyle} />
      {active ? (
        <Link to="/signup/userinform">
          <AgreeBtn active={active}>동의하기</AgreeBtn>
        </Link>
      ) : (
        <AgreeBtn>동의하기</AgreeBtn>
      )}
    </TopWrapper>
  );
};

export default Agreement;
