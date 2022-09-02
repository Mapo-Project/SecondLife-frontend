import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const ContentsWrapper = styled.div`
  width: 1410px;
  margin: 0 auto;
  background-color: #fff;
`;
const CategoryRoute = styled.ul`
  display: flex;
  ${({ theme }) => theme.korean.body2}
  color: ${({ theme }) => theme.gray700};
  margin-top: 16px;
  margin-bottom: 32px;
`;

const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.gray900};
  li {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 167.25px;
    height: 42px;
    ${({ theme }) => theme.korean.headline6}
  }
`;

const FirstDetail = () => {
  return (
    <>
      <Navbar />
      <ContentsWrapper>
        <CategoryRoute>
          <Link to="/">
            <li>홈</li>
          </Link>
          <li>&nbsp;/ 카테고리</li>
        </CategoryRoute>
        <CategoryList>
          <li>아우터</li>
          <li>상의</li>
          <li>하의</li>
          <li>점프수트</li>
          <li>드레스</li>
          <li>신발</li>
          <li>가방</li>
          <li>기타</li>
        </CategoryList>
      </ContentsWrapper>
      <h3>지금 올라온 상품들</h3>
    </>
  );
};

export default FirstDetail;
