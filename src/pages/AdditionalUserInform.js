import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
  display: flex;
  justify-content: center;
`;

const ProgressBar = styled.div`
  width: 170px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.green300};
  border-left: 1px solid ${({ theme }) => theme.colors.gray900};
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

const InputWrapper = styled.div`
  label {
    display: block;
    ${({ theme }) => theme.korean.subtitle1}
    margin-bottom: 12px;
  }
  input {
    width: 450px;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
    border: 0 solid black;
    background-color: ${({ theme }) => theme.colors.bg};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray300};
    margin-bottom: 5px;
  }
  input:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }
  .pass {
    border-bottom: 2px solid ${({ theme }) => theme.colors.green300};
  }
  .error {
    border-bottom: 2px solid #ff0000;
  }
  input::placeholder {
    ${({ theme }) => theme.korean.subtitle2};
    color: ${({ theme }) => theme.colors.gray300};
  }
  p,
  .pwValidation {
    font-family: "Noto Sans KR";
    font-weight: 350;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.1px;
    /* color: ${({ theme }) => theme.colors.gray700}; */
    img {
      margin-right: 6px;
    }
    .guideline {
      ${({ theme }) => theme.korean.subtitle2}
    }
  }
  .visible {
    position: absolute;
    right: 65px;
  }
  .unvisible {
    position: absolute;
    right: 65px;
  }
  position: relative;
  margin-bottom: 30px;
`;

const LoginBtn = styled.button`
  padding: 15px 170px;
  width: 450px;
  height: 62px;
  border: none;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.korean.button};
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 10px;
  border-radius: 100px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdditionalUserInform = () => {
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
        <p>계정연동</p>
        <p>추가정보 입력</p>
        <p>가입완료</p>
      </Step>
      <form>
        <InputWrapper>
          <label for="name">이름</label>
          <input type="text" id="name" placeholder="홍길동" />
        </InputWrapper>
        <InputWrapper>
          <label for="birth">생년월일</label>
          <input type="text" id="birth" placeholder="YYYY/MM/DD" />
        </InputWrapper>
        <InputWrapper>
          <label for="email">휴대전화</label>
          <input type="number" id="phone" placeholder="xxx-xxxx-xxxx" />
        </InputWrapper>
        <LoginBtn type="submit">회원가입 하기</LoginBtn>
      </form>
    </TopWrapper>
  );
};

export default AdditionalUserInform;
