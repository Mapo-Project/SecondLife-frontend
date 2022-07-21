import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import axios from "axios";

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

// 아이콘 이미지 경로
const iconImgURL = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur", criteriaMode: "all" });
  // input창 입력 상태 확인(react-hook-form 기능)
  const [watchId, watchPW] = watch(["id", "password"]);

  // input창 클릭시 에러 메시지 숨김 기능
  const [errorActive, setErrorActive] = useState({
    id: false,
    password: false,
  });
  const handleInputFocus = (e) => {
    let input = e.target.id;
    setErrorActive({ ...errorActive, [input]: false });
  };

  // 아이디 중복 확인
  const [checkIdRes, setCheckIdRes] = useState(false);
  const checkId = async (user_id) => {
    setCheckIdRes(false);
    if (user_id) {
      try {
        const response = await axios.get(
          `https://hee-backend.shop:7179/user/general/duplicate/id/${user_id}`
        );
        if (response.status === 200) {
          // console.log(response.data);
          if (response.data.duplicate === "unDuplicate") {
            setCheckIdRes(true);
          } else {
            setCheckIdRes(false);
          }
        }
      } catch (error) {
        console.log("checkId error:", error);
      }
    }
    return;
  };

  // 비밀번호 input type 변환
  const [showPW, setShowPW] = useState(false);
  const handleEyeClick = () => {
    setShowPW(!showPW);
  };

  // 비밀번호 변수
  const [password, setPassword] = useState("");
  // 비밀번호 확인 변수
  const [pwChecked, setPwChecked] = useState("");
  // 비밀번호 확인 함수
  const handleCheckPWBlur = (pw2) => {
    setPwChecked(pw2);
  };

  // 생년월일 자동 하이픈(-) 추가
  const birthRef = useRef();
  const [birthNum, setBirthNum] = useState("");
  const changeBirth = (e) => {
    const value = birthRef.current.value.replace(/\D+/g, "");
    const numberLength = 8;
    let result;
    result = "";
    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 4:
          result += "-";
          break;
        case 6:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    birthRef.current.value = result;
    setBirthNum(e.target.value);
  };

  // 폼 전송시 실행되는 함수
  const onSubmit = async (data) => {
    console.log(data);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 아이디 인풋창 */}
        <InputWrapper>
          <label htmlFor="id">아이디</label>
          <input
            className={
              watchId &&
              (errors.id?.types.mustFollowPattern
                ? "error"
                : checkIdRes
                ? "pass"
                : "error")
            }
            type="text"
            id="id"
            placeholder="영문, 숫자, 마침표를 사용할 수 있습니다."
            {...register("id", {
              required: true,
              validate: {
                mustFollowPattern: (v) => /^[a-zA-Z0-9.]{6,20}$/.test(v),
                duplicate: (v) => {
                  checkId(v);
                },
                showIdError: () => {
                  setErrorActive({ ...errorActive, id: true });
                },
              },
            })}
            onFocus={(e) => handleInputFocus(e)}
          />
          {errorActive.id && (
            <p className="idValidation">
              {watchId &&
                (errors.id?.types.mustFollowPattern
                  ? "영문, 숫자 6에서 20글자 사이여야 합니다"
                  : checkIdRes
                  ? "사용가능한 아이디입니다"
                  : "이미 사용하고 있는 아이디입니다.")}
            </p>
          )}
        </InputWrapper>
        {/* 비밀번호 인풋창 */}
        <InputWrapper>
          <label htmlFor="password">비밀번호</label>
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
                showPWError: () => {
                  setErrorActive({ ...errorActive, password: true });
                },
                getPassword: (v) => {
                  setPassword(v);
                },
              },
              minLength: 10,
            })}
            onFocus={(e) => handleInputFocus(e)}
          />
          {showPW ? (
            <img
              className="eye unvisible"
              src={`${iconImgURL}unvisible.png`}
              alt="unvisible"
              onClick={handleEyeClick}
            />
          ) : (
            <img
              className="eye visible"
              src={`${iconImgURL}visible.png`}
              alt="visible"
              onClick={handleEyeClick}
            />
          )}

          <div className="pwValidation">
            {errorActive.password &&
              watchPW &&
              (isValid ? (
                <p>사용 가능한 비밀번호입니다.</p>
              ) : (
                <>
                  <p className="guideline">비밀번호 가이드라인</p>
                  <p>
                    {errors.password?.types.mustContainLowerUpper ? (
                      <img src={`${iconImgURL}pw_wrong.png`} alt="pw_wrong" />
                    ) : (
                      <img
                        src={`${iconImgURL}pw_checked.png`}
                        alt="pw_checked"
                      />
                    )}
                    소문자 및 대문자 모두 포함
                  </p>
                  <p>
                    {errors.password?.types.mustContainDigitORSign ? (
                      <img src={`${iconImgURL}pw_wrong.png`} alt="pw_wrong" />
                    ) : (
                      <img
                        src={`${iconImgURL}pw_checked.png`}
                        alt="pw_checked"
                      />
                    )}
                    숫자 또는 기호 포함
                  </p>
                  <p>
                    {errors.password?.types.minLength ? (
                      <img src={`${iconImgURL}pw_wrong.png`} alt="pw_wrong" />
                    ) : (
                      <img
                        src={`${iconImgURL}pw_checked.png`}
                        alt="pw_checked"
                      />
                    )}
                    문자길이 최소 10자 이상
                  </p>
                </>
              ))}
          </div>
        </InputWrapper>
        {/* 비밀번호 확인 인풋창 */}
        <InputWrapper>
          <label htmlFor="pw_check">비밀번호 확인</label>
          <input
            className={pwChecked && (password === pwChecked ? "pass" : "error")}
            type={showPW ? "text" : "password"}
            id="pw_check"
            placeholder="입력한 비밀번호와 동일하게 입력하세요."
            onBlur={(e) => {
              handleCheckPWBlur(e.target.value);
            }}
          />
          {showPW ? (
            <img
              className="eye unvisible"
              src={`${iconImgURL}unvisible.png`}
              alt="unvisible"
              onClick={handleEyeClick}
            />
          ) : (
            <img
              className="eye visible"
              src={`${iconImgURL}visible.png`}
              alt="visible"
              onClick={handleEyeClick}
            />
          )}
        </InputWrapper>
        {/* 이름 인풋창 */}
        <InputWrapper>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" placeholder="홍길동" />
        </InputWrapper>
        {/* 생년월일 인풋창 */}
        <InputWrapper>
          <label htmlFor="birth">생년월일</label>
          <input
            type="text"
            id="birth"
            placeholder="YYYY/MM/DD"
            value={birthNum}
            ref={birthRef}
            onChange={changeBirth}
          />
        </InputWrapper>
        {/* 이메일 인풋창 */}
        <InputWrapper>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="example@gmail.com" />
        </InputWrapper>
        <input type="submit" value="submit" />
      </form>
    </TopWrapper>
  );
};

export default UserInformation;
