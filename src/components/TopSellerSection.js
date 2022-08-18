/* eslint-disable */

import styled from "styled-components";
import TitleInHome from "./TitleInHome";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/TopSellerSection/`;

const Section = styled.div`
  max-width: 1410px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 135px;
  .container {
    display: inline-block;
    width: 100%;
    overflow: scroll;
    scroll-margin-bottom: 0;
    white-space: nowrap;
    margin-bottom: 135px;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .box {
    display: inline-block;
    margin-right: 10px;
    position: relative;
    img {
      width: 258px;
      height: 366px;
      /* height: 100%; */
    }
  }
  .box:nth-child(10) {
    margin-right: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.052) 0%,
        rgba(0, 0, 0, 0) 25.62%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 49.87%, #000000 100%);
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 167px;
    }
    .top span:nth-child(2) {
      display: inline-block;
      ${({ theme }) => theme.korean.caption};
      color: ${({ theme }) => theme.colors.white};
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        ${({ theme }) => theme.english.headline2};
        color: ${({ theme }) => theme.colors.white};
        margin-right: 18px;
      }
      .bottom_content {
        display: flex;
        flex-direction: column;
        .id {
          ${({ theme }) => theme.english.headline6};
          color: ${({ theme }) => theme.colors.white};
        }
        .body {
          ${({ theme }) => theme.english.body2};
          color: ${({ theme }) => theme.colors.white};
        }
        .star {
          margin-bottom: 4px;
        }
        img {
          margin-right: 2px;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`;
const ToggleBtn = styled.div`
  width: 76px;
  height: 28px;
  border-radius: 50px;
  padding: 4px;
  background: ${(props) =>
    props.toggle == "me"
      ? "rgba(33, 33, 33, 0.6)"
      : props.toggle
      ? "rgba(33, 33, 33, 0.6)"
      : "#00FF85"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.toggle ? "0" : " 2px solid #000000")};
  cursor: pointer;
  span {
    ${({ theme }) => theme.english.body2};
    color: ${(props) => (props.toggle ? "white" : "black")};
  }
`;

const TopSellerSection = () => {
  let title = "이달의 탑 셀러";

  //마우스 드래그 스크롤
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  //탑 셀러 조회 (로그인 전)
  let [topSeller, setTopSeller] = useState([]);
  useEffect(() => {
    axios
      .get("https://hee-backend.shop:7179/user/seller/top/select")
      .then((result) => {
        setTopSeller(result.data.data);
        setToggle(Array(result.data.data.length).fill(false));
      })
      .catch(() => {
        console.log("조회실패");
      });
  }, []);

  // store에 저장된 Access Token 정보를 받아 온다
  const { accessToken } = useSelector((state) => state.token);

  // 백으로부터 받은 응답
  let [topSellerLogin, setTopSellerLogin] = useState([]);

  const getTopSeller = async (accessToken) => {
    try {
      const option = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // Authorization: "Bearer " + accessToken,
        },
      };
      const response = await axios.get(
        `https://hee-backend.shop:7179/user/seller/top/select/auth`,
        option
      );
      const data = response.data.data;
      return data;
    } catch (error) {
      // console.log(error);
      return;
    }
  };

  //탑 셀러 조회(로그인 후)
  const showTopSeller = async () => {
    const accessData = await getTopSeller(accessToken);
    setTopSellerLogin(accessData);
    const followStatus = accessData && accessData.map(({ follow }) => follow);
    setToggle2(followStatus);
    followStatus &&
      followStatus.map((a, i) => {
        if (followStatus[i] === "following") {
          followStatus[i] = true;
        }
        if (followStatus[i] === "notFollow") {
          followStatus[i] = false;
        }
        return;
      });
  };

  useEffect(() => {
    showTopSeller();
  }, [accessToken]);

  //팔로우/언팔로우(로그인 전)
  let [toggle, setToggle] = useState([]);

  //팔로우/언팔로우(로그인 후)
  let [toggle2, setToggle2] = useState([]);

  //팔로우/언팔 하는 함수(로그인 전)
  const clickedFollow = (i) => {
    let copy = [...toggle];
    copy[i] = !toggle[i];
    setToggle(copy);
  };

  //팔로우/언팔 하는 함수(로그인 후)
  const clickedFollow2 = async (a, i) => {
    let copy = [...toggle2];
    copy[i] = !toggle2[i];
    setToggle2(copy);
    try {
      const response = await axios({
        method: "post",
        url: `https://hee-backend.shop:7179/user/follow/${a.user_id}`,
        headers: { Authorization: "Bearer " + accessToken },
      });
      // console.log(response.data);
      return response;
    } catch (error) {
      console.log(error.response.data);
      return;
    }
  };

  return (
    <Section>
      <TitleInHome title={title} />
      <div className="container" {...events} ref={containerRef}>
        {topSeller.map((a, i) => {
          // console.log(a.user_id);
          return (
            <div className="box" key={i}>
              <img src={topSeller[i].profile_img} alt="" />
              <div className="content">
                <div className="top">
                  {topSellerLogin ? (
                    toggle2[i] === "me" ? (
                      <ToggleBtn toggle={toggle2[i]}>
                        <span>me</span>
                      </ToggleBtn>
                    ) : (
                      <ToggleBtn
                        onClick={() => clickedFollow2(a, i)}
                        toggle={toggle2[i]}
                      >
                        <span>{toggle2[i] ? "Following" : "Follow"}</span>
                      </ToggleBtn>
                    )
                  ) : (
                    <Link to="/login">
                      <ToggleBtn
                        onClick={() => clickedFollow(i)}
                        toggle={toggle[i]}
                      >
                        <span>{toggle[i] ? "Following" : "Follow"}</span>
                      </ToggleBtn>
                    </Link>
                  )}
                  <span>{topSeller[i].HashTag}</span>
                </div>
                <div className="bottom">
                  <p>{topSeller[i].ranking}</p>
                  <div className="bottom_content">
                    <span className="id">{topSeller[i].name}</span>
                    <span className="star">
                      <img src={`${imgUrl}star.png`} alt=""></img>
                      <img src={`${imgUrl}star.png`} alt=""></img>
                      <img src={`${imgUrl}star.png`} alt=""></img>
                      <img src={`${imgUrl}star.png`} alt=""></img>
                      <img src={`${imgUrl}star.png`} alt=""></img>
                    </span>
                    <span className="body">
                      {topSeller[i].follower_count} followers
                    </span>
                    <span className="body">{topSeller[i].sold_count} SOLD</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default TopSellerSection;
