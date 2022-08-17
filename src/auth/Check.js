import { getCookieToken, removeCookieToken } from "../storage/Cookie";
import {
  getValueOnLocalStorage,
  requestToken,
  selectUserProfile,
} from "../api/User";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TOKEN, SET_TOKEN } from "../store/Auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SET_USER } from "../store/UserData";

const Check = () => {
  //로그인 체크
  const { login } = useSelector((state) => state.user);
  const [isAuth, setIsAuth] = useState(login);
  //쿠키에서 refreshToken가져오기
  const refreshToken = getCookieToken();
  //store에서 인증과 기간만료 가져오기
  const { accessToken, authenticated, expireTime } = useSelector(
    (state) => state.token
  );
  const dispatch = useDispatch();
  //checkRefresh 토큰
  const checkRefresh = async () => {
    //refreshToken이 없다면 로그인 실패
    if (refreshToken === undefined) {
      dispatch(DELETE_TOKEN());
      setIsAuth(false);
      console.log("로그인 실패(refreshToken 없음): ");
    } else {
      //인증이 true고 accessToken 만료기간보다 현재 시간이 작다면 로그인 성공
      if (authenticated && new Date().getTime() < expireTime) {
        setIsAuth(true);
        console.log("로그인 성공 (인증 / 만료기간): ", isAuth);
      } else {
        //refreshToken으로 accessToken을 다시 불러준다.
        const response = await requestToken(refreshToken);
        if (response.status) {
          // store에 다시 Access Token 저장
          dispatch(SET_TOKEN(response.json.accessToken));
          setIsAuth(true);
          console.log(
            "로그인 성공 (refreshToken으로 accessToken 가져옴) : ",
            isAuth
          );
        } else {
          //백요청 실패 Token 일괄 삭제, 로그인 실패
          dispatch(DELETE_TOKEN());
          removeCookieToken();
          setIsAuth(false);
          console.log("로그인 실패(토큰 다 삭제) : ", isAuth);
        }
      }
    }
  };
  //회원정보 호출
  const onSetUserData = async (accessToken) => {
    // // 백으로부터 받은 응답
    const response = await selectUserProfile(accessToken);
    if (response.status) {
      dispatch(SET_USER(response.json.data));
      console.log("백으로 부터 받은 data :", response.json.data);
    } else {
      console.log("유저 데이터 요청 실패");
    }
  };

  // 자동 로그인
  const onDeletUser = (auto) => {
    if (auto === false) {
      dispatch(DELETE_TOKEN());
      removeCookieToken();
    } else {
      console.log("자동로그인 상태 :", auto);
    }
  };

  useEffect(() => {
    //refreshToken
    checkRefresh();
  }, []);

  useEffect(() => {
    //로그인 체크 후 회원정보
    if (isAuth === true) {
      onSetUserData(accessToken);
      console.log("회원정보 : 등록 성공 ");
    } else if (isAuth === false) {
      console.log("회원정보 : 등록 실패 ");
    }
  }, [isAuth]);

  useEffect(() => {
    //윈도우 실행 전에 자동 로그인
    window.addEventListener("load", () => {
      const autoLoginKey = getValueOnLocalStorage("AutoLogin");
      onDeletUser(autoLoginKey);
      return () => {
        //unmount때
        window.removeEventListener("beforeunload", () => {
          const autoLoginKey = getValueOnLocalStorage("AutoLogin");
          onDeletUser(autoLoginKey);
        });
      };
    });
  }, []);
  return;
};

export default Check;
