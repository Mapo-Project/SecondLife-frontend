/* eslint-disable */
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Footer from "../components/Footer";
import Navbar from "./Navbar";
import MypageSale from "./MypageSale";
import MypagePurchase from "./MypagePurchase";
import MypageSold from "./MypageSold";
import Check from "../auth/Check";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/Mypage/`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1410px;
  margin: 0 auto;
  margin-top: 105px;
`;
const LeftSection = styled.div`
  width: 315px;
  margin-right: 76px;
  .sellerBtn {
    width: 100%;
    height: 48px;
    margin-top: 8px;
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
    span {
      font-family: "Noto Sans";
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const TopProfile = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightsalmon;
  .profile {
    width: 131px;
    height: 131px;
    border: 7px solid ${({ theme }) => theme.colors.green300};
    border-radius: 100%;
    background-size: contain;
    background-position: center;
    margin-right: 30px;
    box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.15);
  }
  .profile-info {
    margin-right: 20px;
  }
  span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 160%;
    letter-spacing: 0.15px;
    color: #000000;
  }
  p:nth-child(2) {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;
const BotttomProfile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  div {
    width: 100px;
    height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  div:nth-child(2) {
    margin: 0 7px;
  }
  p:nth-child(1) {
    ${({ theme }) => theme.korean.overline};
  }
  p:nth-child(2) {
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
`;
const Challenge = styled.div`
  margin: 25px 0;
`;
const Environment = styled.div`
  background: #c5fe93;
  border: 3px solid #000000;
  border-radius: 8px;
  margin-top: 6px;

  .environment-saved {
    margin: 16px 25px 16px 25px;
  }
  .environment-title {
    display: flex;
    justify-content: space-between;
    p:nth-child(1) {
      ${({ theme }) => theme.korean.overline};
    }
    p:nth-child(2) {
      ${({ theme }) => theme.korean.xs};
      margin-right: 7px;
    }
  }
  .environment-bar {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 10px;
  }
  .environment-left-bar {
    background: #00ff85;
    border-radius: 10px;
    padding: 5px 0;
    p:nth-child() {
      ${({ theme }) => theme.korean.subtitle1};
    }
  }
  .environment-right-bar {
    padding: 5px 9px 5px 0;
    p {
      ${({ theme }) => theme.korean.overline4};
      color: ${({ theme }) => theme.colors.gray700};
    }
  }
`;
const Menu = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    ${({ theme }) => theme.korean.subtitle1};
    padding: 20px 0 20px 18px;
    border-top: 2px solid #000000;
    cursor: pointer;
  }
  li.active {
    background-color: ${({ theme }) => theme.colors.green300};
  }
`;

const RightSection = styled.div`
  width: 100%;
  /* background-color: lightgreen; */
`;

const MyPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Headercontent = styled.div`
  width: 237px;
  height: 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  span {
    ${({ theme }) => theme.korean.button};
    margin-bottom: 5px;
  }
  p {
    ${({ theme }) => theme.korean.headline4};
  }
`;
const ContentHeader = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;
const ContentTab = styled.div`
  display: flex;
  margin-top: 90px;
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 141px;
    height: 43px;
    border: 2px solid #000000;
    border-radius: 8px;
    background: #e7e6e4;
    cursor: pointer;
  }
  .tab.active {
    background: white;
  }
  span {
    ${({ theme }) => theme.korean.subtitle1};
    color: ${({ theme }) => theme.colors.gray500};
  }
  span.active {
    color: ${({ theme }) => theme.colors.black};
  }
  .pick {
    color: black;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Mypage = () => {
  const { data } = useSelector((state) => state.user);
  const [isLogin, setIsLogin] = useState(false);

  const profileInfo = ["판매수", "팔로워", "팔로우"];
  //가상데이터
  const [infoCount] = useState({
    sold: 7,
    follower: 38,
    follow: 89,
  });

  const sideMenu = [
    "마이페이지",
    "내가 찜한 상품",
    "주문/배송 내역",
    "픽업 신청 내역",
    "판매 상품 내역",
    "팔로우/해시태그 설정",
    "참여한 챌린지",
    "쿠폰/포인트",
    "개인정보 설정",
    "로그아웃",
  ];
  //사이드 메뉴 변경
  const [sideMenuChange, setSideMenuChange] = useState({
    activeSideMenu: 0, // 페이지 최초 진입시 최상단메뉴
  });
  //사이드 메뉴 클릭 핸들러
  const SideMenuClickHandler = (i) => {
    setSideMenuChange({ ...sideMenuChange, activeSideMenu: i });
    // console.log(i);
  };

  //탭 타이틀
  const tabTitle = ["구매한 상품", "판매 중인 상품", "판매 된 상품"];
  //탭에따른 컨텐츠 컴포넌트
  const TabContent = {
    0: <MypagePurchase />,
    1: <MypageSale />,
    2: <MypageSold />,
  };
  //탭 변경
  const [tabChange, setTabChange] = useState({ activeTab: 1 });
  //탭 클릭 핸들러
  const TabClickHandler = (e) => {
    setTabChange({ ...tabChange, activeTab: e });
  };

  useEffect(() => {
    if (data) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <>
      {/* {isLogin ? console.log("로그인O") : console.log("로그인X")} */}
      {/* <Navbar /> */}
      <Check />
      <Container>
        <LeftSection>
          <TopProfile>
            <div
              className="profile"
              style={{
                backgroundImage: `url(${data.profile_img}`,
              }}
            ></div>
            <div className="profile-info">
              {/* <span>{data.name} 님</span> */}
              <span>최지아 님</span>
              <p>@JJiasClosett</p>
              <p>Lv. Green</p>
              <p>읽지 않은 알람 1개</p>
            </div>
          </TopProfile>
          <BotttomProfile>
            {profileInfo.map((a, i) => {
              return (
                <div key={i}>
                  <p>{a}</p>
                  {i === 0 ? (
                    <p>{infoCount.sold}</p>
                  ) : i === 1 ? (
                    <p>{infoCount.follower}</p>
                  ) : (
                    <p>{infoCount.follow}</p>
                  )}
                </div>
              );
            })}
            {/* <div>
              <p>판매수</p>
              <p>5</p>
            </div>
            <div>
              <p>팔로워</p>
              <p>34</p>
            </div>
            <div>
              <p>팔로우</p>
              <p>87</p>
            </div> */}
          </BotttomProfile>
          <button className="sellerBtn">
            <span
              onClick={() => {
                // console.log(data);
                console.log(infoCount);
              }}
            >
              내 셀러페이지로 이동
            </span>
          </button>
          <Challenge>
            <div>
              <img src={`${imgUrl}challenge.png`} alt="challenge" />
            </div>
            <Environment>
              <div className="environment">
                <div className="environment-saved">
                  <div className="environment-title">
                    <p>{data.name}님이 절약한 물</p>
                    <p>Lv. Green</p>
                  </div>
                  <div className="environment-bar">
                    <div className="environment-left-bar">
                      <p>약 9,150L</p>
                    </div>
                    <div className="environment-right-bar">
                      <p>50,000L</p>
                    </div>
                  </div>
                </div>
                <div className="environment-saved">
                  <div className="environment-title">
                    <p>{data.name}님의 탄소저감량</p>
                    <p>Lv. Green</p>
                  </div>
                  <div className="environment-bar">
                    <div className="environment-left-bar">
                      <p>약 25.3KG</p>
                    </div>
                    <div className="environment-right-bar">
                      <p>10,000KG</p>
                    </div>
                  </div>
                </div>
              </div>
            </Environment>
          </Challenge>
          <Menu>
            <ul>
              {sideMenu.map((a, i) => {
                return (
                  <li
                    className={
                      sideMenuChange.activeSideMenu == i ? "active" : ""
                    }
                    key={i}
                    onClick={() => {
                      SideMenuClickHandler(i);
                    }}
                  >
                    {a}
                  </li>
                );
              })}
            </ul>
          </Menu>
        </LeftSection>
        <RightSection>
          <MyPageHeader>
            <Headercontent>
              <span>픽업신청 조회</span>
              <p>0건</p>
            </Headercontent>
            <Headercontent>
              <span>주문/배송 조회</span>
              <p>1건</p>
            </Headercontent>
            <Headercontent>
              <span>내 그린포인트</span>
              <p>5,390원</p>
            </Headercontent>
            <Headercontent>
              <span>내 쿠폰</span>
              <p>2개</p>
            </Headercontent>
          </MyPageHeader>
          <ContentHeader>
            <ContentTab>
              {tabTitle.map((a, i) => {
                return (
                  <div
                    className={tabChange.activeTab === i ? "tab active" : "tab"}
                    key={i}
                    onClick={() => {
                      TabClickHandler(i);
                    }}
                  >
                    <span className={tabChange.activeTab === i ? "active" : ""}>
                      {a}
                    </span>
                  </div>
                );
              })}
            </ContentTab>
          </ContentHeader>
          {TabContent[tabChange.activeTab]}
        </RightSection>
      </Container>

      {/* <Footer /> */}
    </>
  );
};

export default Mypage;
