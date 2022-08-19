import styled from "styled-components";
import SideNavigation from "./SideNavigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  border: 3px solid ${({ theme }) => theme.colors.black};
  z-index: 10;
  ul {
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
  }
  .navbar-section1 {
    width: 254px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    padding-right: 32px;
  }
  .navbar-section2 {
    width: calc(100% - 512px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    padding-left: 37px;
  }
  .navbar-section3 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 35px;
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
    width: 32px;
  }
  .search,
  .cart {
    margin-right: 43px;
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

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { login } = useSelector((state) => state.user);
  const onToggle = () => {
    setActive(!active);
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
        <div className="navbar-section2">
          <img src={`${imgUrl}LOGO.png`} className="logo" alt="logo button" />
        </div>
        <ul className="navbar-section3">
          {login ? (
            <>
              <Btn style={{ marginRight: 50 }}>
                <Link to="/logout">Log out</Link>
              </Btn>
              <li>
                <img
                  onClick={() => alert("상세 페이지 준비중....")}
                  src={`${imgUrl}search.png`}
                  className="search"
                  alt="search button"
                />
              </li>
              <li>
                <img
                  onClick={() => alert("준비중 입니다...")}
                  src={`${imgUrl}cart.png`}
                  className="cart"
                  alt="cart button"
                />
              </li>
              <li>
                <img
                  onClick={() => alert("마이페이지 준비중....")}
                  src={`${imgUrl}mypage.png`}
                  className="mypage"
                  alt="mypage button"
                />
              </li>
            </>
          ) : (
            <>
              <li>
                <img
                  onClick={() => alert("준비중 입니다")}
                  src={`${imgUrl}search.png`}
                  className="search"
                  alt="search button"
                />
              </li>
              <Btn>
                <Link to="/login">Log in</Link>
              </Btn>
            </>
          )}
        </ul>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
