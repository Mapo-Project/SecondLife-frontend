import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { newFilterData } from "../utils/newFilterData";

const TopWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding-bottom: 125px;
`;

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
`;

const CategoryList = styled.ul`
  margin-top: 32px;
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
    width: 273.6px;
    height: 42px;
    ${({ theme }) => theme.korean.headline6}
  }
`;

const CategoryProducts = styled.div`
  h3 {
    margin-top: 113px;
    ${({ theme }) => theme.korean.headline6}
  }
`;

const MTM = () => {
  const [products, setProducts] = useState(newFilterData);

  const borderStyle = {
    borderBottom: `2px solid #212121`,
  };

  return (
    <TopWrapper>
      <Navbar />
      <ContentsWrapper>
        <CategoryRoute>
          <Link to="/">
            <li>홈</li>
          </Link>
          <Link to="/top">
            <li>&nbsp;/ 카테고리</li>
          </Link>
          <li>&nbsp;/ 상의</li>
        </CategoryRoute>
        <CategoryList>
          <li>티셔츠</li>
          <li>셔츠</li>
          <li>탑</li>
          <li>니트</li>
          <li style={borderStyle}>맨투맨</li>
        </CategoryList>
        <CategoryProducts>
          <h3>지금 올라온 상품들</h3>
          <ProductList
            products={products}
            setProducts={setProducts}
            grid={"1fr 1fr 1fr 1fr 1fr 1fr"}
          />
        </CategoryProducts>
      </ContentsWrapper>
    </TopWrapper>
  );
};

export default MTM;
