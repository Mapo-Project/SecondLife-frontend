import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import axios from "axios";
import DaumPost from "./Daumpost";
import CryptoJS from "crypto-js";

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
  .pass {
    border-bottom: 2px solid ${({ theme }) => theme.colors.green300};
  }
  .error {
    border-bottom: 2px solid #ff0000;
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
    right: 0px;
  }
  .unvisible {
    position: absolute;
    right: 0px;
  }
  position: relative;
  margin-bottom: 30px;

  .timer {
    position: absolute;
    right: 55px;
  }
`;

const Input = styled.input`
  width: 450px;
  padding-bottom: 12px;
  font-family: "Noto Sans KR";
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  border: 0 solid black;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray300};
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  }
  &::placeholder {
    ${({ theme }) => theme.korean.subtitle2};
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const Button = styled.input`
  position: absolute;
  right: 0px;
  bottom: 20px;
  ${({ theme }) => theme.korean.caption};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
  width: 93px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;
const Submit = styled.sub;
const CheckingSign = styled.div`
  position: absolute;
  top: 30px;
  right: 0px;
`;

const BottomSection = styled.div`
  width: 450px;
  margin: 0 auto;
`;

const SignUpBtn = styled.input`
  /* position: sticky; */
  bottom: 0px;
  margin-top: 66px;
  margin-bottom: 38px;
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
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
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
  const [watchId, watchPW] = watch(["user_id", "password"]);

  // input창 클릭시 에러 메시지 숨김 기능
  const [errorActive, setErrorActive] = useState({
    user_id: false,
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
  // const [password, setPassword] = useState("");
  // 비밀번호 확인 변수
  const [pwChecked, setPwChecked] = useState("");
  // 비밀번호 확인 함수
  const handleCheckPWBlur = (pw2) => {
    setPwChecked(pw2);
  };

  // 생년월일 자동 하이픈(-) 추가
  const birthRef = useRef();
  // const [birthNum, setBirthNum] = useState("");
  const changeBirth = (e) => {
    const value = birthRef.current.value.replace(/\D+/g, "");
    const numberLength = 8;
    let result = "";
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
  };

  const nameRef = useRef();
  const handleNameChange = () => {
    nameRef.current.value = nameRef.current.value.replace(
      /[^ㄱ-ㅣ가-힣a-zA-Z ]/g,
      ""
    );
  };

  let navigate = useNavigate();
  // 폼 전송시 실행되는 함수
  const onSubmit = async () => {
    console.log("onsubmit할때", user);
    // try {
    //비밀번호를 SHA256으로 해싱한다.
    const hash = CryptoJS.SHA256(user.password);
    //해싱된 객체를 Base64로 toString으로 만든다.
    const hashPassword = hash.toString(CryptoJS.enc.Base64);
    //패스워드로 다시 반환한다

    let newInform = { ...user, password: hashPassword };
    console.log(newInform);

    try {
      const response = await axios.post(
        `https://hee-backend.shop:7179/user/general/signup`,
        newInform
      );
      console.log(response);
      navigate("/signup/finishSignUp");
    } catch (error) {
      console.log("encryptPW error:", error);
      alert("회원가입 실패");
    }
  };

  // 유저정보(번호,주소)
  const [user, setUser] = useState({
    user_id: "",
    password: "",
    name: "",
    birth: "",
    email: "",
    phone_num: "",
    address: "",
    detail_address: "",
    phone_verify: "",
  });
  const { user_id, password, name, birth, email, address, detail_address } =
    user;

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

  //인증번호 유효성
  const onValidation = () => {
    alert("유효성");
  };

  const getCertification = () => {
    axios
      .get(
        `https://hee-backend.shop:7179/user/general/signup/auth/phone/test/${phone.num}`
      )
      .then((result) => {
        alert("인증번호가 전송되었습니다.");
        setPhone({ ...phone, code: result.data.code });
        console.log(result.data);
      })
      .catch((result) => {
        if (result.response.data.statusCode === 409) {
          alert("이미 존재하는 번호입니다.");
        } else {
          alert("전화번호를 다시 확인해주세요");
        }
      });
  };

  const pwMarginBottom = { marginBottom: "100px" };

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
      <BottomSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 아이디 인풋창 */}
          <InputWrapper>
            <label htmlFor="user_id">아이디</label>
            <Input
              className={
                watchId &&
                (errors.user_id?.types.mustFollowPattern
                  ? "error"
                  : checkIdRes
                  ? "pass"
                  : "error")
              }
              type="text"
              id="user_id"
              placeholder="영문, 숫자, 마침표를 사용할 수 있습니다."
              {...register("user_id", {
                required: true,
                validate: {
                  mustFollowPattern: (v) => /^[a-zA-Z0-9.]{6,20}$/.test(v),
                  duplicate: (v) => {
                    checkId(v);
                  },
                  showIdError: () => {
                    setErrorActive({ ...errorActive, user_id: true });
                  },
                },
              })}
              value={user_id}
              onChange={onChangeInput}
              onFocus={handleInputFocus}
              required
            />
            {errorActive.user_id && (
              <CheckingSign>
                {watchId &&
                  (errors.user_id?.types.mustFollowPattern ? (
                    <img src={`${iconImgURL}alert.png`} alt="alert mark" />
                  ) : checkIdRes ? (
                    <img src={`${iconImgURL}pass.png`} alt="pass mark" />
                  ) : (
                    <img src={`${iconImgURL}alert.png`} alt="alert mark" />
                  ))}
              </CheckingSign>
            )}
            {errorActive.user_id && (
              <p className="idValidation">
                {watchId &&
                  (errors.user_id?.types.mustFollowPattern
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
            <Input
              className={watchPW && (isValid ? "pass" : "error")}
              type={showPW ? "text" : "password"}
              id="password"
              value={password}
              placeholder="영어 대문자, 소문자, 숫자, 특수문자를 포함한 10자 이상"
              {...register("password", {
                required: true,
                validate: {
                  mustContainLowerUpper: (v) =>
                    /(?=.*?[a-z])(?=.*?[A-Z])/.test(v),
                  mustContainDigitORSign: (v) =>
                    /(?=.*?[0-9])|(?=.*?[#?!@$%^&*-])/.test(v),
                  showPWError: () => {
                    setErrorActive({ ...errorActive, password: true });
                  },
                  // getPassword: (v) => {
                  //   setUser({ ...user, password: v });
                  // },
                },
                minLength: 10,
              })}
              onFocus={handleInputFocus}
              onChange={onChangeInput}
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
          <InputWrapper style={pwMarginBottom}>
            <label htmlFor="pw_check">비밀번호 확인</label>
            <Input
              className={
                pwChecked && (password === pwChecked ? "pass" : "error")
              }
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
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="홍길동"
              value={name}
              ref={nameRef}
              onChange={(e) => {
                handleNameChange();
                onChangeInput(e);
              }}
            />
          </InputWrapper>
          {/* 생년월일 인풋창 */}
          <InputWrapper>
            <label htmlFor="birth">생년월일</label>
            <Input
              type="text"
              id="birth"
              name="birth"
              placeholder="YYYY/MM/DD"
              value={birth}
              ref={birthRef}
              onChange={(e) => {
                changeBirth(e);
                onChangeInput(e);
              }}
            />
          </InputWrapper>
          {/* 이메일 인풋창 */}
          <InputWrapper>
            <label htmlFor="email">이메일</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={onChangeInput}
            />
          </InputWrapper>
          {/* 휴대전화 인풋창 */}
          <InputWrapper>
            <label htmlFor="phone_num">휴대전화</label>
            <Input
              type="text"
              id="phone_num"
              name="num"
              value={num}
              placeholder="01012345678"
              maxLength={11}
              disabled={check ? "disabled" : ""}
              onChange={onPhoneInput}
            />
            <Button
              type="button"
              disabled={check ? "disabled" : ""}
              onClick={getCertification}
              value="인증번호발급"
            />
            {/* <span>인증번호발급</span>
            </Button> */}
          </InputWrapper>
          {/* 인증번호 인풋창 */}
          <InputWrapper>
            <label htmlFor="phone_code">인증번호</label>
            <Input
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
              type="button"
              style={{ width: "47px" }}
              disabled={check ? "disabled" : ""}
              className="eye unvisible"
              onClick={() => {
                console.log(phone);
                if (code === "" && code === "") {
                  alert("휴대전화 인증이 필요합니다.");
                } else if (code == code2) {
                  setPhone({ ...phone, check: true });
                  setUser({ ...user, phone_num: num, phone_verify: "Y" });
                  alert("인증되었습니다");
                } else {
                  alert("인증번호를 다시 확인해주세요.");
                }
              }}
              value={check ? "완료" : "확인"}
            />
            <span className="timer">3:00</span>
          </InputWrapper>
          {/* 주소 인풋창 */}
          <InputWrapper>
            <label htmlFor="address">주소</label>
            <Input
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
            <Input
              type="text"
              id="detail_address"
              placeholder="상세주소를 입력하세요."
              name="detail_address"
              value={detail_address}
              onChange={onChangeInput}
            />
          </InputWrapper>
          <SignUpBtn type="submit" value="동의하기" />
        </form>
      </BottomSection>
    </TopWrapper>
  );
};

export default UserInformation;
