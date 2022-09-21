import styled from "styled-components";

const MenuTitle = styled.div`
  width: 210px;
  height: 75px;
  background-color: #000;
  color: #fff;
  padding-left: 21px;
  display: flex;
  align-items: center;
`;

const MenuList = styled.div`
  width: 210px;
  height: 50px;
  border-bottom: 2px solid #000;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  img {
    cursor: pointer;
  }
`;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/filterImg/`;

const FilterMenu = ({ imgName }) => {
  return (
    <>
      <img src={`${imgUrl}${imgName}.png`} alt="new" />
      <MenuTitle>필터</MenuTitle>
      <MenuList>
        <h3>종류</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
      <MenuList>
        <h3>사이즈</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
      <MenuList>
        <h3>색상</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
      <MenuList>
        <h3>가격</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
      <MenuList>
        <h3>브랜드</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
      <MenuList>
        <h3>해시태그</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
      <MenuList>
        <h3>상태</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/dropdown_black.svg`}
          className="dropdowm-btn"
          alt="dropdown button"
        />
      </MenuList>
    </>
  );
};

export default FilterMenu;
