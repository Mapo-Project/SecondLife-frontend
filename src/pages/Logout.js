import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCookieToken } from "../storage/Cookie";
import { DELETE_TOKEN } from "../store/Auth";
import { logoutUser, setValueOnLocalStorage } from "../api/User";

const Logout = () => {
  // store에 저장된 Access Token 정보를 받아 온다
  const { accessToken } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logout() {
    // 백으로부터 받은 응답
    const data = await logoutUser(accessToken);
    console.log("로그아웃시 accessToken:", accessToken);
    if (data.status) {
      // 자동 로그인 취소
      setValueOnLocalStorage("AutoLogin", false);
      dispatch(DELETE_TOKEN());
      removeCookieToken();
      return navigate("/login");
    } else {
      window.location.reload();
      console.log("실패");
    }
  }
  // 해당 컴포넌트가 요청된 후 한 번만 실행되면 되기 때문에 useEffect 훅을 사용
  useEffect(() => {
    logout();
  }, []);

  return <Link to="/login" />;
};

export default Logout;
