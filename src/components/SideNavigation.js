import styled, { keyframes } from "styled-components";
import { sideNavigationData } from "../utils/sideNavigationData";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 30%);
  display: flex;
`;

const Slide = keyframes`
  0%{
    transform: translateX(-363px);
  }
  100%{
    transform: translateX(0px);
  }
`;

const LeftWrapper = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.black};
  width: 362px;
  height: 100vh;
  padding: 0px 30px;
  animation: ${Slide} 0.4s ease-in-out;
  transform-origin: left;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .logo {
    width: 130px;
    height: 88.21px;
    margin-top: 10px;
  }
  .menus {
    display: flex;
    justify-content: space-between;
    /* background-color: gray; */
    margin-bottom: 32px;
    padding-right: 31px;
    cursor: pointer;
  }
  li h1 {
    ${({ theme }) => theme.korean.headline6};
    color: ${({ theme }) => theme.colors.white};
  }
  .items {
    margin: 32px 24px;
    /* background-color: aqua; */
  }
  .items li {
    ${({ theme }) => theme.korean.subtitle1};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 15px;
  }
  .items li:hover {
    color: ${({ theme }) => theme.colors.green300};
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: lightblue; */
`;

const Description = styled.h3`
  ${({ theme }) => theme.korean.caption};
  color: ${({ theme }) => theme.colors.green300};
  margin-bottom: 34px;
`;

const LinkList = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.korean.subtitle1};

  li {
    margin-bottom: 20px;
  }
  li:hover {
    text-decoration: underline;
  }
`;

const HorizonLine = styled.div`
  /* width: 302px; */
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 24px;
`;

const SideNavigation = ({ active, onToggle }) => {
  const [data, setData] = useState(sideNavigationData);
  const handleClickDropdownBtn = (id) => {
    data.map((datum) => {
      setData(
        data.map((datum) =>
          datum.id === id && datum.items
            ? { ...datum, active: !datum.active }
            : datum
        )
      );
    });
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {active && (
        <TopWrapper>
          <LeftWrapper>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icons/side_navi_logo.png`}
              className="logo"
              alt="logo"
            />
            <Description>
              세컨드라이프는 지속가능한 의류 선순환 A to Z 서비스를 제공하는
              친환경 그린커머스 플랫폼입니다.
            </Description>
            <LinkList>
              <li>
                <Link to="/">인사이드 세컨드라이프</Link>
              </li>
              <li>
                <Link to="/">우리의 지속가능 여정</Link>
              </li>
              <li>
                <Link to="/">쓰임 있는 옷장 만들기</Link>
              </li>
              <li>
                <Link to="/">지속가능 제로라이프</Link>
              </li>
            </LinkList>
            <HorizonLine />
            <ul>
              {data.map((datum) => (
                <li key={datum.id}>
                  <div
                    className="menus"
                    onClick={() => handleClickDropdownBtn(datum.id)}
                  >
                    <h1>{datum.menu}</h1>
                    {datum.items &&
                      (datum.active ? (
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icons/shootup_btn.svg`}
                          className="shootup-btn"
                          alt="shootup button"
                        />
                      ) : (
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_btn.svg`}
                          className="dropdowm-btn"
                          alt="dropdown button"
                        />
                      ))}
                  </div>
                  {datum.active && (
                    <ul className="items">
                      {datum.items.map((item) => (
                        <li key={datum.id}>
                          <Link to="/">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </LeftWrapper>
          <RightWrapper onClick={onToggle} />
        </TopWrapper>
      )}
    </>
  );
};
export default SideNavigation;
