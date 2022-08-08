import { getCookieToken, removeCookieToken } from "../storage/Cookie";
import { getValueOnLocalStorage, requestToken } from "../api/User";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN, SET_TOKEN } from "../store/Auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Check = () => {
  //쿠키 가져오기
  const refreshToken = getCookieToken();
  //store에 accessToken 가져오기
  const { accessToken } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  //리프레시 토큰
  const checkRefresh = async () => {
    const response = await requestToken(refreshToken);
    if (response.status) {
      // store에 다시 Access Token 저장
      dispatch(SET_TOKEN(response.json.accessToken));
      console.log("request 성공 / accessToken :", response.json.accessToken);
    } else {
      console.log("request 없음 또는 실패");
    }
  };
  useEffect(() => {
    checkRefresh();
    //윈도우 실행 전에 자동 로그인
    window.addEventListener("beforeunload", () => {
      const autoLoginKey = getValueOnLocalStorage("AutoLogin");
      if (!autoLoginKey) {
        dispatch(DELETE_TOKEN());
        removeCookieToken();
      }
      return () => {
        //unmount때
        window.removeEventListener("beforeunload", () => {
          const autoLoginKey = getValueOnLocalStorage("AutoLogin");
          if (!autoLoginKey) {
            console.log(autoLoginKey);
            dispatch(DELETE_TOKEN());
            removeCookieToken();
          }
        });
      };
    });
  }, []);

  return (
    <div>
      {refreshToken ? (
        <div
          style={{
            width: 500,
            height: 200,
            border: "2px solid black",
            backgroundColor: "white",
          }}
        >
          <Link to="/logout">테스트 로그아웃</Link>
        </div>
      ) : null}
    </div>
  );
};

export default Check;
