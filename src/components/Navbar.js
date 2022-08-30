import styled, { keyframes } from "styled-components";
import SideNavigation from "./SideNavigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GetWider = keyframes`
  0%{
    opacity: 0;
    width: calc(100% - 512px);
  }
  100%{
    opacity: 1;
    width: calc(100% - 428px);
  }
`;

const GetNarrower = keyframes`
  0%{
    opacity: 0;
    width: calc(100% - 428px);
  }
  100%{
    opacity: 1;
    width: calc(100% - 512px);
  }
`;

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  border: 3px solid ${({ theme }) => theme.colors.black};
  z-index: 10;
  ul {
    display: flex;
  }

  .navbar-section1 {
    min-width: 254px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    padding-right: 32px;
  }
  .navbar-section2 {
    width: calc(100% - 512px);
    animation: ${GetNarrower} 0.3s linear;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    padding-left: 37px;
    img {
      margin-bottom: 5px;
    }
    li {
      ${({ theme }) => theme.english.caption}
      margin-right: 36px;
      cursor: pointer;
    }
    :nth-last-child(1) {
      margin-right: 52px;
    }
    img {
      width: 32px;
      margin-right: 16px;
      cursor: pointer;
    }
    input {
      width: 733px;
      height: 50px;
      background-color: #fff;
      border: 1px solid #000;
      border-radius: 8px;
      padding-left: 19px;
      ${({ theme }) => theme.korean.body1};
      margin-right: 16px;
    }
    input::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.gray500};
    }
    input::-moz-placeholder {
      color: ${({ theme }) => theme.colors.gray500};
    }
    input:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.gray500};
    }
    input:-moz-placeholder {
      color: ${({ theme }) => theme.colors.gray500};
    }
    input::placeholder {
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
  .search-change {
    animation: ${GetWider} 0.3s linear;
    width: calc(100% - 428px);
  }
  .navbar-section3 {
    width: 258px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    h6 {
      ${({ theme }) => theme.english.body2}
    }
  }
  .menu-btn,
  .search,
  .cart,
  .mypage,
  .logo {
    cursor: pointer;
  }
  .menu-btn {
    width: 36px;
  }
  .search,
  .cart,
  .mypage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .search {
    margin-right: 35px;
  }
  .cart {
    margin-right: 39px;
    position: relative;
  }
  .search-disappear {
    display: none;
  }
  .search-active {
    width: 174px;
  }
`;

const Btn = styled.span`
  width: 109px;
  height: 36px;
  ${({ theme }) => theme.english.headline6};
  background-color: ${({ theme }) => theme.colors.gray900};
  border-radius: 50px;
  color: #00ff85;
  text-align: center;
  line-height: 32px;
`;

const CartNumber = styled.div`
  position: absolute;
  top: -4px;
  right: -7px;
  width: 20px;
  height: 20px;
  background-color: #ff0000;
  border-radius: 100%;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.english.caption};
`;

const MypageCircle = styled.div`
  width: 36px;
  height: 36px;
  background-color: #00ff85;
  border-radius: 100%;
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { login } = useSelector((state) => state.user);
  const onToggle = () => {
    setActive(!active);
  };
  const [onSearch, setOnSearch] = useState(false);
  const handleSearchClick = () => {
    setOnSearch(!onSearch);
  };
  return (
    <>
      <SideNavigation active={active} onToggle={onToggle} />
      <NavbarWrapper>
        <ul className="navbar-section1">
          <li>
            <img
              src={`${imgUrl}menu.png`}
              className="menu-btn"
              alt="menu button"
              onClick={onToggle}
            />
          </li>
        </ul>
        <div
          className={
            onSearch ? "navbar-section2 search-change" : "navbar-section2"
          }
        >
          <ul className={onSearch && "search-disappear"}>
            {login && (
              <Btn style={{ marginRight: 50 }}>
                <Link to="/logout">Log out</Link>
              </Btn>
            )}
            {/* <img src={`${imgUrl}LOGO.png`} className="logo" alt="logo button" /> */}
            <li>Woman</li>
            <li>Man</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Community</li>
            <li>Event</li>
          </ul>
          <input
            className={!onSearch && "search-disappear"}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <img
            onClick={handleSearchClick}
            className={!onSearch && "search-disappear"}
            src={`${imgUrl}search.png`}
            alt="search button"
          />
        </div>
        <ul
          className={
            onSearch ? "navbar-section3 search-active" : "navbar-section3"
          }
        >
          {login ? (
            <>
              <li
                className={onSearch ? "search search-disappear" : "search"}
                onClick={handleSearchClick}
              >
                <img src={`${imgUrl}search.png`} alt="search button" />
                <h6>Search</h6>
              </li>
              <li className="cart" onClick={() => alert("준비중 입니다...")}>
                <CartNumber>2</CartNumber>
                <img src={`${imgUrl}cart.png`} alt="cart button" />
                <h6>Cart</h6>
              </li>
              <Link to="/">
                <li className="mypage">
                  <MypageCircle />
                  <h6>My page</h6>
                </li>
              </Link>
            </>
          ) : (
            <>
              <li
                className={onSearch ? "search search-disappear" : "search"}
                onClick={handleSearchClick}
              >
                <img src={`${imgUrl}search.png`} alt="search button" />
                <h6>Search</h6>
              </li>
              <li className="cart">
                <img
                  onClick={() => alert("준비중 입니다...")}
                  src={`${imgUrl}cart.png`}
                  alt="cart button"
                />
                <h6>Cart</h6>
              </li>
              <Link to="/login">
                <li className="mypage">
                  <img src={`${imgUrl}mypage.png`} alt="mypage button" />
                  <h6>Sign-In</h6>
                </li>
              </Link>
            </>
          )}
        </ul>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
