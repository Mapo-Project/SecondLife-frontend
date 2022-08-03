import { getCookieToken } from "../storage/Cookie";
import { requestToken } from "../api/User";
import { useDispatch } from "react-redux";
import { SET_TOKEN } from "../store/Auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Check = () => {
  const refreshToken = getCookieToken();
  const dispatch = useDispatch();
  const checkRefresh = async () => {
    const response = await requestToken(refreshToken);
    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      dispatch(SET_TOKEN(response.json.accessToken));
      console.log("request 성공");
    } else {
      console.log("request 없음 또는 실패");
    }
  };
  useEffect(() => {
    checkRefresh();
  });
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
