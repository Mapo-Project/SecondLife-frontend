import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { loginUser } from "../api/User";
import { setRefreshToken } from "../storage/Cookie";
import { SET_TOKEN } from "../store/Auth";
import styled from "styled-components";

const Input = styled.input`
  width: 500px;
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
      setRefreshToken(response.json.refresh_token);
      dispatch(SET_TOKEN(response.json.access_token));

      return navigate("/");
    } else {
      console.log(response.json);
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div>
        <div>
          <label htmlFor="user_id" className="sr-only">
            User ID
          </label>
          <Input
            {...register("user_id", { required: "Please Enter Your ID" })}
            type="text"
            placeholder="User ID"
          />
          <span
            name="user_id"
            errors={errors}
            render={({ message }) => <p>{message}</p>}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            {...register("password", {
              required: "Please Enter Your Password",
            })}
            type="text"
            placeholder="Password"
          />
          <span
            name="user_id"
            errors={errors}
            render={({ message }) => <p>{message}</p>}
          />
        </div>
      </div>
      <div>
        <button type="submit">
          <span>as</span>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
