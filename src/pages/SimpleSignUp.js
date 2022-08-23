import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import axios from "axios";
import DaumPost from "../components/Daumpost";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../css/SweetAlert.css";

const BACKEND = "https://hee-backend.shop:7179";

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

const ProgressBarWrapper2 = styled.div`
  width: 509px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
`;

const ProgressBar2 = styled.div`
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
  margin-bottom: 75px;
`;

const AgreenDescription = styled.p`
  text-align: center;
  ${({ theme }) => theme.korean.overline};
  color: #212121;
  margin-bottom: 50px;
`;

const InputWrapper = styled.div`
  label {
    display: block;
    ${({ theme }) => theme.korean.subtitle1}
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
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

const BottomSection = styled.div`
  width: 450px;
  margin: 0 auto;
`;

const SignUpBtn = styled.input`
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

const CenterWrapper = styled.div`
  margin: 0 auto;
  width: 450px;
  display: flex;
  /* background-color: aliceblue; */
  position: relative;
`;

const Logo = styled.div`
  /* img {
    width: 245px;
    height: 112px;
  } */
  margin-bottom: 85px;
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

const iconImgURL = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const SimpleSignUp = () => {
  const [success, setSccuess] = useState(false);
  const [welcomeName, setWelcomName] = useState("OOO");
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/");
  };

  const { handleSubmit } = useForm({ mode: "onBlur", criteriaMode: "all" });
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

  //accessToken
  const { accessToken } = useSelector((state) => state.token);
  // 폼 전송시 실행되는 함수
  const onSubmit = async () => {
    console.log("onsubmit할때", user);
    let newInform = { ...user };

    try {
      const response = await axios.post(
        `${BACKEND}/user/profile/add`,
        newInform,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      setSccuess(true);
      setWelcomName(user.name);
    } catch (error) {
      console.log("encryptPW error:", error);
      FailAlert("회원정보를 입력해 주세요.");
    }
  };

  // 유저정보(번호,주소)
  const [user, setUser] = useState({
    name: "",
    birth: "",
    phone_num: "",
    address: "",
    detail_address: "",
    phone_verify: "",
  });
  const { name, birth, phone_num, address, detail_address, phone_verify } =
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
  //ALERT 라이브러리 추가
  const SuccessAlert = (props) => {
    const text = props;
    Swal.fire({
      icon: "success",
      text: text,
      confirmButtonText: "닫기",
      buttonsStyling: false,
      customClass: {
        confirmButton: "alert-button",
      },
    });
  };
  const FailAlert = (props) => {
    const text = props;
    Swal.fire({
      icon: "error",
      html: text,
      confirmButtonText: "닫기",
      buttonsStyling: false,
      customClass: {
        confirmButton: "alert-button",
      },
    });
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

  const getCertification = () => {
    axios
      .get(`${BACKEND}/user/general/signup/auth/phone/test/${phone.num}`)
      .then((result) => {
        SuccessAlert("입력한 휴대 전화로 인증 번호를 전송했습니다.");
        setPhone({ ...phone, code: result.data.code });
        console.log("인증번호 -> " + result.data.code);
        timerReset();
      })
      .catch((result) => {
        if (result.response.data.statusCode === 409) {
          FailAlert(
            "이미 사용 중인 번호입니다.<br> 다른 휴대전화 번호를 입력해주세요."
          );
        } else {
          FailAlert("입력한 휴대전화 번호를 다시 확인해주세요.");
        }
      });
  };

  return (
    <TopWrapper>
      {!success ? (
        <>
          <CloseBtnWrapper>
            <Link to="/">
              <img src={`${iconImgURL}x.png`} alt="close button" />
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
          <AgreenDescription>
            * 아래의 정보를 입력해 주시면 회원가입이 완료됩니다. *
          </AgreenDescription>
        </>
      ) : (
        <>
          <ProgressBarWrapper2>
            <ProgressBar2 />
          </ProgressBarWrapper2>
          <Step>
            <p>계정연동</p>
            <p>추가정보 입력</p>
            <p>가입완료</p>
          </Step>
        </>
      )}

      {/* 추가정보 입력 시작 */}
      {!success ? (
        <BottomSection>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 이름 */}
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
            {/* 휴대전화 인풋창 */}
            <InputWrapper>
              <label htmlFor="phone_num">휴대전화</label>
              <Input
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
                  if ((code === "" && code === "") || num === "") {
                    FailAlert("인증번호를 먼저 발급받으세요.");
                  } else if (code == code2) {
                    setPhone({ ...phone, check: true });
                    setUser({ ...user, phone_num: num, phone_verify: "Y" });
                    stop();
                    SuccessAlert("인증이 완료되었습니다.");
                  } else {
                    FailAlert(
                      "인증 번호를 다시 입력해주세요.<br> 3분이 지났을 경우 재발급을 받아주세요."
                    );
                  }
                }}
                value={check ? "완료" : "확인"}
              />
              <span className="timer">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
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
            <SignUpBtn type="submit" value="가입하기" />
          </form>
        </BottomSection>
      ) : (
        <>
          <CenterWrapper>
            <div>
              <Logo>
                <img src={`${imgURL}icons/LOGO.png`} alt="logo" />
              </Logo>
              <Greeting>
                {welcomeName}님,
                <br />
                환영합니다!
              </Greeting>
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
        </>
      )}
    </TopWrapper>
  );
};

export default SimpleSignUp;
