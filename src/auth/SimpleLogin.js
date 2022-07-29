import { setRefreshToken } from "../storage/Cookie";
import { SET_TOKEN } from "../store/Auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SimpleLogin = () => {
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  const user = JSON.parse(urlParams.get("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSimpleLogin = () => {
    if (user.verify === "Y") {
      setRefreshToken(user.refreshToken);
      dispatch(SET_TOKEN(user.accessToken));
      console.log("간편 로그인 성공 :", user.verify);
      return navigate("/");
    } else if (user.verify === "N") {
      console.log("추가 정보 입력 :", user.verify);
      return navigate("/signup/add");
    } else if (user === null || undefined) {
      console.log("실패");
      return <p>실패</p>;
    } else {
      return navigate("/");
    }
  };

  useEffect(() => {
    onSimpleLogin();
  }, []);
  return <p>test</p>;
};

export default SimpleLogin;
