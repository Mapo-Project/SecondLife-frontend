import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { newFilterData } from "../utils/newFilterData";
import TopDetail from "./TopDetail";

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

const FirstDetail = () => {
  return (
    <TopWrapper>
      <Navbar />
      <ContentsWrapper>
        <CategoryRoute>
          <Link to="/">
            <li>홈</li>
          </Link>
          <li>&nbsp;/ 카테고리</li>
        </CategoryRoute>
        <Routes>
          <Route path="top" element={<TopDetail />} />
        </Routes>
      </ContentsWrapper>
    </TopWrapper>
  );
};

export default FirstDetail;
