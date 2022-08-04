import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const TopWrapper = styled.div`
  width: 509px;
  /* height: 896px; */
  margin: 29px auto 38px auto;
  /* background-color: aliceblue; */
`;

const ProgressBarWrapper = styled.div`
  width: 509px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  margin-top: 71px;
`;

const ProgressBar = styled.div`
  width: 170px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.green300};
  border-left: 1px solid ${({ theme }) => theme.colors.gray900};
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
  margin-bottom: 130px;
`;

const CenterWrapper = styled.div`
  margin: 0 auto;
  width: 450px;
  display: flex;
  /* background-color: aliceblue; */
  position: relative;
`;

const Logo = styled.div`
  img {
    width: 245px;
    height: 112px;
  }
  margin-bottom: 38px;
`;

const Greeting = styled.h1`
  height: 95px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.gray700};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  /* or 29px */
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.gray700};
`;

const ImageWrapper = styled.div`
  width: 330px;
  height: 457px;
  position: absolute;
  top: 30px;
  right: -30px;
  z-index: -10;
`;

const AgreeBtnWrapper = styled.div`
  position: sticky;
  bottom: 0px;
  margin: 256px auto 38px auto;
  ${({ theme }) => theme.korean.headline6}
  letter-spacing: 10px;
  width: 450px;
  height: 62px;
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.gray700};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const imgURL = `${process.env.PUBLIC_URL}/assets/images/`;

const backImg = {
  backgroundImage: `url(${imgURL}signUpImg/finishPageImg.png)`,
};

const FinishSignUp = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };

  return (
    <TopWrapper>
      <ProgressBarWrapper>
        <ProgressBar />
      </ProgressBarWrapper>
      <Step>
        <p>약관동의</p>
        <p>회원정보</p>
        <p>가입완료</p>
      </Step>
      <CenterWrapper>
        <div>
          <Logo>
            <img src={`${imgURL}icons/logo.svg`} alt="logo" />
          </Logo>
          <Greeting>환영합니다!</Greeting>

          <Description>
            2ND라이프와 함께
            <br /> 지속가능한 의류쇼핑
            <br />
            지금 바로 시작해볼까요?
          </Description>
        </div>
        <ImageWrapper style={backImg} />
      </CenterWrapper>
      <AgreeBtnWrapper onClick={handleStartClick}>시작하기</AgreeBtnWrapper>
    </TopWrapper>
  );
};

export default FinishSignUp;
