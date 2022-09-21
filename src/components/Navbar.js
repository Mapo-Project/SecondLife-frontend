import styled, { keyframes } from "styled-components";
import SideNavigation from "./SideNavigation";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  background-color: ${({ theme }) => theme.colors.bg};
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
    .search-disappear {
      display: none;
    }
    width: calc(100% - 512px);
    animation: ${GetNarrower} 0.3s linear;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      margin-bottom: 5px;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      ${({ theme }) => theme.english.caption}
      margin-right: 36px;
      cursor: pointer;
    }
    :nth-last-child(1) {
      margin-right: 52px;
    }
    .small-search {
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
  .logo {
    margin-left: 37px;
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.english.subtitle2}
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { login } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onToggle = () => {
    setActive(!active);
  };
  const [onSearch, setOnSearch] = useState(false);
  const handleSearchClick = (event) => {
    event.stopPropagation();
    setOnSearch(!onSearch);
    setInputValue("");
  };

  const { data } = useSelector((state) => state.user);

  const [inputValue, setInputValue] = useState("");

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
          <Link to="/">
            <img
              src={`${imgUrl}LOGO.png`}
              className={onSearch ? "logo search-disappear" : "logo"}
              alt="logo button"
            />
          </Link>
          {login && (
            <Btn style={{ marginRight: 50 }}>
              <Link to="/logout">Log out</Link>
            </Btn>
          )}
          <ul className={onSearch && "search-disappear"}>
            <li>Woman</li>
            <li>Man</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Community</li>
            <li>Event</li>
          </ul>
          <InputWrapper
            className={!onSearch && "search-disappear"}
            onClick={handleSearchClick}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
            <img
              onClick={handleSearchClick}
              className="small-search"
              src={`${imgUrl}search.png`}
              alt="search button"
            />
          </InputWrapper>
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
              {/* <Link to="/"> */}
              <li className="mypage">
                <MypageCircle
                  // style={{ backgroundImage: `url(${data.profile_img})` }}
                  onClick={() => {
                    navigate("/mypage");
                  }}
                >
                  {data.name.substr(0, 1)}
                </MypageCircle>
                <h6>My page</h6>
              </li>
              {/* </Link> */}
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
