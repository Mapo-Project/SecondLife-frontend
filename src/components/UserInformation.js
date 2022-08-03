import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { useCallback } from "react";
import axios from "axios";
import DaumPost from "./Daumpost";

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

  .timer {
    position: absolute;
    right: 120px;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 65px;
  bottom: 10px;
  ${({ theme }) => theme.korean.caption};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
  width: 93px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Submit = styled.sub;
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

  // 유저정보(번호,주소)
  const [user, setUser] = useState({
    phone_num: "",
    address: "",
    detail_address: "",
  });
  const { phone_num, address, detail_address } = user;

  //유저 정보 저장
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //휴대전화 인증 확인
  const [phone, setPhone] = useState({
    num: "",
    code: "",
    code2: "",
    check: false,
  });
  const { num, code, code2, check } = phone;

  //휴대전화 정보 임시저장
  const onPhoneInput = (e) => {
    const { name, value } = e.target;
    setPhone({ ...phone, [name]: value });
  };
  //우편번호 API
  const [popup, setPopup] = useState(false);
  const handleComplete = () => {
    setPopup(!popup);
  };

  //input창 리셋
  const onReset = (e) => {
    const name = e.target.name;
    setUser((preState) => {
      return { ...preState, [name]: "" };
    });
  };

  //인증시간 타이머
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const time = useRef(180);
  const intervalRef = useRef(null);

  //인증시간 타이머 함수
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      time.current -= 1;
      setMinutes(parseInt(time.current / 60));
      setSeconds(time.current % 60);
      if (time.current === 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setPhone((preState) => {
          return { ...preState, num: "" };
        });
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current == null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const timerReset = useCallback(() => {
    time.current = 180;
    start();
  }, []);

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
        {/* 휴대전화 인풋창 */}
        <InputWrapper>
          <label htmlFor="phone_num">휴대전화</label>
          <input
            type="text"
            id="phone_num"
            name="num"
            value={num || ""}
            placeholder="01012345678"
            maxLength={11}
            disabled={check ? "disabled" : ""}
            onChange={onPhoneInput}
          />
          <Button
            disabled={check ? "disabled" : ""}
            onClick={() => {
              axios
                .get(
                  `https://hee-backend.shop:7179/user/general/signup/auth/phone/test/${phone.num}`
                )
                .then((result) => {
                  alert("인증번호가 전송되었습니다.");
                  setPhone({ ...phone, code: result.data.code });
                  console.log(result.data);
                  timerReset();
                })
                .catch((result) => {
                  if (result.response.data.statusCode === 409) {
                    alert("이미 존재하는 번호입니다.");
                  } else {
                    alert("전화번호를 다시 확인해주세요");
                  }
                });
            }}
          >
            <span>인증번호발급</span>
          </Button>
        </InputWrapper>
        {/* 인증번호 인풋창 */}
        <InputWrapper>
          <label htmlFor="phone_code">인증번호</label>
          <input
            type="text"
            // id="phone_code"
            name="code2"
            value={code2}
            maxLength={6}
            placeholder="SMS로 전송된 6자리 숫자를 입력하세요."
            disabled={check ? "disabled" : ""}
            onChange={onPhoneInput}
          />
          <Button
            style={{ width: "47px" }}
            disabled={check ? "disabled" : ""}
            className="eye unvisible"
            onClick={() => {
              console.log(phone);
              if ((code === "" && code === "") || num === "") {
                alert("휴대전화 인증이 필요합니다.");
              } else if (code == code2) {
                setPhone({ ...phone, check: true });
                setUser({ ...user, phone_num: num });
                setUser({ ...user, phone_verify: "Y" });
                stop();
                alert("인증되었습니다");
              } else {
                alert("인증번호를 다시 확인해주세요.");
              }
            }}
          >
            {check ? "완료" : "확인"}
          </Button>
          <span className="timer">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </InputWrapper>
        {/* 주소 인풋창 */}
        <InputWrapper>
          <label htmlFor="address">주소</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            placeholder="시/군/구 동 이름을 검색하세요."
            onClick={(e) => {
              onReset(e);
              handleComplete();
            }}
            onChange={onChangeInput}
          />

          <img
            className="eye unvisible"
            src={`${iconImgURL}search.png`}
            alt="search"
            name="address"
            onClick={(e) => {
              onReset(e);
              handleComplete();
            }}
          />
          {popup && <DaumPost address={address} setUser={setUser} />}
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            id="detail_address"
            placeholder="상세주소를 입력하세요."
            name="detail_address"
            value={detail_address}
            onChange={onChangeInput}
          />
        </InputWrapper>
        <input
          type="submit"
          value="submit"
          onClick={() => {
            console.log(user);
          }}
        />
      </form>
    </TopWrapper>
  );
};

export default UserInformation;
