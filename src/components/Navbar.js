import styled from "styled-components";
import SideNavigation from "./SideNavigation";
import { useState } from "react";

const NavbarWrapper = styled.nav`
  /* background-color: blueviolet; */
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
    /* width: 15%; */
    width: 254px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    padding-right: 32px;
  }
  .navbar-section2 {
    /* width: 70%; */
    width: calc(100% - 512px);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-right: 3px solid ${({ theme }) => theme.colors.black};
    padding-left: 37px;
  }
  .navbar-section3 {
    /* width: 15%; */
    width: 258px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 35px;
    /* background-color: blueviolet; */
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

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

const Navbar = () => {
  const [active, setActive] = useState(true);
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
        <ul className="navbar-section2">
          <li>
            <img src={`${imgUrl}logo.svg`} className="logo" alt="logo button" />
          </li>
        </ul>
        <ul className="navbar-section3">
          <li>
            <img
              src={`${imgUrl}search.png`}
              className="search"
              alt="search button"
            />
          </li>
          <li>
            <img src={`${imgUrl}cart.png`} className="cart" alt="cart button" />
          </li>
          <li>
            <img
              src={`${imgUrl}mypage.png`}
              className="mypage"
              alt="mypage button"
            />
          </li>
        </ul>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
