import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
  }
  .pwValidation {
    .guideline {
      ${({ theme }) => theme.korean.subtitle2}
    }
  }
  margin-bottom: 30px;
`;

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all", criteriaMode: "all" });
  //   console.log(errors.password);
  const [watchId, watchPW] = watch(["id", "password"]);

  const [password, setPassword] = useState("");
  const [pwChecked, setPwChecked] = useState("");
  const [showPW, setShowPW] = useState(false);
  const blurPWhandler = (pw1) => {
    setPassword(pw1);
  };

  console.log(password);

  const blurPwCheckhandler = (pw2) => {
    setPwChecked(pw2);
  };

  const clickEyeHandler = () => {
    setShowPW(!showPW);
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
      <form>
        <InputWrapper>
          <label for="id">아이디</label>
          <input type="text" id="id" placeholder="example123" />
          <p className="idValidation">사용가능한 아이디입니다</p>
        </InputWrapper>
        <InputWrapper>
          <label for="password">비밀번호</label>
          <input
            className={watchPW && (isValid ? "pass" : "error")}
            type={showPW ? "text" : "password"}
            id="password"
            placeholder="영어 대문자, 소문자, 숫자, 특수문자를 포함한 10자 이상"
            {...register("password", {
              validate: {
                mustContainLowerUpper: (v) =>
                  /(?=.*?[a-z])(?=.*?[A-Z])/.test(v),
                mustContainDigitORSign: (v) =>
                  /(?=.*?[0-9])|(?=.*?[#?!@$%^&*-])/.test(v),
              },
              minLength: 10,
            })}
            onBlur={(e) => {
              blurPWhandler(e.target.value);
            }}
          />
          {showPW ? (
            <img
              className="eye"
              src={`${process.env.PUBLIC_URL}/assets/images/icons/unvisible.png`}
              alt="unvisible"
              onClick={clickEyeHandler}
            />
          ) : (
            <img
              className="eye"
              src={`${process.env.PUBLIC_URL}/assets/images/icons/visible.png`}
              alt="visible"
              onClick={clickEyeHandler}
            />
          )}

          <div className="pwValidation">
            {watchPW &&
              (isValid ? (
                <p>사용 가능한 비밀번호입니다.</p>
              ) : (
                <>
                  <p className="guideline">비밀번호 가이드라인</p>
                  <p>
                    {errors.password?.types.mustContainLowerUpper ? (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/pw_wrong.png`}
                        alt="pw_wrong"
                      />
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/pw_checked.png`}
                        alt="pw_checked"
                      />
                    )}
                    소문자 및 대문자 모두 포함
                  </p>
                  <p>
                    {errors.password?.types.mustContainDigitORSign ? (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/pw_wrong.png`}
                        alt="pw_wrong"
                      />
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/pw_checked.png`}
                        alt="pw_checked"
                      />
                    )}
                    숫자 또는 기호 포함
                  </p>
                  <p>
                    {errors.password?.types.minLength ? (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/pw_wrong.png`}
                        alt="pw_wrong"
                      />
                    ) : (
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/icons/pw_checked.png`}
                        alt="pw_checked"
                      />
                    )}
                    문자길이 최소 10자 이상
                  </p>
                </>
              ))}
          </div>
        </InputWrapper>
        <InputWrapper>
          <label for="pw_check">비밀번호 확인</label>
          <input
            className={pwChecked && (password === pwChecked ? "pass" : "error")}
            type={showPW ? "text" : "password"}
            id="pw_check"
            placeholder="입력한 비밀번호와 동일하게 입력하세요."
            onBlur={(e) => {
              blurPwCheckhandler(e.target.value);
            }}
          />
          {showPW ? (
            <img
              className="eye"
              src={`${process.env.PUBLIC_URL}/assets/images/icons/unvisible.png`}
              alt="unvisible"
              onClick={clickEyeHandler}
            />
          ) : (
            <img
              className="eye"
              src={`${process.env.PUBLIC_URL}/assets/images/icons/visible.png`}
              alt="visible"
              onClick={clickEyeHandler}
            />
          )}
        </InputWrapper>
      </form>
    </TopWrapper>
  );
};

export default UserInformation;
