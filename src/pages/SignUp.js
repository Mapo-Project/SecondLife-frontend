import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Agreement from "../components/Agreement";
import UserInformation from "../components/UserInformation";

const TopWrapper = styled.div`
  width: 509px;
  /* height: 951px; */
  margin: 29px auto 38px auto;
  .btn_active {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.green300};
  }
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

const iconImgURL = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const SignUp = () => {
  return (
    <TopWrapper>
      <CloseBtnWrapper>
        <Link to="/">
          <img src={`${iconImgURL}x.png`} alt="close button" />
        </Link>
      </CloseBtnWrapper>
      {/* <ProgressBarWrapper>
        <ProgressBar />
      </ProgressBarWrapper>
      <Step>
        <p>약관동의</p>
        <p>회원정보</p>
        <p>가입완료</p>
      </Step> */}
      <Routes>
        <Route path="agreement" element={<Agreement />} />
        <Route path="userinform" element={<UserInformation />} />
      </Routes>
    </TopWrapper>
  );
};

export default SignUp;
