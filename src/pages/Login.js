import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { loginUser } from "../api/User";
import { setRefreshToken } from "../storage/Cookie";
import { SET_TOKEN } from "../store/Auth";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import theme from "../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    ${({ theme }) => theme.english.headline5};
  }
  form {
    margin-top: 20px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    label {
      ${({ theme }) => theme.korean.subtitle1};
    }
  }
`;

const Input = styled.input`
  width: 450px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #bebebe;
  padding: 12px 0px;
`;

const LoginBox = styled.div`
  margin-top: 49px;
  h5 {
    ${({ theme }) => theme.korean.subtitle1};
    color: ${({ theme }) => theme.colors.gray500};
  }
  div {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      ${({ theme }) => theme.korean.body2};
      color: ${({ theme }) => theme.colors.gray500};
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
  font-size: 20px;
  font-weight: 700;
  border-radius: 100px;
  margin-top: 10px;
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useForm 사용을 위한 선언
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // submit 이후 동작할 코드
  // 백으로 유저 정보 전달
  const onValid = async ({ user_id, password }) => {
    // input 태그 값 비워주는 코드
    setValue("password", "");

    // 백으로부터 받은 응답
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

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onValid)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <label htmlFor="user_id" className="sr-only">
              아이디
            </label>
            <Input
              {...register("user_id", { required: "Please Enter Your ID" })}
              type="text"
              placeholder="example123"
            />
            <span
              name="user_id"
              errors={errors}
              render={({ message }) => <p>{message}</p>}
            />

            <label htmlFor="password">비밀번호</label>
            <Input
              {...register("password", {
                required: "Please Enter Your Password",
              })}
              type="text"
              placeholder="영어 대문자, 소문자, 숫자, 특수문자를 포함한 10자리 이상"
            />
            <span
              name="user_id"
              errors={errors}
              render={({ message }) => <p>{message}</p>}
            />

            <LoginBox>
              <h5>
                <span>체크</span>로그인 유지하기
              </h5>
              <LoginBtn type="submit">로그인</LoginBtn>
              <div>
                <p>아이디/비밀번호 찾기</p>
                <p>회원가입</p>
              </div>
            </LoginBox>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
