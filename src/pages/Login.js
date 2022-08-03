import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/User";
import { setRefreshToken } from "../storage/Cookie";
import { SET_TOKEN } from "../store/Auth";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import CryptoJS from "crypto-js";
// import pbkdf2 from "pbkdf2-sha256";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;
const BACKEND = "https://hee-backend.shop:7179";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .error:focus {
    border-bottom: 2px solid red;
  }
  .true_type {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    ${({ theme }) => theme.english.headline5};
  }
  .form {
    margin-top: 20px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    label {
      ${({ theme }) => theme.korean.subtitle1};
    }
    .eye_default {
      position: relative;
      top: -30px;
      right: -430px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray300};
      &:hover {
        color: ${({ theme }) => theme.colors.black};
        transition: 0.5s;
      }
    }
    .eye_true {
      position: relative;
      top: -30px;
      right: -430px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const Input = styled.input`
  width: 450px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray300};
  padding: 12px 0px;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;

const ErrorMessage = styled.p`
  height: 10px;
  margin-bottom: 21px;
  ${({ theme }) => theme.korean.subtitle2};
`;

const LoginBox = styled.div`
  margin-top: 49px;
  h5 {
    ${({ theme }) => theme.korean.subtitle1};
    color: ${({ theme }) => theme.colors.gray500};
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  div {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      ${({ theme }) => theme.korean.body2};
      color: ${({ theme }) => theme.colors.gray500};
      margin-right: 20px;
      cursor: pointer;
    }
  }
`;

const LoginBtn = styled.button`
  padding: 15px 170px;
  width: 450px;
  height: 62px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.korean.button};
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 20px;
  font-weight: 700;
  border-radius: 100px;
  margin-top: 10px;
`;

const SimpleLogin = styled.div`
  margin-top: 49px;
  h5 {
    ${({ theme }) => theme.korean.headline6};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 12px;
  }
`;

const SimpleBtn = styled.button`
  width: 444px;
  height: 50px;
  background: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  cursor: pointer;
  img {
    margin-left: 15px;
  }
  span {
    margin-right: 15px;
  }
`;

const GoogleBtn = styled(SimpleBtn)`
  background: ${({ theme }) => theme.colors.white};
`;

const Login = () => {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState(false);
  const [keepLogin, setKeepLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onHidePassword = () => {
    setHidden(!hidden);
  };

  const onKeepLogin = () => {
    setKeepLogin(!keepLogin);
  };

  // useForm 사용을 위한 선언
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // submit 이후 동작할 코드
  // 백으로 유저 정보 전달
  const onValid = async ({ user_id, password }) => {
    // input 태그 값 비워주는 코드
    setValue("password", "");

    //암호화
    const makeHash = () => {
      //비밀번호를 SHA256으로 해싱한다.
      const hash = CryptoJS.SHA256(password);
      //해싱된 객체를 Base64로 toString으로 만든다.
      const hashPassword = hash.toString(CryptoJS.enc.Base64);
      //패스워드로 다시 반환한다
      return (password = hashPassword);
    };
    makeHash();

    // // 백으로부터 받은 응답
    const response = await loginUser({ user_id, password });
    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.refreshToken);
      dispatch(SET_TOKEN(response.json.accessToken));

      return navigate("/");
    } else {
      console.log(response.json);
    }
  };

  const signUp = () => {
    navigate("/signup/agreement");
  };

  useEffect(() => {
    if (watch("user_id") !== "" && watch("password") !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [watch()]);

  useEffect(() => {
    if (active) {
      setKeepLogin(true);
    }
  }, [active]);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <h1>Login</h1>
          <form className="form" onSubmit={handleSubmit(onValid)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <label htmlFor="user_id">아이디</label>
            <Input
              {...register("user_id", {
                required: "Please Enter Your ID",
                maxLength: 10,
              })}
              type="text"
              placeholder="example123"
              className={errors.user_id?.type === "required" && "error"}
            />
            <ErrorMessage>
              {errors.user_id?.type === "required" && "아이디를 입력해주세요."}
              {errors.user_id?.type === "maxLength" &&
                "올바르지 않은 아이디 입니다."}
            </ErrorMessage>

            <label htmlFor="password">비밀번호</label>
            <Input
              {...register("password", {
                required: "Please Enter Your Password",
              })}
              type={!hidden ? "password" : "text"}
              placeholder="영어 대문자, 소문자, 숫자, 특수문자를 포함한 10자리 이상"
              className={errors.password?.type === "required" && "error"}
            />
            <FontAwesomeIcon
              className={!hidden ? "eye_default" : "eye_true"}
              onClick={onHidePassword}
              icon={!hidden ? faEyeSlash : faEye}
            />

            <ErrorMessage>
              {errors.password && "패스워드를 입력해주세요."}
            </ErrorMessage>

            <LoginBox>
              <h5>
                <img
                  onClick={onKeepLogin}
                  src={
                    keepLogin
                      ? imgUrl + "check_true.png"
                      : imgUrl + "check_default.png"
                  }
                  alt="check"
                />
                로그인 유지하기
              </h5>
              <LoginBtn type="submit" className={active ? "true_type" : null}>
                로그인
              </LoginBtn>
              <div>
                <p>아이디/비밀번호 찾기</p>
                <p onClick={signUp}>회원가입</p>
              </div>
            </LoginBox>
          </form>
          <SimpleLogin>
            <h5>간편 로그인</h5>

            <form action={`${BACKEND}/auth/kakao`} method="GET">
              <SimpleBtn type="submit">
                <img src={imgUrl + "Union.svg"} alt="카카오" />
                카카오 계정으로 로그인
                <span></span>
              </SimpleBtn>
            </form>

            <form action={`${BACKEND}/auth/google`} method="GET">
              <GoogleBtn type="submit">
                <img src={imgUrl + "google_logo.svg"} alt="구글" />
                Google 계정으로 로그인
                <span></span>
              </GoogleBtn>
            </form>
          </SimpleLogin>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
